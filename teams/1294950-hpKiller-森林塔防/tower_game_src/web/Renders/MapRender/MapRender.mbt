///|
pub struct MapRender {}

///|
pub fn MapRender::new() -> MapRender {
  MapRender::{  }
}

///|
let mapRenderInstance : Ref[MapRender?] = Ref::new(None)

///|
pub let mapRenderSingleton : MapRender = MapRender::get_instance()

///|
pub fn MapRender::get_instance() -> MapRender {
  match mapRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = MapRender::new()
      mapRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn MapRender::render(_self : MapRender, _timestamp : Double) -> Unit {
  let ctx = @Core.ctxSingleton
  ignore(ctx)
  let gridSize = @Core.map.gridSize
  ignore(gridSize)
  mapBackgroundRenderSingleton.render()
  // Use the new path render singleton to render all paths
  pathRenderSingleton.render(_timestamp)

  // // 旋涡
  // let sw = this.collectSwirls(pts);
  // sw.forEach(s => {
  //     let pos = (pts[s.index]);
  //     this.drawSwirl(ctx, pos, gridSize, time, s.dir);
  // });

  // ctx.fillStyle("red")
  // ctx.fillRect(0, 0, @Core.map.width, @Core.map.height)
}

///|
