pub fn[T: Compare] min(a : T, b : T) -> T{
  if a < b{
    return a
  }
  return b
}

pub fn[T: Compare] max(a : T, b : T) -> T{
  if a >= b{
    return a
  }
  return b
}


///| Get the Axis-Aligned Bounding Box (AABB) of an entity.
pub fn get_entity_aabb(body_list: Array[@box2d.B2Body]) -> @box2d.B2AABB{
  let mut max_x = -1000000000.0
  let mut max_y = -1000000000.0
  let mut min_x = 1000000000.0
  let mut min_y = 1000000000.0

  for i in body_list{
    for fixture in i.getShapeList(){
      match fixture.getType(){
        CircleShape =>{
          let circle = fixture.toCircleShape()
          let pos = i.getWorldPoint(circle.getLocalPosition())
          let mmin_x = pos.getX() - circle.getRadius()
          let mmax_x = pos.getX() + circle.getRadius()
          let mmin_y = pos.getY() - circle.getRadius()
          let mmax_y = pos.getY() + circle.getRadius()
          max_x = max(max_x, mmax_x)
          max_y = max(max_y, mmax_y)
          min_x = min(min_x, mmin_x)
          min_y = min(min_y, mmin_y)
        }
        PolygonShape =>{
          let poly = fixture.toPolygonShape()
          for vertex in poly.getVertices(){
            let world_vertex = i.getWorldPoint(vertex)
            max_x = max(max_x, world_vertex.getX())
            max_y = max(max_y, world_vertex.getY())
            min_x = min(min_x, world_vertex.getX())
            min_y = min(min_y, world_vertex.getY())
          }
        }
        BoxShape => {
          let poly = fixture.toPolygonShape()
          for vertex in poly.getVertices(){
            let world_vertex = i.getWorldPoint(vertex)
            max_x = max(max_x, world_vertex.getX())
            max_y = max(max_y, world_vertex.getY())
            min_x = min(min_x, world_vertex.getX())
            min_y = min(min_y, world_vertex.getY())
          }
        }
        _ => {1 |> ignore}
      } 
    }
  }

  let res = @box2d.b2AABB()

  res.setmaxVertex(@box2d.b2Vec2(max_x, max_y))
  res.setminVertex(@box2d.b2Vec2(min_x, min_y))

  return res
}

///| Draw the Axis-Aligned Bounding Box (AABB) on the canvas.
/// 会转化为 canvass 坐标系进行绘制
pub fn draw_aabb(p5: &@p5js.P5JS, aabb: @box2d.B2AABB, color_set: (&@p5js.P5JS)->Unit) -> Unit{
  p5.push()

  let (min_x, min_y) = world_to_screen(aabb.getminVertex().getX(), aabb.getminVertex().getY())
  let (max_x, max_y) = world_to_screen(aabb.getmaxVertex().getX(), aabb.getmaxVertex().getY())

  color_set(p5)
  p5.rect(min_x, min_y, max_x - min_x, max_y - min_y)

  p5.pop()
}