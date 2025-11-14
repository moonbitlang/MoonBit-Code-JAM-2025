
fn main {
  let game = @server.create_game(
    background = @server.BackgroundImage::new(Some("./src/game-level1/images/background.png"))
	)
  @server.load_map(game, 1) |> ignore
	@server.Gun::create(game,0, Some("src/assets/gun1.png"))
	@server.Gun::create(game,1, Some("src/assets/gun1.png"))

  // 播放关卡1背景音乐
  game.play_level_bgm(1)

  @server.register_both_weapon_change(game)
  
  @server.register_mouse_shoot(game, 0)

  @server.register_control(game)
  
  @server.register_auto_aim(game)

  @server.register_hp_show(game)

  @server.register_show_mouse_screen_coords(game)

  // game.register_custom_function(
  //   @server.GameCustomFunction::new(
  //     @server.GameState::GameRunning,
  //     fn(game: @server.Game, p5: &@p5js.P5JS) {
  //       for i in game.platform_list {
  //         let aabb = @server.get_entity_aabb([i.get_body()])
  //         @server.draw_aabb(p5, aabb, fn(p){
  //           p.fillColorPara(0.0, Some(255.0), Some(0.0), Some(0.3))
  //         })
  //       }
  //     }
  //   )
  // )
  game.start_run()

}