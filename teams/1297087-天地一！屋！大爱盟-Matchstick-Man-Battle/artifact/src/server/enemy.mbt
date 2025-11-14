

pub(all) enum ActionType{
	// 巡逻
	Patrol
	// 追击
	Pursuit
	// 攻击
	Attack
}

pub(open) trait EnemyTrait : RenderAble {
	// create(Self,game:Game,position:(Double,Double)) -> Bool
	destroy(Self, game:Game) -> Unit
	update(Self, game:Game) -> Unit
	is_dead(Self) -> Bool
	get_hp(Self) -> Double
	get_hp_limit(Self) -> Double
	get_position(Self) -> (Double, Double)?  // 获取敌人位置
}

///| 使用默认的渲染接口
///| @todo Implement rendering for BoxEnemy
///  @ht
pub impl RenderAble for BoxEnemy with get_render(self: BoxEnemy){
	Some(fn (world: &@box2d.World, p: &@p5js.P5JS) -> Unit {

		world |> ignore

		for body in self.bodies {
			for shape in body.getShapeList() {
			// println("Drawing BoxEnemy")
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
	})
}

pub(all) struct BoxEnemy {
	id : Int
	//hp
	hp : Double
	hp_limit : Double
	damage_scale : Double
	//movement
	acceleration: @box2d.B2Vec2
	max_speed : Double
	jump_force : Double
	action_type : ActionType
	
	field_of_view : Double
	weapon : &WeaponControl?
	
	bodies : Array[@box2d.B2Body]
	joints : Array[@box2d.B2Joint]
	mut target_particle_id : Int
}

pub impl EnemyTrait for BoxEnemy with is_dead(self : BoxEnemy) -> Bool {
	return self.hp <= 0.0
}

pub impl EnemyTrait for BoxEnemy with get_hp(self : BoxEnemy) -> Double {
	return self.hp
}

pub impl EnemyTrait for BoxEnemy with get_hp_limit(self : BoxEnemy) -> Double {
	return self.hp_limit
}

pub impl EnemyTrait for BoxEnemy with get_position(self : BoxEnemy) -> (Double, Double)? {
	if self.bodies.length() > 0 {
		let pos = self.bodies[0].getCenterPosition()
		return Some((pos.getX(), pos.getY()))
	}
	return None
}

pub impl EnemyTrait for BoxEnemy with destroy(self : BoxEnemy, game:Game) -> Unit {

	for body in self.bodies {
		game.world.destroyBody(body)
	}
	for joint in self.joints {
		game.world.destroyJoint(joint)
	}

	game.enemy_list[self.id] = None

}

pub fn create_box_enemy(game:Game, position:(Double,Double)) -> Bool {
	let body = @map_loader.get_bodydef_from_raw(Some(@assets.BOXENEMY_BOX2D_DEFINITION), None) catch {
		_ => {
			println("Error loading BoxEnemy body definition")
			return false
		}
	}
	body.setPosition(@box2d.b2Vec2(position.0, position.1))
	let box_enemy_body = game.world.createBody(body)

	game.enemy_list.push(None)

	let bodies = Array::new()
	bodies.push(box_enemy_body)

	let box_enemy = BoxEnemy::{
		id: game.enemy_list.length() - 1,
		hp:100.0,
		hp_limit:100.0,
		damage_scale:1.0,
		acceleration:@box2d.b2Vec2(10.0,0.0),
		max_speed:5.0,
		jump_force:15.0,
		action_type:ActionType::Patrol,
		field_of_view:10.0,
		weapon: None,
		bodies: bodies,
		joints:Array::new(),
		target_particle_id:-1
	}

	game.enemy_list[box_enemy.id] = Some(box_enemy)

	return true
}

pub impl EnemyTrait for BoxEnemy with update(self : BoxEnemy, game:Game) {

	game |> ignore

	self.bodies[0].applyForce(self.acceleration, self.bodies[0].getCenterPosition())

}