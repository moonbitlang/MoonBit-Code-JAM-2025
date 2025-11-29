fn add_background(size : @math.Vec2D) -> Unit {
  let background = @system.Entity::new()
  let background_sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(size, "assets/Background/gradient1.png", repeat=NoRepeat),
    0,
  )
  @sprite.sprites.set(background, background_sprite)
  @position.positions.set(background, @math.Vec2D(0, 0))
}
fn add_font(x:Double,y:Double) -> Unit {
  let background = @system.Entity::new()
  let background_sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(@math.Vec2D(30.0,100.0), "assets/Background/ca2.png", repeat=NoRepeat),
    0,
  )
  @sprite.sprites.set(background, background_sprite)
  @position.positions.set(background, @math.Vec2D(x,y))
}
fn add_font1(x:Double,y:Double) -> Unit {
  let background = @system.Entity::new()
  let background_sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(@math.Vec2D(30.0,100.0), "assets/Background/ca1.png", repeat=NoRepeat),
    0,
  )
  @sprite.sprites.set(background, background_sprite)
  @position.positions.set(background, @math.Vec2D(x,y))
}
fn add_font_back(color:String,x:Int,y:Int) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(350.0,40.0),color),
    2
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(x.to_double(),y.to_double()))
}
fn add_font_back1(color:String,x:Int,y:Int) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(25.0,120.0),color),
    2
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(x.to_double(),y.to_double()))
}
fn add_font_back2(color:String,x:Int,y:Int) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(350.0,20.0),color),
    2
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(x.to_double(),y.to_double()))
}
fn add_font_back3(color:String,x:Int,y:Int) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(20.0,40.0),color),
    2
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(x.to_double(),y.to_double()))
}
fn add_font_back4(color:String,x:Int,y:Int) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(20.0,60.0),color),
    2
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(x.to_double(),y.to_double()))
}
fn add_alert_box() -> Unit {
  let alert_entity = @system.Entity::new()
  let alert_text = @sprite.Sprite::from_text(new_game_state.alert_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(alert_entity,alert_text)
  @position.positions.set(alert_entity,@math.Vec2D(55.0,120.0))
  @ui.uis.set(alert_entity,@ui.Ui::new())
}
fn add_a_box(content:@sprite.Text,x:Double,y:Double) -> Unit {
  let alert_entity = @system.Entity::new()
  let alert_text = @sprite.Sprite::from_text(content,@ui.UI_ZINDEX)
  @sprite.sprites.set(alert_entity,alert_text)
  @position.positions.set(alert_entity,@math.Vec2D(x,y))
  @ui.uis.set(alert_entity,@ui.Ui::new())
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
fn add_color_line1(pos:@math.Vec2D,color:String,x:Double) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(310.0 - new_game_state.fi,2.0),color),
    4
  )
  let color_block=@system.Entity::new()
  @sprite.sprites.set(color_block,sprite)
  @position.positions.set(color_block,pos)
  @collision.shapes.set(
    color_block,
    Rect(size=@math.Vec2D(310.0 - new_game_state.fi,2.0),offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(color_block,terrain_collision_layer)
}