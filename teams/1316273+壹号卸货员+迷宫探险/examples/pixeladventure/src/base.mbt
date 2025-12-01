fn add_background(size : @math.Vec2D) -> Unit {
  let background = @system.Entity::new()
  let background_sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(size, "assets/Background/run.png", repeat=NoRepeat),
    0,
  )
  @sprite.sprites.set(background, background_sprite)
  @position.positions.set(background, @math.Vec2D(0, 0))
}
fn add_font(x:Double,y:Double) -> Unit {
  let background = @system.Entity::new()
  let background_sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(@math.Vec2D(15.0,15.0), "assets/Background/ca2.png", repeat=NoRepeat),
    0,
  )
  @sprite.sprites.set(background, background_sprite)
  @position.positions.set(background, @math.Vec2D(x,y))
}
fn add_new_font(x:Double,y:Double) -> Unit {
  let background = @system.Entity::new()
  let background_sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(@math.Vec2D(15.0,15.0), "assets/Background/ca3.png", repeat=NoRepeat),
    0,
  )
  @sprite.sprites.set(background, background_sprite)
  @position.positions.set(background, @math.Vec2D(x,y))
}


fn add_timer() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.timer_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(10.0,25.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
  // slow_timer()
}


fn add_failed_box() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.failed_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(50.0,150.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
}
fn add_success_box() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.success_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(50.0,150.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
}
fn add_color_block(pos:@math.Vec2D,color:String) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),color),
    2
  )
  let color_block=@system.Entity::new()
  @sprite.sprites.set(color_block,sprite)
  @position.positions.set(color_block,pos)
  @collision.shapes.set(
    color_block,
    Rect(size=@math.Vec2D(10.0,10.0),offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(color_block,terrain_collision_layer)
}


fn add_color_line(pos:@math.Vec2D,color:String) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,2.0),color),
    1
  )
  let color_block=@system.Entity::new()
  @sprite.sprites.set(color_block,sprite)
  @position.positions.set(color_block,pos)
  @collision.shapes.set(
    color_block,
    Rect(size=@math.Vec2D(10.0,2.0),offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(color_block,terrain_collision_layer)
}
fn add_color_line1(pos:@math.Vec2D,color:String) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(2.0,10.0),color),
    1
  )
  let color_block=@system.Entity::new()
  @sprite.sprites.set(color_block,sprite)
  @position.positions.set(color_block,pos)
  @collision.shapes.set(
    color_block,
    Rect(size=@math.Vec2D(2.0,10.0),offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(color_block,terrain_collision_layer)
}
fn add_color_line2(pos:@math.Vec2D,color:String) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(2.0,70.0),color),
    1
  )
  let color_block=@system.Entity::new()
  @sprite.sprites.set(color_block,sprite)
  @position.positions.set(color_block,pos)
  @collision.shapes.set(
    color_block,
    Rect(size=@math.Vec2D(2.0,70.0),offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(color_block,terrain_collision_layer)
}
fn add_color_line3(pos:@math.Vec2D,color:String) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(70.0,2.0),color),
    1
  )
  let color_block=@system.Entity::new()
  @sprite.sprites.set(color_block,sprite)
  @position.positions.set(color_block,pos)
  @collision.shapes.set(
    color_block,
    Rect(size=@math.Vec2D(70.0,2.0),offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(color_block,terrain_collision_layer)
}
