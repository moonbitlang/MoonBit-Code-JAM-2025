///|
pub struct GameController {
  ctx : @Core.CanvasRenderingContext2D
  canvas : @Core.Canvas
  map : @Core.Map
}

///|
fn GameController::new(
  canvas : @Core.Canvas,
  ctx : @Core.CanvasRenderingContext2D,
  map : @Core.Map,
) -> GameController {
  // let _ = @Canvas.Canvas::new()
  if !@Core.is_wechat() {
    @Core.document_body_append_child(canvas)
  }
  { ctx, canvas, map }
}

///|
let instance : Ref[GameController?] = Ref::new(None)

///|
pub fn GameController::get_instance(
  canvas : @Core.Canvas,
  ctx : @Core.CanvasRenderingContext2D,
  // add map to fix map call bug
  map : @Core.Map,
) -> GameController {
  match instance.val {
    Some(render) => render
    None => {
      let new_instance = GameController::new(canvas, ctx, map)
      instance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn GameController::update(
  self : GameController,
  dt : Double,
  timestamp : Double,
) -> Unit {
  // game lose not update other 
  ignore(self)
  @InputController.inputControllerSingleton.init
  if @PagesController.pagesControllerSingleton.show_page() {
    @PagesController.pagesControllerSingleton.update(dt)
    return
  }
  @MapController.mapControllerSingleton.update(dt)
  @EnemyController.enemyControllerSingleton.update(dt, timestamp)
  @TowerController.towerControllerSingleton.update(dt)
  @TopBarController.waveProgressBarControllerSingleton.update(dt)
  @NeutralElementController.neutralElementControllerSingleton.update(dt)
}
