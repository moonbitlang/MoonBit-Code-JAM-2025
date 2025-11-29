let _widget_id:Ref[Int] = Ref::new(0)
fn gen_widget_id() -> Int {
  let id = _widget_id.val
  _widget_id.val = id + 1
  id
}

/// set_visible(bool) only show this node use, other node use spread_refresh to show if visible is true 
/// only if the node's parent is visible can it be showed
struct Widget {
  id:Int
  entity:@entity.Entity
  mut visible:Bool
  mut offset:@math.Vec2D
  shapeSize:@math.Vec2D
  children:Array[Widget]
  mut parent:Option[Widget]
  mouse_release:Array[(@inputs.MouseButton) -> Unit]
  mut nick:String
}
impl Eq for Widget with equal(self, other) -> Bool {
  self.id == other.id
}

impl Hash for Widget with hash(self) -> Int {self.id}

impl Hash for Widget with hash_combine(self, hasher) -> Unit {
   hasher.combine_int(self.id)
}

fn Widget::new(off?:@math.Vec2D, shapeSize?:@math.Vec2D) -> Widget {
  {
    id:gen_widget_id(),
    entity:@style.screen_root.spawn_child(),
    visible:true,
    offset: if off is Some(offset) { offset } else { @math.Vec2D(0,0) },
    children:[],
    parent:None,
    mouse_release:[],
    nick:"",
    shapeSize:if shapeSize is Some(siz) { siz } else { @math.Vec2D(20, 20)}
  }
}
/// create from an entity, be careful with empty Entity
fn Widget::from_entity(e:@entity.Entity) -> Widget {
  {
    id:gen_widget_id(),
    entity:e,
    visible:true,
    offset:@math.Vec2D(0,0),
    children:[],
    parent:None,
    mouse_release:[],
    nick:"",
    shapeSize:@math.Vec2D(20,20)
  }
}
/// use this method to check whether the widget will show
/// nevet use its visible field
fn Widget::visible_in_tree(self:Widget) -> Bool {
  if !self.visible {
    return false
  }
  let mut node = self
  while node.parent is Some(p) {
    if !p.visible {
      return false
    }
    node = p
  }
  true
}

fn Widget::get_abs_offset(self:Widget) -> @math.Vec2D {
  let mut absOff:@math.Vec2D = self.offset.clone()
  let mut node = self
  while node.parent is Some(p) {
    absOff += p.offset
    node = p
  }
  absOff
}
fn Widget::spread_refresh(self:Widget, show:Bool) -> Unit {
  if show {
    for child in self.children {
      if child.visible {
        child.entity.set_offset(child.get_abs_offset())
        child.entity.respawn()
      } else {
        @system.deferred_event_system(0.0)
        if child.entity.is_alive() {
          child.entity.destroy()
        }
      }
      @system.deferred_event_system(0.0)
    }
  } else {
    for child in self.children {
      child.entity.destroy()
      @system.deferred_event_system(0.0)
      child.spread_refresh(show)
    }
  }
}
fn Widget::set_offset(self:Widget, offset:@math.Vec2D) -> Widget {
  self.offset = offset
  if self.visible_in_tree() {
    self.show()
  }
  self
}
fn Widget::set_offsetxy(self:Widget, x:Double, y:Double) -> Widget {
  self.set_offset(@math.Vec2D(x, y))
}


/// 强制设置文本, 有必要的时候会替换sprite
/// @warning zindex只有初始化的时候传入才有效
fn Widget::set_text(self:Widget, s:String, color?:String, font?:String, zindex?:Int) -> Widget {
  if @sprite.sprites.contains(self.entity) {
    let sprite = @sprite.sprites[self.entity]
    if sprite.sprite_type is Text(text) {
      text.content = s
      if color is Some(c) {
        text.color = c
      }
      if font is Some(f) {
        text.font = f
      }
      return self
    }
  }
  let c = if color is Some(_c) { _c } else { "black" }
  let f = if font is Some(_f) { _f} else {"10px ThaleahFat" } 
  let idx = if zindex is Some(_idx) {_idx } else {100 }
  let sprite = @sprite.Sprite::from_text(@sprite.Text::new(s, color=c, font=f), idx)
  @sprite.sprites[self.entity] = sprite
  self
}
fn Widget::add_child(self:Widget, child:Widget) -> Unit {
  if self.children.contains(child) {
    child.parent = Some(self)
    if child.visible {
      child.show()
    }
  }
  child.parent = Some(self)
  self.children.push(child)
}
fn Widget::remove_child(self:Widget, child:Widget) -> Unit {
  if self.children.contains(child) {
    child.entity.destroy()
    @system.deferred_event_system(0.0)
    child.spread_refresh(false)
    child.parent = None
    let result = self.children.search(child)
    if result is Some(idx) {
      let _ = self.children.remove(idx)
    }
  }
}
/// only change this node's visible
fn Widget::show(self:Widget) -> Unit {
  self.__set_entity_style_offset(self.get_abs_offset())
  self.entity.respawn()
  self.visible = true
  @system.deferred_event_system(0.0)
  self.spread_refresh(true)
}
fn Widget::hide(self:Widget) -> Unit {
  self.entity.destroy()
  self.visible = false
  @system.deferred_event_system(0.0)
  self.spread_refresh(false)
}









/// do not call this outside
fn __set_entity_style_offset(self:Widget, 
  off:@math.Vec2D,
  size_plan? : @style.SizePlan = @style.SizePlan::FromSprite,
  flex? : @style.Flex = @style.Flex::Overlap,
  h_padding? : Double = 0.0,
  v_padding? : Double = 0.0,
  //h_offset? : Double = 0.0,
  //v_offset? : Double = 0.0,
) -> Unit {
  if @style.styles.contains(self.entity) {
    let style:@style.Style = @style.styles[self.entity]
    @style.styles[self.entity] = @style.Style::new(
      size_plan~, flex~, h_padding~, v_padding~, h_offset=off.0, v_offset=off.1
    )
  }
}


fn Widget::add_on_just_pressed_to_entity(entity:@entity.Entity, call0:(@inputs.MouseButton) -> Unit) -> Unit {
  
    if @collision.pickables.contains(entity) {
      let pickable = @collision.pickables[entity]
      pickable.on_just_pressed(call0)
    } else {
      let pickable = @collision.Pickable::new()
      pickable.on_just_pressed(call0)
      @collision.pickables.set(entity, pickable)
    }
  
}

let clickWidgets:Set[Widget] = Set::new()
/// 添加点击此组件的回调
fn Widget::add_onclick(self:Widget, callback?:(@inputs.MouseButton) -> Unit) -> Unit {

  //let area = @collision.Area::new(
  //  @collision.CollisionShape::Rect(
  //    size=@math.Vec2D::new(21.0, 22.0),
  //    offset=@math.Vec2D::zero(),
  //  ),
  //  non_collide_layer,
  //  @collision.CollisionMask::new([]),
  //  monitoring_mouse=true,
 // )
  

  if callback is Some(call0) {
    //Widget::add_on_just_pressed_to_entity(self.entity, call0)
    self.mouse_release.push(call0)
  }
  if !clickWidgets.contains(self) {
    clickWidgets.add(self)
  }
  
}

fn contain_event(self:Widget, x:Double, y:Double) -> Bool {
  if !self.visible_in_tree() {
    return false;
  }  
  let off = self.get_abs_offset()  
  if off.0 > x || off.0 + self.shapeSize.0 < x {
    return false
  } 
  if off.1 > y || off.1 + self.shapeSize.1 < y {
    return false
  }
  
  println(self.nick + " contain event at pos:" + x.to_string() + ", " + y.to_string() + "and self pos:" + off.to_string())
  true
}
fn click_check_system(delta : Double) -> Unit {
  let px = @inputs.mouse.pos.0 / ZOOM
  let py = @inputs.mouse.pos.1 / ZOOM //never minus world.offy, because it is not for the grids, but the whole canvas
  
  if @inputs.just_release_mouse.left_button || @inputs.just_release_mouse.middle_button || @inputs.just_release_mouse.right_button {
    //println("evet pos :" + px.to_string() + "," + py.to_string())
    for w in clickWidgets {
      if !w.contain_event(px, py) {
        let absOff = w.get_abs_offset()
        //println(w.nick + " " + absOff.to_string() + " shape:" + w.shapeSize.to_string())
      }

    }
    for w in clickWidgets {
      if !w.visible_in_tree() {
        continue
      }
      if w.contain_event(px, py) {
        
        for callback in w.mouse_release {
          
          if @inputs.just_release_mouse.left_button {
            callback(@inputs.MouseButton::Left)
          }
          if @inputs.just_release_mouse.middle_button {
            callback(@inputs.MouseButton::Middle)
          }
          if @inputs.just_release_mouse.right_button {
            callback(@inputs.MouseButton::Right)
          }
        }
      }
    }
  }


}

fn Widget::clear_onclick(self:Widget) -> Unit {
  if @collision.pickables.contains(self.entity) {
    @collision.pickables.remove(self.entity)
  }
}



//底层依赖的Widget, 根据状态去渲染它, 注意, 因为控件可以视为组件本身, 所以没有必要设置一个set方法去更换
//如何根据自己的状态, 来渲染底层的Widget
trait Control {
  getWidget(self:Self) -> Widget
  render(self:Self) -> Unit 
}
fn &Control::add_child(self:Self, child:&Control) -> Unit {
  self.getWidget().add_child(child.getWidget())
}
fn &Control::hide(self:Self) -> Unit {
  self.getWidget().hide()
}
fn &Control::show(self:Self) -> Unit {
  self.getWidget().show()
}

fn &Control::add_children(self:Self, children:Array[&Control]) -> Unit {
  for child in children {
    self.getWidget().add_child(child.getWidget())
  }
}
fn &Control::remove_child(self:Self, child:&Control) -> Unit {
  self.getWidget().remove_child(child.getWidget())
}
fn &Control::add_widget(self:Self, child:Widget) -> Unit {
  self.getWidget().add_child(child)
}

fn &Control::add_widgets(self:Self, children:Array[Widget]) -> Unit {
  for child in children {
    self.getWidget().add_child(child)
  }
}
fn &Control::remove_widget(self:Self, child:Widget) -> Unit {
  self.getWidget().remove_child(child)
}
fn &Control::visible_in_tree(self:Self) -> Bool {
  self.getWidget().visible_in_tree()
}