fn create_world(
	gravity?: (Double, Double) = (0.0, -9.8),
	level?: String = "",
	flag?: Bool = false
)-> @box2d.B2World{
	if flag==true {
		let global_box2d_world : Ref[&@box2d.World?] = Ref::new(None)
		try {
      global_box2d_world.val = Some(@map_loader.load_map(file_content=level).construct_world())
    } catch {
      @map_loader.MapLoaderError(e) => {
        println("Error loading map: \{e}")
      }
      e => {
        println("Unknown error loading map: \{e}")
      }
    }

		return @box2d.B2World::{world: global_box2d_world.val.unwrap().getBase()}
	}
	let worldAABB= @box2d.b2AABB()
	worldAABB.setminVertex(@box2d.b2Vec2(-10000.0, -10000.0))
	worldAABB.setmaxVertex(@box2d.b2Vec2(10000.0, 10000.0))
	let world : @box2d.B2World = {world : @box2d.b2World(worldAABB,@box2d.b2Vec2(gravity.0, gravity.1), true)}
	world
}
fn maintain_joint(
	joint: @box2d.B2Joint,
	target_angle: Double,
	kp?:Double=300.0,
	kd?:Double=10.0
)-> Unit {
	let bodyA=joint.toRevoluteJoint().getBody1()
	let bodyB=joint.toRevoluteJoint().getBody2()
	let angle:Double = bodyB.getRotation() - bodyA.getRotation()
	let error=target_angle - angle
	let torque :Double =kp*error - kd*(bodyB.getAngularVelocity()-bodyA.getAngularVelocity())
	bodyB.applyTorque(torque)
}
fn maintain_position(
	body: @box2d.B2Body,
	target_pos: (Double, Double),
	kp?:Double=300.0,
	kd?:Double=10.0
)-> Unit {
	let pos=body.getCenterPosition()
	let vel=body.getLinearVelocity()
	let error_x=target_pos.0 - pos.getX()
	let error_y=target_pos.1 - pos.getY()
	let force_x=kp*error_x - kd*vel.getX()
	let force_y=kp*error_y - kd*vel.getY()
	body.applyForce(@box2d.b2Vec2(force_x, force_y), pos)
}
fn maintain_rotation(
	body: @box2d.B2Body,
	target_angle: Double,
	kp?:Double=30.0,
	kd?:Double=10.0
)-> Unit {
	let angle = body.getRotation()
	let error=target_angle - angle
	let torque=kp*error - kd*body.getAngularVelocity()
	body.applyTorque(torque)
}

fn maintain_rotation_test(
	body: @box2d.B2Body,
	target_angle: Double,
	kp?:Double=30.0,
	kd?:Double=10.0
)-> Unit {
	let angle = body.getRotation()
	let error=target_angle - angle
	println("Current Angle: \{angle}, Target Angle: \{target_angle}, Error: \{error}")
	let torque=kp*error - kd*body.getAngularVelocity()
	body.applyTorque(torque)
}
extern "js" fn equals(a:@box2d.B2Body, b:@box2d.B2Body)->Bool=
#|(a,b)=>{return a===b}