// constructor

pub extern "js" fn b2BoxDef() -> B2BoxDef =
  #| () => new b2BoxDef()

pub extern "js" fn b2CircleDef() -> B2CircleDef =
  #| () => new b2CircleDef()

pub extern "js" fn b2PolyDef() -> B2PolygonDef =
  #| () => new b2PolyDef()

// B2BoxDef
pub extern "js" fn B2BoxDef::setExtents(self: B2BoxDef, extents: B2Vec2) -> Unit =
  #| (self, extents) => { self.extents = extents; }

pub extern "js" fn B2BoxDef::getExtents(self: B2BoxDef) -> B2Vec2 =
  #| self => self.extents


// B2CircleDef

pub extern "js" fn B2CircleDef::setRadius(self: B2CircleDef, radius: Double) -> Unit =
  #| (self, radius) => { self.radius = radius; }

pub extern "js" fn B2CircleDef::getRadius(self: B2CircleDef) -> Double =
  #| self => self.radius


//B2PolygonDef

// 有截断 b2Settings.b2_maxProxies
pub extern "js" fn B2PolygonDef::setVertices(self: B2PolygonDef, vertices: Array[B2Vec2]) -> Unit =
  #| (self, vertices) => { 
  #|  self.vertexCount = vertices.length;
  #|  for (let i = 0; i < min(b2Settings.b2_maxProxies, self.vertexCount); i++) {
  #|    self.vertices[i].Set(vertices[i].x, vertices[i].y);
  #|  }
  #|  self.vertexCount = min(b2Settings.b2_maxProxies, self.vertexCount);
  #| }

pub extern "js" fn B2PolygonDef::getVertices(self: B2PolygonDef) -> Array[B2Vec2] =
  #| self => self.vertices

pub extern "js" fn B2PolygonDef::getVertexCount(self: B2PolygonDef) -> Int =
  #| self => self.vertexCount
