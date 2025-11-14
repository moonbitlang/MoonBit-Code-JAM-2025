let knee_angle : Double = 63.0 / 180.0 * Pi
let thigh_angle_forward = 0.8
let thigh_angle_backward = -0.5
let elbow_angle : Double = 63.0 / 180.0 * Pi
let arm_angle_forward = 0.5
let arm_angle_backward = -0.5
let knee_angle_bend_max : Double = -2.50 // 最大弯曲角度 (前10帧)
// let knee_angle_straight : Double = 0.0 // 最大伸直角度 (最后3帧)
let j_thigh_angle_forward : Double = 1.0 
let j_thigh_angle_backward : Double = 0.3
let j_arm_angle_backward : Double = -0.3
let j_dur_A : Int = 20 // 前10帧膝盖弯曲
let j_dur_B : Int = 1 // 后3帧膝盖伸直
let j_dur_C : Int = 10 // 后3帧膝盖伸直
let jump_force : Double = 200.0 // 跳跃力大小

pub(all) struct ParticleControl{
	mut walk_state : Bool
	mut walk_direction : Double
	mut walk_cooldown : Int
	mut jump_cooldown : Int
	mut jump_state : Bool
	mut jump_frame_count : Int
	mut health : Int
	mut faint_state :Bool
	mut faint_resistance : Int
	mut stand_cooldown : Int
}
pub(all) struct Particle{
	torso : @box2d.B2Body
	head : @box2d.B2Body
	left_thigh : @box2d.B2Body
	right_thigh : @box2d.B2Body
	left_shank: @box2d.B2Body
	right_shank: @box2d.B2Body
	thigh_left_joint : @box2d.B2Joint
	thigh_right_joint : @box2d.B2Joint
	knee_left_joint : @box2d.B2Joint
	knee_right_joint : @box2d.B2Joint
	neck_joint : @box2d.B2Joint
	left_forearm : @box2d.B2Body
	right_forearm : @box2d.B2Body
	left_arm : @box2d.B2Body
	right_arm : @box2d.B2Body
	arm_left_joint : @box2d.B2Joint
	arm_right_joint : @box2d.B2Joint
	forearm_left_joint : @box2d.B2Joint
	forearm_right_joint : @box2d.B2Joint
	index : Int
	control : ParticleControl
}

pub fn Particle::get_all_bodies(self: Particle) -> Array[@box2d.B2Body] {
	let body_list = []
	body_list.push(self.torso)
	body_list.push(self.head)
	body_list.push(self.left_thigh)
	body_list.push(self.right_thigh)
	body_list.push(self.left_shank)
	body_list.push(self.right_shank)
	body_list.push(self.left_arm)
	body_list.push(self.right_arm)
	body_list.push(self.left_forearm)
	body_list.push(self.right_forearm)
	body_list
}

///|
/// @todo Implement rendering for Particle
/// @chx
pub impl RenderAble for Particle with get_render(self: Particle){
	Some(fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {

		world |> ignore

		let to_screen = fn(x: Double, y: Double) -> (Double, Double) {
			world_to_screen(x, y)
		}

		let ws = fn(len: Double) -> Double {
			world_to_screen_size(len)
		}
		let draw_body_line = fn(body: @box2d.B2Body, half_w: Double, half_h: Double) -> Unit {
			half_w |> ignore
			let pos = body.getCenterPosition()
			let angle = body.getRotation()

			let sin_a = @cmath.sin(angle)
			let cos_a = @cmath.cos(angle)

			let x1 = pos.getX() - sin_a * half_h
			let y1 = pos.getY() + cos_a * half_h
			let x2 = pos.getX() + sin_a * half_h
			let y2 = pos.getY() - cos_a * half_h

			let (sx1, sy1) = to_screen(x1, y1)
			let (sx2, sy2) = to_screen(x2, y2)

			p.line(sx1, sy1, sx2, sy2)
		}

		let head_pos = self.head.getCenterPosition()
		let (hx, hy) = to_screen(head_pos.getX(), head_pos.getY())
		let r = ws(0.5)
		p.fillColorPara(255.0, Some(255.0), Some(255.0), Some(255.0))
		p.circle(hx, hy, r)
		p.noFill()

		draw_body_line(self.torso, 0.25, 0.75)
		draw_body_line(self.left_thigh, 0.15, 0.5)
		draw_body_line(self.right_thigh, 0.15, 0.5)
		draw_body_line(self.left_shank, 0.15, 0.5)
		draw_body_line(self.right_shank, 0.15, 0.5)
		draw_body_line(self.left_arm, 0.15, 0.5)
		draw_body_line(self.right_arm, 0.15, 0.5)
		draw_body_line(self.left_forearm, 0.15, 0.35)
		draw_body_line(self.right_forearm, 0.15, 0.35)
	})
}

fn Game::create_particle_control(
	self:Self,
	walk_state?: Bool=false,
	walk_direction?: Double=1.0,
	walk_cooldown?: Int=0,
	jump_cooldown?: Int=-1,
	jump_state?: Bool=false,
	jump_frame_count?: Int=0,
	health?: Int=100,
	faint_state?:Bool=false,
	faint_resistance?: Int=0
) -> ParticleControl{
	self |> ignore
	ParticleControl::{
		walk_state,
		walk_direction,
		walk_cooldown,
		jump_cooldown,
		jump_state,
		jump_frame_count,
		health,
		faint_state,
		faint_resistance,
		stand_cooldown : 0
	}
}
pub fn Game::create_particle(
	self:Self,
	position: (Double, Double)
)-> Particle {
	self.particle_index+=1
	let index= self.particle_index-1
	// 每个玩家使用唯一的碰撞组：-(index + 1000)
	// 这样玩家0用-1000，玩家1用-1001，玩家2用-1002，等等
	// 同组内的物体不会相互碰撞（包括玩家自己的身体部位、武器和子弹）
	let player_collision_group = -(index + 1000)
	let torso = self.create_dynamic_box((position.0, position.1+0.2),(0.25,1.0),density=1.0,groupindex=player_collision_group)
	let head = self.create_dynamic_box((position.0, position.1+1.4),(0.2,0.25),density=1.0,groupindex=player_collision_group)
	let left_thigh = self.create_dynamic_box((position.0, position.1-1),(0.15,0.55),density=1.0,groupindex=player_collision_group)
	let right_thigh = self.create_dynamic_box((position.0, position.1-1),(0.15,0.55),density=1.0,groupindex=player_collision_group)
	let left_shank = self.create_dynamic_box((position.0, position.1-2),(0.15,0.55),density=1.0,groupindex=player_collision_group,friciton=0.2)
	let right_shank = self.create_dynamic_box((position.0, position.1-2),(0.15,0.55),density=1.0,groupindex=player_collision_group,friciton=0.2)
	let neck_joint = self.create_revolute_joint(torso, head, (position.0, position.1+1.0),enable_limit=true,lower_angle=0.0,upper_angle=0.0)
	let thigh_left_joint = self.create_revolute_joint(torso, left_thigh, (position.0, position.1-0.5),enable_limit=true,lower_angle=-1.0,upper_angle=1.0)
	let thigh_right_joint = self.create_revolute_joint(torso, right_thigh, (position.0, position.1-0.5),enable_limit=true,lower_angle=-1.0,upper_angle=1.0)
	let knee_left_joint = self.create_revolute_joint(left_thigh, left_shank, (position.0, position.1-1.5),enable_limit=true,lower_angle=-1.3,upper_angle=1.3)
	let knee_right_joint = self.create_revolute_joint(right_thigh, right_shank, (position.0, position.1-1.5),enable_limit=true,lower_angle=-1.3,upper_angle=1.3)
	let left_arm = self.create_dynamic_box((position.0, position.1+0.5),(0.15,0.52),density=1.0,groupindex=player_collision_group)
	let right_arm = self.create_dynamic_box((position.0, position.1+0.5),(0.15,0.52),density=1.0,groupindex=player_collision_group)
	let left_forearm = self.create_dynamic_box((position.0, position.1-0.3),(0.15,0.52),density=1.0,groupindex=player_collision_group)
	let right_forearm = self.create_dynamic_box((position.0, position.1-0.3),(0.15,0.52),density=1.0,groupindex=player_collision_group)
	let arm_left_joint = self.create_revolute_joint(torso, left_arm, (position.0, position.1+1),enable_limit=true,lower_angle=-1.0,upper_angle=1.0)
	let arm_right_joint = self.create_revolute_joint(torso, right_arm, (position.0, position.1+1),enable_limit=true,lower_angle=-1.0,upper_angle=1.0)
	let forearm_left_joint = self.create_revolute_joint(left_arm, left_forearm, (position.0, position.1),enable_limit=true,lower_angle=-1.3,upper_angle=1.3)
	let forearm_right_joint = self.create_revolute_joint(right_arm, right_forearm, (position.0, position.1),enable_limit=true,lower_angle=-1.3,upper_angle=1.3)
	let tmp=Particle::{
		torso,
		head,
		left_thigh,
		right_thigh,
		left_shank,
		right_shank,
		thigh_left_joint,
		thigh_right_joint,
		knee_left_joint,
		knee_right_joint,
		neck_joint,
		left_forearm,
		right_forearm,
		left_arm,
		right_arm,
		arm_left_joint,
		arm_right_joint,
		forearm_left_joint,
		forearm_right_joint,
		index,
		control: self.create_particle_control()
	}
	self.particle_list.push(tmp)
	tmp
}
fn Game::which_platform(self:Self, particle : Particle) -> Int {
  for platform in self.platform_list {
    if self.is_contact(particle.left_shank, platform.get_body()) {
      return platform.get_index()
    }
    if self.is_contact(particle.right_shank, platform.get_body()) {
      return platform.get_index()
    }
  }
  -1
}
fn Game::particle_walk(self:Self,particle : Particle, direction : Double) -> Unit {
	particle.control.walk_direction = direction
	if !particle.control.jump_state {
		if particle.control.walk_state {
			maintain_joint(particle.thigh_left_joint,thigh_angle_backward,kp=50.0,kd=2.0,)
		} else {
			maintain_joint(particle.thigh_left_joint,thigh_angle_forward,kp=50.0,kd=2.0,)
		}
		if particle.control.walk_state {
			maintain_joint(particle.thigh_right_joint,thigh_angle_forward,kp=50.0,kd=2.0,)
		} else {
			maintain_joint(particle.thigh_right_joint,thigh_angle_backward,kp=50.0,kd=2.0,)
		}
		maintain_joint(particle.knee_left_joint,-knee_angle * direction,kp=30.0,kd=2.0,)
		maintain_joint(particle.knee_right_joint,-knee_angle * direction,kp=30.0,kd=2.0,)
		if particle.control.walk_state {
			maintain_joint(particle.arm_left_joint, arm_angle_backward, kp=30.0, kd=1.0)
		} else {
			maintain_joint(particle.arm_left_joint, arm_angle_forward, kp=30.0, kd=1.0)
		}
		if particle.control.walk_state {
			maintain_joint(particle.arm_right_joint, arm_angle_forward, kp=30.0, kd=1.0)
		} else {
			maintain_joint(particle.arm_right_joint,arm_angle_backward,kp=30.0,kd=1.0)
		}
		maintain_joint(particle.forearm_left_joint,elbow_angle * direction,kp=30.0,kd=1.0)
		maintain_joint(particle.forearm_right_joint,elbow_angle * direction,kp=30.0,kd=1.0)
	}
  if particle.control.walk_cooldown <= 0 {
    particle.control.walk_state = !particle.control.walk_state
    particle.control.walk_cooldown = 20
  } else {
    particle.control.walk_cooldown -= 1
  }
	
  let index = self.which_platform(particle)
  if index == -1 {
		particle.control.stand_cooldown -= 1
		maintain_rotation(particle.torso, 0, kp=200.0, kd=20.0)
		particle.torso.applyForce(
			@box2d.b2Vec2(20.0 * direction, 0.0),
			particle.torso.getCenterPosition(),
		)
    return
  }
	
	particle.torso.applyForce(
		@box2d.b2Vec2(0.0, 10),
		particle.torso.getCenterPosition(),
	)
	
  let platform = self.platform_list[index]
  let mut p_angle = (platform.get_body().getRotation() % 3.14 +3.14)%3.14
	
	if p_angle > 1.57 {
		p_angle -= 3.14
	}
	
	if p_angle > 0.5 || p_angle < -0.5 {
		particle.control.stand_cooldown -= 1
		maintain_rotation(particle.torso, 0, kp=200.0, kd=20.0)
		particle.torso.applyForce(
			@box2d.b2Vec2(20.0 * direction, 0.0),
			particle.torso.getCenterPosition(),
		)
		return ;
	}
	
  // let target_y = (
  //     particle.torso.getCenterPosition().getX() -
  //     platform.get_body().getCenterPosition().getX()
  //   ) *
    // @cmath.tan(p_angle) +
    // platform.get_body().getCenterPosition().getY() //Fuck
  // maintain_position(particle.torso,(particle.torso.getCenterPosition().getX(), target_y + 3.5))
  let v = @box2d.b2Vec2(
    100.0 * direction * @cmath.cos(p_angle),
    100.0 * direction * @cmath.sin(p_angle),
  )

	let mut play_angle = (p_angle%(2.0*3.14)+(2.0*3.14))%(2.0*3.14)
	
	if play_angle > 3.14 {
		play_angle -= 2.0*3.14
	}
	
	println("Fuck: \{play_angle}")

  maintain_rotation(particle.torso, play_angle, kp=200.0, kd=20.0)
  particle.torso.applyForce(v, particle.torso.getCenterPosition())
}
fn Game::particle_jump(self:Self ,particle : Particle, direction : Double) -> Unit {

	self |> ignore

  // 控制跳跃动作的帧计数
  if particle.control.jump_state {
    // 膝盖弯曲: 前10帧
    particle.control.jump_frame_count += 1
    if particle.control.jump_frame_count < j_dur_A {
    	maintain_rotation(particle.torso, particle.control.walk_direction*-0.2, kp=100.0, kd=10.0)
      let bend_factor : Double = particle.control.jump_frame_count.to_double() /
        j_dur_A.to_double() *
        knee_angle_bend_max
      // println(bend_factor)
			maintain_joint(particle.arm_left_joint, j_arm_angle_backward*particle.control.walk_direction, kp=30.0, kd=1.0)
			maintain_joint(particle.arm_right_joint, j_arm_angle_backward*particle.control.walk_direction, kp=30.0, kd=1.0)
			maintain_joint(particle.forearm_left_joint, elbow_angle * particle.control.walk_direction, kp=30.0, kd=1.0)
			maintain_joint(particle.forearm_right_joint, elbow_angle * particle.control.walk_direction, kp=30.0, kd=1.0)
      maintain_joint(particle.knee_left_joint, bend_factor*particle.control.walk_direction, kp=50.0, kd=2.0)
      maintain_joint(particle.knee_right_joint, bend_factor*particle.control.walk_direction, kp=50.0, kd=2.0)
      maintain_joint(particle.thigh_left_joint,j_thigh_angle_forward*particle.control.walk_direction,kp=50.0,kd=2.0)
      maintain_joint(particle.thigh_right_joint,j_thigh_angle_backward*particle.control.walk_direction,kp=50.0,kd=2.0)
      return
    } else if particle.control.jump_frame_count < j_dur_A + j_dur_B {
      maintain_rotation(particle.torso, 0, kp=100.0, kd=10.0)
      let v = @box2d.b2Vec2(jump_force * direction, 30.0) // 沿x轴和y轴施加力
      particle.torso.applyImpulse(v, particle.torso.getCenterPosition())
			let s_pos = world_to_screen(particle.torso.getCenterPosition().getX(), particle.torso.getCenterPosition().getY()-2.0)
			register_smoke_animation(self,s_pos.0, s_pos.1)
			println("Jump Smoke: (\{v.getX()}, \{v.getY()})")
      return
    } else if particle.control.jump_frame_count < j_dur_A + j_dur_B + j_dur_C {
      maintain_rotation(particle.torso, 0, kp=100.0, kd=10.0)
      // let straight_factor : Double = knee_angle_bend_max -
      //   (particle.control.jump_frame_count - j_dur_A - j_dur_B).to_double() /
      //   j_dur_C.to_double() *
      //   knee_angle_bend_max
			maintain_joint(particle.arm_left_joint, 0, kp=30.0, kd=2.0)
			maintain_joint(particle.arm_right_joint, 0, kp=30.0, kd=2.0)
			maintain_joint(particle.forearm_left_joint, 0, kp=30.0, kd=2.0)
			maintain_joint(particle.forearm_right_joint, 0, kp=30.0, kd=2.0)
      maintain_joint(particle.knee_left_joint, 0, kp=70.0, kd=2.0)
      maintain_joint(particle.knee_right_joint, 0, kp=70.0, kd=2.0)
      maintain_joint(particle.thigh_left_joint, 0, kp=70.0, kd=2.0)
      maintain_joint(particle.thigh_right_joint, 0, kp=70.0, kd=2.0)
      return
    }
    particle.control.jump_state = false // 跳跃结束
  }
}
fn Game::particle_stand(self:Self,particle : Particle) -> Unit {
  let index = self.which_platform(particle)
  maintain_rotation(particle.torso, 0, kp=300.0, kd=10.0)
  if index == -1 {
		if particle.control.stand_cooldown <= 0 {
    	return
		}
		particle.control.stand_cooldown -= 1
		println("Stand cooldown: \{particle.control.stand_cooldown}")
  }
	particle.control.stand_cooldown = 10
  maintain_joint(particle.thigh_left_joint, 0.0, kp=50.0, kd=2.0)
  maintain_joint(particle.thigh_right_joint, 0.0, kp=50.0, kd=2.0)
  maintain_joint(particle.knee_left_joint, 0.0, kp=50.0, kd=2.0)
  maintain_joint(particle.knee_right_joint, 0.0, kp=50.0, kd=2.0)
  maintain_joint(particle.arm_left_joint, 0.0, kp=50.0, kd=2.0)
  maintain_joint(particle.arm_right_joint, 0.0, kp=50.0, kd=2.0)
  maintain_joint(particle.forearm_left_joint, 0.0, kp=50.0, kd=2.0)
  maintain_joint(particle.forearm_right_joint, 0.0, kp=50.0, kd=2.0)
}
