///|
extern "js" fn getP5Instance(
  drawww : (@p5js_ffi.P5Instance) -> Unit,
) -> @p5js_ffi.P5Instance =
  #| (drawww) => {
  #|a = new p5((p)=>{
  #|  p.setup = () => {
  #|    p.createCanvas(400, 400);
  #|  }
  #|  p.draw = () => {drawww(p)}
  #|})
  #|return a
  #|}

///|
extern "js" fn @p5js_ffi.P5Instance::millis(
  self : @p5js_ffi.P5Instance,
) -> Double =
  #| (self) => self.millis()

///|
fn main {
  let draww = fn(p : @p5js_ffi.P5Instance) {
    let get = p.getTouches()
    p.background(255.0, Some(204.0), Some(0.0), None)
    let a = p.paletteLerp(
      [("red", 0.0), ("blue", 0.5), ("green", 1.0)],
      p.millis() / 5000.0 % 1.0,
    )
    p.fillColorObj(a)
    p.beginShape(None)
    p.vertex(50.0, 150.0, None, None, None)
    p.bezierVertex(150.0, 50.0, 250.0, 250.0, 350.0, 150.0)
    p.endShape(None, None)
    p.square(100.0, 100.0, 50.0)
    for t in get {
      let id = t.getId()
      let x = t.getX()
      let y = t.getY()
      println("Touch id: \{id} x: \{x} y: \{y}")
    }
  }
  let p5 = getP5Instance(draww)
  p5.setKeyPressed(fn() {
    let k = p5.getKey()
    let code = p5.getKeyCode()
    println("Key Pressed: \{k} Code: \{code}")
    return true
  })
  p5.setMouseReleased(fn(e : @p5js_ffi.MouseEvent?) {
    e |> ignore
    println("Mouse Released")
    println("Pointer coordinates: \{p5.getMouseX()} , \{p5.getMouseY()}")
    return true
  })
}
