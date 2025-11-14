fn load_map(game:@server.Game) -> Unit {
  game.create_particle((-10.0, 12.0)) |> ignore
  game.create_particle((-5.0, 12.0)) |> ignore

  @server.create_platform(game, (0, 0.5), (23.6, 1), angle = 0.0)|> ignore;


  let bob = Bob::new(10,(0, 30))
  bob.load_into_game(game) |> ignore
}

fn main {
  let game = @server.create_game()
  load_map(game) |> ignore
	@server.Gun::create(game,0, Some("src/assets/gun1.png"))
	@server.Gun::create(game,1, Some("sword"))

  load_custom_functions(game)
  
  @server.register_control(game)
  
  @server.register_auto_aim(game)

  @server.register_hp_show(game)

  @server.register_show_mouse_screen_coords(game)

  game.start_run()

}