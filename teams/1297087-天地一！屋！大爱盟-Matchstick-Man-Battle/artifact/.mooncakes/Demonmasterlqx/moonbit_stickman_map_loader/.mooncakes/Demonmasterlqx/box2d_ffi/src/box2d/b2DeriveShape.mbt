
pub extern "js" fn B2CircleShape::getRadius(self : B2CircleShape) -> Double =
  #| self => self.m_radius

// Local position in parent body
pub extern "js" fn B2CircleShape::getLocalPosition(self : B2CircleShape) -> B2Vec2 =
  #| self => self.m_localPosition

pub extern "js" fn B2PolygonShape::getVertexCount(self : B2PolygonShape) -> Int =
  #| self => self.m_vertexCount

// 返回一个包含所有顶点的数组，拷贝每个顶点
pub extern "js" fn B2PolygonShape::getVertices(self : B2PolygonShape) -> FixedArray[B2Vec2] =
  #| self => {
  #|   let vertices = [];
  #|   for (let i = 0; i < self.m_vertexCount; i++) {
  #|     vertices.push(self.m_vertices[i].Copy());
  #|   }
  #|   return vertices;
  #| }

pub extern "js" fn B2PolygonShape::getLocalOBB(self : B2PolygonShape) -> B2OBB =
  #| self =>{
  #|   let obb = new b2OBB();
  #|   obb.center = self.m_centroid.Copy();
  #|   obb.extents = self.m_extents.Copy();
  #|   obb.R = self.m_R.Copy();
  #|  }