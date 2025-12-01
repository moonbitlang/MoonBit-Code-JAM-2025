///|
/// 
/// 
pub struct TowerRender {}

///|
pub fn TowerRender::new() -> TowerRender {
  TowerRender::{  }
}

///|
let towerRenderInstance : Ref[TowerRender?] = Ref::new(None)

///|
pub let towerRenderSingleton : TowerRender = TowerRender::get_instance()

///|
pub fn TowerRender::get_instance() -> TowerRender {
  match towerRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = TowerRender::new()
      towerRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn TowerRender::render_all_tower(
  self : TowerRender,
  timestamp : Double,
) -> Unit {
  ignore(self)
  for t in @Map.map_grid_system_singleton.tower {

    // Calculate aim direction for all towers
    let mut aim_deg = 0.0
    match find_closest_enemy_in_range(t) {
      Some(enemy) => {
        aim_deg = @Math.tower_enemy_deg(enemy.position(), t.position())
        t.set_visual_aim_deg(aim_deg)
      }
      None =>
        // If no enemy in range, maintain current aim direction
        // This would require storing the last aim direction in the tower
        // For now, we'll use 0.0 as default
        aim_deg = t.visual_aim_deg()
    }
    match t.towerType() {
      @Tower.LightningTower =>
        // For lightning towers, we need to determine the aim direction
        // For now, we'll use a default value or calculate based on nearby enemies

        LightningTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.ChargeJarTower =>
        ChargeJarTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.PositiveMagneticTower =>
        PositiveMagneticTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.NegativeMagneticTower =>
        NegativeMagneticTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.CurveTower =>
        CurveTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.PlasmaTower =>
        PlasmaTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.BeeTower =>
        BeeTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.SnowflakeTower =>
        SnowflakeTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.LaserTower =>
        LaserTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.DecayTower =>
        DecayTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.FrozenTower =>
        FrozenTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.TreasureTower =>
        TreasureTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.SpeedTower =>
        SpeedTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.SkyTower =>
        SkyTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.ThunderTower =>
        ThunderTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
      @Tower.ChainTower =>
        ChainTowerRender::render(
          @Core.ctxSingleton,
          t.position().x,
          t.position().y,
          t.level().to_double(),
          @Core.map.gridSize,
          timestamp,
          aimDeg=aim_deg,
        )
    }
  }
  // The rendering already uses t.level().to_double() which will handle levels 1-3
  // No additional changes needed as the visual scaling is already implemented
}

///|
pub let frame_callbacks : Ref[Array[(Double) -> Unit]] = Ref::new([])

///|
fn register_frame_callback(callback : (Double) -> Unit) -> Unit {
  frame_callbacks.val.push(callback) |> ignore
  // println("length: \{frame_callbacks.val.length()}")
}

///|
pub fn TowerRender::render_all_bullets(
  self : TowerRender,
  timestamp : Double,
) -> Unit {
  ignore(self)
  // println(frame_callbacks.val.length())
  // // Execute all registered frame callbacks
  // for callback in frame_callbacks.val {
  //   // println("call callback")
  //   callback(timestamp)
  // }

  // Render Positive Magnetic Tower bullets
  for bullet in @Tower.positive_magnetic_tower_bullets.val {
    if bullet.alive {
      PositiveMagneticTowerBulletRender::render(
        @Core.ctxSingleton,
        bullet.position.x,
        bullet.position.y,
        timestamp,
      )
    }
  }

  // Render Negative Magnetic Tower bullets
  for bullet in @Tower.negative_magnetic_tower_bullets.val {
    if bullet.alive {
      NegativeMagneticTowerBulletRender::render(
        @Core.ctxSingleton,
        bullet.position.x,
        bullet.position.y,
        timestamp,
      )
    }
  }

  // Render Lightning Tower bullets
  for bullet in @Tower.lightning_tower_bullets.val {
    if bullet.alive {
      LightningTowerBulletRender::render(
        @Core.ctxSingleton,
        bullet.position.x,
        bullet.position.y,
        timestamp,
      )
    }
  }

  // Render Charge Jar Tower bullets
  for bullet in @Tower.charge_jar_tower_bullets.val {
    if bullet.alive {
      ChargeJarTowerBulletRender::render(
        @Core.ctxSingleton,
        bullet.position.x,
        bullet.position.y,
        timestamp,
      )
    }
  }

  // Render Curve Tower bullets
  for bullet in @Tower.curve_tower_bullets.val {
    if bullet.alive {
      CurveTowerBulletRender::render(
        @Core.ctxSingleton,
        bullet.position.x,
        bullet.position.y,
        timestamp,
      )
    }
  }

  // Render Plasma Tower bullets
  for bullet in @Tower.plasma_tower_bullets.val {
    if bullet.alive {
      PlasmaTowerBulletRender::render(
        @Core.ctxSingleton,
        bullet.position.x,
        bullet.position.y,
        timestamp,
      )
    }
  }

  // Render Bee Tower bullets
  for bullet in @Tower.bee_tower_bullets.val {
    if bullet.alive {
      BeeTowerBulletRender::render(
        @Core.ctxSingleton,
        bullet.position.x,
        bullet.position.y,
        timestamp,
        bullet,
      )
    }
  }
}

///|
fn draw_round_rect_path(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  width : Double,
  height : Double,
  radius : Double,
) -> Unit {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()
}

///|
pub fn draw_generic_tower(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  level : Double,
  gs : Double,
  aim_deg : Double,
  time : Double,
) -> Unit {
  let lvl_scale = 1.0 + 0.08 * @Math.clamp(level - 1.0, 0.0, 2.0)

  // 地面柔影 (Ground shadow)
  ctx.save()
  ctx.globalAlpha(0.22)
  ctx.fillStyle("#000")
  ctx.beginPath()
  ctx.ellipse(
    x,
    y + @cmp.minimum(7.0, gs * 0.09) * lvl_scale,
    @cmp.minimum(20.0, gs * 0.34) * lvl_scale,
    @cmp.minimum(7.0, gs * 0.12) * lvl_scale,
    0.0,
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()

  // 基座圆盘 (Base disc)
  let base_r = @cmp.minimum(@cmp.maximum(6.0, gs * 0.5 - 1.0) * 0.86, gs * 0.36) *
    lvl_scale
  let inner_r = base_r * 0.72
  let g_base = ctx.createRadialGradient(
    x,
    y - base_r * 0.3,
    base_r * 0.15,
    x,
    y,
    base_r,
  )
  g_base.addColorStop(0.0, "#C7E1FF")
  g_base.addColorStop(1.0, "#6FA9F2")
  ctx.save()
  ctx.fillStyle(g_base)
  ctx.beginPath()
  ctx.arc(x, y, base_r, 0.0, @math.PI * 2.0)
  ctx.fill()
  let g_inner = ctx.createRadialGradient(x, y, 1.0, x, y, inner_r)
  g_inner.addColorStop(0.0, "#FFFFFF")
  g_inner.addColorStop(1.0, "#7FB8FF")
  ctx.fillStyle(g_inner)
  ctx.beginPath()
  ctx.arc(x, y, inner_r, 0.0, @math.PI * 2.0)
  ctx.fill()
  ctx.restore()

  // 炮管（按朝向旋转）(Cannon barrel rotated by aim direction)
  let body_w = @cmp.minimum(gs * 0.2, 12.0) * lvl_scale
  let body_l = @cmp.minimum(gs * 0.55, 36.0) * lvl_scale
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(aim_deg)

  // 炮座 (Cannon mount)
  ctx.fillStyle("#3A6EA5")
  draw_round_rect_path(
    ctx,
    -body_w * 0.7,
    -body_w * 0.7,
    body_w * 1.4,
    body_w * 1.4,
    body_w * 0.3,
  )
  ctx.fill()

  // 炮管主体 (Barrel main body)
  let t_pulse = 0.4 + 0.6 * @math.sin(time / 1000.0 * 2.2)
  let g_barrel = ctx.createLinearGradient(
    0.0,
    -body_w / 2.0,
    body_l,
    body_w / 2.0,
  )
  g_barrel.addColorStop(0.0, "#E7F0FF")
  g_barrel.addColorStop(1.0, "#98BDF0")
  ctx.fillStyle(g_barrel)
  draw_round_rect_path(ctx, 0.0, -body_w / 2.0, body_l, body_w, body_w * 0.4)
  ctx.fill()

  // 炮口高光 (Muzzle highlight)
  ctx.globalAlpha(0.35 + 0.25 * t_pulse)
  ctx.fillStyle("#FFFFFF")
  ctx.beginPath()
  ctx.ellipse(
    body_l * 0.65,
    -body_w * 0.12,
    body_w * 0.35,
    body_w * 0.22,
    @Math.deg2rad(-12.0),
    0.0,
    @math.PI * 2.0,
  )
  ctx.fill()
  ctx.restore()
}

///|
/// Find the closest enemy to a tower within its range
///
fn find_closest_enemy_in_range(tower : &@Tower.Tower) -> &@Enemy.Enemy? {
  let mut closest_enemy : &@Enemy.Enemy? = None
  let mut min_distance = tower.range()
  for e in @Map.map_grid_system_singleton.enemy {
    let ep = e.position()
    let tp = tower.position()
    let dist = @Math.dist_enemy_tower(ep, tp)
    if dist < tower.range() && dist < min_distance {
      min_distance = dist
      closest_enemy = Some(e)
    }
  }
  closest_enemy
}
