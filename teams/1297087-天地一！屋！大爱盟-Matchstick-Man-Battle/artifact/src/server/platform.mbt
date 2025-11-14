//Platform Entity
pub(all) struct Platform{
	body : @box2d.B2Body
	index : Int
	// width : Double   // 半宽度（Box2D 的 extent）
	// height : Double  // 半高度（Box2D 的 extent）
	img : ImageLoader
}
pub(all) struct RotatablePlatform{
	body : @box2d.B2Body
	index : Int
	angle_speed : Double // 角速度，单位弧度每秒
	mut angle : Double
	img : ImageLoader
}
pub(all) struct MovablePlatform{
	fulcrum : @box2d.B2Body
	body : @box2d.B2Body
	now_position : @box2d.B2Vec2
	index : Int
	start_position : @box2d.B2Vec2
	end_position : @box2d.B2Vec2
	speed : Double // 移动速度，单位米每秒
	mut direction : Int // 1表示从start到end，-1表示从end到start
	mut cooldown : Int  // 冷却时间，防止频繁切换方向
	cooldown_time : Int // 冷却时间总长
	img : ImageLoader
}

pub impl RenderAble for Platform with get_render(self: Platform){
	Some(
		fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {
			world |> ignore
			
			let pixel_width = world_to_screen_size(self.get_width());
			let pixel_height = world_to_screen_size(self.get_hight());

			drawStaticBody(p, self.body, self.img.get_image(p), pixel_width, pixel_height, 0.0, 0.0)
		}
	)
}

pub impl RenderAble for RotatablePlatform with get_render(self: RotatablePlatform){
	// Some(fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {
	// 	world|> ignore
	// 	for shape in rotatable_platform.get_body().getShapeList() {
	// 	// println("Drawing RotatablePlatform \{rotatable_platform.get_index()}")
	// 		match shape.getType() {
	// 			PolygonShape => drawPolygon(p, shape.toPolygonShape())
	// 			BoxShape => drawPolygon(p, shape.toPolygonShape())
	// 			CircleShape => drawCircle(p, shape.toCircleShape())
	// 			UnknownShape => {
	// 				println("Unknown Shape")
	// 			}
	// 		}
	// 	}
	// })

	Some(
		fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {
			world |> ignore
			
			let pixel_width = world_to_screen_size(self.get_width());
			let pixel_height = world_to_screen_size(self.get_hight());

			drawStaticBody(p, self.body, self.img.get_image(p), pixel_width, pixel_height, 0.0, 0.0)
		}
	)
}

pub impl RenderAble for MovablePlatform with get_render(self: MovablePlatform){
	// Some(fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {

	// 	world |> ignore

	// 	for shape in movable_platform.get_body().getShapeList() {
	// 	// println("Drawing MovablePlatform \{movable_platform.get_index()}")
	// 		match shape.getType() {
	// 			PolygonShape => drawPolygon(p, shape.toPolygonShape())
	// 			BoxShape => drawPolygon(p, shape.toPolygonShape())
	// 			CircleShape => drawCircle(p, shape.toCircleShape())
	// 			UnknownShape => {
	// 				println("Unknown Shape")
	// 			}
	// 		}
	// 	}
	// })

	Some(
		fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {
			world |> ignore
			
			let pixel_width = world_to_screen_size(self.get_width());
			let pixel_height = world_to_screen_size(self.get_hight());

			drawStaticBody(p, self.body, self.img.get_image(p), pixel_width, pixel_height, 0.0, 0.0)
		}
	)

}

// 还需要一个操作 , 探测某个人是否能站在平台上
pub(open) trait PlatformTrait : RenderAble{
	//destroy(Self, game:Game) -> Unit
	update(Self, game:Game) -> Unit
	get_index(Self) -> Int
	get_body(Self) -> @box2d.B2Body
	get_width(Self) -> Double = _
	get_hight(Self) -> Double = _
	get_rotation(Self) -> Double = _
}

impl PlatformTrait with get_width(self) -> Double {
	let body = self.get_body()
	if body.getShapeList().length() != 1 {
		println("Warning: Platform \{self.get_index()} has multiple shapes, the default impl only support one shape.")
	}
	if body.getShapeList().length() == 0 {
		println("Warning: Platform \{self.get_index()} has no shape, returning 0.")
		return 0.0
	}
	let shape = body.getShapeList()[0]

	if shape.getType() != BoxShape {
		println("Warning: Platform \{self.get_index()} shape is not BoxShape, the default impl only support BoxShape.")
		return 0.0
	}

	let box_shape = shape.toPolygonShape()
	if box_shape.getVertexCount() != 4 {
		println("Warning: Platform \{self.get_index()} BoxShape vertex count is not 4, the default impl only support rectangle.")
		return 0.0
	}

	let vertexs = box_shape.getVertices()
	let width = @cmath.sqrt(
		(vertexs[0].getX() - vertexs[1].getX()) * (vertexs[0].getX() - vertexs[1].getX()) +
		(vertexs[0].getY() - vertexs[1].getY()) * (vertexs[0].getY() - vertexs[1].getY())
	)
	return width

}

impl PlatformTrait with get_hight(self) -> Double {
	let body = self.get_body()
	if body.getShapeList().length() != 1 {
		println("Warning: Platform \{self.get_index()} has multiple shapes, the default impl only support one shape.")
	}
	if body.getShapeList().length() == 0 {
		println("Warning: Platform \{self.get_index()} has no shape, returning 0.")
		return 0.0
	}
	let shape = body.getShapeList()[0]

	if shape.getType() != BoxShape {
		println("Warning: Platform \{self.get_index()} shape is not BoxShape, the default impl only support BoxShape.")
		return 0.0
	}

	let box_shape = shape.toPolygonShape()
	if box_shape.getVertexCount() != 4 {
		println("Warning: Platform \{self.get_index()} BoxShape vertex count is not 4, the default impl only support rectangle.")
		return 0.0
	}

	let vertexs = box_shape.getVertices()
	let hight = @cmath.sqrt(
		(vertexs[2].getX() - vertexs[1].getX()) * (vertexs[2].getX() - vertexs[1].getX()) +
		(vertexs[2].getY() - vertexs[1].getY()) * (vertexs[2].getY() - vertexs[1].getY())
	)
	return hight

}

impl PlatformTrait with get_rotation(self) -> Double {
	return self.get_body().getRotation()
}

pub fn create_platform(game:Game,position:(Double,Double),size:(Double,Double),angle?:Double=0.0, path~:String? = None)
->Platform {
	let box_def = @box2d.b2BoxDef()
	box_def.setExtents(@box2d.b2Vec2(size.0, size.1))
	box_def.setDensity(0.0)
	let body_def = @box2d.b2BodyDef()
	body_def.setPosition(@box2d.b2Vec2(position.0, position.1))
	body_def.addShape(box_def.getBase())
	body_def.setRotation(angle)
	body_def.setAllowSleep(false)
	let new = Platform::{
		body : game.world.createBody(body_def),
		index : game.platform_index,
		img : ImageLoader::new(path)
	}
	// new.body.getShapeList()[0].getBase().getRestitution
	game.platform_list.push(new)
	game.platform_index += 1
	new
}
pub impl PlatformTrait for Platform with update(self, game) -> Unit {
	self |> ignore
	game |> ignore
	// 静止平台不需要更新
}
pub impl PlatformTrait for Platform with get_index(self) -> Int {
	return self.index
}
pub impl PlatformTrait for Platform with get_body(self) -> @box2d.B2Body {
	return self.body
}
pub fn create_rotatable_platform(game:Game,position:(Double,Double),size:(Double,Double),angle_speed:Double,initial_angle?:Double=0.0, path~:String? = None) -> RotatablePlatform {
	let box_def = @box2d.b2BoxDef()
	box_def.setExtents(@box2d.b2Vec2(size.0, size.1))
	box_def.setDensity(50.0)
	let body_def = @box2d.b2BodyDef()
	body_def.setPosition(@box2d.b2Vec2(position.0, position.1))
	body_def.addShape(box_def.getBase())
	body_def.setRotation(initial_angle)
	body_def.setAllowSleep(false)
	let body = game.world.createBody(body_def)
	let new = RotatablePlatform::{
		body,
		index : game.platform_index,
		angle_speed : angle_speed,
		angle : initial_angle,
		img : ImageLoader::new(path)
	}
	
	let pos = (body.getCenterPosition().getX(), body.getCenterPosition().getY())

	game.create_revolute_joint(game.anchor, body , pos)|> ignore

	game.platform_list.push(new)
	game.platform_index += 1
	new
}

pub impl PlatformTrait for RotatablePlatform with update(self, game) -> Unit {

	game |> ignore

	let current_angle = self.body.getRotation()
	let new_angle = current_angle + self.angle_speed * (1.0/60.0) // 假设每帧更新一次，60FPS
	self.angle += self.angle_speed * (1.0/60.0)
	// println("RotatablePlatform ${self.index} angle: ${self.angle}")
	maintain_rotation(self.body, new_angle,kp=100000.0, kd=10000.0)
}

pub impl PlatformTrait for RotatablePlatform with get_index(self) -> Int {
	return self.index
}

pub impl PlatformTrait for RotatablePlatform with get_body(self) -> @box2d.B2Body {
	return self.body
}


pub fn create_movable_platform(game:Game, size:(Double,Double), start_position:(Double,Double), end_position:(Double,Double), speed:Double, now_position:(Double,Double), path~: String? =None) -> MovablePlatform {
	let box_def = @box2d.b2BoxDef()
	box_def.setExtents(@box2d.b2Vec2(size.0, size.1))
	box_def.setDensity(50.0)
	let body_def = @box2d.b2BodyDef()
	body_def.setPosition(@box2d.b2Vec2(now_position.0, now_position.1))
	body_def.addShape(box_def.getBase())
	body_def.setRotation(0.0)
	body_def.setAllowSleep(false)
	let body = game.world.createBody(body_def)
	
	let to_target = @box2d.b2Vec2(end_position.0 - start_position.0, end_position.1 - start_position.1)
	let cooldown_time = ((to_target.length() / speed) ).to_int() // 转换为帧数，假设60FPS
	
	
	let new = MovablePlatform::{
		fulcrum : game.anchor,
		body,
		index : game.platform_index,
		start_position : @box2d.b2Vec2(start_position.0, start_position.1),
		end_position : @box2d.b2Vec2(end_position.0, end_position.1),
		now_position : @box2d.b2Vec2(now_position.0, now_position.1),
		speed,
		direction : 1,
		cooldown : cooldown_time,
		cooldown_time,
		img : ImageLoader::new(path)
	}
	// let axis = @box2d.b2Vec2(end_position.0 - start_position.0, end_position.1 - start_position.1)
	//game.create_prismatic_joint(game.anchor, body, (0.0, 0.0), axis, enable_limit=true, lower_translation=0.0, upper_translation=5.0)|> ignore
	
	game.platform_list.push(new)
	game.platform_index += 1
	
	new
}

impl PlatformTrait for MovablePlatform with update(self, game) -> Unit {

	game |> ignore
	
	self.body.applyForce(@box2d.b2Vec2(0.0, 9.8*self.body.getMass()), self.body.getCenterPosition())
	// println("rotation")
	maintain_rotation(self.body, 0.0, kp=1000000.0, kd=100000.0)
	
	let current_pos = self.body.getCenterPosition()
	let target_pos = if self.direction == 1 { self.end_position } else { self.start_position }
	let to_target = @box2d.b2Vec2(target_pos.getX() - current_pos.getX(), target_pos.getY() - current_pos.getY())
	let distance = to_target.length()
	
	// println("\{self.direction} \{self.cooldown} \{distance}")
	self.cooldown -= 1
	
	if distance < 0.1 && self.cooldown<0 {
		// 到达目标点，切换方向
		self.direction *= -1
		self.cooldown = self.cooldown_time // 设置冷却时间，防止频繁切换
	} else {
		let move_distance = self.speed * (1.0/60.0)
		let move_vector = to_target
		let len=move_vector.length()
		move_vector.setX(move_vector.getX() * move_distance/len )
		move_vector.setY(move_vector.getY() * move_distance/len )
		let new_pos = @box2d.b2Vec2(current_pos.getX() + move_vector.getX(), current_pos.getY() + move_vector.getY())
		
		//println("MovablePlatform \{self.index} position: (\{new_pos.getX()}, \{new_pos.getY()})")
		
		maintain_position(self.body,(new_pos.getX(), new_pos.getY()), kp=1000000.0, kd=50000.0)
	}
}

impl PlatformTrait for MovablePlatform with get_index(self) -> Int {
	return self.index
}
impl PlatformTrait for MovablePlatform with get_body(self) -> @box2d.B2Body {
	return self.body
}