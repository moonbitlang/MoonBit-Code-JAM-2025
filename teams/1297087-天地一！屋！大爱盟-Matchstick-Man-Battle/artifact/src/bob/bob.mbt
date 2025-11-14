fn load_custom_functions(game:@server.Game) -> Unit {

  /// 昏迷功能
  game.register_custom_function(
    @server.GameCustomFunction::new(
      @server.GameRunning,
      fn(game: @server.Game, p5: &@p5js.P5JS) {
        if(game.particle_list[0].control.faint_state){
          if(game.particle_list[0].control.faint_resistance<300){
            game.particle_list[0].control.faint_resistance+=1
          }
          else{
            game.particle_list[0].control.faint_state=false
            game.particle_list[0].control.health=100
            game.particle_list[0].control.faint_resistance=0
          }
          return
        }
        if(p5.keyIsDown(KeyJ)){
          game.particle_list[0].control.faint_state=true
        }
      }
    )
  )

  /// 武器切换功能
  game.register_custom_function(
    @server.GameCustomFunction::new(
      @server.GameRunning,
      fn(game: @server.Game, p: &@p5js.P5JS) {
        if(p.keyIsDown(Digit1)){
          // 销毁旧武器
          for gun in game.weapon.gun_list {
            if gun.owner_id == 0 {
              gun.destroy(game)
            }
          }
          game.weapon.gun_list.clear()
          // 创建手枪
          game.create_pistol(0)
          println("装备手枪!")
        }
        if(p.keyIsDown(Digit2)){
          // 销毁旧武器
          for gun in game.weapon.gun_list {
            if gun.owner_id == 0 {
              gun.destroy(game)
            }
          }
          game.weapon.gun_list.clear()
          // 创建霰弹枪
          game.create_shotgun(0, Some("src/assets/gun2.png"))
          println("装备霰弹枪!")
        }
        if(p.keyIsDown(Digit3)){
          // 销毁旧武器
          for gun in game.weapon.gun_list {
            if gun.owner_id == 0 {
              gun.destroy(game)
            }
          }
          game.weapon.gun_list.clear()
          // 创建狙击枪
          game.create_sniper(0, Some("src/assets/gun3.png"))
          println("装备狙击枪!")
        }
        if(p.keyIsDown(Digit4)){
          // 销毁旧武器
          for gun in game.weapon.gun_list {
            if gun.owner_id == 0 {
              gun.destroy(game)
            }
          }
          game.weapon.gun_list.clear()
          // 创建激光枪
          game.create_laser_rifle(0, Some("src/assets/gun4.png"))
          println("装备激光枪!")
        }
      }
    )
  )

  /// 鼠标射击功能 - 左键点击朝鼠标方向射击（支持自动瞄准）
  game.register_custom_function(
    @server.GameCustomFunction::new(
      @server.GameRunning,
      fn(game: @server.Game, p5: &@p5js.P5JS) {
        // 检查是否按下鼠标左键
        if p5.mouseIsPressed() {
          let player_id = 0
          
          // 先检查是否启用自动瞄准
          let angle = match game.get_auto_aim_config(player_id) {
            Some(config) => match game.get_auto_aim_angle(player_id, config) {
              Some(auto_angle) => auto_angle  // 使用自动瞄准角度
              None => {
                // 没有自动瞄准目标，使用鼠标位置
                let mouse_x = p5.getMouseX().to_double()
                let mouse_y = p5.getMouseY().to_double()
                let world_coords = @server.screen_to_world(mouse_x, mouse_y)
                let player_pos = game.particle_list[player_id].torso.getCenterPosition()
                let dx = world_coords.0 - player_pos.getX()
                let dy = world_coords.1 - player_pos.getY()
                @cmath.atan2(dy, dx)
              }
            }
            None => {
              // 没有配置自动瞄准，使用鼠标位置
              let mouse_x = p5.getMouseX().to_double()
              let mouse_y = p5.getMouseY().to_double()
              let world_coords = @server.screen_to_world(mouse_x, mouse_y)
              let player_pos = game.particle_list[player_id].torso.getCenterPosition()
              let dx = world_coords.0 - player_pos.getX()
              let dy = world_coords.1 - player_pos.getY()
              @cmath.atan2(dy, dx)
            }
          }
          
          // 查找玩家的武器并发射
          for gun in game.weapon.gun_list {
            if gun.owner_id == player_id {
              gun.attack_at_angle(game, angle)
              break
            }
          }
        }
      }
    )
  )

}

pub(all) struct Bob{
  base : @box2d.B2BodyDef
  chain : Array[@box2d.B2BodyDef]
  end : @box2d.B2BodyDef
  base_image_loader : @server.ImageLoader
  chain_image_loader : @server.ImageLoader
  end_image_loader : @server.ImageLoader
  body_list : Array[@box2d.B2Body]
}

pub fn Bob::new(chain_num: Int, pose: (Double, Double), base_image_path~: String? = None, chain_image_path~: String?=None, end_image_path~: String? =None) -> Bob {

  let target_x = pose.0
  let target_y = pose.1
  let length = 1.0
  let radius = 4.0

  Bob::{
    base: fn (){
      let body_def = @box2d.b2BodyDef()
      body_def.setPosition(@box2d.b2Vec2(target_x,target_y))
      let shape = @box2d.b2BoxDef()
      shape.setDensity(0.0)
      shape.setFriction(0.5)
      shape.setRestitution(0.0)
      shape.setExtents(@box2d.b2Vec2(0.1,0.1))
      body_def.addShape(shape.getBase())
      body_def
    }(),
    chain : fn(){
      
      let arr = []
      for i=0 ; i<chain_num ; i=i+1{
        let body_def = @box2d.b2BodyDef()
        body_def.setPosition(@box2d.b2Vec2(target_x, target_y - i.to_double() * length - length/2.0))
        let shape = @box2d.b2BoxDef()
        shape.setDensity(0.1)
        shape.setFriction(0.5)
        shape.setRestitution(0.0)
        shape.setExtents(@box2d.b2Vec2(0.2,length/2.0))
        body_def.addShape(shape.getBase())
        arr.push(body_def)
      }
      arr
    }(),
    end : fn (){
      let body_def = @box2d.b2BodyDef()
      body_def.setPosition(@box2d.b2Vec2(target_x,target_y - (chain_num.to_double())*length-radius))
      let shape = @box2d.b2CircleDef()
      shape.setDensity(0.1)
      shape.setFriction(0.5)
      shape.setRestitution(0.0)
      shape.setRadius(radius)
      body_def.addShape(shape.getBase())
      body_def
    }(),
    base_image_loader: @server.ImageLoader::new(base_image_path),
    chain_image_loader: @server.ImageLoader::new(chain_image_path),
    end_image_loader: @server.ImageLoader::new(end_image_path),
    body_list: []
  }
}

pub fn Bob::load_into_game(self: Bob, game: @server.Game) -> Unit {
  let world = game.world
  self.body_list.push(world.createBody(self.base))
  for chain_body_def in self.chain {
    self.body_list.push(world.createBody(chain_body_def))
  }
  self.body_list.push(world.createBody(self.end))

  // 创建自定义障碍物
  for i in self.body_list {
    game.custom_barrier.push(i)
  }

  // 创建关节
  let base_chain_joint_def = @box2d.b2RevoluteJointDef()
  base_chain_joint_def.setBody1(self.body_list[0])
  base_chain_joint_def.setBody2(self.body_list[1])
  base_chain_joint_def.setAnchorPoint(self.body_list[0].getCenterPosition())
  base_chain_joint_def.setEnableMotor(true)
  base_chain_joint_def.setCollideConnected(false)

  world.createJoint(base_chain_joint_def.getBase()).toRevoluteJoint() |> ignore

  for i=0; i<self.chain.length()-1; i=i+1{
    let joint_def = @box2d.b2RevoluteJointDef()
    joint_def.setBody1(self.body_list[i+1])
    joint_def.setBody2(self.body_list[i+2])
    joint_def.setAnchorPoint(self.body_list[i+1].getCenterPosition())
    joint_def.setCollideConnected(false)

    world.createJoint(joint_def.getBase()) |> ignore
  }

  let chain_end_joint_def = @box2d.b2RevoluteJointDef()
  chain_end_joint_def.setBody1(self.body_list[self.chain.length()])
  chain_end_joint_def.setBody2(self.body_list[self.chain.length()+1])
  chain_end_joint_def.setAnchorPoint(self.body_list[self.chain.length()].getCenterPosition())
  chain_end_joint_def.setCollideConnected(false)

  world.createJoint(chain_end_joint_def.getBase()) |> ignore

  let mut frame_count = 30.0

  game.register_custom_function(
    @server.GameCustomFunction::new(
      @server.GameRunning,
      fn(game: @server.Game, p5: &@p5js.P5JS) {
        game |> ignore
        p5 |> ignore
        // 控制摆锤摆动
        let time = frame_count / 60.0
        frame_count = frame_count + 1.0

        // 一段时间向右摆，另一段时间向左摆，其中施加的力恒定
        let effort = 50.0 * fn(){
          let phase = time % 4.0
          if phase < 2.0 {
            1.0
          } else {
            -1.0
          }
        }()

        let circle = self.body_list[self.chain.length()+1]
        circle.applyForce(@box2d.b2Vec2(effort, 0), circle.getCenterPosition())
      }
    )
  )

  let mut frame_count_collision = 0.0
  let previous_contact_frame = []
  // 大摆锤撞到人扣血
  game.register_custom_function(
    @server.GameCustomFunction::new(
      @server.GameRunning,
      fn(game: @server.Game, p5: &@p5js.P5JS) {
        p5 |> ignore
        //更新帧计数
        frame_count_collision = frame_count_collision + 1.0
        if previous_contact_frame.length() != game.particle_list.length() {
          previous_contact_frame.clear()
          for _ in game.particle_list {
            previous_contact_frame.push(0.0)
          }
        }
        let circle = self.body_list[self.chain.length()+1]
        for index,particle in game.particle_list {
          for part in particle.get_all_bodies() {
            if game.is_contact(circle, part, strict=true){
              // 防止连续多帧碰撞多次扣血
              if frame_count_collision - previous_contact_frame[index] < 30.0 {
                continue
              }
              particle.control.health = particle.control.health - 20
              previous_contact_frame[index] = frame_count_collision
              println("玩家被大摆锤撞到，扣20点血，当前血量：\{particle.control.health}")
              
              // 触发血雾特效
              let hit_pos = game.get_contact_point(circle, part)[0]
              let circle_velocity = circle.getLinearVelocity()
              add_bob_attack_animation(game, hit_pos, circle_velocity)
            }
          }
        }
      }
    )
  )

  game.register_custom_function(
    @server.GameCustomFunction::new(
      @server.GameRunning,
      fn(game: @server.Game, p5: &@p5js.P5JS) {
        game |> ignore
        self.draw(p5)
      }
    )
  )
}

fn add_bob_attack_animation(game: @server.Game, pos: @box2d.B2Vec2, velocity: @box2d.B2Vec2) -> Unit{
  let (x,y) = @server.world_to_screen(pos.getX(), pos.getY())
  
  // 计算打击方向（基于速度的反方向产生血雾效果）
  let vx = -velocity.getX() * 0.3
  let vy = -velocity.getY() * 0.3
  
  // 调用血雾喷射动画
  @server.register_blood_spray_animation(game, x, y, vx, vy)
}

fn Bob::draw(self: Bob, p5: &@p5js.P5JS) -> Unit {
  p5.push()

  // 绘制 base
  let aabb_base = @server.get_entity_aabb([self.body_list[0]])
  let base_width = @server.world_to_screen_size(aabb_base.getmaxVertex().getX() - aabb_base.getminVertex().getX())
  let base_height = @server.world_to_screen_size(aabb_base.getmaxVertex().getY() - aabb_base.getminVertex().getY())
  @server.drawBody(p5, self.body_list[0], self.base_image_loader.get_image(p5), base_width, base_height, 0,0)

  // 绘制 chain
  for i=1; i<=self.chain.length(); i=i+1{
    let aabb_chain = @server.get_entity_aabb([self.body_list[i]])
    let chain_width = @server.world_to_screen_size(aabb_chain.getmaxVertex().getX() - aabb_chain.getminVertex().getX())
    let chain_height = @server.world_to_screen_size(aabb_chain.getmaxVertex().getY() - aabb_chain.getminVertex().getY())
    @server.drawBody(p5, self.body_list[i], self.chain_image_loader.get_image(p5), chain_width, chain_height, 0,0)
  }
  // 绘制 end
  let aabb_end = @server.get_entity_aabb([self.body_list[self.chain.length()+1]])
  let end_width = @server.world_to_screen_size(aabb_end.getmaxVertex().getX() - aabb_end.getminVertex().getX())
  let end_height = @server.world_to_screen_size(aabb_end.getmaxVertex().getY() - aabb_end.getminVertex().getY())
  @server.drawBody(p5, self.body_list[self.chain.length()+1], self.end_image_loader.get_image(p5), end_width, end_height, 0,0)

  p5.pop()
}

