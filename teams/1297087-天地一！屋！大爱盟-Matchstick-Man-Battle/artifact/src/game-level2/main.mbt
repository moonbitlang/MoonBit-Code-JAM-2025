
fn main {
  let game = @server.create_game(
    background = @server.BackgroundImage::new(Some("./src/game-level2/images/background.png"))
  )
  @server.load_map(game, 2) |> ignore
	@server.Gun::create(game,0,Some("src/assets/gun1.png"))
	@server.Gun::create(game,1,Some("src/assets/gun1.png"))

  // 播放关卡2背景音乐
  game.play_level_bgm(2)

  @server.register_both_weapon_change(game)
  @server.register_mouse_shoot(game, 0)
    
  @server.register_control(game)
  
  @server.register_auto_aim(game)

  @server.register_hp_show(game)

  @server.register_show_mouse_screen_coords(game)

  game.start_run()

}