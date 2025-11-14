pub const PPM = 20.0
const Width: Double = 1000.0
const Height: Double = 1000.0

// 全局开始界面随机数生成器，用于驱动模拟按键的随机行为
let start_rng: Ref[@random.Rand] = { val: @random.Rand::new() }

// 使用已生成的 p5 绑定检测 Enter 键，不需要自定义 extern

fn box2d_init(game:Game) ->Unit{
  // game.create_platform(
  //   (0.0,0.0),
  //   (10.0,1.0)
  // ) |> ignore

  // 平台2的位置: (-5.77, 8.9)，大小: 10x1
  // 平台顶部: y = 8.9 + 0.5 = 9.4
  // 人物高度约3.5米，所以放在 y = 9.4 + 2.0 = 11.4
  // x坐标在平台范围内: -5.77 ± 5 = (-10.77, -0.77)
  // 选择平台中心偏左: x = -3.0
	
	
	
  //create_particle(world, (5.0,10.0)) |> ignore

  // let static_box = game.create_static_box(
  //   (1.0,10.0),
  //   (1.0,0.1)
  // )
  // static_box.setAngularVelocity(0.5)
	
	
	Gun::create(game,0,Some("src/assets/gun1.png"))
	Gun::create(game,1,Some("src/assets/gun1.png"))
	// Sword::create(game,1,Some("sword"))
}

pub fn register_weapon_exchange(game:Game, target_particle: Int, exchange_condition : FixedArray[(Game, &@p5js.P5JS)->Bool]) -> Unit{

  /// 武器切换功能

  let mut pre_change_frame = 0

  game.register_custom_function(
    GameCustomFunction::new(
      GameRunning,
      fn(game: Game, p: &@p5js.P5JS) {

        if game.frame_count - pre_change_frame < 30 {
          return
        }

        let mut has_weapon = false
        let mut index = 0
        for gun in game.weapon.gun_list {
          if gun.owner_id == target_particle {
            has_weapon = true
            break
          }
          index += 1
        }

        let clear_old = fn(){
          if has_weapon {
            game.weapon.gun_list[index].destroy(game)
            game.weapon.gun_list.remove(index) |> ignore
          }
        }

        if(exchange_condition[0](game, p)){
          // 销毁旧武器
          clear_old()
          // 创建手枪
          Gun::create(game, target_particle, Some("src/assets/gun1.png"))
          println("装备手枪!")
          pre_change_frame = game.frame_count
        }
        else if(exchange_condition[1](game, p)){
          // 销毁旧武器
          clear_old()

          // 创建霰弹枪
          game.create_shotgun(target_particle, Some("src/assets/gun2.png"))
          println("装备霰弹枪!")
          pre_change_frame = game.frame_count
        }
        else if(exchange_condition[2](game, p)){
          // 销毁旧武器
          clear_old()
          // 创建狙击枪
          game.create_sniper(target_particle, Some("src/assets/gun3.png"))
          println("装备狙击枪!")
          pre_change_frame = game.frame_count
        }
        else if(exchange_condition[3](game, p)){
          // 销毁旧武器
          clear_old()
          // 创建激光枪
          game.create_laser_rifle(target_particle, Some("src/assets/gun4.png"))
          println("装备激光枪!")
          pre_change_frame = game.frame_count
        }
      }
    )
  )
}

fn load_custom_functions(game:Game) -> Unit {

  /// 昏迷功能
  game.register_custom_function(
    GameCustomFunction::new(
      GameRunning,
      fn(game: Game, p5: &@p5js.P5JS) {
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

  /// 测试生成物品 - K键在角色前方生成生命包
  game.register_custom_function(
    GameCustomFunction::new(
      GameRunning,
      fn(game: Game, p5: &@p5js.P5JS) {
        if(p5.keyIsDown(KeyK)){
          let particle_pos = game.particle_list[0].torso.getCenterPosition()
          game.spawn_health_pack((particle_pos.getX() + 3.0, particle_pos.getY()))
        }
      }
    )
  )

  /// 添加血量输出
  game.register_custom_function(
    GameCustomFunction::new(
      GameRunning,
      fn(game: Game, p5: &@p5js.P5JS) {
        p5 |> ignore
        // 每100帧输出一次血量
        if game.frame_count % 100 == 0 {
          for particle in game.particle_list {
            println("玩家 \{particle.index} 血量: \{particle.control.health}")
          }
        }
      }
    )
  )

  /// 添加body aabb绘制
//   game.register_custom_function(
//     GameCustomFunction::new(
//       GameRunning,
//       fn(game: Game, p5: &@p5js.P5JS) {
//         for i in game.particle_list {
//           draw_aabb(p5, 
//           get_entity_aabb(i.get_all_bodies()), 
//           fn (p5){
//             p5.noFill()
//             p5.fillColorPara(255.0, Some(0.0), Some(0.0), Some(150.0))
//           })
//         }
//       }
//     )
//   )

}

pub fn register_mouse_shoot(game:Game, player_id : Int) -> Unit {
  /// 鼠标射击功能 - 左键点击朝鼠标方向射击（支持自动瞄准）
  game.register_custom_function(
    GameCustomFunction::new(
      GameRunning,
      fn(game: Game, p5: &@p5js.P5JS) {
        // 检查是否按下鼠标左键
        if p5.mouseIsPressed() {
          
          // 先检查是否启用自动瞄准
          let angle = match game.get_auto_aim_config(player_id) {
            Some(config) => match game.get_auto_aim_angle(player_id, config) {
              Some(auto_angle) => auto_angle  // 使用自动瞄准角度
              None => {
                // 没有自动瞄准目标，使用鼠标位置
                let mouse_x = p5.getMouseX().to_double()
                let mouse_y = p5.getMouseY().to_double()
                let world_coords = screen_to_world(mouse_x, mouse_y)
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
              let world_coords = screen_to_world(mouse_x, mouse_y)
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

pub fn register_control(game:Game) -> Unit{
  // 玩家0: WASD移动，Z射击，T切换自动瞄准
  game.register_particle_control_config(
    ParticleControlConfig::new(
      0,
      left_key = Some(@p5js.KeyA),
      right_key = Some(@p5js.KeyD),
      jump_key = Some(@p5js.KeyW),
			faint_key = Some(@p5js.KeyS),
      shoot_key = Some(@p5js.KeyZ),
      toggle_auto_aim_key = Some(@p5js.KeyT),
      from_internet = false,
    )
  ) catch {
    ParticleControlConfigError(e) =>{
      println("Error registering particle control config: \{e}")
    }
  }

  // 玩家1: 方向键移动，Down射击，Slash(/)切换自动瞄准
  game.register_particle_control_config(
    ParticleControlConfig::new(
      1,
      left_key = Some(@p5js.ArrowLeft),
      right_key = Some(@p5js.ArrowRight),
      jump_key = Some(@p5js.ArrowUp),
			faint_key = Some(@p5js.ArrowDown),
      shoot_key = Some(@p5js.Slash),
      toggle_auto_aim_key = Some(@p5js.Period),
      from_internet = false,
    )
  ) catch {
    ParticleControlConfigError(e) =>{
      println("Error registering particle control config: \{e}")
    }
  }
}

pub fn register_auto_aim(game:Game) -> Unit {
  // 为玩家0注册自动瞄准配置
  // 默认启用，可通过T键切换
  // 默认瞄准其他玩家和敌人，最大范围50米
  let config_player0 = AutoAimConfig::new(
    enabled=true,
    target_types=[EntityType::Player, EntityType::Enemy],
    max_range=50.0
  )
  game.register_auto_aim_config(0, config_player0)
  
  // 为玩家1注册自动瞄准配置
  let config_player1 = AutoAimConfig::new(
    enabled=true,
    target_types=[EntityType::Player, EntityType::Enemy],
    max_range=50.0
  )
  game.register_auto_aim_config(1, config_player1)
  
  println("自动瞄准系统已初始化")
  println("  - 按 T 键切换自动瞄准开关")
  println("  - 可瞄准其他玩家和敌方AI实体")
  println("  - 自动排除瞄准自己")
  println("  - 最大瞄准距离: 50米")
}

pub fn register_hp_show(game:Game) -> Unit {
  game.register_custom_function(
    GameCustomFunction::new(
      GameRunning,
      fn(game: Game, p5: &@p5js.P5JS) {
        // 在画布上为每个角色绘制血量条（屏幕坐标）
        // 位置：取角色躯干中心向上偏移一点，避免遮挡角色
        for particle in game.particle_list {
          // 获取角色躯干中心（world 坐标）
          let pos = particle.torso.getCenterPosition()
          // 往上偏移约 1.5 米（角色头顶位置）
          let screen_pos = world_to_screen(pos.getX(), pos.getY())

          let x = screen_pos.0
          let y = screen_pos.1 - 50.0

          if game.frame_count % 60 == 0 {
            println("绘制血量条，角色 \{particle.index} 屏幕位置: (\{x}, \{y})")
          }

          // 血条尺寸（像素）
          let bar_w = 40.0
          let bar_h = 6.0

          // 计算血量比（假定最大血量为100）
          // 将整型血量转换为 double 并归一化（假定满血=100）
          let mut hp_ratio = particle.control.health.to_double() / 100.0
          if hp_ratio < 0.0 {
            hp_ratio = 0.0
          }
          if hp_ratio > 1.0 {
            hp_ratio = 1.0
          }

          // 霓虹效果：先绘制弱光，再绘制深色背景，最后绘制鲜艳前景，数值居中显示在血条内
          let left = x - bar_w / 2.0
          let top = y - bar_h / 2.0

          // 弱光（扩大区域以模拟发光）
          p5.fillColorPara(60.0, Some(200.0), Some(180.0), Some(90.0))
          p5.rect(left - 4.0, top - 4.0, bar_w + 10.0, bar_h + 10.0)

          // 背景（深色，半透明）
          p5.fillColorPara(8.0, Some(8.0), Some(12.0), Some(200.0))
          p5.rect(left, top, bar_w + 2.0, bar_h + 2.0)

          // 前景（霓虹渐变：粉色 -> 青绿）
          let fg_w = bar_w * hp_ratio
          let low_r = 255.0
          let low_g = 20.0
          let low_b = 160.0
          let high_r = 0.0
          let high_g = 255.0
          let high_b = 230.0
          let r = low_r * (1.0 - hp_ratio) + high_r * hp_ratio
          let g = low_g * (1.0 - hp_ratio) + high_g * hp_ratio
          let b = low_b * (1.0 - hp_ratio) + high_b * hp_ratio
          p5.fillColorPara(r, Some(g), Some(b), Some(255.0))
          p5.rect(left + 1.0, top + 1.0, fg_w, bar_h)

          // 血量数字：居中显示在血条内（先绘制阴影，再绘制白色文字）
          let text_x = left + (bar_w + 2.0) / 2.0
          let text_y = top + (bar_h + 2.0) / 2.0 + 3.0
          p5.textSizeSet(10.0)
          p5.fillColorPara(0.0, Some(0.0), Some(0.0), Some(180.0))
          p5.text(particle.control.health.to_string(), text_x + 1.0, text_y + 1.0, Some(Width), Some(Height))
          p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(255.0))
          p5.text(particle.control.health.to_string(), text_x, text_y, Some(Width), Some(Height))

          // 显示 是玩家几 (先绘制阴影，再绘制白色文字)
          let text_x = left + (bar_w + 2.0) / 2.0
          let text_y = top - 10.0
          p5.textSizeSet(12.0)
          p5.fillColorPara(0.0, Some(0.0), Some(0.0), Some(180.0))
          p5.text("P \{particle.index}", text_x + 1.0, text_y + 1.0, Some(Width), Some(Height))
          p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(255.0))
          p5.text("P \{particle.index}", text_x, text_y, Some(Width), Some(Height))

        }
      }
    )
  )
}

pub fn register_show_mouse_screen_coords(game:Game) -> Unit {
  game.register_custom_function(
    GameCustomFunction::new(
      GameRunning,
      fn(game: Game, p5: &@p5js.P5JS) {
        let mouse_x = p5.getMouseX().to_double();
        let mouse_y = p5.getMouseY().to_double();
        // 每秒输出一次鼠标屏幕坐标
        if game.frame_count % 60 == 0 {
          println("鼠标位置: (\{mouse_x}, \{mouse_y})");
        }
      }
    )
  )
}

///| 实验性的，测试动画
/// 在坐标 100，100 每秒画一个炫酷的花纹，使用 SampleAnimation
// fn register_animation(game: Game) -> Unit {
//   // 创建一个帧计数器来追踪动画进度
//   let frame_counter: Ref[Int] = { val: 0 }
  
//   let animation = SampleAnimation::new(
//     fn(world: &@box2d.World, p5: &@p5js.P5JS) -> AnimationState {
//       world |> ignore  // 这个动画不需要物理世界
      
//       // 每帧更新计数器
//       frame_counter.val = frame_counter.val + 1
      
//       // 计算旋转角度（每秒转一圈，60帧/秒）
//       let angle = (frame_counter.val.to_double() / 60.0) * 2.0 * 3.14159265359
      
//       // 在屏幕坐标 (100, 100) 绘制炫酷的螺旋花纹
//       let center_x = 100.0
//       let center_y = 100.0
//       let max_radius = 40.0  // 花纹最大半径
      
//       // 绘制多层旋转的花瓣图案
//       let num_petals = 8
//       for i = 0; i < num_petals; i = i + 1 {
//         let petal_angle = angle + (i.to_double() / num_petals.to_double()) * 2.0 * 3.14159265359
        
//         // 计算花瓣末端位置（相对于中心点）
//         let x = center_x + max_radius * @cmath.cos(petal_angle)
//         let y = center_y + max_radius * @cmath.sin(petal_angle)
        
//         // 霓虹色彩渐变（随时间变化）
//         let hue = (frame_counter.val.to_double() + i.to_double() * 30.0).mod(360.0)
//         let r = 128.0 + 127.0 * @cmath.cos(hue * 0.01745329252)
//         let g = 128.0 + 127.0 * @cmath.cos((hue + 120.0) * 0.01745329252)
//         let b = 128.0 + 127.0 * @cmath.cos((hue + 240.0) * 0.01745329252)
        
//         // 绘制发光效果 - 填充颜色
//         p5.fillColorPara(r, Some(g), Some(b), Some(80.0))
        
//         // 绘制花瓣（椭圆）- 在花瓣位置的一半处
//         let petal_x = center_x + (max_radius / 2.0) * @cmath.cos(petal_angle)
//         let petal_y = center_y + (max_radius / 2.0) * @cmath.sin(petal_angle)
//         p5.ellipse(petal_x, petal_y, 20.0, 10.0)
        
//         // 绘制连接线（从中心到花瓣末端）
//         p5.line(center_x, center_y, x, y)
//       }
      
//       // 中心圆（脉动效果）
//       let pulse = 10.0 + 5.0 * @cmath.sin(angle * 3.0)
//       p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(200.0))
//       p5.noStroke()
//       p5.circle(center_x, center_y, pulse)
      
//       // 动画持续进行
//       AnimationState::InProgress
//     }
//   )
  
//   // 将动画添加到游戏中（需要转换为 trait 对象）
//   game.add_animation(animation)
  
//   println("炫酷花纹动画已注册在屏幕坐标 (100, 100)")
// }

/// 注册音频控制功能
pub fn register_audio_controls(game: Game) -> Unit {
  // 音频控制：M键切换背景音乐，N键切换音效，7键降低音量，0键提高音量
  game.register_custom_function(
    GameCustomFunction::new(
      GameRunning,
      fn(game: Game, p5: &@p5js.P5JS) {
        // 使用帧计数来防止按键重复触发（每30帧才能触发一次）
        let cooldown = 30
        let volume_cooldown = 10  // 音量调节使用更短的冷却时间
        
        // M键：切换背景音乐
        if p5.keyIsDown(KeyM) && game.frame_count % cooldown == 0 {
          game.audio.toggle_bgm()
          let status = if game.audio.bgm_enabled { "开启" } else { "关闭" }
          println("背景音乐已\{status}")
        }
        
        // N键：切换音效
        if p5.keyIsDown(KeyN) && game.frame_count % cooldown == 0 {
          game.audio.toggle_sfx()
          let status = if game.audio.sfx_enabled { "开启" } else { "关闭" }
          println("音效已\{status}")
        }
        
        // 7键：降低音量
        if p5.keyIsDown(Digit7) && game.frame_count % volume_cooldown == 0 {
          let new_volume = game.audio.master_volume - 0.1
          game.audio.set_master_volume(new_volume)
          println("主音量: \{game.audio.master_volume}")
        }
        
        // 0键：提高音量
        if p5.keyIsDown(Digit0) && game.frame_count % volume_cooldown == 0 {
          let new_volume = game.audio.master_volume + 0.1
          game.audio.set_master_volume(new_volume)
          println("主音量: \{game.audio.master_volume}")
        }
      }
    )
  )
  
  println("音频控制已注册:")
  println("  M键 - 切换背景音乐")
  println("  N键 - 切换音效")
  println("  7键 - 降低音量")
  println("  0键 - 提高音量")
}

fn register_end_router(game: Game) -> Unit {
  game.register_custom_function(
    GameCustomFunction::new(
      GameOver,
      fn(game: Game, p: &@p5js.P5JS) {
        if !game.navigation_requested {
          if (p.keyIsDown(@p5js.KeyR)) {
            game.navigation_requested = true
            game.navigation_target = None
            reloadPage()
          } else if (p.keyIsDown(@p5js.Digit1)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level1.html")
            navigateTo("game-level1.html")
          } else if (p.keyIsDown(@p5js.Digit2)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level2.html")
            navigateTo("game-level2.html")
          } else if (p.keyIsDown(@p5js.Digit3)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level3.html")
            navigateTo("game-level3.html")
          } else if (p.keyIsDown(@p5js.Digit4)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level4.html")
            navigateTo("game-level4.html")
          } else if (p.keyIsDown(@p5js.Digit5)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level5.html")
            navigateTo("game-level5.html")
          }
        }
      }
    )
  )
}

fn register_stop_router(game: Game) -> Unit {
  game.register_custom_function(
    GameCustomFunction::new(
      GamePaused,
      fn(game: Game, p: &@p5js.P5JS) {
        if !game.navigation_requested {
          if (p.keyIsDown(@p5js.KeyR)) {
            game.navigation_requested = true
            game.navigation_target = None
            reloadPage()
          } else if (p.keyIsDown(@p5js.Digit1)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level1.html")
            navigateTo("game-level1.html")
          } else if (p.keyIsDown(@p5js.Digit2)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level2.html")
            navigateTo("game-level2.html")
          } else if (p.keyIsDown(@p5js.Digit3)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level3.html")
            navigateTo("game-level3.html")
          } else if (p.keyIsDown(@p5js.Digit4)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level4.html")
            navigateTo("game-level4.html")
          } else if (p.keyIsDown(@p5js.Digit5)) {
            game.navigation_requested = true
            game.navigation_target = Some("game-level5.html")
            navigateTo("game-level5.html")
          }
        }
      }
    )
  )
}

pub fn register_both_weapon_change(game : Game)->Unit{
  let key_pressed = fn(key: @p5js.KeyCode)  {
    fn(game: Game, p: &@p5js.P5JS) -> Bool {
      game |> ignore
      p.keyIsDown(key)
    }
  }

  register_weapon_exchange(game, 0, [key_pressed(@p5js.Digit1), key_pressed(@p5js.Digit2), key_pressed(@p5js.Digit3), key_pressed(@p5js.Digit4)])
  register_weapon_exchange(game, 1, [key_pressed(@p5js.Digit7), key_pressed(@p5js.Digit8), key_pressed(@p5js.Digit9), key_pressed(@p5js.Digit0)])
}

fn main {

	{
		let game = create_game(background = BackgroundImage::new(Some("./src/game-level5/images/background.png")))
		load_map(game,5)|> ignore
    box2d_init(game)

    // ==== Start Screen: 初始化并注册开始界面逻辑 ====
    // 激活全局开始界面标记
    start_screen_active.val = true
    let start_initialized: Ref[Bool] = { val: false }
    
    // 播放菜单 BGM
    game.audio.play_bgm(AudioEventType::BgmMenu)

    // 注册开始界面时的自定义函数（在 GameRunning 阶段设置每个玩家的模拟按键并绘制覆盖层）
    game.register_custom_function(
      GameCustomFunction::new(
        GameRunning,
        fn(game: Game, p5: &@p5js.P5JS) {
          // 仅在 start_screen_active 为 true 时拦截并绘制开始界面
          if not(start_screen_active.val) {
            return
          }

          // 第一次进入：初始化血量与自动瞄准（开启），并初始化模拟按键数组
          if not(start_initialized.val) {
            // 将玩家血量设为 10000
            for p in game.particle_list {
              p.control.health = 10000
            }
            // 开启自动瞄准
            for i = 0; i < game.particle_list.length(); i = i + 1 {
              match game.get_auto_aim_config(i) {
                Some(cfg) => cfg.enabled = true
                None => game.register_auto_aim_config(i, AutoAimConfig::new(enabled=true))
              }
            }
            // 初始化每个玩家的模拟按键与倒计时
            start_simulated_keys.val = Array::new()
            start_sim_timers.val = Array::new()
            for i = 0; i < game.particle_list.length(); i = i + 1 {
              start_simulated_keys.val.push(Array::new())
              start_sim_timers.val.push(0)
            }
            // 为了避免所有玩家同时选择相同行为（例如都向右走），
            // 在初始化时为每个玩家分配一个错开的初始动作并设置计时器
            for i = 0; i < game.particle_list.length(); i = i + 1 {
              // 使用索引生成的伪偏移量来选择初始动作
              let left_k = if i < game.particle_control_configs.length() { game.particle_control_configs[i].left_key } else { @p5js.KeyA }
              let right_k = if i < game.particle_control_configs.length() { game.particle_control_configs[i].right_key } else { @p5js.KeyD }
              let jump_k = if i < game.particle_control_configs.length() { game.particle_control_configs[i].jump_key } else { @p5js.KeyW }
              let shoot_k = if i < game.particle_control_configs.length() { game.particle_control_configs[i].shoot_key } else { @p5js.KeyZ }

              // 使用全局 RNG 随机选择初始动作（避免所有玩家同步）
              let rng = start_rng.val
              let choice = rng.int() % 100
              if choice < 35 {
                start_simulated_keys.val[i] = [ right_k ]
              } else if choice < 70 {
                start_simulated_keys.val[i] = [ left_k ]
              } else if choice < 85 {
                start_simulated_keys.val[i] = [ jump_k ]
              } else {
                start_simulated_keys.val[i] = [ shoot_k ]
              }
              // 初始动作持续 1-4 秒（60-240 帧），增加多样性
              start_sim_timers.val[i] = 60 + (rng.int() % 181)
            }
            start_initialized.val = true
          }

          // 每帧处理：如果某玩家的模拟按键计时器到期，则选择一个新的动作并持续3秒（180帧）
            for i = 0; i < game.particle_list.length(); i = i + 1 {
            if start_sim_timers.val[i] <= 0 {
              // 使用全局 RNG 来选择下一动作与持续时间
              let rng = start_rng.val
              // 取该玩家的控制绑定（回退到默认键位以防没有注册）
              let left_k = if i < game.particle_control_configs.length() { game.particle_control_configs[i].left_key } else { @p5js.KeyA }
              let right_k = if i < game.particle_control_configs.length() { game.particle_control_configs[i].right_key } else { @p5js.KeyD }
              let jump_k = if i < game.particle_control_configs.length() { game.particle_control_configs[i].jump_key } else { @p5js.KeyW }
              let shoot_k = if i < game.particle_control_configs.length() { game.particle_control_configs[i].shoot_key } else { @p5js.KeyZ }

              let choice = rng.int() % 100
              if choice < 35 {
                // 向右行走
                start_simulated_keys.val[i] = [ right_k ]
              } else if choice < 70 {
                // 向左行走
                start_simulated_keys.val[i] = [ left_k ]
              } else if choice < 85 {
                // 跳跃
                start_simulated_keys.val[i] = [ jump_k ]
              } else {
                // 射击
                start_simulated_keys.val[i] = [ shoot_k ]
              }
              // 随机持续 1-4 秒（60-240 帧）
              start_sim_timers.val[i] = 60 + (rng.int() % 181)
            } else {
              start_sim_timers.val[i] = start_sim_timers.val[i] - 1
            }
          }

          // 绘制开始界面提示（p5）
          p5.push()
          p5.fillColorPara(0.0, Some(0.0), Some(0.0), Some(150.0))
          p5.noStroke()
          p5.rect(0.0, 0.0, Width, Height)
          p5.textSizeSet(48.0)
          p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(255.0))
          p5.textAlign("center", Some("center"))
          p5.text("按 Enter 开始游戏", Width / 2.0, Height / 2.0, None, None)
          p5.pop()

          // 仅响应 Enter 键：按下后把玩家恢复为 100 血并回到起始位置，然后关闭开始界面并跳转到 level1
          if (p5.keyIsDown(Enter)) {
            // 恢复每个玩家到正常血量（100）并清除濒死状态；保留当前位置
            for i = 0; i < game.particle_list.length(); i = i + 1 {
              let particle = game.particle_list[i]
              particle.control.health = 100
              particle.control.faint_state = false
              particle.control.faint_resistance = 0
              // 清除走路/跳跃冷却，确保玩家能马上响应输入
              particle.control.walk_cooldown = 0
              particle.control.jump_cooldown = -1
            }
            // 停止菜单 BGM 并播放关卡 BGM
            game.audio.stop_bgm()
            game.play_level_bgm(5)
            // 仅关闭开始界面，保留当前关卡和世界状态（不跳转）
            start_screen_active.val = false
          }
        }
      )
    )
		load_custom_functions(game)
    
		register_control(game)
		register_auto_aim(game)
		register_hp_show(game)
    register_both_weapon_change(game)

    register_mouse_shoot(game, 0)

		// register_show_mouse_screen_coords(game)
		// register_animation(game)
		// register_animation(game)
		// register_blood_spray_animation(game,500.0,500.0, 1.0, 1.0)
		// register_smoke_animation(game,500.0,500.0)

		game.start_run()
	}

}