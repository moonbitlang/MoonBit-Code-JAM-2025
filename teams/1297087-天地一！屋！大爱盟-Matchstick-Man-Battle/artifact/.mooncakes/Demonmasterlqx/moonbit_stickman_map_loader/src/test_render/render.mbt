const Width: Double = 800.0
const Height: Double = 800.0
pub const PPM = 20.0

///|
/// 坐标转换函数，坐标系如下
/// -----------> x_canvas
/// |           ^ y_box2d
/// |           |
/// |           |
/// |           |
/// |           |
/// |           |
/// vy_canvas    -------------> x_box2d
/// canvas 的原点在画布左上角
/// box2d 的原点在画布宽度的二分之一处，画布高度的最下面
/// 首先通过 ppm 将单位进行转换，然后通过坐标系转换，最后进行平移
fn world_to_screen(world_width: Double, world_height: Double, x: Double, y: Double, ppm : Double) -> (Double, Double) {
  let screen_x_pixle_num = world_width
  let screen_y_pixle_num = world_height
  //println("Canvas Width: \{screen_x_pixle_num}, Height: \{screen_y_pixle_num}")
  return (screen_x_pixle_num/2.0 + x * ppm, screen_y_pixle_num - y * ppm)
}
///|
/// 坐标转换函数，坐标系如下
/// -----------> x_canvas
/// |           ^ y_box2d
/// |           |
/// |           |
/// |           |
/// |           |
/// |           |
/// vy_canvas    -------------> x_box2d
/// canvas 的原点在画布左上角
/// box2d 的原点在画布宽度的二分之一处，画布高度的最下面
/// 首先通过 ppm 将单位进行转换，然后通过坐标系转换，最后进行平移
fn screen_to_world(world_width: Double, world_height: Double, x: Double, y: Double, ppm : Double) -> (Double, Double) {
  let screen_x_pixle_num = world_width
  let screen_y_pixle_num = world_height
  return ((x - screen_x_pixle_num/2.0) / ppm, (screen_y_pixle_num - y) / ppm)
}

fn screen_to_world_size(size: Double, ppm : Double) -> Double {
  return size / ppm
}

fn world_to_screen_size(size: Double, ppm : Double) -> Double {
  return size * ppm
}


fn drawPolygon(p: &@p5js.P5JS, shape: @box2d.B2PolygonShape) -> Unit {
  // 获取顶点
  let vertices = shape.getVertices()
  // println("Polygon Vertices Count: \{vertices.length()}")
  // for v in vertices {
  //   println("Vertex: (\{v.getX()}, \{v.getY()})")
  // }
  let global_position : Array[@box2d.B2Vec2] = Array::new()
  for vertex in vertices{
    let gvec = shape.getBody().getWorldPoint(vertex)
    global_position.push(gvec)
    // println("Global Vertex: (\{gvec.getX()}, \{gvec.getY()})")
  }
  // 转换为屏幕坐标
  let screen_position : Array[(Double, Double)] = Array::new()
  for gvec in global_position {
    let screen_coords = world_to_screen(Width, Height, gvec.getX(), gvec.getY(), PPM)
    screen_position.push(screen_coords)
    // println("Screen Coords: \{screen_coords.0}, \{screen_coords.1}")
  }
  // 绘制多边形
  p.beginShape(None)
  for i in 0..<screen_position.length() {
    let (x, y) = screen_position[i]
    p.vertex(x, y, None, None, None)
  }
  p.endShape(Some("close"), None)  // "close" 表示闭合多边形
}

fn drawCircle(p: &@p5js.P5JS, shape: @box2d.B2CircleShape) -> Unit{
  let position = shape.getBody().getWorldPoint(shape.getLocalPosition())
  let radius = shape.getRadius()
  let screen_pos = world_to_screen(Width, Height, position.getX(), position.getY(), PPM)
  let screen_radius = world_to_screen_size(radius, PPM)
//   println("Circle Position: \{position.getX()} , \{position.getY()}")
//   println("Circle Screen Position: \{screen_pos.0} , \{screen_pos.1}")
//   println("Circle Radius: \{radius}")
  p.fillColorPara(200, Some(0.0), Some(0.0), None)
  p.circle(screen_pos.0, screen_pos.1, screen_radius * 2.0)

}


fn draw_world(p: &@p5js.P5JS, world: &@box2d.World) -> Unit {
  p.background(255.0, Some(204.0), Some(0.0), None)
  for body in world.getBodyList() {
    for shape in body.getShapeList() {
      match shape.getType() {
        PolygonShape => drawPolygon(p, shape.toPolygonShape())
        BoxShape => drawPolygon(p, shape.toPolygonShape())
        CircleShape => drawCircle(p, shape.toCircleShape())
        UnknownShape => {
          println("Unknown Shape")
        }
      }
    }
  }
}

extern "js" fn getP5Instance(
  drawww : (@p5js.P5Instance) -> Unit, width~: Double = Width, height~: Double = Height
) -> @p5js.P5Instance =
  #| (drawww, width, height) => {
  #|a = new p5((p)=>{
  #|  p.setup = () => {
  #|    p.createCanvas(width, height);
  #|  }
  #|  p.draw = () => {drawww(p)}
  #|})
  #|return a
  #|}

// -------------------- 绘画相关 结束 ---------------------

extern "js" fn register_json_read_botton(jsonFileInput~ : String = "jsonFileInput", fileContentDisplay~ : String = "fileContentDisplay", call_func : (String) -> Unit) =
  #| (jsonFileInput, fileContentDisplay, call_func) => {
  #| const inputElement = document.getElementById(jsonFileInput);
  #| const displayElement = document.getElementById(fileContentDisplay);
  #| inputElement.addEventListener('change', (event) => {
  #|   const file = event.target.files[0];
  #|   if (!file) {
  #|     displayElement.textContent = '未选择文件。';
  #|     return;
  #|   }
  #|   if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
  #|     displayElement.textContent = '错误: 请选择一个有效的 JSON 文件。';
  #|     return;
  #|   }
  #|   const reader = new FileReader();
  #|   reader.onload = (e) => {
  #|     const rawFileContent = e.target.result;
  #|     try {
  #|       const parsedJson = JSON.parse(rawFileContent);
  #|       const formattedJsonString = JSON.stringify(parsedJson, null, 2);
  #|       displayElement.textContent = '有效的 JSON';
  #|       call_func(formattedJsonString);
  #|     } catch (error) {
  #|       displayElement.textContent = '错误: 无法解析 JSON 文件。请确保文件格式正确。' + error;
  #|     }
  #|   };
  #|   reader.readAsText(file);
  #|   console.log("Reading file ok");
  #| });
  #|}

extern "js" fn remove_p5_instance(p5 : &@p5js.P5JS) =
  #| (p5) => {
  #| remove();
  #|}

let global_p5_instance : Ref[&@p5js.P5JS?] = Ref::new(None)
let global_box2d_world : Ref[&@box2d.World?] = Ref::new(None)

fn main {  
  register_json_read_botton(fn (str){

    match global_p5_instance.val{
      Some(_) => {
        // remove_p5_instance(p5)
        global_p5_instance.val = (None)
      }
      _ => {
        global_p5_instance.val = (None)
      }
    }

    try {
      global_box2d_world.val = Some(@map_loader.load_map(file_content = str).construct_world())
    } catch {
      @map_loader.MapLoaderError(e) => {
        println("Error loading map: \{e}")
      }
      e => {
        println("Unknown error loading map: \{e}")
      }
    }

    global_p5_instance.val = Some(getP5Instance(fn(p : @p5js.P5Instance){
      global_box2d_world.val.unwrap().step(1.0/60.0, 6)
      draw_world(p, global_box2d_world.val.unwrap())
    } ))
  })

}