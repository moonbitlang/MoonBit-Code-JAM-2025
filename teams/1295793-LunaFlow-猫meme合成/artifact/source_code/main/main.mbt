///|
fn main {
  @system.App::new(@canvas.CanvasBackend::new())
  .with_canvas_width(CANVAS_WIDTH)
  .with_canvas_height(CANVAS_HEIGHT)
  .with_fps(60)
  .add_plugin(@plugins.default_plugin)
  //.add_plugin(@plugins.debug_plugin)
  .add_system(input_system)
  .add_system(force_system)
  .add_system(merge_system)
  .add_system(cat_teleport_system)
  .add_system(play_sound_system)
  .add_initializer(game_start)
  .run()
}
