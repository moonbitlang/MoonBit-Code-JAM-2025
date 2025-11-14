pub suberror ParticleControlConfigError String
pub suberror GameStateError String

extern "js" fn navigateTo(url: String) -> Unit =
	#| (url) => {
	#|   window.location.href = url;
	#| }

extern "js" fn reloadPage() -> Unit =
	#| () => {
	#|   window.location.reload();
	#| }

///| 全局变量：存储子弹贴图
pub(all) struct Game {
	world : @box2d.B2World
	weapon : WeaponManager
	render : &RenderTrait
	mut state : GameState
	mut particle_list:Array[Particle]
	mut particle_index:Int
	
	mut platform_list:Array[&PlatformTrait]
	mut platform_index:Int
	
	mut enemy_list : Array[&EnemyTrait?]
	
	mut bullet_list : Array[Bullet]
	mut item_list : Array[Item]
	mut frame_count : Int

	// 时间控制（两档：正常 / 1/4 速度）
	mut slow_mode : Bool

	// 窗口振动（屏幕抖动）
	mut shake_timer : Int
	mut shake_duration : Int
	mut shake_magnitude : Double

	// 玩家控制配置列表
	mut particle_control_configs : Array[ParticleControlConfig]

	// 自定义函数列表
	mut custom_functions : Array[&GameCustomFunctionTrait]
	
	// 自动瞄准配置列表（每个玩家一个配置）
	mut auto_aim_configs : Array[AutoAimConfig]

	mut animation_list : Array[&Animation]

	// 客制化的环境吸收子弹的实例
	custom_barrier : Array[@box2d.B2Body]
	
	// 音频管理器
	audio : AudioManager
	
	anchor : @box2d.B2Body

	// background
	background : &RenderAble

	// navigation guard: 防止在 GameOver 时每帧重复触发导航/刷新，导致递归或多次调用
	mut navigation_requested : Bool
	mut navigation_target : String?

	mut pre_key_p : Bool
	mut key_p_changed_count : Int
	
}

// 全局：开始界面时的模拟按键状态（由主入口设置）
let start_screen_active: Ref[Bool] = { val: false }
let start_simulated_keys: Ref[Array[Array[@p5js.KeyCode]]] = { val: Array::new() }
let start_sim_timers: Ref[Array[Int]] = { val: Array::new() }

fn keyDownMaybeSim(game: Game, p5: &@p5js.P5JS, player_index: Int, key: @p5js.KeyCode) -> Bool {

	game |> ignore

	if start_screen_active.val {
		if player_index >= 0 && player_index < start_simulated_keys.val.length() {
			let arr = start_simulated_keys.val[player_index]
			if arr.contains(key) {
				return true
			}
		}
		// 开始界面激活期间，除模拟按键外其它按键视为未按下
		return false
	}
	p5.keyIsDown(key)
}

pub trait GameCustomFunctionTrait {
	call_custom_function(self: Self, game: Game, p5: &@p5js.P5JS) -> Unit
	get_call_stage(self: Self) -> GameState
}

pub(all) enum AnimationState {
	NotStarted
	InProgress
	Completed
}

trait Animation {
	///| 动画更新函数，如果返回Completed则表示动画结束，反之则继续进行
	update(self: Self, world: &@box2d.World, p5: &@p5js.P5JS) -> AnimationState
}


pub(all) struct GameCustomFunction {
	stage : GameState
	func : (Game, &@p5js.P5JS) -> Unit
}

pub fn GameCustomFunction::new(
	stage : GameState,
	func : (Game, &@p5js.P5JS) -> Unit
) -> Self {
	GameCustomFunction::{
		stage,
		func
	}
}

pub impl GameCustomFunctionTrait for GameCustomFunction with call_custom_function(self, game: Game, p5: &@p5js.P5JS) -> Unit {
		(self.func)(game, p5)
}

pub impl GameCustomFunctionTrait for GameCustomFunction with get_call_stage(self) -> GameState {
		self.stage
}


///| 玩家控制配置结构体
pub(all) struct ParticleControlConfig {
	from_internet : Bool

	left_key : @p5js.KeyCode
	right_key : @p5js.KeyCode
	jump_key : @p5js.KeyCode
	shoot_key : @p5js.KeyCode
	faint_key : @p5js.KeyCode
	toggle_auto_aim_key : @p5js.KeyCode  // 切换自动瞄准的按键
	throw_weapon_key : @p5js.KeyCode     // 投掷武器的按键

	target_ip : String
	target_port : Int
	target_particle_index : Int
}

pub fn ParticleControlConfig::new(
	target_particle_index : Int,
	left_key~ : @p5js.KeyCode? = Some(KeyA),
	right_key~ : @p5js.KeyCode? = Some(KeyD),
	jump_key~ : @p5js.KeyCode? = Some(KeyW),
	faint_key~ : @p5js.KeyCode? = Some(KeyS),
	shoot_key~ : @p5js.KeyCode? = Some(KeyZ),
	toggle_auto_aim_key~ : @p5js.KeyCode? = Some(KeyT),  // 默认使用T键
	throw_weapon_key~ : @p5js.KeyCode? = Some(KeyF),     // 默认使用F键
	from_internet~ : Bool = false,
	target_ip~ : String? = None,
	target_port~ : Int? = None,
	) -> Self raise ParticleControlConfigError {

	if from_internet {
		// 检查必要参数
		if target_ip == None || target_port == None {
			println("Error: Missing target_ip or target_port for internet control.")
			raise ParticleControlConfigError("Missing target_ip or target_port for internet control.")
		}

		return ParticleControlConfig::{
			from_internet,
			left_key: @p5js.UnknownKey,
			right_key: @p5js.UnknownKey,
			jump_key: @p5js.UnknownKey,
			shoot_key: @p5js.UnknownKey,
			faint_key: @p5js.UnknownKey,
			toggle_auto_aim_key: @p5js.UnknownKey,
			throw_weapon_key: @p5js.UnknownKey,
			target_ip: target_ip.unwrap(),
			target_port: target_port.unwrap(),
			target_particle_index,
		}

	}

	if from_internet == false {
		// 检查必要参数
		if left_key == None || right_key == None || jump_key == None || shoot_key == None || toggle_auto_aim_key == None || throw_weapon_key == None {
			println("Error: Missing key bindings for local control.")
			raise ParticleControlConfigError("Missing key bindings for local control.")
		}
		return ParticleControlConfig::{
			from_internet,
			left_key: left_key.unwrap(),
			right_key: right_key.unwrap(),
			jump_key: jump_key.unwrap(),
			shoot_key: shoot_key.unwrap(),
			faint_key: faint_key.unwrap(),
			toggle_auto_aim_key: toggle_auto_aim_key.unwrap(),
			throw_weapon_key: throw_weapon_key.unwrap(),
			target_ip: "",
			target_port: 0,
			target_particle_index,
		}
	}

	raise ParticleControlConfigError("Unknown error in ParticleControlConfig::new")

}

///| 游戏状态
pub(all) enum GameState {
	GamePreparing
	GameRunning
	GamePaused
	GameOver
}derive(Eq)

///| 注册玩家控制配置，按键绑定或网络控制
pub fn Game::register_particle_control_config(
	self:Self,
	config: ParticleControlConfig
) -> Unit {
	self.particle_control_configs.push(config)
}

pub fn Game::register_custom_function(self:Self, func : &GameCustomFunctionTrait) -> Unit {
	self.custom_functions.push(func)
}

///| 注册自动瞄准配置
/// @param player_id 玩家索引
/// @param config 自动瞄准配置
pub fn Game::register_auto_aim_config(
	self : Self, 
	player_id : Int, 
	config : AutoAimConfig
) -> Unit {
	// 确保数组足够大
	while self.auto_aim_configs.length() <= player_id {
		self.auto_aim_configs.push(AutoAimConfig::new())
	}
	self.auto_aim_configs[player_id] = config
}

///| 获取玩家的自动瞄准配置
pub fn Game::get_auto_aim_config(self : Self, player_id : Int) -> AutoAimConfig? {
	if player_id >= 0 && player_id < self.auto_aim_configs.length() {
		return Some(self.auto_aim_configs[player_id])
	}
	return None
}

///| 切换自动瞄准开关
pub fn Game::toggle_auto_aim(self : Self, player_id : Int) -> Unit {
	match self.get_auto_aim_config(player_id) {
		Some(config) => config.set_enabled(not(config.enabled))
		None => ()
	}
}

fn Game::run_custom_functions(self:Self, stage:GameState, p5: &@p5js.P5JS) -> Unit {
	for func in self.custom_functions {
		if func.get_call_stage() == stage {
			func.call_custom_function(self, p5)
		}
	}
}

fn Game::state_machine_update(self:Self, p5: &@p5js.P5JS) -> Unit {
	self.render.clear_screen(self, p5)
	match self.state {
		GamePreparing => {
			self.prepare(p5)
		}
		GameRunning => {
			self.running(p5)
		}
		GamePaused => {
			self.pause(p5)
		}
		GameOver => {
			self.game_over(p5)
		}
	}
	self.render.render(self, p5)
}

fn Game::prepare(self:Self, p5: &@p5js.P5JS) -> Unit {
	self.run_custom_functions(GamePreparing, p5)
	self.state = GameRunning
}

fn Game::pause(self:Self, p5: &@p5js.P5JS) -> Unit {
	self.run_custom_functions(GamePaused, p5)

	p5.push()
	
	// 显示半透明背景
	p5.fillColorPara(0.0, Some(0.0), Some(0.0), Some(150.0))
	p5.noStroke()
	p5.rect(0.0, 0.0, Width, Height)
	
	// 显示暂停文字
	p5.textSizeSet(80.0)
	p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(255.0))
	p5.textAlign("center", Some("center"))
	p5.text("暂停中", Width / 2.0, Height / 2.0 - 100.0, None, None)
	
	// 显示提示文字
	p5.textSizeSet(30.0)
	p5.fillColorPara(200.0, Some(200.0), Some(200.0), Some(255.0))
	p5.text("按 P 键继续游戏", Width / 2.0, Height / 2.0, None, None)
	
	// 显示router提示
	p5.textSizeSet(24.0)
	p5.fillColorPara(150.0, Some(150.0), Some(150.0), Some(255.0))
	p5.text("按 1-5 载入对应关卡，R 刷新", Width / 2.0, Height / 2.0 + 80.0, None, None)
	
	p5.pop()

	if (self.key_p_changed_count % 4 == 0) {
		self.state = GameRunning
	}
	else{
		self.state = GamePaused
	}
}

fn Game::running(self:Self, p5: &@p5js.P5JS) -> Unit {

	self.frame_count += 1

	// 全局按键：
	// 按 8 触发屏幕振动；按 9 减速；按 0 加速。
	// 使用 frame_count 做简单节流，避免按下时瞬间多次变化。
	if p5.keyIsDown(@p5js.Digit8) {
		self.shake_timer = self.shake_duration
	}

	// 按 9 切换到 1/4 速（只在每 4 帧步进一次物理）
	// if p5.keyIsDown(@p5js.Digit9) {
	// 	if self.frame_count % 10 == 0 {
	// 		self.slow_mode = true
	// 		println("切换到 1/4 时间模式")
	// 	}
	// }

	// // 按 0 切换回正常速度
	// if p5.keyIsDown(@p5js.Digit0) {
	// 	if self.frame_count % 10 == 0 {
	// 		self.slow_mode = false
	// 		println("切换到正常时间模式")
	// 	}
	// }

	// 如果处于慢速模式，则只在每 4 的倍数帧执行完整的游戏更新逻辑（包括物理步进）
	let do_tick = true

	if do_tick {

		for platform in self.platform_list {
			platform.update(self)
		}

		for config in self.particle_control_configs {
			if !config.from_internet {
				self.particle_control(config, p5) catch{
					e => {
						println("Error in particle_control: \{e} in particle index \{config.target_particle_index}.")
					}
				}
			}
			// 网络控制待实现
		}

	// 更新子弹系统
	self.update_all_bullets()
	
	// 更新投掷武器系统
	self.update_thrown_weapons()
	
	// 更新物品系统
	self.update_all_items()

	// 更新敌人系统
	for enemy_opt in self.enemy_list {
		match enemy_opt {
			Some(enemy) => enemy.update(self)
			None => ()
		}
	}
	
	// 更新自动瞄准系统（为每个玩家更新目标）
	for i = 0; i < self.auto_aim_configs.length(); i = i + 1 {
		self.update_auto_aim_target(i, self.auto_aim_configs[i])
	}
	
	// 每60帧清理一次
	if self.frame_count % 60 == 0 {
		self.cleanup_bullets()
		self.cleanup_items()
	}
	
	// 保证玩家血量不低于0
	for particle in self.particle_list {
		if particle.control.health < 0 {
			particle.control.health = 0
		}
	}

		// 更新敌人系统
		for enemy_opt in self.enemy_list {
			match enemy_opt {
				Some(enemy) => enemy.update(self)
				None => ()
			}
		}
		
		// 更新自动瞄准系统（为每个玩家更新目标）
		for i = 0; i < self.auto_aim_configs.length(); i = i + 1 {
			self.update_auto_aim_target(i, self.auto_aim_configs[i])
		}
		
		// 每60帧清理一次（基于全局 frame_count）
		if self.frame_count % 60 == 0 {
			self.cleanup_bullets()
			self.cleanup_items()
		}
			
		for i in self.weapon.gun_list {
			maintain_rotation(i.body, 0, kp=2.0, kd=2.0)
		}
		// 物理步进
	}
	
	
	
	if(self.slow_mode){
			println("1/4 速模式：物理步进")
		self.world.step(1.0/60.0/4.0, 4)
		}
		else{
			self.world.step(1.0/60.0, 4)
		}
		self.run_custom_functions(GameRunning, p5)

		// 更新动画系统
		self.update_animations(p5)

	// 振动计时器每帧递减（即使在慢速下也要每帧表现抖动）
	if self.shake_timer > 0 {
		self.shake_timer = self.shake_timer - 1
	}

	// 判断玩家是否掉出屏幕
	for particle in self.particle_list {
		if self.check_particle_out_of_bounds(particle) {
			particle.control.health = 0  // 掉出屏幕后血量归0
		}
	}

	// 如果有玩家死亡，则切换到游戏结束状态
	for i in self.particle_list {
		if i.control.health <= 0 {
			self.state = GameOver
			return
		}
	}

	if (self.key_p_changed_count % 4 != 0) {
		self.state = GamePaused
	}
	else{
		self.state = GameRunning
	}
}

pub fn Game::check_particle_out_of_bounds(self:Self, particle: Particle) -> Bool {

	self |> ignore

	let body_aabb = get_entity_aabb(particle.get_all_bodies())

	let (min_x, max_y) = world_to_screen(body_aabb.getminVertex().getX(), body_aabb.getminVertex().getY())
	let (max_x, min_y) = world_to_screen(body_aabb.getmaxVertex().getX(), body_aabb.getmaxVertex().getY())

	if max_y < 0.0 || min_y > Height || max_x < 0.0 || min_x > Width {
		println("max_y : \{max_y}, min_y : \{min_y}, max_x : \{max_x}, min_x : \{min_x}")
		println("Height : \{Height}, Width : \{Width}")
		return true
	}

	false
}

fn Game::game_over(self:Self, p5: &@p5js.P5JS) -> Unit {
	self.run_custom_functions(GameOver, p5)

	// 画一个简单的游戏结束画面
	// 找出获胜者（血量大于0的玩家）
	let mut winner_index = -1
	for i = 0; i < self.particle_list.length(); i = i + 1 {
		if self.particle_list[i].control.health > 0 {
			winner_index = i
			break
		}
	}

	p5.push()
	
	// 显示半透明背景
	p5.fillColorPara(0.0, Some(0.0), Some(0.0), Some(180.0))
	p5.noStroke()
	p5.rect(0.0, 0.0, Width, Height)
	
	// 显示游戏结束文字
	p5.textSizeSet(80.0)
	p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(255.0))
	p5.textAlign("center", Some("center"))
	p5.text("游戏结束", Width / 2.0, Height / 2.0 - 80.0, None, None)
	
	// 显示获胜者
	if winner_index >= 0 {
		p5.textSizeSet(60.0)
		p5.fillColorPara(255.0, Some(215.0), Some(0.0), Some(255.0))  // 金色
		p5.text("玩家 \{winner_index} 获胜!", Width / 2.0, Height / 2.0, None, None)
	} else {
		p5.textSizeSet(60.0)
		p5.fillColorPara(200.0, Some(200.0), Some(200.0), Some(255.0))
		p5.text("平局", Width / 2.0, Height / 2.0, None, None)
	}
	
	// 显示提示文字
	p5.textSizeSet(30.0)
	p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(255.0))
	p5.text("按 1-5 载入对应关卡，R 刷新", Width / 2.0, Height / 2.0 + 80.0, None, None)
	p5.pop()

	self.state = GameOver
}

///| 重构后的玩家移动函数
fn Game::particle_control(self:Self, control_config: ParticleControlConfig, p : &@p5js.P5JS) -> Unit raise{

	let particle_index = control_config.target_particle_index
	if particle_index < 0 || particle_index >= self.particle_list.length() {
		println("Error: Invalid target_particle_index \{particle_index} in particle_control.")
		raise GameStateError("Invalid target_particle_index in particle_control. want to control \{particle_index}, but only \{self.particle_list.length()} particles exist.")
	}
	let particle = self.particle_list[particle_index]

	if control_config.from_internet {
		raise GameStateError("Internet control not implemented yet.")
	}

	// 检查自动瞄准切换键（使用cooldown避免重复触发）
	if keyDownMaybeSim(self, p, particle_index, control_config.toggle_auto_aim_key) {
		if self.frame_count % 30 == 0 {  // 每半秒最多切换一次
			self.toggle_auto_aim(particle_index)
			match self.get_auto_aim_config(particle_index) {
				Some(config) => {
					if config.enabled {
						println("玩家 \{particle_index}: 自动瞄准已启用")
					} else {
						println("玩家 \{particle_index}: 自动瞄准已禁用")
					}
				}
				None => ()
			}
		}
	}
	
	// 检查投掷武器键（使用cooldown避免重复触发）
	if keyDownMaybeSim(self, p, particle_index, control_config.throw_weapon_key) {
		if self.frame_count % 30 == 0 {  // 每半秒最多投掷一次
			for gun in self.weapon.gun_list {
				if gun.owner_id == particle_index && not(gun.is_thrown) {
					// 获取投掷角度（使用自动瞄准）
					let throw_angle = match self.get_auto_aim_config(particle_index) {
						Some(config) => {
							if config.enabled {
								match self.get_auto_aim_angle(particle_index, config) {
									Some(angle) => angle
									None => {
										// 没有目标时使用玩家朝向
										let holder = self.particle_list[particle_index]
										if holder.control.walk_direction > 0.0 { 0.0 } else { 3.14159 }
									}
								}
							} else {
								// 未启用自动瞄准时使用玩家朝向
								let holder = self.particle_list[particle_index]
								if holder.control.walk_direction > 0.0 { 0.0 } else { 3.14159 }
							}
						}
						None => {
							// 没有配置时使用玩家朝向
							let holder = self.particle_list[particle_index]
							if holder.control.walk_direction > 0.0 { 0.0 } else { 3.14159 }
						}
					}
					
					self.throw_weapon(gun, throw_angle)
					println("玩家 \{particle_index} 投掷武器，角度: \{throw_angle}")
					break
				}
			}
		}
	}
	
	// 自动拾取附近的武器（每半秒检测一次）
	if self.frame_count % 30 == 0 {  // 每半秒最多拾取一次
		// 检查玩家是否已有武器
		let has_weapon = {
			let mut found = false
			for gun in self.weapon.gun_list {
				if gun.owner_id == particle_index && not(gun.is_thrown) {
					found = true
					break
				}
			}
			found
		}
		
		// 如果玩家没有武器，尝试拾取附近的武器
		if not(has_weapon) {
			let player_pos = particle.torso.getCenterPosition()
			let player_x = player_pos.getX()
			let player_y = player_pos.getY()
			
			for gun_idx = 0; gun_idx < self.weapon.gun_list.length(); gun_idx = gun_idx + 1 {
				let gun = self.weapon.gun_list[gun_idx]
				if gun.is_thrown && gun.ammo > 0 {
					let gun_pos = gun.body.getCenterPosition()
					let dx = gun_pos.getX() - player_x
					let dy = gun_pos.getY() - player_y
					let distance = @cmath.sqrt(dx * dx + dy * dy)
					
					// 检查武器速度（只能拾取慢速或静止的武器）
					let velocity = gun.body.getLinearVelocity()
					let speed = @cmath.sqrt(velocity.getX() * velocity.getX() + velocity.getY() * velocity.getY())
					
					// 如果距离小于2.0且速度较慢，自动拾取武器
					if distance < 2.0 && speed < 5.0 {
						println("玩家 \{particle_index} 自动拾取了武器 \{gun_idx}，剩余子弹: \{gun.ammo}")
						
						// 销毁武器的自由body
						self.world.destroyBody(gun.body)
						
						// 重新创建绑定到玩家的武器body
						let gun_body_def = @box2d.b2BodyDef()
						gun_body_def.setPosition(player_pos)
						gun_body_def.setRotation(0.0)
						gun_body_def.setLinearDamping(0.0)
						gun_body_def.setAngularDamping(0.0)
						
						let gun_box_def = @box2d.b2BoxDef()
						gun_box_def.setExtents(@box2d.b2Vec2(0.5, 0.15))
						gun_box_def.setDensity(0.5)
						gun_box_def.setFriction(0.1)
						gun_box_def.setRestitution(0.1)
						gun_box_def.setGroupIndex(-(particle_index + 1000))  // 玩家的碰撞组
						gun_body_def.addShape(gun_box_def.getBase())
						
						let new_body = self.world.createBody(gun_body_def)
						gun.body = new_body
						gun.is_thrown = false
						gun.owner_id = particle_index  // 更新武器所有者为拾取者
						
						// 播放拾取音效
						self.audio.play_sound(BulletHit)
						break  // 拾取后退出循环
					}
				}
			}
		}
	}
	
	if keyDownMaybeSim(self, p, particle_index, control_config.shoot_key) {
		for gun in self.weapon.gun_list {
			if gun.owner_id == particle_index {
				// 检查武器是否已被投掷或没有子弹
				if gun.is_thrown {
					break  // 已投掷的武器不能射击
				}
				if gun.ammo <= 0 {
					println("武器没有子弹了！")
					break
				}
				
				// 检查是否启用自动瞄准
				match self.get_auto_aim_config(particle_index) {
					Some(config) => {
						if config.enabled {
							// 使用自动瞄准角度攻击
							match self.get_auto_aim_angle(particle_index, config) {
								Some(angle) => gun.attack_at_angle(self, angle)
								None => gun.attack(self)  // 没有目标时使用默认攻击
							}
						} else {
							gun.attack(self)  // 未启用自动瞄准时使用默认攻击
						}
					}
					None => gun.attack(self)  // 没有配置时使用默认攻击
				}
				break
			}
		}
		// 近战武器
		for sword in self.weapon.sword_list {
			if sword.owner_id == particle_index {
				sword.attack(self)
				break
			}
		}
	}
	if(keyDownMaybeSim(self, p, particle_index, control_config.faint_key)){
		particle.torso.applyForce(@box2d.b2Vec2(0.0, -100.0), particle.torso.getCenterPosition())
		return
	}
	if(keyDownMaybeSim(self, p, particle_index, control_config.left_key)){
		self.particle_walk(particle,-1)
	}
	else if(keyDownMaybeSim(self, p, particle_index, control_config.right_key)){
		self.particle_walk(particle,1)
	}
	else if(!particle.control.jump_state){
		self.particle_stand(particle)
	}
	if(keyDownMaybeSim(self, p, particle_index, control_config.jump_key)){
		if particle.control.jump_cooldown <= 0 {
			if !particle.control.jump_state { // 如果不在跳跃状态，则开始跳跃
				particle.control.jump_state = true
				particle.control.jump_frame_count = 0  // 重置跳跃帧计数
				particle.control.jump_cooldown = j_dur_A + j_dur_B + j_dur_C  // 总共跳跃帧数
			}
		}
	}
	if(particle.control.jump_cooldown > 0){
		particle.control.jump_cooldown -= 1
	}
	self.particle_jump(particle,0)
	for gun in self.weapon.gun_list {
		if gun.owner_id == particle_index {
			gun.direction = particle.control.walk_direction
			println("\{gun.angle}")
			if(gun.angle<-1.57){
				gun.direction = -1.0
			}
			else {
				gun.direction = 1.0
			}
			maintain_rotation(gun.body, gun.angle, kp=20.0, kd=2.0)
			break
		}
	}
}
pub const Pi : Double = 3.141592653589793

pub fn Game::create_static_box(
	self:Self,
	position: (Double, Double),
	size: (Double, Double),
)-> @box2d.B2Body{
	let box_def = @box2d.b2BoxDef()
	box_def.setExtents(@box2d.b2Vec2(size.0, size.1))
	box_def.setDensity(0.0)
	let body_def = @box2d.b2BodyDef()
	body_def.setPosition(@box2d.b2Vec2(position.0, position.1))
	body_def.addShape(box_def.getBase())
	body_def.setRotation(0.0)
	body_def.setAllowSleep(false)
	let body = self.world.createBody(body_def)
	body
}

pub fn create_game(
	render~: &RenderTrait = DefaultRender::{},
	background~: &RenderAble = BackgroundImage::new(None)
	) -> Game{
	let world = create_world()
	
	let weapon=create_weapon_manager()
	
	let anchor_box_def = @box2d.b2BoxDef()
	anchor_box_def.setExtents(@box2d.b2Vec2(0.01, 0.01))
	anchor_box_def.setDensity(0.0)
	let anchor_body_def = @box2d.b2BodyDef()
	anchor_body_def.setPosition(@box2d.b2Vec2(0.0, 0.0))
	anchor_body_def.addShape(anchor_box_def.getBase())
	anchor_body_def.setRotation(0.0)
	anchor_body_def.setAllowSleep(false)
	let anchor = world.createBody(anchor_body_def)
	
	// 创建并初始化音频管理器
	let audio = AudioManager::new()
	audio.init_audio_configs()
	
	let game = Game::{
		world,
		weapon,
		render,
			state: GameRunning,
		particle_list:Array::new(),
		particle_index:0,
		platform_list:Array::new(),
		platform_index:0,
		enemy_list : Array::new(),
		bullet_list : Array::new(),
		item_list : Array::new(),
			frame_count : 0,

			// 默认正常速度
			slow_mode: false,

			// shake defaults
			shake_timer: 0,
			shake_duration: 15,
			shake_magnitude: 8.0,
		anchor,
		particle_control_configs : Array::new(),
		custom_functions : Array::new(),
		auto_aim_configs : Array::new(),
		animation_list : Array::new(),
		custom_barrier : Array::new(),
		audio,
		background : background,
		navigation_requested: false,
		navigation_target: None,
		pre_key_p: false,
		key_p_changed_count: 0,
	}
	
	game
}

pub fn Game::create_dynamic_box(
	self:Self,
	position: (Double, Double),
	size: (Double, Double),
	density?: Double=1.0,
	friciton?: Double=0.2,
	groupindex?: Int=-1
)-> @box2d.B2Body{
	let box_def = @box2d.b2BoxDef()
	box_def.setExtents(@box2d.b2Vec2(size.0, size.1))
	box_def.setDensity(density)
	box_def.setFriction(friciton)
	box_def.setGroupIndex(groupindex)
	let body_def = @box2d.b2BodyDef()
	body_def.setPosition(@box2d.b2Vec2(position.0, position.1))
	body_def.addShape(box_def.getBase())
	body_def.setRotation(0.0)
	body_def.setAllowSleep(false)
	let body = self.world.createBody(body_def)
	body
}
pub fn Game::create_revolute_joint(
	self: Self,
	body_a: @box2d.B2Body,
	body_b: @box2d.B2Body,
	anchor: (Double, Double),
	enable_limit?: Bool=false,
	lower_angle?: Double=0.0,
	upper_angle?: Double=0.0
)-> @box2d.B2Joint{
	let joint_def = @box2d.b2RevoluteJointDef()
	joint_def.setBody1(body_a)
	joint_def.setBody2(body_b)
	joint_def.setAnchorPoint(@box2d.b2Vec2(anchor.0, anchor.1))
	joint_def.setEnableLimit(enable_limit)
	joint_def.setLowerAngle(lower_angle)
	joint_def.setUpperAngle(upper_angle)
	let joint = self.world.createJoint(joint_def.getBase())
	joint
}
pub fn Game::create_prismatic_joint(
	self :Self,
	body_a: @box2d.B2Body,
	body_b: @box2d.B2Body,
	anchor: (Double, Double),
	axis: @box2d.B2Vec2,
	enable_limit?: Bool=false,
	lower_translation?: Double=-10000.0,
	upper_translation?: Double=10000.0
)-> @box2d.B2Joint{
	let joint_def = @box2d.b2PrismaticJointDef()
	joint_def.setBody1(body_a)
	joint_def.setBody2(body_b)
	joint_def.setAnchorPoint(@box2d.b2Vec2(anchor.0, anchor.1))
	joint_def.setEnableLimit(enable_limit)
	joint_def.setLowerTranslation(lower_translation)
	joint_def.setUpperTranslation(upper_translation)
	joint_def.setAxis(axis)
	let joint = self.world.createJoint(joint_def.getBase())
	joint
}
pub fn Game::is_contact(self:Self,a:@box2d.B2Body, b:@box2d.B2Body, strict~: Bool = false)->Bool{
	let contact_list=self.world.getContactList()
	for contact in contact_list {
		let bodyA=contact.getShape1().getBody()
		let bodyB=contact.getShape2().getBody()
		if (equals(bodyA, a) && equals(bodyB, b)) || (equals(bodyA, b) && equals(bodyB, a)) {
			if strict {
				if contact.getManifoldCount() > 0 {
					return true
				}
			}
			else{
				return true
			}
		}
	}
	false
}

pub fn Game::get_contact_point(self:Self,a:@box2d.B2Body, b:@box2d.B2Body)-> Array[@box2d.B2Vec2] {
	let contact_list=self.world.getContactList()
	let points = []
	for contact in contact_list {
		let bodyA=contact.getShape1().getBody()
		let bodyB=contact.getShape2().getBody()
		if (equals(bodyA, a) && equals(bodyB, b)) || (equals(bodyA, b) && equals(bodyB, a)) {
			for i in contact.getManifolds(){
				for e in i.getPoints(){
					points.push(e.getPosition())
				}
			}
		}
	}
	points
}

pub fn Game::who_shape_belongs_to(self:Self, shape:@box2d.B2Shape) -> (Int) {
	let father = shape.getBody()
	for i = 0; i < self.particle_list.length(); i = i + 1 {
		let particle = self.particle_list[i]

		if equals(particle.head, father) {
			return i
		}
		if equals(particle.left_arm, father) {
			return i
		}
		if equals(particle.right_arm, father) {
			return i
		}
		if equals(particle.torso, father) {
			return i
		}
		if equals(particle.left_forearm, father) {
			return i
		}
		if equals(particle.right_forearm, father) {
			return i
		}
		if equals(particle.right_thigh, father) {
			return i
		}
		if equals(particle.right_shank, father) {
			return i
		}
		if equals(particle.left_thigh, father) {
			return i
		}
		if equals(particle.left_shank, father) {
			return i
		}
	}
	return -1
}

///| 投掷武器
/// 解除武器与玩家的连接，赋予武器初速度，设置投掷伤害
pub fn Game::throw_weapon(self : Self, gun : Gun, angle : Double) -> Unit {
	// 标记为已投掷
	gun.is_thrown = true
	
	// 获取武器当前位置
	let pos = gun.body.getCenterPosition()
	
	// 销毁武器body，重新创建一个自由的body
	let old_collision_group = -(gun.owner_id + 1000)
	self.world.destroyBody(gun.body)
	
	// 创建新的武器body（不与玩家连接）
	let weapon_body_def = @box2d.b2BodyDef()
	weapon_body_def.setPosition(@box2d.b2Vec2(pos.getX(), pos.getY()))
	weapon_body_def.setRotation(angle)
	weapon_body_def.setLinearDamping(0.1)
	weapon_body_def.setAngularDamping(0.5)
	
	// 创建武器形状
	let weapon_box_def = @box2d.b2BoxDef()
	weapon_box_def.setExtents(@box2d.b2Vec2(0.5, 0.15))
	weapon_box_def.setDensity(2.0)
	weapon_box_def.setFriction(0.3)
	weapon_box_def.setRestitution(0.3)
	weapon_box_def.setGroupIndex(old_collision_group)  // 保持原碰撞组
	weapon_body_def.addShape(weapon_box_def.getBase())
	
	let new_body = self.world.createBody(weapon_body_def)
	gun.body = new_body
	
	// 计算投掷速度（初速度足以秒杀）
	let throw_speed = 300.0  // 极高的初速度，足以快速击中目标
	let vx = throw_speed * @cmath.cos(angle)
	let vy = throw_speed * @cmath.sin(angle)
	
	// 设置武器速度
	gun.body.setLinearVelocity(@box2d.b2Vec2(vx, vy))
	gun.body.setAngularVelocity(10.0)  // 添加旋转效果
	
	// 设置投掷伤害（基于速度）
	gun.throw_damage = 300.0  // 初始伤害足以秒杀
	
	println("武器已投掷，初速度: \{throw_speed}, 角度: \{angle}, 伤害: \{gun.throw_damage}")
}

///| 更新投掷武器系统
/// 检测投掷武器与玩家的碰撞，造成伤害
/// 处理武器销毁
fn Game::update_thrown_weapons(self : Self) -> Unit {
	let weapons_to_remove = Array::new()  // 记录需要移除的武器索引
	
	for gun_idx = 0; gun_idx < self.weapon.gun_list.length(); gun_idx = gun_idx + 1 {
		let gun = self.weapon.gun_list[gun_idx]
		if not(gun.is_thrown) {
			continue
		}
		
		// 检查子弹数量，如果为0则标记为待销毁
		if gun.ammo <= 0 {
			println("武器 \{gun_idx} 没有子弹了，将被销毁")
			weapons_to_remove.push(gun_idx)
			continue
		}
		
		// 获取武器当前速度
		let velocity = gun.body.getLinearVelocity()
		let speed = @cmath.sqrt(velocity.getX() * velocity.getX() + velocity.getY() * velocity.getY())
		
		// 更新投掷伤害（基于速度，速度越快伤害越高）
		gun.throw_damage = speed * 2.0  // 伤害与速度成正比
		
		// 检测与玩家的碰撞
		let gun_pos = gun.body.getCenterPosition()
		let gun_x = gun_pos.getX()
		let gun_y = gun_pos.getY()
		
		for i = 0; i < self.particle_list.length(); i = i + 1 {
			// 跳过武器原主人
			if i == gun.owner_id {
				continue
			}
			
			let particle = self.particle_list[i]
			let torso_pos = particle.torso.getCenterPosition()
			let dx = gun_x - torso_pos.getX()
			let dy = gun_y - torso_pos.getY()
			let distance = @cmath.sqrt(dx * dx + dy * dy)
			
			// 如果距离小于碰撞阈值，造成伤害
			if distance < 1.0 {
				let damage = gun.throw_damage.to_int()
				particle.control.health -= damage
				println("投掷武器击中玩家 \{i}，造成 \{damage} 伤害，剩余HP: \{particle.control.health}")
				
				// 播放击中音效
				self.audio.play_sound(BulletHit)
				
				// 检查玩家是否死亡
				if particle.control.health <= 0 {
					particle.control.health = 0
					self.audio.play_sound(PlayerDeath)
					println("玩家 \{i} 被投掷武器击杀！")
				}
				
				// 武器被击中后减速
				let reduced_velocity = @box2d.b2Vec2(
					velocity.getX() * 0.3,
					velocity.getY() * 0.3
				)
				gun.body.setLinearVelocity(reduced_velocity)
				gun.body.setAngularVelocity(gun.body.getAngularVelocity() * 0.5)
			}
		}
	}
	
	// 从后向前删除武器，避免索引错乱
	for i = weapons_to_remove.length() - 1; i >= 0; i = i - 1 {
		let gun_idx = weapons_to_remove[i]
		let gun = self.weapon.gun_list[gun_idx]
		self.world.destroyBody(gun.body)
		let _ = self.weapon.gun_list.remove(gun_idx)
		println("武器 \{gun_idx} 已被销毁")
	}
}

fn Game::update_animations(self:Self, p5: &@p5js.P5JS) -> Unit {

	let animations_state = Array::new()
	for animation in self.animation_list {
		let state = animation.update(self.world, p5)
		animations_state.push(state)
	}
	// 移除已完成的动画
	let rest_animations = Array::new()
	for i = 0; i < self.animation_list.length(); i = i + 1 {
		match animations_state[i] {
			AnimationState::Completed => ()
			AnimationState::InProgress => rest_animations.push(self.animation_list[i])
			AnimationState::NotStarted => rest_animations.push(self.animation_list[i])
		}
	}
	self.animation_list = rest_animations
}

pub fn Game::add_animation(self:Self, animation: &Animation) -> Unit {
	self.animation_list.push(animation)
}

///| 播放关卡BGM的辅助函数
pub fn Game::play_level_bgm(self:Self, level: Int) -> Unit {
	match level {
		1 => self.audio.play_bgm(AudioEventType::BgmLevel1)
		2 => self.audio.play_bgm(AudioEventType::BgmLevel2)
		3 => self.audio.play_bgm(AudioEventType::BgmLevel3)
		4 => self.audio.play_bgm(AudioEventType::BgmLevel4)
		5 => self.audio.play_bgm(AudioEventType::BgmLevel5)
		_ => {
			println("警告: 未知关卡 \{level}，播放默认菜单音乐")
			self.audio.play_bgm(AudioEventType::BgmMenu)
		}
	}
}

// 开始游戏运行，不阻塞
pub fn Game::start_run(self:Self) -> Unit {
	self.state = GamePreparing
	let draw = (p5: @p5js.P5Instance) => {
		if p5.keyIsDown(@p5js.KeyP) != self.pre_key_p {
			self.key_p_changed_count += 1
		}

		self.state_machine_update(p5)

		self.pre_key_p = p5.keyIsDown(@p5js.KeyP)
	}
	let preload = (p5: @p5js.P5Instance) => {
		p5 |> ignore
    	register_end_router(self)
			register_stop_router(self)
		// 预加载图片资源
		// 注册音频控制
		register_audio_controls(self)

	}

	getP5Instance(draw, preload) |> ignore
}