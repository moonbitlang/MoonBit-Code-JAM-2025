extern "js" fn getP5Instance(
  drawww : (@p5js.P5Instance) -> Unit,
  prelaod : (@p5js.P5Instance) -> Unit,
  width~ : Double = Width,
  height~ : Double = Height
) -> @p5js.P5Instance = 
  #| (drawww, prelaod, width, height) => {
  #|   a = new p5((p)=>{
  #|  p.setup = function() {
  #|    p.createCanvas(width, height);
  #|  }
  #|  p.draw = function() {
  #|    drawww(p);
  #|  }
  #|  p.preload = function() {
  #|    prelaod(p);
  #|  }
  #|})
  #|return a
  #|}

///| p5.js 的 push 方法（保存当前绘图状态）
// extern "js" fn p5_push(p: &@p5js.P5JS) -> Unit = 
//   #| (p) => p.getP5Instance().push() |#

// ///| p5.js 的 pop 方法（恢复之前的绘图状态）
// extern "js" fn p5_pop(p: &@p5js.P5JS) -> Unit = 
//   #| (p) => p.getP5Instance().pop() |#

///| 简单的图片绘制接口
/// 在指定坐标以指定角度和大小绘制图片（支持旋转）
/// @param p - P5.js 实例
/// @param img - 图片对象
/// @param x - 屏幕 x 坐标
/// @param y - 屏幕 y 坐标
/// @param width - 图片宽度（像素）
/// @param height - 图片高度（像素）
/// @param angle - 旋转角度（弧度制）
pub fn draw_image_at(
  p: &@p5js.P5JS, 
  img: @p5js.P5Image, 
  x: Double, 
  y: Double, 
  width: Double, 
  height: Double,
  angle: Double,
  offset_x: Double,
  offset_y: Double
) -> Unit {
  p.translate(x, y, None)
  p.rotate(angle, None)
  p.imageMode("center")
  p.image(img, offset_x, offset_y, Some(width), Some(height))
}

///| 通用的物体绘制函数
/// 如果有图片就渲染图片，否则渲染默认的 Box2D 形状
/// @param p - P5.js 实例
/// @param body - Box2D 刚体
/// @param img - 可选的图片（如果为 Some 则用图片渲染）
/// @param image_size - 图片大小（像素）
/// @param use_velocity_angle - 是否使用速度方向作为旋转角度（适用于子弹等）

pub fn drawBody(
  p: &@p5js.P5JS,
  body: @box2d.B2Body,
  img: @p5js.P5Image?,
  image_width: Double,
  image_height: Double,
  offset_x: Double,
  offset_y: Double,
  is_bullet~: Bool = false
) -> Unit {
  let pos = body.getCenterPosition()
  let (sx, sy) = world_to_screen(pos.getX(), pos.getY())
  
  match img {
    Some(img) => {
      // 对于静态物体（速度接近0），使用 body 的旋转角度
      // 对于动态物体（有速度），使用速度方向作为角度
      let vel = body.getLinearVelocity()
      // let speed_squared = vel.getX() * vel.getX() + vel.getY() * vel.getY()
      
      let angle = if is_bullet {
        // 有速度：使用速度方向（适用于子弹）
        @cmath.atan2(vel.getY(), vel.getX())
      } else {
        // 静止：使用 body 的旋转角度（适用于平台）
        ((body.getRotation() % Pi) + Pi) % Pi - 1.57079632679
      }
      
			println("Drawing body at (\{sx}, \{sy}) with angle \{angle} radians")
			
      draw_image_at(p, img, sx, sy, image_width, image_height, angle, offset_x, offset_y)
    }
    None => {
      // 没有图片：渲染默认形状
      for shape in body.getShapeList() {
        p.fillColorPara(127.0, Some(127.0), Some(127.0), Some(200.0))
        match shape.getType() {
          PolygonShape => drawPolygon(p, shape.toPolygonShape())
          BoxShape => drawPolygon(p, shape.toPolygonShape())
          CircleShape => drawCircle(p, shape.toCircleShape())
          UnknownShape => println("Unknown Shape")
        }
      }
    }
  }
}

pub fn drawStaticBody(
  p: &@p5js.P5JS,
  body: @box2d.B2Body,
  img: @p5js.P5Image?,
  image_width: Double,
  image_height: Double,
  offset_x: Double,
  offset_y: Double,
  is_bullet~: Bool = false
) -> Unit {
  let pos = body.getCenterPosition()
  let (sx, sy) = world_to_screen(pos.getX(), pos.getY())
  
  match img {
    Some(img) => {
      // 对于静态物体（速度接近0），使用 body 的旋转角度
      // 对于动态物体（有速度），使用速度方向作为角度
      let vel = body.getLinearVelocity()
      // let speed_squared = vel.getX() * vel.getX() + vel.getY() * vel.getY()
      
      let angle = if is_bullet {
        // 有速度：使用速度方向（适用于子弹）
        
        @cmath.atan2(vel.getY(), vel.getX())
      } else {
        // 静止：使用 body 的旋转角度（适用于平台）
        -body.getRotation()
      }
      
			println("Drawing body at (\{sx}, \{sy}) with angle \{angle} radians")
			
      draw_image_at(p, img, sx, sy, image_width, image_height, angle, offset_x, offset_y)
    }
    None => {
      // 没有图片：渲染默认形状
      for shape in body.getShapeList() {
        p.fillColorPara(127.0, Some(127.0), Some(127.0), Some(200.0))
        match shape.getType() {
          PolygonShape => drawPolygon(p, shape.toPolygonShape())
          BoxShape => drawPolygon(p, shape.toPolygonShape())
          CircleShape => drawCircle(p, shape.toCircleShape())
          UnknownShape => println("Unknown Shape")
        }
      }
    }
  }
}

pub fn drawDynamicBody(
  p: &@p5js.P5JS,
  body: @box2d.B2Body,
  img: @p5js.P5Image?,
  image_width: Double,
  image_height: Double,
  offset_x: Double,
  offset_y: Double,
  override_angle?: Double? = None,
  reverse?: Bool = false
) -> Unit {
  let pos = body.getCenterPosition()
  let (sx, sy) = world_to_screen(pos.getX(), pos.getY())
  
  match img {
    Some(img) => {
  // 对于静态物体（速度接近0），使用 body 的旋转角度
  // 对于动态物体（有速度），使用速度方向作为角度
      // 如果传入了 override_angle 则使用之（用于像武器那样按逻辑角度渲染），否则使用刚体的旋转角
      let angle = match override_angle {
        Some(a) => a
        _ => body.getRotation()
      }
      
  // println("Drawing body at (\{sx}, \{sy}) with angle \{angle} radians")
  // println("drawDynamicBody: reverse=\{reverse}, image_size=\{image_width}x\{image_height}, offset=\{offset_x},\{offset_y}")

  

  // 如果 reverse 为 true 就水平翻转图片, 并且渲染偏移量取反
  // 不在 draw_image_at 修改，直接在这里局部变换绘制
      p.push()
      p.translate(sx, sy, None)
      p.imageMode("center")

      // 绘制角度转换：外部 angle 是以 x 轴向右为 0，逆时针为正。
      // p5 的 rotate 在 canvas 坐标系（y 向下）与数学角度方向相反，所以使用 -angle。
      let mut draw_angle = -angle

      // world 偏移，用于绘制 debug 线（将局部偏移逆时针旋转到世界坐标）
      let ca = @cmath.cos(angle)
      let sa = @cmath.sin(angle)
      // 注意：使用 R(-angle) 来把局部坐标变换到屏幕坐标系
      let world_off_x = offset_x * ca + offset_y * sa
      let world_off_y = -offset_x * sa + offset_y * ca

  // 只根据 angle 判断是否镜像：先把 angle 归一化到 [0, 2PI)，
  // 然后当归一化角度在 [PI, 2PI) 时认为朝左并翻转（按你的要求）
  // 按你的要求：如果显式 reverse 则翻转；否则直接用原始 angle 判断，
  // 当 angle 在 [-PI, PI] 时视为向右（不翻转），当 angle > PI 或 angle < -PI 时视为向左（翻转）
  println("drawDynamicBody: raw angle=\{angle}")
  let need_flip = if reverse == true { true } else { angle > Pi/2 || angle < -Pi/2 }
	
	if(need_flip){
		draw_angle += Pi
	}
  if need_flip == true {
        // 先旋转到目标方向，再镜像 X 轴；镜像后本地 x 轴指向相反方向，因此对绘制偏移 x 取反
        p.rotate(draw_angle, None)
        p.scale(-1.0, Some(1.0), None)
        p.image(img, -offset_x, offset_y, Some(image_width), Some(image_height))

        // 调试：画出期望的世界偏移方向（红色）
        // p.noFill()
        // p.strokeComponents(255.0, 0.0, 0.0, Some(255.0))
        // p.line(0.0, 0.0, world_off_x, world_off_y)
      } else {
        p.rotate(draw_angle, None)
        p.image(img, offset_x, offset_y, Some(image_width), Some(image_height))

        // 调试：画出期望的世界偏移方向（蓝色）
        // p.noFill()
        // p.strokeComponents(0.0, 0.0, 255.0, Some(255.0))
        // p.line(0.0, 0.0, world_off_x, world_off_y)
      }
      p.pop()
    }
    None => {
      // 没有图片：渲染默认形状
      for shape in body.getShapeList() {
        p.fillColorPara(127.0, Some(127.0), Some(127.0), Some(200.0))
        match shape.getType() {
          PolygonShape => drawPolygon(p, shape.toPolygonShape())
          BoxShape => drawPolygon(p, shape.toPolygonShape())
          CircleShape => drawCircle(p, shape.toCircleShape())
          UnknownShape => println("Unknown Shape")
        }
      }
    }
  }
}

// extern "js" fn getCanvasWidth(self : &@p5js.P5JS) -> Double =
//   #| (self) => self.width

// extern "js" fn getCanvasHeight(self : &@p5js.P5JS) -> Double =
//   #| (self) => self.height

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
pub fn world_to_screen(world_width~: Double = Width, world_height~: Double = Height, x: Double, y: Double, ppm~: Double = PPM) -> (Double, Double) {
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
pub fn screen_to_world(world_width~: Double = Width, world_height~: Double = Height, x: Double, y: Double, ppm~: Double = PPM) -> (Double, Double) {
  let screen_x_pixle_num = world_width
  let screen_y_pixle_num = world_height
  return ((x - screen_x_pixle_num/2.0) / ppm, (screen_y_pixle_num - y) / ppm)
}

pub fn screen_to_world_size(size: Double, ppm~ : Double=PPM) -> Double {
  return size / ppm
}

pub fn world_to_screen_size(size: Double, ppm~ : Double=PPM) -> Double {
  return size * ppm
}


pub fn drawPolygon(p: &@p5js.P5JS, shape: @box2d.B2PolygonShape) -> Unit {
  // 获取顶点
  let vertices = shape.getVertices()
  let global_position : Array[@box2d.B2Vec2] = Array::new()
  for vertex in vertices{
    let gvec = shape.getBody().getWorldPoint(vertex)
    global_position.push(gvec)
  }
  // 转换为屏幕坐标
  let screen_position : Array[(Double, Double)] = Array::new()
  for gvec in global_position {
    let screen_coords = world_to_screen(gvec.getX(), gvec.getY())
    screen_position.push(screen_coords)
  }
  // 绘制多边形
  p.beginShape(None)
  for i in 0..<screen_position.length() {
    let (x, y) = screen_position[i]
    p.vertex(x, y, None, None, None)
  }
  p.endShape(Some("close"), None)  // "close" 表示闭合多边形
}

pub fn drawCircle(p: &@p5js.P5JS, shape: @box2d.B2CircleShape) -> Unit{
  let position = shape.getBody().getWorldPoint(shape.getLocalPosition())
  let radius = shape.getRadius()
  let screen_pos = world_to_screen(position.getX(), position.getY())
  let screen_radius = world_to_screen_size(radius)
//   println("Circle Position: \{position.getX()} , \{position.getY()}")
//   println("Circle Screen Position: \{screen_pos.0} , \{screen_pos.1}")
//   println("Circle Radius: \{radius}")
  // p.fillColorPara(200, Some(0.0), Some(0.0), None) //子弹射出后全部物体变红bug
  p.circle(screen_pos.0, screen_pos.1, screen_radius * 2.0)

}


pub fn DefaultRender::draw_world(self: DefaultRender, p: &@p5js.P5JS, world: &@box2d.World) -> Unit {
  // p.background(255.0, Some(204.0), Some(0.0), None)
  self |> ignore
  for body in world.getBodyList() {
    for shape in body.getShapeList() {
      // 填充颜色
      p.fillColorPara(127.0, Some(127.0), Some(127.0), Some(200.0))
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

fn DefaultRender::draw_game(self:Self,p: &@p5js.P5JS, game: Game) -> Unit {

  self |> ignore

  p.push()

  p.strokeWeight(5.0)
  p.strokeComponents(0.0, 0.0, 0.0, Some(255.0))
  p.noFill()

  let renderable_list : Array[(&@box2d.World, &@p5js.P5JS) -> Unit] = Array::new()

  let unwrap_renderable = fn (rend : Option[(&@box2d.World, &@p5js.P5JS) -> Unit]) {
    match rend {
      Some(render_fn) => renderable_list.push(render_fn)
      _ => {
        println("Entity is not renderable")
      }
    }
  }

  for particle in game.particle_list {
    unwrap_renderable(particle.get_render())
  }
	
	for platform in game.platform_list {
		unwrap_renderable(platform.get_render())
	}

  for bullet in game.bullet_list {
    if !bullet.is_active {
      continue
    }
    unwrap_renderable(bullet.get_render())
  }

  for item in game.item_list {
    if !item.is_active {
      continue
    }
    unwrap_renderable(item.get_render())
  }

  for enemy_option in game.enemy_list {
    match enemy_option {
      Some(enemy) => {
        unwrap_renderable(enemy.get_render())
      }
      _ => {
        println("Enemy is None, skipping rendering")
      }
    }
  }

  // 武器
  for weapon in game.weapon.sword_list {
    unwrap_renderable(weapon.get_render())
  }

  for weapon in game.weapon.gun_list {
    unwrap_renderable(weapon.get_render())
  }

  for render_fn in renderable_list {
    p.push()
    render_fn(game.world, p)
    p.pop()
  }

  p.strokeWeight(0.0)
  p.pop()
}


pub fn DefaultRender::clear_screen(self: DefaultRender, p: &@p5js.P5JS, game: Game) -> Unit {
  self |> ignore
  p.push()
  match game.background.get_render() {
    None => {
      p.background(255.0, Some(204.0), Some(0.0), None)
    }
    Some(draw_background) => {
      draw_background(game.world, p)
    }
  }
  p.pop()

}
pub(all) struct DefaultRender {}

pub impl RenderTrait for DefaultRender with render(self: DefaultRender, game : Game, p: &@p5js.P5JS) -> Unit {
  // self.draw_world(p, game.world)
	self.draw_game(p, game)
	// self.draw_game(p, game)
}

pub impl RenderTrait for DefaultRender with clear_screen(self: DefaultRender, game : Game, p: &@p5js.P5JS) -> Unit {
  self.clear_screen(p, game)
}

pub trait RenderTrait {

  // 绘画函数，在所有更新逻辑之后调用，用于绘画物理世界，但是不包含特效等
  render(self: Self, game:  Game, p: &@p5js.P5JS) -> Unit

  // 在每次绘画前清屏
  clear_screen(self: Self, game : Game, p: &@p5js.P5JS) -> Unit 
}

// -------------------- 绘画相关 结束 ---------------------
/// 绘画样例阐述
/// Width Height 用于控制画布的宽高
/// PPM 用于控制物理世界单位与屏幕像素的转换比例，1个物理单位等于多少像素
/// 具体坐标系问题请查看 world_to_screen 的注释
/// 使用的时候，请先 使用 getP5Instance 创建 p5js 对象，然后在回调中游戏逻辑
/// 
/// let p5_instance = getP5Instance(fn(p : @p5js.P5Instance) -> Unit {
///   world.step(1.0/60.0, 4)
///   draw_world(p, world)
/// }, width=Width, height=Height)
/// 
/// 
/// 绘画只需要调用 draw_world 即可，注意要step world!!!!!!!!
 
pub struct ImageLoader{
  image_path : String?
  mut img : @p5js.P5Image?
  // 表示是否加载失败
  mut is_failed : Bool
  // 表示是否正在加载中（防止重复触发加载）
  mut is_loading : Bool
  // 缩放量
  mut x : Double
  mut y : Double
  // 偏移量
  mut offset_x : Double
  mut offset_y : Double
}

pub fn ImageLoader::new(path: String?) -> ImageLoader {
  return ImageLoader::{
    image_path: path,
    img: None,
    // 表示导入尝试是否失败
    is_failed: false,
    is_loading: false,
    x: 1.0,
    y: 1.0,
    offset_x: 0.0,
    offset_y: 0.0
  }
}

pub fn ImageLoader::try_load_image(self: ImageLoader, p: &@p5js.P5JS) -> Unit {
  match self.image_path {
    Some(path) => {
      // 如果已经在加载中，跳过重复请求
      if self.is_loading == true {
        return
      }
      self.is_loading = true
      p.loadImage(
        path,
        Some(fn(img: @p5js.P5Image) -> Unit {
          self.img = Some(img)
          println("Image loaded successfully from path: \{path}")
          self.is_failed = false
          self.is_loading = false
        }),
        Some(fn(err) -> Unit {
          println("Failed to load image from path: \{path} with error: \{err}")
          self.is_failed = true
          self.img = None
          self.is_loading = false
        })
      ) |> ignore
    }
    None => {
      println("Image path is None, cannot load image")
      self.is_failed = true
    }
  }
}

pub fn ImageLoader::get_image(self: ImageLoader, p: &@p5js.P5JS) -> @p5js.P5Image? {

  // 如果既未失败又未加载到图片且未在加载中，则触发一次加载。
  if self.is_failed != true && self.img.is_empty() && self.is_loading != true {
    self.try_load_image(p)
  }
  return self.img
}

pub fn ImageLoader::get_image_size_x(self: ImageLoader) -> Double {
  return self.x
}

pub fn ImageLoader::get_image_size_y(self: ImageLoader) -> Double {
  return self.y
}

pub fn ImageLoader::set_image_size(self: ImageLoader, x: Double, y: Double) -> Unit {
  self.x = x
  self.y = y
}

pub fn ImageLoader::get_image_offset_x(self: ImageLoader) -> Double {
  return self.offset_x
}

pub fn ImageLoader::get_image_offset_y(self: ImageLoader) -> Double {
  return self.offset_y
}

pub fn ImageLoader::set_image_offset(self: ImageLoader, offset_x: Double, offset_y: Double) -> Unit {
  self.offset_x = offset_x
  self.offset_y = offset_y
}


///|
///  pub trait renderable 用于每个可渲染对象的渲染接口，如果没有设置则使用 render 的默认实现
pub trait RenderAble {
	get_render(self: Self) -> Option[(&@box2d.World, &@p5js.P5JS) -> Unit] = _
}

impl RenderAble with get_render(self: Self) -> Option[(&@box2d.World, &@p5js.P5JS) -> Unit] {
	self |> ignore
	None
}

pub(all) struct BackgroundImage{
  val : ImageLoader
}

pub impl RenderAble for BackgroundImage

pub impl RenderAble for BackgroundImage with get_render(self: BackgroundImage) {
  let render_fn = fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {
    world |> ignore
    match self.val.get_image(p) {
      Some(img) => {
        p.imageMode("corner")
        p.image(img, 0.0, 0.0, Some(Width), Some(Height))
      }
      None => {
        // 如果图片加载失败，则使用默认背景色
        p.background(255.0, Some(204.0), Some(0.0), None)
        // println("Background加载失败，使用默认背景")
      }
    }
  }
  return Some(render_fn)
}

pub fn BackgroundImage::new(path: String?) -> BackgroundImage {
  return BackgroundImage::{
    val: ImageLoader::new(path)
  }
}