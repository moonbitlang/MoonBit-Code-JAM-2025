///|
pub(all) struct MenuPanelRender {
  mut current_tab : Int
  mut current_index : Int
  mut panel_x : Double
  mut panel_y : Double
  mut panel_width : Double
  mut panel_height : Double
}

///|
pub fn MenuPanelRender::new() -> MenuPanelRender {
  MenuPanelRender::{
    current_tab: 0,
    current_index: 0,
    panel_x: 250.0,
    panel_y: 50.0,
    panel_width: 780.0,
    panel_height: 580.0,
  }
}

///|
let menuPanelRenderInstance : Ref[MenuPanelRender?] = Ref::new(None)

///|
pub let menuPanelRenderSingleton : MenuPanelRender = MenuPanelRender::get_instance()

///|
pub fn MenuPanelRender::get_instance() -> MenuPanelRender {
  match menuPanelRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = MenuPanelRender::new()
      menuPanelRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
fn renderMenu(ctx : @Core.CanvasRenderingContext2D) -> Unit {
  let menu = @Panels.menuPanelSingleton
  if menu.is_open {
    ctx.save()
    // 背景遮罩
    ctx.fillStyle("rgba(0,0,0,0.55)")
    ctx.fillRect(0, 0, @Core.map.width, @Core.map.height)
    // 主面板背景
    ctx.fillStyle("#FFB86C")
    @UIComposeRender.drawRoundRect(ctx, menu.x, menu.y, menu.w, menu.h, 30.0)
    ctx.fill()
    // 边框 
    ctx.strokeStyle("#E8B890")
    ctx.lineWidth(30)
    @UIComposeRender.drawRoundRect(ctx, menu.x, menu.y, menu.w, menu.h, 30.0)
    ctx.stroke()
    // 绘制音效滑块
    println("sound_slider_x:\{menu.sound_slider_x}")
    // println(menu.slider_y)
    @UIComposeRender.drawSlider(
      ctx,
      menu.sound_slider_x,
      menu.slider_y,
      menu.slider_width,
      menu.slider_height,
      menu.sound_volume,
      "游戏音效",
      "🔊",
    )
    @UIComposeRender.drawSlider(
      ctx,
      menu.music_slider_x,
      menu.slider_y,
      menu.slider_width,
      menu.slider_height,
      menu.music_volume,
      "背景音乐",
      "🎵",
    )
    // 绘制按钮
    @UIComposeRender.drawButton(
      ctx,
      menu.exit_button_x,
      menu.exit_button_y,
      menu.button_width,
      menu.button_height,
      text="退出本关",
      icon="🏠",
    )
    @UIComposeRender.drawButton(
      ctx,
      menu.help_button_x,
      menu.help_button_y,
      menu.button_width,
      menu.button_height,
      text="本关说明",
      icon="?",
    )
    @UIComposeRender.drawButton(
      ctx,
      menu.restart_button_x,
      menu.restart_button_y,
      menu.button_width,
      menu.button_height,
      text="重新开始",
      icon="🔄",
    )
    @UIComposeRender.drawButton(
      ctx,
      menu.continue_button_x,
      menu.continue_button_y,
      menu.large_button_width,
      menu.large_button_height,
      text="继续游戏",
      isLarge=true,
    )
    @UIComposeRender.drawButton(
      ctx,
      menu.clear_cache_x,
      menu.clear_cache_y,
      menu.button_width,
      menu.button_height,
      text="清除缓存",
      icon="🧹",
      // isLarge=true,
    )

    // 绘制分隔线
    // ctx.strokeStyle("#E8B890")
    // ctx.lineWidth(2)
    // ctx.beginPath()
    // ctx.moveTo(menu.x + 250, menu.y + 280)
    // ctx.lineTo(menu.x + 250, menu.y + 320)
    // ctx.stroke()
    // ctx.beginPath()
    // ctx.moveTo(menu.x + 550, menu.y + 280)
    // ctx.lineTo(menu.x + 550, menu.y + 320)
    // ctx.stroke()
    ctx.restore()
  }
}

///|
pub fn MenuPanelRender::render(
  self : MenuPanelRender,
  timestamp : Double,
) -> Unit {
  ignore(self)
  ignore(timestamp)
  let ctx = @Core.ctxSingleton
  let menu = @Panels.menuPanelSingleton
  if menu.show_help_Panel {
    ctx.save()
    // 背景遮罩
    ctx.fillStyle("rgba(0,0,0,0.55)")
    ctx.fillRect(0, 0, @Core.map.width, @Core.map.height)

    // 主面板
    draw_panel(ctx)

    // 绘制内容
    draw_content(ctx)

    // 绘制底部图标栏
    draw_icon_bar(ctx)

    // 绘制关闭按钮
    draw_close_button(ctx)
    draw_tabs(ctx)
    ctx.restore()
  } else if menu.is_open {
    renderMenu(ctx)
  }
}

///|
/// Draw the main panel background
fn draw_panel(ctx : @Core.CanvasRenderingContext2D) -> Unit {
  let self = menuPanelRenderSingleton
  let x = self.panel_x
  let y = self.panel_y
  let w = self.panel_width
  let h = self.panel_height

  // 主面板边框
  ctx.fillStyle("#FFD700")
  @UIComposeRender.drawRoundRect(ctx, x, y, w, h, 40)
  ctx.fill()

  // 主面板内部
  ctx.fillStyle("#FF8C00")
  @UIComposeRender.drawRoundRect(ctx, x + 10, y + 10, w - 20, h - 20, 30)
  ctx.fill()

  // 内容区域
  ctx.fillStyle("#FFF8DC")
  @UIComposeRender.drawRoundRect(ctx, x + 20, y + 20, w - 40, h - 40, 20)
  ctx.fill()
}

///|
/// Draw the tab headers at the top
fn draw_tabs(ctx : @Core.CanvasRenderingContext2D) -> Unit {
  let render = menuPanelRenderSingleton
  let menu = @Panels.menuPanelSingleton
  ignore(menu)
  let tab_width = 150.0
  let tab_height = 60.0
  let tab_y = 20.0
  let start_x = 300.0
  let tab_names = if menu.data.neutrals.length() == 0 {
    ["炮塔", "敌人"]
  } else {
    ["炮塔", "敌人", "中立"]
  }
  // println(tab_names)
  for i in 0..<tab_names.length() {
    let tab_x = start_x + i.to_double() * (tab_width + 20)
    let tab_name = tab_names[i]

    // 标签背景
    ctx.fillStyle(if render.current_tab == i { "#FFD700" } else { "#FFEC8B" })
    ctx.beginPath()
    ctx.moveTo(tab_x, tab_y)
    ctx.lineTo(tab_x + tab_width, tab_y)
    ctx.arc(
      tab_x + tab_width,
      tab_y + tab_height / 2,
      tab_height / 2,
      @math.PI * 1.5,
      @math.PI * 0.5,
    )
    ctx.lineTo(tab_x, tab_y + tab_height)
    ctx.closePath()
    ctx.fill()

    // 标签文字
    ctx.fillStyle("#8B4513")
    ctx.font("bold 24px Arial")
    ctx.textAlign("center")
    ctx.fillText(tab_name, tab_x + tab_width / 2, tab_y + 35)
  }
  ctx.textAlign("left")
}

///|
/// Draw the left content section
fn draw_left_content(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  width : Double,
  height : Double,
) -> Unit {
  ignore(width)
  ignore(height)
  let render = menuPanelRenderSingleton
  let menu = @Panels.menuPanelSingleton
  let data = get_current_data(
    menu.data,
    render.current_tab,
    render.current_index,
  )

  // Extract data based on variant type
  match data {
    TowerData(tower) => {
      let name = tower.name
      let type_text = tower.tower_type

      // 名称
      ctx.fillStyle("#8B4513")
      ctx.font("bold 32px Arial")
      ctx.fillText(name, x + 20, y + 40)

      // 图标
      let icon_size = 150.0
      // ctx.fillStyle("#FFFFFF")
      // @UIComposeRender.drawRoundRect(
      //   ctx,
      //   x + 30,
      //   y + 60,
      //   icon_size,
      //   icon_size,
      //   15,
      // )
      // ctx.fill()

      ctx.save()
      ctx.translate(x + 100, y + 130)
      ctx.scale(2, 2)
      draw_tower(tower.icon, 0, 0)
      ctx.restore()

      // 绘制图标（这里用占位符）
      // ctx.fillStyle("#000000")
      // ctx.font("bold 16px Arial")
      // ctx.textAlign("center")
      // ctx.fillText("图", x + 30 + icon_size / 2, y + 60 + icon_size / 2 + 5)
      // ctx.textAlign("left")

      // draw_tower()

      // 类型标签
      ctx.fillStyle("#8B4513")
      @UIComposeRender.drawRoundRect(
        ctx,
        x + 30 + icon_size / 2 - 30,
        y + 60 + icon_size + 10,
        60,
        25,
        10,
      )
      ctx.fill()
      ctx.fillStyle("#FFFFFF")
      ctx.font("14px Arial")
      ctx.fillText(
        type_text,
        x + 30 + icon_size / 2 - 15,
        y + 60 + icon_size + 25,
      )
    }
    EnemiesData(e) => {
      let name = e.name
      let type_text = e.entity_type

      // 名称
      ctx.fillStyle("#8B4513")
      ctx.font("bold 32px Arial")
      ctx.fillText(name, x + 20, y + 40)

      // 图标
      let icon_size = 150.0
      // ctx.fillStyle("#FFFFFF")
      // @UIComposeRender.drawRoundRect(
      //   ctx,
      //   x + 30,
      //   y + 60,
      //   icon_size,
      //   icon_size,
      //   15,
      // )
      // ctx.fill()

      // 绘制图标（这里用占位符）
      // ctx.fillStyle("#000000")
      // ctx.font("bold 16px Arial")
      // ctx.textAlign("center")
      // ctx.fillText("图", x + 30 + icon_size / 2, y + 60 + icon_size / 2 + 5)
      // ctx.textAlign("left")

      ctx.save()
      ctx.translate(x + 100, y + 130)
      ctx.scale(2, 2)
      draw_enemy(e.icon, 0, 0)
      ctx.restore()

      // draw_tower()

      // 类型标签
      ctx.fillStyle("#8B4513")
      @UIComposeRender.drawRoundRect(
        ctx,
        x + 30 + icon_size / 2 - 30,
        y + 60 + icon_size + 10,
        60,
        25,
        10,
      )
      ctx.fill()
      ctx.fillStyle("#FFFFFF")
      ctx.font("14px Arial")
      ctx.fillText(
        type_text,
        x + 30 + icon_size / 2 - 15,
        y + 60 + icon_size + 25,
      )
    }
    NeutralElementsData(n) => {
      let name = n.name
      let type_text = n.entity_type

      // 名称
      ctx.fillStyle("#8B4513")
      ctx.font("bold 32px Arial")
      ctx.fillText(name, x + 20, y + 40)

      // 图标
      let icon_size = 150.0
      // ctx.fillStyle("#FFFFFF")
      // @UIComposeRender.drawRoundRect(
      //   ctx,
      //   x + 30,
      //   y + 60,
      //   icon_size,
      //   icon_size,
      //   15,
      // )
      // ctx.fill()

      // 绘制图标（这里用占位符）
      // ctx.fillStyle("#000000")
      // ctx.font("bold 16px Arial")
      // ctx.textAlign("center")
      // ctx.fillText("图", x + 30 + icon_size / 2, y + 60 + icon_size / 2 + 5)
      // ctx.textAlign("left")
      // draw_neutral_elements()
      // draw_tower()
      ctx.save()
      ctx.translate(x + 100, y + 130)
      ctx.scale(2, 2)
      draw_neutral_elements(n.icon, 0, 0)
      ctx.restore()

      // 类型标签
      ctx.fillStyle("#8B4513")
      @UIComposeRender.drawRoundRect(
        ctx,
        x + 30 + icon_size / 2 - 30,
        y + 60 + icon_size + 10,
        60,
        25,
        10,
      )
      ctx.fill()
      ctx.fillStyle("#FFFFFF")
      ctx.font("14px Arial")
      ctx.fillText(
        type_text,
        x + 30 + icon_size / 2 - 15,
        y + 60 + icon_size + 25,
      )
    }
  }
}

///|
/// Draw the content area
fn draw_content(ctx : @Core.CanvasRenderingContext2D) -> Unit {
  let self = menuPanelRenderSingleton
  ignore(self)
  let content_x = 300.0
  let content_y = 100.0
  let content_width = 680.0
  let content_height = 400.0

  // 分割线
  ctx.strokeStyle("#D2B48C")
  ctx.lineWidth(2)
  ctx.beginPath()
  ctx.moveTo(content_x + 200, content_y)
  ctx.lineTo(content_x + 200, content_y + content_height)
  ctx.stroke()

  // 左侧信息区
  draw_left_content(ctx, content_x, content_y, content_width, content_height)

  // 右侧信息区
  draw_right_content(ctx, content_x, content_y, content_width, content_height)
}

///|
/// Draw the right content section
fn draw_right_content(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  width : Double,
  height : Double,
) -> Unit {
  ignore(width)
  ignore(height)
  let render = menuPanelRenderSingleton
  let menu = @Panels.menuPanelSingleton
  let data = get_current_data(
    menu.data,
    render.current_tab,
    render.current_index,
  )
  match data {
    DataVariant::TowerData(tower) => {
      // 炮塔类型
      // 升级信息
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("升级信息", x + 220, y + 40)

      // 建造价格
      ctx.fillStyle("#8B4513")
      ctx.font("16px Arial")
      ctx.fillText("建造价格", x + 220, y + 70)
      ctx.fillStyle("#FFD700")
      ctx.fillText("💰 " + tower.cost.to_string(), x + 220, y + 90)

      // 升到2级
      ctx.fillStyle("#8B4513")
      ctx.fillText("升到2级", x + 320, y + 70)
      ctx.fillStyle("#FFD700")
      ctx.fillText("💰 " + tower.upgrade2.to_string(), x + 320, y + 90)

      // 升到顶级
      ctx.fillStyle("#8B4513")
      ctx.fillText("升到顶级", x + 420, y + 70)
      ctx.fillStyle("#FFD700")
      ctx.fillText("💰 " + tower.upgrade_max.to_string(), x + 420, y + 90)

      // 炮塔说明
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("炮塔说明", x + 220, y + 140)
      ctx.font("16px Arial")
      ctx.fillText(tower.description, x + 220, y + 170)

      // 使用技巧
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("使用技巧", x + 420, y + 140)
      ctx.font("16px Arial")
      ctx.fillText(tower.tips, x + 420, y + 170)

      // 属性条
      ctx.fillStyle("#8B4513")
      ctx.font("bold 18px Arial")
      ctx.fillText("伤害", x + 220, y + 240)
      ctx.fillStyle("#00BFFF")
      ctx.fillRect(x + 270, y + 230, tower.stats.damage.to_double(), 10)
      ctx.strokeStyle("#8B4513")
      ctx.strokeRect(x + 270, y + 230, 100, 10)
      ctx.fillStyle("#8B4513")
      ctx.fillText("攻速", x + 420, y + 240)
      ctx.fillStyle("#FFA500")
      ctx.fillRect(x + 470, y + 230, tower.stats.speed.to_double(), 10)
      ctx.strokeStyle("#8B4513")
      ctx.strokeRect(x + 470, y + 230, 100, 10)
    }
    EnemiesData(entity) => {
      // 敌人/角色/中立类型
      // 简介
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("简介", x + 220, y + 40)
      ctx.font("18px Arial")
      ctx.fillText(entity.intro, x + 220, y + 70)

      // 应对技巧/使用技巧
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("技巧", x + 220, y + 120)
      ctx.font("18px Arial")
      ctx.fillText(entity.tips, x + 220, y + 150)

      // 属性图标
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("属性", x + 220, y + 200)
      for i in 0..<entity.attributes.length() {
        let attr = entity.attributes[i]
        let icon_x = x + 220 + i.to_double() * 80
        let icon_y = y + 220

        // 属性图标
        ctx.fillStyle("#FFFFFF")
        ctx.beginPath()
        ctx.arc(icon_x + 20, icon_y + 20, 20, 0, @math.PI * 2)
        ctx.fill()



        // 图标文本
        ctx.fillStyle("#000000")
        ctx.font("12px Arial")
        ctx.fillText(attr.text, icon_x + 5, icon_y + 50)
      }
    }
    DataVariant::NeutralElementsData(entity) => {
      // 敌人/角色/中立类型
      // 简介
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("简介", x + 220, y + 40)
      ctx.font("18px Arial")
      ctx.fillText(entity.intro, x + 220, y + 70)

      // 应对技巧/使用技巧
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("技巧", x + 220, y + 120)
      ctx.font("18px Arial")
      ctx.fillText(entity.tips, x + 220, y + 150)

      // 属性图标
      ctx.fillStyle("#8B4513")
      ctx.font("bold 20px Arial")
      ctx.fillText("属性", x + 220, y + 200)
      for i in 0..<entity.attributes.length() {
        let attr = entity.attributes[i]
        let icon_x = x + 220 + i.to_double() * 80
        let icon_y = y + 220

        // 属性图标
        ctx.fillStyle("#FFFFFF")
        ctx.beginPath()
        ctx.arc(icon_x + 20, icon_y + 20, 20, 0, @math.PI * 2)
        ctx.fill()

        // 图标文本
        ctx.fillStyle("#000000")
        ctx.font("12px Arial")
        ctx.fillText(attr.text, icon_x + 5, icon_y + 50)
      }
    }
  }
}

///|
/// Draw the icon bar at the bottom
fn draw_icon_bar(ctx : @Core.CanvasRenderingContext2D) -> Unit {
  let self = menuPanelRenderSingleton
  let menu = @Panels.menuPanelSingleton
  let bar_x = 300.0
  let bar_y = 520.0
  let bar_width = 680.0
  let bar_height = 80.0
  let icon_size = 60.0
  let spacing = 20.0

  // 背景
  ctx.fillStyle("#8B4513")
  @UIComposeRender.drawRoundRect(ctx, bar_x, bar_y, bar_width, bar_height, 15)
  ctx.fill()

  // 获取当前标签的图标数据
  let icons = get_current_category_data(menu.data, self.current_tab)
  let total_width = icons.length().to_double() * (icon_size + spacing) - spacing
  let start_x = bar_x + (bar_width - total_width) / 2
  for i in 0..<icons.length() {
    let icon_x = start_x + i.to_double() * (icon_size + spacing)
    let icon_y = bar_y + 10
    // let mut tower_type : @Tower.TowerType? = None
    // let mut enemy_type : @Enemy.EnemyType? = None
    // let mut 

    // 选中状态
    if i == self.current_index {
      ctx.fillStyle("#FFFF00")
      ctx.beginPath()
      ctx.arc(
        icon_x + icon_size / 2,
        icon_y + icon_size / 2,
        icon_size / 2 + 5,
        0,
        @math.PI * 2,
      )
      ctx.fill()
    }

    // 图标背景
    // ctx.fillStyle("#FFFFFF")
    // ctx.beginPath()
    // ctx.arc(
    //   icon_x + icon_size / 2,
    //   icon_y + icon_size / 2,
    //   icon_size / 2,
    //   0,
    //   @math.PI * 2,
    // )
    // ctx.fill()

    // 图标

    match icons[i] {
      TowerData(data) =>
        draw_tower(data.icon, icon_x + icon_size / 2, icon_y + icon_size / 2)
      EnemiesData(data) =>
        draw_enemy(data.icon, icon_x + icon_size / 2, icon_y + icon_size / 2)
      NeutralElementsData(data) =>
        draw_neutral_elements(
          data.icon,
          icon_x + icon_size / 2,
          icon_y + icon_size / 2,
        )
    }
  }
}

///|
fn draw_enemy(enemy_type : @Enemy.EnemyType, x : Double, y : Double) -> Unit {
  let ctx = @Core.ctxSingleton
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(0.8, 0.8)
  let gs = @Core.map.gridSize
  // println(enemy_type)
  match enemy_type {
    CaterpillarEnemy => {
      // println("draw CaterpillarEnemy")
      ()
      @EnemyRender.caterpillarEnemyRenderSingleton.render(
        ctx,
        @Enemy.CaterpillarEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    GroundEnemy => {
      // println("draw GroundEnemy")
      ()
      @EnemyRender.groundEnemyRenderSingleton.render(
        ctx,
        @Enemy.GroundEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    FlyingEnemy => {
      // println("draw FlyingEnemy")
      ()
      @EnemyRender.flyingEnemyRenderSingleton.render(
        ctx,
        @Enemy.GroundEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    KangarooEnemy => {
      // println("draw KangarooEnemy")
      ()
      @EnemyRender.kangarooEnemyRenderSingleton.render(
        ctx,
        @Enemy.KangarooEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    VirusEnemy => {
      // println("draw VirusEnemy")
      ()
      @EnemyRender.virusEnemyRenderSingleton.render(
        ctx,
        @Enemy.VirusEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    CheetahEnemy => {
      // println("draw CheetahEnemy")
      ()
      @EnemyRender.cheetahEnemyRenderSingleton.render(
        ctx,
        @Enemy.CheetahEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    TurtleEnemy => {
      // println("draw TurtleEnemy")
      ()
      @EnemyRender.turtleEnemyRenderSingleton.render(
        ctx,
        @Enemy.CheetahEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    EggsEnemy => {
      // println("draw TurtleEnemy")
      ()
      @EnemyRender.eggsEnemyRenderSingleton.render(
        ctx,
        @Enemy.CheetahEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    MechaEnemy => {
      // println("draw MechaEnem")
      ()
      @EnemyRender.mechaEnemyRenderSingleton.render(
        ctx,
        @Enemy.CheetahEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    BearEnemy => {
      // println("draw BearEnemy")
      ()
      @EnemyRender.bearEnemyRenderSingleton.render(
        ctx,
        @Enemy.CheetahEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
    UFOEnemy => {
      // println("draw BearEnemy")
      ()
      @EnemyRender.uFOEnemyRenderSingleton.render(
        ctx,
        @Enemy.CheetahEnemy::new(),
        gs,
        0,
        show_health_bar=false,
      )
    }
  }
  ctx.restore()
  ()
}

///|
fn draw_tower(tower_type : @Tower.TowerType, x : Double, y : Double) -> Unit {
  let ctx = @Core.ctxSingleton
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(0.8, 0.8)
  match tower_type {
    BeeTower =>
      @TowerRender.BeeTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    NegativeMagneticTower =>
      @TowerRender.NegativeMagneticTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    PositiveMagneticTower =>
      @TowerRender.PositiveMagneticTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    ChargeJarTower =>
      @TowerRender.ChargeJarTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    LightningTower =>
      @TowerRender.LightningTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    CurveTower =>
      @TowerRender.CurveTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    PlasmaTower =>
      @TowerRender.PlasmaTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    SnowflakeTower =>
      @TowerRender.SnowflakeTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    LaserTower =>
      @TowerRender.LaserTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    DecayTower =>
      @TowerRender.DecayTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    FrozenTower =>
      @TowerRender.FrozenTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    ChainTower =>
      @TowerRender.ChainTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    SkyTower =>
      @TowerRender.SkyTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    SpeedTower =>
      @TowerRender.SpeedTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    ThunderTower =>
      @TowerRender.ThunderTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
    TreasureTower =>
      @TowerRender.TreasureTowerRender::render(
        @Core.ctxSingleton,
        0,
        0,
        1,
        @Core.map.gridSize,
        0,
      )
  }
  ctx.restore()
}

///|
fn draw_neutral_elements(
  neutral_element_type : @NeutralElement.NeutralElementType,
  x : Double,
  y : Double,
) -> Unit {
  let ctx = @Core.ctxSingleton
  ctx.save()
  ctx.translate(x, y)
  ctx.scale(0.8, 0.8)
  match neutral_element_type {
    SearchLightNeutralElement =>
      @NeutralElementRender.searchLightNeutralElementRenderSingleton.render(
        0,
        0,
        0,
        @NeutralElement.SearchLightNeutralElement::new(),
        show_health_bar=false,
      )
    ConveyorBeltNeutralElement =>
      @NeutralElementRender.conveyorBeltNeutralElementRenderSingleton.render(
        0,
        0,
        0,
        @NeutralElement.ConveyorBeltNeutralElement::new(),
        show_health_bar=false,
      )
    WeedNeutralElement =>
      @NeutralElementRender.weedNeutralElementRenderSingleton.render(
        0,
        0,
        0,
        @NeutralElement.WeedNeutralElement::new(),
        show_health_bar=false,
      )
    TreasureChestNeutralElement =>
      @NeutralElementRender.weedNeutralElementRenderSingleton.render(
        0,
        0,
        0,
        @NeutralElement.WeedNeutralElement::new(),
        show_health_bar=false,
      )
    SlotMachineNeutralElement =>
      @NeutralElementRender.slotMachineNeutralElementRenderSingleton.render(
        0,
        0,
        0,
        @NeutralElement.SlotMachineNeutralElement::new(),
        show_health_bar=false,
      )
    StoneNeutralElement =>
      @NeutralElementRender.stoneNeutralElementRenderSingleton.render(
        0,
        0,
        0,
        @NeutralElement.StoneNeutralElement::new(),
        show_health_bar=false,
      )
    EnergyLightNeutralElement =>
      @NeutralElementRender.energyLightNeutralElementRenderSingleton.render(
        0,
        0,
        0,
        @NeutralElement.EnergyLightNeutralElement::new(),
        show_health_bar=false,
      )
  }
  ctx.restore()
}

///|
/// Draw the close button
fn draw_close_button(ctx : @Core.CanvasRenderingContext2D) -> Unit {
  let btn_x = 930.0
  let btn_y = 100.0
  let btn_size = 50.0

  // 按钮背景
  ctx.fillStyle("#FF69B4")
  @UIComposeRender.drawRoundRect(ctx, btn_x, btn_y, btn_size, btn_size, 10)
  ctx.fill()

  // 关闭符号
  ctx.fillStyle("#FFFFFF")
  ctx.font("bold 30px Arial")
  ctx.fillText("×", btn_x + 15, btn_y + 35)
}

///|
/// Get the current data based on tab and index
fn get_current_data(
  data : @Panels.PanelData,
  tab : Int,
  index : Int,
) -> DataVariant {
  match tab {
    0 => {
      let towers = data.towers
      DataVariant::TowerData(towers[index])
    }
    1 => {
      let enemies = data.enemies
      DataVariant::EnemiesData(enemies[index])
    }
    2 => {
      let characters = data.neutrals
      DataVariant::NeutralElementsData(characters[index])
    }
    _ => {
      // Default case: return the first tower data as fallback
      let towers = data.towers
      DataVariant::TowerData(towers[0])
    }
  }
}

///|
/// Get the current category data based on tab
pub fn get_current_category_data(
  data : @Panels.PanelData,
  tab : Int,
) -> Array[DataVariant] {
  match tab {
    0 => {
      let result = Array::new()
      for tower in data.towers {
        result.push(DataVariant::TowerData(tower))
      }
      result
    }
    1 => {
      let result = Array::new()
      for enemy in data.enemies {
        result.push(DataVariant::EnemiesData(enemy))
      }
      result
    }
    2 => {
      let result = Array::new()
      for neutral in data.neutrals {
        result.push(DataVariant::NeutralElementsData(neutral))
      }
      result
    }
    _ => []
  }
}

///|
/// Variant type to handle both TowerData and EntityData
pub enum DataVariant {
  TowerData(@Panels.TowerData)
  EnemiesData(@Panels.EnemiesData)
  NeutralElementsData(@Panels.NeutralElementsData)
}

///|
/// Handle tab switching
pub fn MenuPanelRender::switch_tab(
  self : MenuPanelRender,
  tab_index : Int,
) -> Unit {
  if tab_index >= 0 && tab_index < 4 {
    self.current_tab = tab_index
    self.current_index = 0
  }
}

///|
/// Handle icon selection
pub fn MenuPanelRender::select_icon(
  self : MenuPanelRender,
  index : Int,
) -> Unit {
  self.current_index = index
}

///|
/// Handle close button click
pub fn MenuPanelRender::close_panel(self : MenuPanelRender) -> Unit {
  ignore(self)
  let menu = @Panels.menuPanelSingleton
  menu.close()
}
