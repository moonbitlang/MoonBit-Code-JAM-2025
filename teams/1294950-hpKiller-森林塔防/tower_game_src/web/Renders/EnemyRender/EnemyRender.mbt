///|
pub struct EnemyRender {}

///|
pub fn EnemyRender::new() -> EnemyRender {
  EnemyRender::{  }
}

///|
let enemyRenderInstance : Ref[EnemyRender?] = Ref::new(None)

///|
pub let enemyRenderSingleton : EnemyRender = EnemyRender::get_instance()

///|
pub fn EnemyRender::get_instance() -> EnemyRender {
  match enemyRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = EnemyRender::new()
      enemyRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn EnemyRender::render_all_enemy(
  _self : EnemyRender,
  timestamp : Double,
) -> Unit {
  let ctx = @Core.ctxSingleton
  let gs = @Core.map.gridSize
  // println("enemy count \{@Map.map_grid_system_singleton.enemy.length()}")
  // in console print 2
  if @Map.map_grid_system_singleton.enemy.length() != 0 {
    for e in @Map.map_grid_system_singleton.enemy {
      match e.enemy_type() {
        @Enemy.KangarooEnemy =>
          kangarooEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.FlyingEnemy =>
          flyingEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.GroundEnemy =>
          groundEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.CaterpillarEnemy =>
          caterpillarEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.VirusEnemy =>
          virusEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.CheetahEnemy =>
          cheetahEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.BearEnemy =>
          bearEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.TurtleEnemy =>
          turtleEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.UFOEnemy => uFOEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.EggsEnemy =>
          eggsEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        @Enemy.MechaEnemy =>
          mechaEnemyRenderSingleton.render(ctx, e, gs, timestamp)
        // _ => _render_default(ctx, e, gs)
      }
    }
  }
}

///|
fn _render_default(
  ctx : @Core.CanvasRenderingContext2D,
  e : &@Enemy.Enemy,
  gs : Double,
) -> Unit {
  ctx.save()
  // let x = (e.position.x + 0.5) * gs
  // let y = (e.position.y + 0.5) * gs
  let x = e.position().x
  let y = e.position().y

  // println("enemyX \{x}")
  // println("enemyY \{y}")
  let scale = 1.0 //
  // 再缩放（此时缩放中心是原点，也就是圆心）

  ctx.scale(scale, scale)
  ctx.beginPath()
  ctx.fillStyle("red")
  // 补偿scale 对位置的影响
  ctx.arc(x, y, 30, 0, @math.PI * 2)
  ctx.fill()
  let drawHealthBarP = (bx, by, w, h) => {
    // 背板
    ctx.save()
    ctx.strokeStyle("rgba(0,0,0,0.35)")
    ctx.beginPath()
    ctx.moveTo(bx, by)
    ctx.lineTo(bx + w, by)
    ctx.lineWidth(h)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
    // @UIComposeRender.drawRoundRect(
    //   ctx,
    //   bx - 1,
    //   by + 10,
    //   w + 2,
    //   h + 2,
    //   h / 2 + 1,
    // )
    // ctx.fill()
  }
  let drawHealthBarI = (bx, by, w, h) => {
    // 背板
    ctx.save()
    ctx.strokeStyle("rgb(66, 158, 5)")
    ctx.beginPath()
    ctx.moveTo(bx + 2, by)
    ctx.lineTo(bx + w - 2, by)
    ctx.lineWidth(h - 2)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
    // @UIComposeRender.drawRoundRect(
    //   ctx,
    //   bx - 1,
    //   by + 10,
    //   w + 2,
    //   h + 2,
    //   h / 2 + 1,
    // )
    // ctx.fill()
  }
  let w = gs * 0.78
  let h = 4.0
  let bx = x - w / 2
  let by = y - gs / 2 - 9
  drawHealthBarP(bx, by, w, h)
  drawHealthBarI(bx, by, w * e.health() / e.max_health(), h)
  ctx.restore()
}

///|
fn _demo(timestamp : Double) -> Unit {
  let ctx = @Core.ctxSingleton
  let poX = @math.sin(timestamp / 1000) * 100
  ctx.beginPath()
  ctx.fillStyle("red")
  ctx.arc(300 + poX, 300, 50, 0, @math.PI * 2)
  ctx.fill()
}
