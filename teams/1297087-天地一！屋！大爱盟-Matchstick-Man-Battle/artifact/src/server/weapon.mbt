
let sword_shift:@box2d.B2Vec2=@box2d.b2Vec2(((-6.35)-(-7.07))/2, ((17.00)-(15.10))/2)
let gun_body_shift:@box2d.B2Vec2=@box2d.b2Vec2(0.0, 0.0)


pub struct WeaponManager{
	mut sword_index : Int
	sword_list : Array[Sword]
	mut gun_index : Int
	gun_list : Array[Gun]
}

fn create_weapon_manager() -> WeaponManager{
	let weapon_manager=WeaponManager::{
		sword_index:0,
		sword_list:Array::new(),
		gun_index:0,
		gun_list:Array::new()
	}
	weapon_manager
}

pub struct Sword{
	id : Int
	owner_id : Int
	body : @box2d.B2Body
	mut last_attack_frame : Int
	/// | 近战武器攻击间隔（用于控制攻击频率）
	attack_interval : Int

	/// | 近战武器攻击范围（用于查询碰撞体）
	/// 近战武器的攻击范围通常是一个较小的矩形区域，定义为Box2D的AABB（轴对齐边界框）。
	attack_range_min : @box2d.B2Vec2
	attack_range_max : @box2d.B2Vec2

	// img
	img : ImageLoader
}
pub struct Gun{
	id : Int
	mut owner_id : Int  // 可变，以支持武器拾取
	mut body : @box2d.B2Body
	
	// 子弹配置
	bullet_damage : Double
	bullet_speed : Double
	bullet_penetration : Int
	bullet_targets : Array[TargetType]
	
	// 射击控制
	fire_rate : Int  // 射速（帧间隔）
	mut last_fire_frame : Int  // 上次射击帧
	
	// 武器类型
	gun_type : GunType
	mut angle : Double
	mut direction : Double
	
	// 投掷状态
	mut is_thrown : Bool           // 是否已被投掷
	mut throw_damage : Double      // 投掷伤害（基于速度）
	mut ammo : Int                 // 剩余子弹数量
	
	// img
	img : ImageLoader
}

pub fn Gun::get_angle(self : Gun) -> Double {
	self.angle
}

// 枪械类型
pub enum GunType {
	Pistol       // 手枪：低伤害，快射速
	Shotgun      // 霰弹枪：散射，近距离
	Sniper       // 狙击枪：高伤害，穿透
	LaserRifle   // 激光枪：高穿透，中伤害
} derive(Show, Eq)

pub(open) trait WeaponCreate {
	create(game:Game,owner_id:Int,url:String?) -> Unit
}

pub(open) trait WeaponControl : RenderAble{
	attack(Self, game:Game) -> Unit
	attack_at_angle(Self, game:Game, angle:Double) -> Unit
  get_attack_field(Self) -> Double = _
}

pub(open) trait WeaponDestroy {
	destroy(Self, game:Game) -> Unit
}

impl WeaponControl with get_attack_field(self) -> Double {
	self |> ignore
	return 1.0
}

pub impl WeaponCreate for Sword with create(game, owner_id, url:String?){
	let bodydef=@map_loader.get_bodydef_from_raw(Some(sword_body), None) catch {
        _=> {
					println("Failed to create body definition for Sword")
					@box2d.b2BodyDef()
				}
    }
	let centerpos=game.particle_list[owner_id].right_forearm.getCenterPosition()
	let rotate =game.particle_list[owner_id].right_forearm.getRotation()
	let handpos=@box2d.b2Vec2(-@cmath.sin(rotate)*0.25+centerpos.getX(),-@cmath.cos(rotate)*0.25+centerpos.getY())

	bodydef.setPosition(@box2d.b2Vec2(handpos.getX()+sword_shift.getX(), handpos.getY()+sword_shift.getY()))
	
	game.weapon.sword_index+=1
	let aa:Sword=Sword::{
		id:game.weapon.sword_index,
		owner_id:owner_id,
		body:game.world.createBody(bodydef),
		attack_range_max :@box2d.b2Vec2(2.0, 2.0),
		attack_range_min :@box2d.b2Vec2(-2.0, -2.0),
		attack_interval: 20,
		last_attack_frame: 0,
		img: ImageLoader::new(url)
	}
	game.weapon.sword_list.push(aa)

	game.create_revolute_joint(game.particle_list[owner_id].right_forearm, aa.body, (handpos.getX(),handpos.getY()), enable_limit=false)|> ignore
}

pub impl WeaponControl for Sword with attack(self,game){
	// 播放剑挥击音效
	game.audio.play_sound(SwordSwing)

	// 画攻击范围（调试用）
	// let attack_field_counter = { val: 0 }
	// let attack_field_frames = 10  // 显示10帧
	
	// game.add_animation(
	// 	SampleAnimation::new(
	// 		fn(world, p5) -> AnimationState {
	// 			world |> ignore
				
	// 			attack_field_counter.val = attack_field_counter.val + 1
				
	// 			// 绘制攻击范围矩形
	// 			self.draw_attack_field(p5)
	// 			println("Drawing sword attack field...")
				
	// 			// 检查动画是否结束
	// 			if attack_field_counter.val >= attack_field_frames {
	// 				AnimationState::Completed
	// 			} else {
	// 				AnimationState::InProgress
	// 			}
	// 		}
	// 	)
	// )

	// 检查攻击间隔
	if game.frame_count - self.last_attack_frame < self.attack_interval {
		return
	}
	self.last_attack_frame = game.frame_count

	// 首先拿到剑攻击范围内的物体

	let query_result: FixedArray[@box2d.B2Shape] = []

	game.world.query(self.get_attack_field(), query_result, 10) |> ignore

	for attached_shape in query_result{
		let target_particle = game.who_shape_belongs_to(attached_shape)
		if target_particle == -1 || target_particle == self.owner_id {
			continue
		}
		println("Sword hit particle #\{target_particle}!")
		let target = game.particle_list[target_particle]

		// 简单伤害计算
		target.control.health -= 5

	}

	// 添加群体攻击特效：华丽的圆形冲击波 + 粒子效果
	let sword_pos = self.body.getCenterPosition()
	let start_x = sword_pos.getX()
	let start_y = sword_pos.getY()
	
	// 创建圆形冲击波动画（多波纹效果）
	let frame_counter : Ref[Int] = { val: 0 }
	let max_frames = 20  // 动画持续20帧（约0.33秒）
	
	game.add_animation(
		SampleAnimation::new(
			fn(world, p5) -> AnimationState {
				world |> ignore
				
				frame_counter.val = frame_counter.val + 1
				let progress = frame_counter.val.to_double() / max_frames.to_double()
				
				let center_screen = world_to_screen(start_x, start_y)
				
				// 绘制多层波纹（3个波纹，依次扩散）
				for wave = 0; wave < 3; wave = wave + 1 {
					let wave_delay = wave.to_double() * 0.25
					let wave_progress = progress - wave_delay
					
					if wave_progress > 0.0 && wave_progress < 1.0 {
						let alpha = 255.0 * (1.0 - wave_progress) * 0.8
						let radius = wave_progress * 2.8
						let radius_pixels = radius * PPM
						
						// 外层光晕（渐变色：从橙红到紫红）
						let r = 255.0 - wave_progress * 100.0
						let g = 50.0 + wave_progress * 50.0
						let b = wave_progress * 200.0
						
						p5.noFill()
						p5.strokeWeight(10.0 * (1.0 - wave_progress * 0.5))
						p5.strokeComponents(r, g, b, Some(alpha * 0.3))
						p5.ellipse(center_screen.0, center_screen.1, radius_pixels * 2.0, radius_pixels * 2.0)
						
						// 中层（亮黄到青色）
						p5.strokeWeight(6.0 * (1.0 - wave_progress * 0.5))
						p5.strokeComponents(255.0, 200.0 - wave_progress * 100.0, 100.0 + wave_progress * 155.0, Some(alpha * 0.6))
						p5.ellipse(center_screen.0, center_screen.1, radius_pixels * 1.5, radius_pixels * 1.5)
						
						// 内层核心（亮白）
						p5.strokeWeight(3.0)
						p5.strokeComponents(255.0, 255.0, 255.0, Some(alpha * 0.85))
						p5.ellipse(center_screen.0, center_screen.1, radius_pixels * 1.0, radius_pixels * 1.0)
					}
				}
				
				// 绘制能量粒子（围绕冲击波旋转飞散）
				let particle_count = 16
				for i = 0; i < particle_count; i = i + 1 {
					let angle = (i.to_double() / particle_count.to_double()) * 6.28318 + progress * 2.0
					let particle_radius = progress * 2.5
					let particle_x = start_x + particle_radius * @cmath.cos(angle)
					let particle_y = start_y + particle_radius * @cmath.sin(angle)
					let particle_screen = world_to_screen(particle_x, particle_y)
					
					let alpha = 255.0 * (1.0 - progress) * 0.9
					let size = (8.0 - progress * 4.0) * (1.0 + @cmath.sin(progress * 12.0 + i.to_double()) * 0.3)
					
					// 粒子颜色：从白到橙红
					let pr = 255.0
					let pg = 255.0 - progress * 200.0
					let pb = 200.0 - progress * 200.0
					
					p5.fillColorPara(pr, Some(pg), Some(pb), Some(alpha))
					p5.noStroke()
					p5.ellipse(particle_screen.0, particle_screen.1, size, size)
				}
				
				// 绘制中心爆发光芒（放射状线条）
				if progress < 0.3 {
					let ray_count = 12
					let ray_alpha = 255.0 * (1.0 - progress / 0.3) * 0.6
					let ray_length = progress * 1.5 * PPM
					
					for i = 0; i < ray_count; i = i + 1 {
						let angle = (i.to_double() / ray_count.to_double()) * 6.28318
						let end_x = center_screen.0 + ray_length * @cmath.cos(angle)
						let end_y = center_screen.1 + ray_length * @cmath.sin(angle)
						
						p5.strokeWeight(3.0)
						p5.strokeComponents(255.0, 255.0, 150.0, Some(ray_alpha))
						p5.line(center_screen.0, center_screen.1, end_x, end_y)
					}
				}
				
				// 恢复默认设置
				p5.strokeWeight(1.0)
				p5.noStroke()
				
				// 检查动画是否结束
				if frame_counter.val >= max_frames {
					AnimationState::Completed
				} else {
					AnimationState::InProgress
				}
			}
		)
	)

	// 播放剑挥舞音效
	game.audio.play_sound(SwordSwing)
	
	println("Sword attack!")
}

pub impl RenderAble for Sword with get_render(self: Sword){
	Some(
		fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {
			world |> ignore
			for shape in self.body.getShapeList() {
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
	)
}

///|
/// 剑的角度攻击（近战武器不需要角度，直接调用普通攻击）
pub impl WeaponControl for Sword with attack_at_angle(self, game, _angle){
	self.attack(game)
}

pub impl WeaponDestroy for Sword with destroy(self, game){
	game.world.destroyBody(self.body)
}

pub impl WeaponCreate for Gun with create(game, owner_id,url:String?){
	let bodydef:@box2d.B2BodyDef=@map_loader.get_bodydef_from_raw(Some(gun_body), None) catch {
				_=> {
					println("Failed to create body definition for Gun")
					@box2d.b2BodyDef()
				}
		}
	let centerpos=game.particle_list[owner_id].right_forearm.getCenterPosition()
	let rotate =game.particle_list[owner_id].right_forearm.getRotation()
	let handpos=@box2d.b2Vec2(-@cmath.sin(rotate)*0.25+centerpos.getX(),-@cmath.cos(rotate)*0.25+centerpos.getY())

	bodydef.setPosition(@box2d.b2Vec2(handpos.getX()+gun_body_shift.getX(), handpos.getY()+gun_body_shift.getY()))
	
	game.weapon.gun_index+=1
	
	// 创建武器body
	let weapon_body = game.world.createBody(bodydef)
	
	// 设置武器的碰撞组，与持有者相同，避免武器与持有者、持有者的子弹发生物理碰撞
	// 使用destroyBody + recreate来更改碰撞组（Box2D的限制）
	let owner_collision_group = -(owner_id + 1000)
	// 遍历所有 fixtures 并重新创建它们以设置正确的碰撞组
	// 注意：这是一个workaround，因为Box2D不允许在创建后修改group index
	// 更好的做法是修改资源文件，但这里我们通过重新创建shape来实现
	let shapes_to_recreate = Array::new()
	for shape in weapon_body.getShapeList() {
		// 保存形状信息（简化版，实际可能需要更多信息）
		shapes_to_recreate.push(shape)
	}
	
	// 销毁旧body
	game.world.destroyBody(weapon_body)
	
	// 修改bodydef中的形状碰撞组后重新创建
	// 由于无法直接修改已加载的bodydef，我们采用不同的方法：
	// 直接创建新的shape定义并添加到新body
	let new_body_def = @box2d.b2BodyDef()
	new_body_def.setPosition(@box2d.b2Vec2(handpos.getX()+gun_body_shift.getX(), handpos.getY()+gun_body_shift.getY()))
	
	// 创建一个简单的box形状作为武器（0.5x1米）
	let weapon_box_def = @box2d.b2BoxDef()
	weapon_box_def.setExtents(@box2d.b2Vec2(0.2, 0.5))
	weapon_box_def.setDensity(1.0)
	weapon_box_def.setFriction(0.3)
	weapon_box_def.setRestitution(0.5)
	weapon_box_def.setGroupIndex(owner_collision_group)  // 设置正确的碰撞组
	new_body_def.addShape(weapon_box_def.getBase())
	
	let final_weapon_body = game.world.createBody(new_body_def)
	
	// 创建手枪
	let aa:Gun=Gun::{
		id:game.weapon.gun_index,
		owner_id:owner_id,
		body:final_weapon_body,
		
		// 手枪配置
		bullet_damage: 10.0,
		bullet_speed: 60.0,  // 提升速度
		bullet_penetration: 0,
		bullet_targets: [Player],
		
		fire_rate: 15,  // 每15帧可射击一次
		last_fire_frame: 0,

		gun_type: Pistol,
		img: ImageLoader::new(url),
		angle: 0.0,
		direction: 1,
		// 投掷状态
		is_thrown: false,
		throw_damage: 0.0,
		ammo: 50  // 手枪50发子弹
	}
	aa.img.set_image_offset(7.0, 1.0)
	aa.img.set_image_size(35.0, 35.0)
	game.weapon.gun_list.push(aa)
	game.create_revolute_joint(game.particle_list[owner_id].right_forearm, aa.body, (handpos.getX(),handpos.getY()), enable_limit=false)|> ignore
}

pub impl RenderAble for Gun with get_render(self: Gun){
	Some(
		fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {
			world |> ignore

			drawDynamicBody(p, self.body, 
				self.img.get_image(p), 
				self.img.get_image_size_x(), 
				self.img.get_image_size_y(), 
				self.img.get_image_offset_x(), 
				self.img.get_image_offset_y(),
				override_angle=Some(self.angle)
			)
			return
			}
	)
}

pub impl WeaponControl for Gun with attack(self,game){
	// 禁止已被投掷的武器或无弹药时射击（集中检查，防止外部直接调用绕过）
	if self.is_thrown {
		// 已经被投掷，不能射击
		println("无法射击：武器已被投掷 (gun id: \{self.id})")
		return
	}
	if self.ammo <= 0 {
		println("无法射击：武器没有子弹了 (gun id: \{self.id})")
		return
	}

	// 检查冷却
	if game.frame_count - self.last_fire_frame < self.fire_rate {
		return  // 还在冷却中
	}
	
	// 获取持有者信息
	let holder = game.particle_list[self.owner_id]
	let direction = if holder.control.walk_direction > 0.0 { 1.0 } else { -1.0 }
	self.angle = 0.0
	
	// 根据枪械类型选择射击方式及参数
	match self.gun_type {
		Pistol => {
			// 播放手枪音效
			game.audio.play_sound(PistolShot)
			
			// 手枪：轻微下坠，轻微后坐力
			game.shoot_bullet_advanced(
				self.owner_id, 
				direction,
				speed=60.0,
				damage=10,
				max_distance=100.0,
				penetration=0,
				gravity_compensation=0.95,  // 95%补偿，轻微下坠
				recoil_horizontal=3,       // 轻微水平后坐力
				recoil_vertical=0.3          // 轻微向上抬升
			)
			self.ammo -= 1  // 消耗1发子弹
			println("手枪射击，持有者: #\{self.owner_id}，剩余子弹: \{self.ammo}")
		}
		
		Shotgun => {
			// 播放霰弹枪音效
			game.shoot_shotgun(
				self.owner_id,
				direction,
				5,
				0.52,
				gravity_compensation=0.85,  // 85%补偿，明显下坠
				recoil_horizontal=4.0,      // 强烈水平后坐力
				recoil_vertical=0.6         // 明显向上抬升
			)
			self.ammo -= 5  // 消耗5发子弹
			println("霰弹枪射击，持有者: #\{self.owner_id}，剩余子弹: \{self.ammo}")
		}
		
		Sniper => {
			// 播放狙击枪音效
			game.audio.play_sound(SniperShot)
			
			// 狙击枪：轻微下坠，中等后坐力
			game.shoot_penetrating_bullet_advanced(
				self.owner_id, 
				direction, 
				2,  // 穿透2个目标
				speed=80.0,
				damage=30,
				max_distance=120.0,
				gravity_compensation=0.98,  // 98%补偿，极轻微下坠
				recoil_horizontal=30.0,       // 高水平后坐力
				recoil_vertical=0.5          // 中等向上抬升
			)
			self.ammo -= 1  // 消耗1发子弹
			println("狙击枪射击，持有者: #\{self.owner_id}，剩余子弹: \{self.ammo}")
		}
		
		LaserRifle => {
			// 播放激光枪音效
			game.audio.play_sound(LaserShot)
			
			// 激光枪：完全无下坠，无后坐力（能量武器）
			game.shoot_penetrating_bullet_advanced(
				self.owner_id, 
				direction, 
				5,  // 穿透5个目标
				speed=100.0,
				damage=15,
				max_distance=150.0,
				gravity_compensation=1.0,    // 100%补偿，完全无下坠 ✨
				recoil_horizontal=0.0,       // 无后坐力 ✨
				recoil_vertical=0.0          // 无向上抬升 ✨
			)
			self.ammo -= 1  // 消耗1发子弹
			println("激光枪射击，持有者: #\{self.owner_id}，剩余子弹: \{self.ammo}")
		}
	}
	
	// 更新冷却
	self.last_fire_frame = game.frame_count
}

///|
/// Gun的角度攻击实现（支持鼠标控制）
pub impl WeaponControl for Gun with attack_at_angle(self, game, angle){
	// 禁止已被投掷的武器或无弹药时射击（集中检查，防止外部直接调用绕过）
	if self.is_thrown {
		// 已经被投掷，不能射击
		println("无法射击：武器已被投掷 (gun id: \{self.id})")
		return
	}
	if self.ammo <= 0 {
		println("无法射击：武器没有子弹了 (gun id: \{self.id})")
		return
	}

	// 检查冷却
	if game.frame_count - self.last_fire_frame < self.fire_rate {
		return  // 还在冷却中
	}
	
	maintain_rotation_test(self.body, angle, kp=2.0, kd=2.0)
	self.angle = angle
	
	
	
	// 根据枪械类型选择射击方式及参数
	match self.gun_type {
		Pistol => {
			// 播放手枪音效
			game.audio.play_sound(PistolShot)
			
			// 手枪：轻微下坠，轻微后坐力
			game.shoot_bullet_at_angle(
				self.owner_id, 
				angle,
				speed=60.0,
				damage=10,
				max_distance=100.0,
				penetration=0,
				gravity_compensation=0.95,  // 95%补偿，轻微下坠
				recoil_horizontal=3.0,      // 轻微水平后坐力
				recoil_vertical=0.3         // 轻微向上抬升
			)
			self.ammo -= 1  // 消耗1发子弹
		}
		
		Shotgun => {
			// 播放霰弹枪音效
			game.audio.play_sound(ShotgunShot)
			
			// 霰弹枪：5发子弹，分散射击
			// 角度范围：±15度 (约0.26弧度)
			let spread = 0.26  // 总扩散角度
			let bullet_count = 5
			let angle_step = spread / (bullet_count - 1).to_double()
			let start_angle = angle - spread / 10.0
			
			for i = 0; i < bullet_count; i = i + 1 {
				let bullet_angle = start_angle + angle_step * i.to_double()
				game.shoot_bullet_at_angle(
					self.owner_id, 
					bullet_angle,
					speed=50.0,
					damage=6,
					max_distance=80.0,
					penetration=0,
					gravity_compensation=0.85,  // 85%补偿，明显下坠
					recoil_horizontal=4.0,      // 强烈水平后坐力
					recoil_vertical=0.6         // 明显向上抬升
				)
			}
			self.ammo -= 5  // 消耗5发子弹
		}
		
		Sniper => {
			// 播放狙击枪音效
			game.audio.play_sound(SniperShot)
			
			// 狙击枪：轻微下坠，中等后坐力
			game.shoot_bullet_at_angle(
				self.owner_id, 
				angle,
				speed=80.0,
				damage=30,
				max_distance=120.0,
				penetration=2,  // 穿透2个目标
				gravity_compensation=0.98,  // 98%补偿，极轻微下坠
				recoil_horizontal=30.0,     // 高水平后坐力
				recoil_vertical=0.5         // 中等向上抬升
			)
			self.ammo -= 1  // 消耗1发子弹
		}
		
		LaserRifle => {
			// 播放激光枪音效
			game.audio.play_sound(LaserShot)
			
			// 激光枪：完全无下坠，无后坐力（能量武器）
			game.shoot_bullet_at_angle(
				self.owner_id, 
				angle,
				speed=100.0,
				damage=3,
				max_distance=150.0,
				penetration=5,  // 穿透5个目标
				gravity_compensation=1.0,    // 100%补偿，完全无下坠 ✨
				recoil_horizontal=0.0,       // 无后坐力 ✨
				recoil_vertical=0.0          // 无向上抬升 ✨
			)
			self.ammo -= 1  // 消耗1发子弹
		}
	}
	
	// 更新冷却
	self.last_fire_frame = game.frame_count
}

pub impl WeaponDestroy for Gun with destroy(self, game){
	game.world.destroyBody(self.body)
}

///| Sword 相关

pub fn Sword::get_attack_field(self : Sword) -> @box2d.B2AABB {
	// 相对于剑的当前位置和旋转，计算攻击范围的实际位置
	let body_pos = self.body.getCenterPosition()
	
	let attack_range = @box2d.b2AABB()

	// 计算实际攻击范围（简化版，不考虑旋转，直接用AABB）
	// 将本地坐标系的攻击范围转换到世界坐标系
	let new_min_x = body_pos.getX() + self.attack_range_min.getX()
	let new_min_y = body_pos.getY() + self.attack_range_min.getY()
	let new_max_x = body_pos.getX() + self.attack_range_max.getX()
	let new_max_y = body_pos.getY() + self.attack_range_max.getY()

	attack_range.setminVertex(@box2d.b2Vec2(new_min_x, new_min_y))
	attack_range.setmaxVertex(@box2d.b2Vec2(new_max_x, new_max_y))

	attack_range
}

pub fn Sword::get_attack_field_vers(self : Sword) -> (@box2d.B2Vec2, @box2d.B2Vec2) {
	// 相对于剑的当前位置和旋转，计算攻击范围的实际位置
	let body_pos = self.body.getCenterPosition()

	// 计算实际攻击范围（简化版，不考虑旋转，直接用AABB）
	// 将本地坐标系的攻击范围转换到世界坐标系
	let new_min_x = body_pos.getX() + self.attack_range_min.getX()
	let new_min_y = body_pos.getY() + self.attack_range_min.getY()
	let new_max_x = body_pos.getX() + self.attack_range_max.getX()
	let new_max_y = body_pos.getY() + self.attack_range_max.getY()

	(@box2d.b2Vec2(new_min_x, new_min_y), @box2d.b2Vec2(new_max_x, new_max_y))
}

pub fn Sword::draw_attack_field(self : Sword, p5 : &@p5js.P5JS) -> Unit {

	let (min_vertex, max_vertex) = self.get_attack_field_vers()
	
	let screen_min = world_to_screen(min_vertex.getX(), min_vertex.getY())
	let screen_max = world_to_screen(max_vertex.getX(), max_vertex.getY())

	// 绘制攻击范围矩形（半透明红色，用于调试可视化）
	p5.noFill()
	p5.strokeComponents(255.0, 0.0, 0.0, Some(150.0))  // 半透明红色
	p5.strokeWeight(10.0)
	
	// 计算矩形的宽度和高度
	let rect_x = screen_min.0
	let rect_y = screen_min.1
	let rect_w = screen_max.0 - screen_min.0
	let rect_h = screen_max.1 - screen_min.1
	
	p5.rect(rect_x, rect_y, rect_w, rect_h)
	
	// 恢复默认设置
	p5.strokeWeight(1.0)
}

///|
/// 创建手枪（快捷方法）
pub fn Game::create_pistol(self : Self, owner_id : Int) -> Unit {
	Gun::create(self, owner_id,None)  // 默认就是手枪
}

///|
/// 创建霰弹枪
pub fn Game::create_shotgun(self : Self, owner_id : Int, url: String?) -> Unit {
	let centerpos=self.particle_list[owner_id].right_forearm.getCenterPosition()
	let rotate =self.particle_list[owner_id].right_forearm.getRotation()
	let handpos=@box2d.b2Vec2(-@cmath.sin(rotate)*0.25+centerpos.getX(),-@cmath.cos(rotate)*0.25+centerpos.getY())

	self.weapon.gun_index+=1
	
	// 创建武器body（使用简化的box形状，并设置正确的碰撞组）
	let owner_collision_group = -(owner_id + 1000)
	let weapon_body_def = @box2d.b2BodyDef()
	weapon_body_def.setPosition(@box2d.b2Vec2(handpos.getX()+gun_body_shift.getX(), handpos.getY()+gun_body_shift.getY()))
	
	let weapon_box_def = @box2d.b2BoxDef()
	weapon_box_def.setExtents(@box2d.b2Vec2(0.2, 0.5))
	weapon_box_def.setDensity(1.0)
	weapon_box_def.setFriction(0.3)
	weapon_box_def.setRestitution(0.5)
	weapon_box_def.setGroupIndex(owner_collision_group)
	weapon_body_def.addShape(weapon_box_def.getBase())
	
	let gun:Gun=Gun::{
		id:self.weapon.gun_index,
		owner_id:owner_id,
		body:self.world.createBody(weapon_body_def),
		
		// 霰弹枪配置（真实霰弹枪约350-400 m/s）
		bullet_damage: 6.0,
		bullet_speed: 50.0,  // 提升速度
		bullet_penetration: 0,
		bullet_targets: [Player],
		
		fire_rate: 40,  // 慢射速
		last_fire_frame: 0,
		
		gun_type: Shotgun,
		img: ImageLoader::new(url),
		angle: 0.0,
		direction: 1,
		// 投掷状态
		is_thrown: false,
		throw_damage: 0.0,
		ammo: 30  // 霰弹枪30发（每次射击消耗5发）
	}
	gun.img.set_image_offset(21.0, 1.0)
	gun.img.set_image_size(100.0, 100.0)
	self.weapon.gun_list.push(gun)
	self.create_revolute_joint(self.particle_list[owner_id].right_forearm, gun.body, (handpos.getX(),handpos.getY()), enable_limit=false)|> ignore
}

///|
/// 创建狙击枪
pub fn Game::create_sniper(self : Self, owner_id : Int, url: String?) -> Unit {
	let centerpos=self.particle_list[owner_id].right_forearm.getCenterPosition()
	let rotate =self.particle_list[owner_id].right_forearm.getRotation()
	let handpos=@box2d.b2Vec2(-@cmath.sin(rotate)*0.25+centerpos.getX(),-@cmath.cos(rotate)*0.25+centerpos.getY())

	self.weapon.gun_index+=1
	
	// 创建武器body（使用简化的box形状，并设置正确的碰撞组）
	let owner_collision_group = -(owner_id + 1000)
	let weapon_body_def = @box2d.b2BodyDef()
	weapon_body_def.setPosition(@box2d.b2Vec2(handpos.getX()+gun_body_shift.getX(), handpos.getY()+gun_body_shift.getY()))
	
	let weapon_box_def = @box2d.b2BoxDef()
	weapon_box_def.setExtents(@box2d.b2Vec2(0.2, 0.5))
	weapon_box_def.setDensity(1.0)
	weapon_box_def.setFriction(0.3)
	weapon_box_def.setRestitution(0.5)
	weapon_box_def.setGroupIndex(owner_collision_group)
	weapon_body_def.addShape(weapon_box_def.getBase())
	
	let gun:Gun=Gun::{
		id:self.weapon.gun_index,
		owner_id:owner_id,
		body:self.world.createBody(weapon_body_def),
		
		// 狙击枪配置（真实狙击步枪约800-1000 m/s）
		bullet_damage: 30.0,
		bullet_speed: 80.0,  // 高速度
		bullet_penetration: 2,
		bullet_targets: [Player],
		
		fire_rate: 60,  // 很慢的射速
		last_fire_frame: 0,

		gun_type: Sniper,
		img: ImageLoader::new(url),
		angle: 0.0,
		direction: 1,
		// 投掷状态
		is_thrown: false,
		throw_damage: 0.0,
		ammo: 20  // 狙击枪20发子弹
	}
	gun.img.set_image_offset(20.0, -2.0)
	gun.img.set_image_size(100.0, 100.0)
	self.weapon.gun_list.push(gun)
	self.create_revolute_joint(self.particle_list[owner_id].right_forearm, gun.body, (handpos.getX(),handpos.getY()), enable_limit=false)|> ignore
}

///|
/// 创建激光枪
pub fn Game::create_laser_rifle(self : Self, owner_id : Int, url: String?) -> Unit {
	let centerpos=self.particle_list[owner_id].right_forearm.getCenterPosition()
	let rotate =self.particle_list[owner_id].right_forearm.getRotation()
	let handpos=@box2d.b2Vec2(-@cmath.sin(rotate)*0.25+centerpos.getX(),-@cmath.cos(rotate)*0.25+centerpos.getY())

	self.weapon.gun_index+=1
	
	// 创建武器body（使用简化的box形状，并设置正确的碰撞组）
	let owner_collision_group = -(owner_id + 1000)
	let weapon_body_def = @box2d.b2BodyDef()
	weapon_body_def.setPosition(@box2d.b2Vec2(handpos.getX()+gun_body_shift.getX(), handpos.getY()+gun_body_shift.getY()))
	
	let weapon_box_def = @box2d.b2BoxDef()
	weapon_box_def.setExtents(@box2d.b2Vec2(0.2, 0.5))
	weapon_box_def.setDensity(1.0)
	weapon_box_def.setFriction(0.3)
	weapon_box_def.setRestitution(0.5)
	weapon_box_def.setGroupIndex(owner_collision_group)
	weapon_body_def.addShape(weapon_box_def.getBase())
	
	let gun:Gun=Gun::{
		id:self.weapon.gun_index,
		owner_id:owner_id,
		body:self.world.createBody(weapon_body_def),
		
		// 激光枪配置（科幻武器，极高速度）
		bullet_damage: 15.0,
		bullet_speed: 1000.0,  // 超高速度
		bullet_penetration: 5,
		bullet_targets: [Player],
		
		fire_rate: 5,  // 超快射速
		last_fire_frame: 0,

		gun_type: LaserRifle,
		img: ImageLoader::new(url),
		angle: 0.0,
		direction: 1,
		// 投掷状态
		is_thrown: false,
		throw_damage: 0.0,
		ammo: 100  // 激光枪100发子弹
	}
	gun.img.set_image_offset(7.0, -5.0)
	gun.img.set_image_size(70.0, 70.0)
	self.weapon.gun_list.push(gun)
	self.create_revolute_joint(self.particle_list[owner_id].right_forearm, gun.body, (handpos.getX(),handpos.getY()), enable_limit=false)|> ignore
}