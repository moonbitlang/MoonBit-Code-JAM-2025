fn add_background(size : @math.Vec2D) -> Unit {
  let background = @system.Entity::new()
  let background_sprite = @sprite.Sprite::from_picture(
    @sprite.Picture::new(size, "assets/Background/gamemode.png", repeat=NoRepeat),
    0,
  )
  @sprite.sprites.set(background, background_sprite)
  @position.positions.set(background, @math.Vec2D(0, 0))
}

// 添加颜色方块
fn add_block(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    1
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn add_block1(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    2
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
// 添加颜色方块
fn change_block(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    4
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_one_block(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    12
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_red_block(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    14
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_red_block1(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    20
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_red_block2(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    24
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_red_block3(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    26
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_two_block(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    18
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_three_block(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    22
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_four_block(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    25
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
// 取消中心第一个颜色方块遮罩所用
fn change_to_block(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    8
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_to_block1(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    17
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_to_block2(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    22
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_to_block3(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    25
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn change_to_block4(block:Block) -> Unit {
  let block_entity = @system.Entity::new()
  let block_sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),block.color),
    27
  )
  @sprite.sprites.set(block_entity,block_sprite)
  @position.positions.set(block_entity,@math.Vec2D(block.x.to_double(),block.y.to_double()))
}
fn add_timer() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.timer_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(20.0,50.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
  // slow_timer()
}
fn add_timerr() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.timerr_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(20.0,50.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
  // slow_timer()
}
fn add_timerrr() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.timerrr_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(20.0,50.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
  // slow_timer()
}
fn add_say1() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.say1_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(110.0,170.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
  // slow_timer()
}
fn add_difficult(box:@sprite.Text,x:Double,y:Double) -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(x,y))
  @ui.uis.set(timer_entity,@ui.Ui::new())
  // slow_timer()
}
fn add_timer1() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.timer1_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(220.0,50.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
  // slow_timer()
}
fn add_timer2() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.timer2_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(220.0,50.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
  // slow_timer()
}
fn add_alert_box() -> Unit {
  let alert_entity = @system.Entity::new()
  let alert_text = @sprite.Sprite::from_text(new_game_state.alert_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(alert_entity,alert_text)
  @position.positions.set(alert_entity,@math.Vec2D(120.0,298.0))
  @ui.uis.set(alert_entity,@ui.Ui::new())
}

fn add_change_box(x:Int) -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.score_box,x)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(20.0,60.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
}

fn add_level_box() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.level_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(20.0,34.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
}

fn add_failed_box() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.failed_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(80.0,150.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
}
fn add_timer_over() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.over_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(80.0,150.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
}
fn add_success_box() -> Unit {
  let timer_entity = @system.Entity::new()
  let time_text = @sprite.Sprite::from_text(new_game_state.success_box,@ui.UI_ZINDEX)
  @sprite.sprites.set(timer_entity,time_text)
  @position.positions.set(timer_entity,@math.Vec2D(90.0,150.0))
  @ui.uis.set(timer_entity,@ui.Ui::new())
}
fn add_color_block(pos:@math.Vec2D,color:String) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(10.0,10.0),color),
    1
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
fn add_parrow_color_line(pos:@math.Vec2D,color:String) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(47.0,2.0),color),
    1
  )
  let line_color_block=@system.Entity::new()
  @sprite.sprites.set(line_color_block,sprite)
  @position.positions.set(line_color_block,pos)
  @collision.shapes.set(
    line_color_block,
    Rect(size=@math.Vec2D(13.0,2.0),offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(line_color_block,terrain_collision_layer)
}
fn add_vertical_color_line(pos:@math.Vec2D,color:String) -> Unit {
  let sprite = @sprite.Sprite::from_color_rect(
    @sprite.ColorRect::new(@math.Vec2D(2.0,36.0),color),
    1
  )
  let line_color_block=@system.Entity::new()
  @sprite.sprites.set(line_color_block,sprite)
  @position.positions.set(line_color_block,pos)
  @collision.shapes.set(
    line_color_block,
    Rect(size=@math.Vec2D(2.0,13.0),offset=@math.Vec2D::zero()),
  )
  @collision.collision_layers.set(line_color_block,terrain_collision_layer)
}
fn add_frame_color_line(x:Double,color:String) -> Unit {
  // for i=0;i<21;i=i+1{
    add_parrow_color_line(@math.Vec2D(58 + x,177),color)
    add_parrow_color_line(@math.Vec2D(58 + x,211),color)
    add_vertical_color_line(@math.Vec2D(58 + x,177),color)
    add_vertical_color_line(@math.Vec2D(103 + x,177),color)
    
  // }
}