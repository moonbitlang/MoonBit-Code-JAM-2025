fn createGround(world : @box2d.B2World) -> @box2d.B2Body{
  let groundSd = @box2d.b2BoxDef()
  groundSd.setExtents(@box2d.b2Vec2(1200, 50))
  groundSd.setRestitution(0.5)
  groundSd.setFriction(0.2)
  let groundBd = @box2d.b2BodyDef()
  groundBd.addShape(groundSd.getBase())
  groundBd.setPosition(@box2d.b2Vec2(-600, 440))
  return world.createBody(groundBd)
  
}

fn createWorld() -> @box2d.B2World {
  let worldAABB = @box2d.b2AABB()
  worldAABB.setminVertex(@box2d.b2Vec2(-1000, -1000))
  worldAABB.setmaxVertex(@box2d.b2Vec2(1000, 1000))
  let gravity = @box2d.b2Vec2(0.0, 10.0)
  let doSleep = true
  let world = @box2d.B2World::{world : @box2d.b2World(worldAABB, gravity, doSleep)}
  createGround(world) |> ignore
  return world
}

fn createBox(world : @box2d.B2World, x: Double, y: Double, width: Double, height: Double, density: Double) -> @box2d.B2Body {
  let boxSd = @box2d.b2BoxDef()
  boxSd.setExtents(@box2d.b2Vec2(width, height))
  boxSd.setDensity(density)
  boxSd.setFriction(0.2)
  boxSd.setRestitution(0.5)
  let boxBd = @box2d.b2BodyDef()
  boxBd.addShape(boxSd.getBase())
  boxBd.setPosition(@box2d.b2Vec2(x, y))
  return world.createBody(boxBd)
}

fn step(world : @box2d.B2World) -> Unit {
  world.step(1.0/60.0, 10)
  return
}

fn main {
  let world = createWorld()
  let box1 = createBox(world, 0, 500, 20, 20, 1.0)

  for i=0 ; i<180 ; i=i+1{
    step(world)
    let pos = box1.getCenterPosition()
    let body_list = world.getBodyList()
    println("body list length: \{body_list.length()}")
    println("body_list[0] == box1: \{box1.isEqual(body_list[0])}")
    let angle = box1.getRotation()
    // log("box1 position: (" + pos.x.toString() + ", " + pos.y.toString() + "), angle: " + angle.toString())
      println("box1 position: (\{pos.getX()} , \{pos.getY()}), angle: \{angle}")
  }

  return
}