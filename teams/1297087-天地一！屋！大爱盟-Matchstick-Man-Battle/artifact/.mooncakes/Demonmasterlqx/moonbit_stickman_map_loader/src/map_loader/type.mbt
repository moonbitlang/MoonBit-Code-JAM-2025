pub suberror MapLoaderError String

pub enum MapLoaderBodyType{
	Static
	Kinematic
	Dynamic

}derive(Hash, Eq, Show)

pub enum MapLoaderJointType{
	Revolute
}derive(Hash, Eq, Show)

pub enum MapLoaderShapeType{
	Box(Double, Double)
	Circle(Double)
	Polygon(Array[(Double, Double)])
}derive(Hash, Eq, Show)

pub struct MapLoaderBodyDef{
	id: String
	body_def_type: MapLoaderBodyType
	position: (Double, Double)
	angle: Double
	linear_velocity: (Double, Double)
	angular_velocity: Double
	linear_damping: Double
	angular_damping: Double
	allow_sleep: Bool
	awake: Bool
	fixed_rotation: Bool
	bullet: Bool
	gravity_scale: Double

	// fixture
	fixture_type : MapLoaderShapeType

	density : Double
	friction : Double
	restitution : Double
	is_sensor : Bool
	filter_category_bits : Int
	filter_mask_bits : Int
	filter_group_index : Int

}derive(Hash, Eq, Show)

pub struct MapLoaderJointDef{

	id: String
	joint_type : MapLoaderJointType
	body_a_id: String
	body_b_id: String
	type_str: String
	collide_connected: Bool
	local_anchor_a: (Double, Double)
	local_anchor_b: (Double, Double)
	reference_angle: Double
	lower_angle: Double
	upper_angle: Double
	max_motor_torque: Double
	motor_speed: Double
	enable_limit: Bool
	enable_motor: Bool

} derive(Hash, Eq, Show)

pub struct MapLoaderWorldDef{
	gravity: (Double, Double)
	aabb : ( (Double, Double), (Double, Double) )
	allow_sleeping: Bool
	auto_clear_forces: Bool
}derive(Hash, Eq, Show)

pub struct MapDef{

	world_def : MapLoaderWorldDef
	bodies : Array[MapLoaderBodyDef]
	joints : Array[MapLoaderJointDef]

	bodies_map : Map[String, @box2d.B2Body]
	joints_map : Map[String, @box2d.B2Joint]
	mut world : &@box2d.World?

}

fn map_world_def_from_json(world_json : Json) -> MapLoaderWorldDef raise {
	match world_json{
		{
			"gravity" : [Number(gx,..), Number(gy,..)],
			"allow_sleeping" : allow_sleeping,
			"auto_clear_forces" : auto_clear_forces,
			..
		} => {
			MapLoaderWorldDef::{
				gravity: (gx,gy),
				aabb: ((-10000.0, -10000.0), (10000.0, 10000.0)),
				allow_sleeping: match allow_sleeping.as_bool(){
					None =>{
						println("allow_sleeping is not a bool, defaulting to true")
						true
					}
					Some(b) => b
				},
				auto_clear_forces: match auto_clear_forces.as_bool(){
					None =>{
						println("auto_clear_forces is not a bool, defaulting to true")
						true
					}
					Some(b) => b
				},
			}
		}
		e => raise MapLoaderError("Invalid world settings JSON: \{e}")
	}
}

fn map_joint_type_from_json(type_str : String) -> MapLoaderJointType raise {
	match type_str{
		"revolute" => MapLoaderJointType::Revolute
		_ => raise MapLoaderError("Unknown joint type: \{type_str}")
	}
}

fn map_joint_def_from_json(joint_json : Json) -> MapLoaderJointDef raise {

	match joint_json{
		{
			"id" : String(id),
			"joint_type" : String(type_str),
			"body_a" : String(body_a_id),
			"body_b" : String(body_b_id),
			"joint_def" : {
				"local_anchor_a" : [Number(lax, ..), Number(lay, ..)],
				"local_anchor_b" : [Number(lbx, ..), Number(lby, ..)],
				"reference_angle" : Number(reference_angle, ..),
				"enable_limit" : enable_limit,
				"lower_angle" : Number(lower_angle, ..),
				"upper_angle" : Number(upper_angle, ..),
				"enable_motor" : enable_motor,
				"motor_speed" : Number(motor_speed, ..),
				"max_motor_torque" : Number(max_motor_torque, ..),
				"collide_connected" : collide_connected,
				..
			},
			..
		} => {
			let joint_type = map_joint_type_from_json(type_str) catch {
				e => raise e
			}
			MapLoaderJointDef::{
				id: id,
				joint_type: joint_type,
				body_a_id: body_a_id,
				body_b_id: body_b_id,
				type_str: type_str,
				collide_connected: match collide_connected.as_bool(){
					None =>{
						println("collide_connected is not a bool, defaulting to false")
						false
					}
					Some(b) => b
				},
				local_anchor_a: (lax, lay),
				local_anchor_b: (lbx, lby),
				reference_angle: reference_angle,
				lower_angle: lower_angle,
				upper_angle: upper_angle,
				max_motor_torque: max_motor_torque,
				motor_speed: motor_speed,
				enable_limit: match enable_limit.as_bool(){
					None =>{
						println("enable_limit is not a bool, defaulting to false")
						false
					}
					Some(b) => b
				},
				enable_motor: match enable_motor.as_bool(){
					None =>{
						println("enable_motor is not a bool, defaulting to false")
						false
					}
					Some(b) => b
				},
			}
		}
		_ => raise MapLoaderError("Invalid joint JSON")
	}
}


fn map_body_type_from_json(type_str : String) -> MapLoaderBodyType raise {
	match type_str{
		"static" => MapLoaderBodyType::Static
		"kinematic" => MapLoaderBodyType::Kinematic
		"dynamic" => MapLoaderBodyType::Dynamic
		_ => raise MapLoaderError("Unknown body type: \{type_str}")
	}
}



fn map_shape_type_from_json(shape_json : Json) -> MapLoaderShapeType raise {
	match shape_json{
		{"type" : "box", "params" : {"width" : Number(width, ..), "height" : Number(height, ..), ..}, ..} => {
			MapLoaderShapeType::Box(width, height)
		}
		{"type" : "circle", "params" : {"radius" : Number(radius, ..), ..}, ..} => {
			MapLoaderShapeType::Circle(radius)
		}
		{"type" : "polygon", "params" : {"vertices" : vertices, ..}, ..} => {
			let verts = vertices.as_array()
			match verts{
				None => raise MapLoaderError("Polygon vertices is not an array")
				Some(arr) => {
					let points = arr.map(fn (v) {
						match v{
							[Number(x, ..), Number(y, ..)] => (x, y)
							_ => raise MapLoaderError("Invalid vertex format")
						}
					})
					MapLoaderShapeType::Polygon(points)
				}
			}
		}
		_ => raise MapLoaderError("Unknown shape type")
	}
}


fn map_body_def_from_json(body_json : Json) -> MapLoaderBodyDef raise {
	match body_json{
		{
			"id" : String(id),
			"body_def" : {
				"type" : String(type_str),
				"position" : [Number(px, ..), Number(py, ..)],
				"angle" : Number(angle, ..),
				"linear_velocity" : [Number(lvx, ..), Number(lvy, ..)],
				"angular_velocity" : Number(angular_velocity, ..),
				"linear_damping" : Number(linear_damping, ..),
				"angular_damping" : Number(angular_damping, ..),
				"allow_sleep" : allow_sleep,
				"awake" : awake,
				"fixed_rotation" : fixed_rotation,
				"bullet" : bullet,
				"gravity_scale" : Number(gravity_scale, ..),
				..
			},
			"fixtures" : [
				{
					"shape" : shape_json,
					"fixture_def" : {
						"density" : Number(density, ..),
						"friction" : Number(friction, ..),
						"restitution" : Number(restitution, ..),
						"is_sensor" : is_sensor,
						"filter_category_bits" : Number(filter_category_bits, ..),
						"filter_mask_bits" : Number(filter_mask_bits, ..),
						"filter_group_index" : Number(filter_group_index, ..),
						..
					},
					..
				}
			],
			..
		} => {
			let body_def_type = map_body_type_from_json(type_str) catch {
				e => raise e
			}
			let position = (px, py)
			let linear_velocity = (lvx, lvy)
			let fixture_shape = map_shape_type_from_json(shape_json) catch {
				e => raise e
			}
			MapLoaderBodyDef::{
				id: id.to_string(),
				body_def_type: body_def_type,
				position: position,
				angle: angle,
				linear_velocity: linear_velocity,
				angular_velocity: angular_velocity,
				linear_damping: linear_damping,
				angular_damping: angular_damping,
				allow_sleep: match allow_sleep.as_bool(){
					None =>{
						println("allow_sleep is not a bool, defaulting to true")
						true
					}
					Some(b) => b
				},
				awake: match awake.as_bool(){
					None =>{
						println("awake is not a bool, defaulting to true")
						true
					}
					Some(b) => b
				},
				fixed_rotation: match fixed_rotation.as_bool(){
					None =>{
						println("fixed_rotation is not a bool, defaulting to false")
						false
					}
					Some(b) => b
				},
				bullet: match bullet.as_bool(){
					None =>{
						println("bullet is not a bool, defaulting to false")
						false
					}
					Some(b) => b
				},
				gravity_scale: gravity_scale,

				fixture_type : fixture_shape,

				density : density,
				friction : friction,
				restitution : restitution,
				is_sensor : match is_sensor.as_bool(){
					None =>{
						println("is_sensor is not a bool, defaulting to false")
						false
					}
					Some(b) => b
				},
				filter_category_bits : filter_category_bits.to_int(),
				filter_mask_bits : filter_mask_bits.to_int(),
				filter_group_index : filter_group_index.to_int(),
			}
		}
		e => raise MapLoaderError("Invalid body JSON \{e}")
	}
}


pub fn load_map(file_content? : String = "", file_path? : String = "") -> MapDef raise  {

	if file_content == "" && file_path == "" {
		println("No file content or path provided")
		raise MapLoaderError("No file content or path provided")
	}

	let content = if file_content != "" {
		file_content
	} else {
		@fs.read_file_to_string(file_path) catch {
			@fs.IOError(s) => {
				println("Failed to read file: \{s}")
				raise MapLoaderError("Failed to read file: \{s}")
			}
		}
	}

  let raw_json = @json5.parse(content) catch {
		@json5.ParseError(s) => {
			s |> ignore
			println("Failed to parse JSON:")
			@json5.parse("{}")
		}
	 }

	println("Parsed JSON OK ")
	
	// 解析json 是否合适
	match raw_json{
		{"world_settings" : world_settings, 
			"bodies" : bodies,
			"joints" : joints
		, ..} => {
			let world_def = map_world_def_from_json(world_settings) catch {
				e => raise e
			}
			println("Mapped world OK")
			let body_defs = match bodies.as_array() {
				None => raise MapLoaderError("Bodies is not an array")
				Some(arr) => arr
			}
			let bodies_mapped = body_defs.map(fn (b) {
				map_body_def_from_json(b) catch {
					e => raise e
				}
			})
			println("Mapped bodies OK, count: \{bodies_mapped.length()}")
			let joint_defs = match joints.as_array(){
				None => raise MapLoaderError("Joints is not an array")
				Some(arr) => arr
			}
			let joints_mapped = joint_defs.map(fn (j) {
				map_joint_def_from_json(j) catch {
					e => raise e
				}
			})
			println("Mapped joints OK, count: \{joints_mapped.length()}")
			MapDef::{
				world_def: world_def,
				bodies: bodies_mapped,
				joints: joints_mapped,
				bodies_map: {},
				joints_map: {},
				world: None
			}
		}
		_ => raise MapLoaderError("Invalid map JSON structure")
	}
}

///|
/// 这里会把 MapLoaderShapeType 转换为 box2d 的 ShapeDef
/// 但是只会设置形状，其他属性比如密度、摩擦等需要在 FixtureDef 中设置
fn MapLoaderShapeType::to_box2d_shapedef(self : MapLoaderShapeType) -> &@box2d.ShapeDef {
	let shape : &@box2d.ShapeDef = match self {
		MapLoaderShapeType::Box(width, height) => {
			let shape = @box2d.b2BoxDef()
			shape.setExtents(@box2d.b2Vec2(width / 2, height / 2))
			let trait_type : &@box2d.ShapeDef = shape
			trait_type
		}
		MapLoaderShapeType::Circle(radius) => {
			let shape = @box2d.b2CircleDef()
			shape.setRadius(radius)
			let trait_type : &@box2d.ShapeDef = shape
			trait_type
		}
		MapLoaderShapeType::Polygon(vertices) => {
			let shape = @box2d.b2PolyDef()
			let vecs = vertices.map(fn (v) {
				@box2d.b2Vec2(v.0, v.1)
			})
			shape.setVertices(vecs)
			let trait_type : &@box2d.ShapeDef = shape
			trait_type
		}
	}
	shape
}

fn get_bodydef(body_ : MapLoaderBodyDef) -> @box2d.B2BodyDef {
	let body_def = @box2d.b2BodyDef()
	let shape_def : &@box2d.ShapeDef = body_.fixture_type.to_box2d_shapedef()

	match body_.body_def_type {
		MapLoaderBodyType::Static => shape_def.setDensity(0.0)
		_ => shape_def.setDensity(body_.density)
	}
	shape_def.setFriction(body_.friction)
	shape_def.setRestitution(body_.restitution)
	shape_def.setMaskBits(body_.filter_mask_bits)
	shape_def.setCategoryBits(body_.filter_category_bits)
	shape_def.setGroupIndex(body_.filter_group_index)
	shape_def.setLocalPosition(@box2d.b2Vec2(0,0))
	shape_def.setLocalRotation(0)

	body_def.addShape(shape_def.getBase())

	body_def.setPosition(@box2d.b2Vec2(body_.position.0, body_.position.1))
	body_def.setRotation(body_.angle)
	body_def.setLinearVelocity(@box2d.b2Vec2(body_.linear_velocity.0, body_.linear_velocity.1))
	body_def.setAngularVelocity(body_.angular_velocity)
	body_def.setLinearDamping(body_.linear_damping)
	body_def.setAngularDamping(body_.angular_damping)
	body_def.setAllowSleep(body_.allow_sleep)
	body_def.setIsSleeping(false)
	body_def.setPreventRotation(body_.fixed_rotation)

	body_def
}

pub fn MapDef::add_body(self : MapDef, body : MapLoaderBodyDef) -> Unit raise{
	let body_def = get_bodydef(body)

	// 输出这些信息 body 和 shape 的信息
	println("=== Adding Body ===")
	println("Body ID: \{body.id}")
	println("Body Type: \{body.body_def_type}")
	println("Body Position: (\{body.position.0}, \{body.position.1})")
	println("Body Angle: \{body.angle}")
	println("Body Linear Velocity: (\{body.linear_velocity.0}, \{body.linear_velocity.1})")
	println("Body Angular Velocity: \{body.angular_velocity}")
	println("Body Linear Damping: \{body.linear_damping}")
	println("Body Angular Damping: \{body.angular_damping}")
	println("Body Allow Sleep: \{body.allow_sleep}")
	println("Body Awake: \{body.awake}")
	println("Body Fixed Rotation: \{body.fixed_rotation}")
	println("Body Bullet: \{body.bullet}")
	println("Body Gravity Scale: \{body.gravity_scale}")
	println("--- Fixture ---")
	println("Fixture Type: \{body.fixture_type}")
	println("Fixture Density: \{body.density}")
	println("Fixture Friction: \{body.friction}")
	println("Fixture Restitution: \{body.restitution}")
	println("Fixture Is Sensor: \{body.is_sensor}")
	println("Fixture Filter Category Bits: \{body.filter_category_bits}")
	println("Fixture Filter Mask Bits: \{body.filter_mask_bits}")
	println("Fixture Filter Group Index: \{body.filter_group_index}")
	println("==================")



	match self.world {
		None => raise MapLoaderError("World is not initialized")
		Some(w) => {
			let b = w.createBody(body_def)
			self.bodies_map.set(body.id, b)
			println("Added body: \{body.id}")
		}
	}


}

pub fn MapDef::add_joint(self : MapDef, joint : MapLoaderJointDef) -> Unit raise{
	println("=== Adding Joint ===")
	println("Joint ID: \{joint.id}")
	println("Joint Type: \{joint.joint_type}")
	println("Body A ID: \{joint.body_a_id}")
	println("Body B ID: \{joint.body_b_id}")
	println("Collide Connected: \{joint.collide_connected}")
	println("Local Anchor A: (\{joint.local_anchor_a.0}, \{joint.local_anchor_a.1})")
	println("Local Anchor B: (\{joint.local_anchor_b.0}, \{joint.local_anchor_b.1})")
	println("Reference Angle: \{joint.reference_angle}")
	println("Lower Angle: \{joint.lower_angle}")
	println("Upper Angle: \{joint.upper_angle}")
	println("Enable Limit: \{joint.enable_limit}")
	println("Enable Motor: \{joint.enable_motor}")
	println("Motor Speed: \{joint.motor_speed}")
	println("Max Motor Torque: \{joint.max_motor_torque}")

	let body_a = self.bodies_map[joint.body_a_id]
	let body_b = self.bodies_map[joint.body_b_id]

	println("Body A and Body B found successfully")

	let joint_def  = match joint.joint_type {
		MapLoaderJointType::Revolute => {
			let rev_def = @box2d.b2RevoluteJointDef()

			rev_def.setEnableLimit(joint.enable_limit)
			rev_def.setLowerAngle(joint.lower_angle)
			rev_def.setUpperAngle(joint.upper_angle)
			rev_def.setEnableMotor(joint.enable_motor)
			rev_def.setMotorSpeed(joint.motor_speed)
			// rev_def.setMaxMotorTorque(joint.max_motor_torque)
			rev_def.setCollideConnected(joint.collide_connected)
			rev_def.setAnchorPoint(body_a.getWorldPoint(@box2d.b2Vec2(joint.local_anchor_a.0, joint.local_anchor_a.1)))
			let trait_type : &@box2d.JointDef = rev_def
			trait_type

		}
	}

	joint_def.setBody1(body_a)
	joint_def.setBody2(body_b)
	joint_def.setCollideConnected(joint.collide_connected)

	match self.world {
		None => raise MapLoaderError("World is not initialized")
		Some(w) => {
			self.joints_map[joint.id] = w.createJoint(joint_def.getBase())
			println("Joint created successfully: \{joint.id}")
			println("==================")
		}
	}

}

pub fn MapDef::construct_world(self : MapDef) -> &@box2d.World raise{

	let world_aabb = @box2d.b2AABB()
	let world_gravity = @box2d.b2Vec2(self.world_def.gravity.0, self.world_def.gravity.1)
	world_aabb.setminVertex(@box2d.b2Vec2(self.world_def.aabb.0.0, self.world_def.aabb.0.1))
	world_aabb.setmaxVertex(@box2d.b2Vec2(self.world_def.aabb.1.0, self.world_def.aabb.1.1))

	println("Creating world with gravity: (\{world_gravity.getX()}, \{world_gravity.getY()})")

	self.world = Some(@box2d.b2World(
		world_aabb, world_gravity, self.world_def.allow_sleeping
	))

	println("World created successfully")

	// 添加body
	for body in self.bodies {
		self.add_body(body) catch {
			e => raise e
		}
	}

	println("All bodies added successfully, count: \{self.bodies.length()}")

	// 添加joint
	for joint in self.joints {
		self.add_joint(joint) catch {
			e => raise e
		}
	}

	println("All joints added successfully, count: \{self.joints.length()}")

	match self.world {
		None => raise MapLoaderError("World is not initialized")
		Some(w) => w
	}

}
