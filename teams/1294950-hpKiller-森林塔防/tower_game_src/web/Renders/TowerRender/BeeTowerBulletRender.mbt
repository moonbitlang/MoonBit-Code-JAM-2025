///|
pub struct BeeTowerBulletRender {}

///|
pub fn BeeTowerBulletRender::new() -> BeeTowerBulletRender {
  BeeTowerBulletRender::{  }
}

///|
let beeTowerBulletRenderInstance : Ref[BeeTowerBulletRender?] = Ref::new(None)

///|
pub let beeTowerBulletRenderSingleton : BeeTowerBulletRender = BeeTowerBulletRender::get_instance()

///|
pub fn BeeTowerBulletRender::get_instance() -> BeeTowerBulletRender {
  match beeTowerBulletRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = BeeTowerBulletRender::new()
      beeTowerBulletRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn BeeTowerBulletRender::render(
  ctx : @Core.CanvasRenderingContext2D,
  x : Double,
  y : Double,
  timestamp : Double,
  bullet : @Tower.BeeTowerBullet,
) -> Unit {
  ignore(timestamp)
  createPoisonEffect(
    @Core.ctxSingleton,
    timestamp,
    bullet.target,
    bullet.target.id(),
    bullet.posion_ms,
    bullet.posion_damage_per_second,
  )

  // Simple bullet rendering - a small yellow circle
  ctx.save()
  ctx.translate(x, y)

  // Bullet body
  ctx.fillStyle("#ffff00")
  ctx.beginPath()
  ctx.arc(0, 0, 3, 0, @math.PI * 2)
  ctx.fill()

  // Highlight
  ctx.fillStyle("rgba(255, 255, 255, 0.6)")
  ctx.beginPath()
  ctx.arc(1, -1, 1, 0, @math.PI * 2)
  ctx.fill()
  ctx.restore()
  // The poison effect should be triggered when a bullet hits a target
  // This will be handled in the bullet controller when the bullet hits
  // We don't create the effect here in the render function

}

///|
/// Structure to hold poison effect state
pub(all) struct PoisonEffectState {
  mut totalDamage : Double
  mut endTime : Double
  mut particles : Array[Particle]
  mut damageTexts : Array[DamageText]
  mut lastDamageTime : Double
}

///|
/// Structure for a particle in the poison effect
pub(all) struct Particle {
  mut x : Double
  mut y : Double
  mut vx : Double
  mut vy : Double
  mut radius : Double
  mut alpha : Double
  mut decay : Double
}

///|
/// Structure for a damage text in the poison effect
pub(all) struct DamageText {
  mut x : Double
  mut y : Double
  mut alpha : Double
  mut vy : Double
  mut decay : Double
}

///|
/// Global dictionary to store poison effects by enemy key
let poisonStates : Ref[Map[Int, PoisonEffectState]] = Ref::new(Map::new())

///|
// extern "js" fn date_now() -> Double =
//   #| () => {return Date.now() }

///|
extern "js" fn random() -> Double =
  #| () => { return Math.random() }

///|
/// Create a poison effect with particles and damage numbers
pub fn createPoisonEffect(
  ctx : @Core.CanvasRenderingContext2D,
  timestamp : Double,
  enemy : &@Enemy.Enemy,
  enemyKey : Int,
  durationMs : Double,
  damageValue : Double,
  particleCount? : Int = 3,
  particleSize? : Double = 4,
  particleSpeed? : Double = 0.8,
  color? : String = "rgba(100, 255, 100, %alpha)",
) -> Unit {

  // let now = date_now()
  let now = timestamp
  match poisonStates.val.get(enemyKey) {
    Some(state) => {
      // If already exists: stack damage and refresh duration
      state.totalDamage = state.totalDamage + damageValue
      state.endTime = now + durationMs

      // println("叠加中毒！当前总伤害: \{state.totalDamage}")
      return
    }
    None => ()
  }
  // Create new poison effect state
  let state = PoisonEffectState::{
    totalDamage: damageValue,
    endTime: now + durationMs,
    particles: [],
    damageTexts: [],
    lastDamageTime: 0.0,
  }
  poisonStates.val.set(enemyKey, state)
  // Check if poison effect already exists for this enemy

  // Update function to be called each frame
  let update_fn = fn(timestamp : Double) -> Unit {
    let targetX = enemy.position().x
    let targetY = enemy.position().y
    let damageNumbersX = enemy.position().x
    let damageNumbersY = enemy.position().y - 20
    // 子弹消失结束渲染
    if !enemy.is_alive() {
      return
    }

    // Check if effect duration has ended
    if timestamp >= state.endTime {
      // Effect ended
      poisonStates.val.remove(enemyKey)
      println("remove key \{enemyKey}")
      // println("中毒特效结束！")
      return
    }

    // Create damage numbers every 166ms (approximately 6 times per second)
    if timestamp - state.lastDamageTime >= 166.0 {
      state.damageTexts.push(DamageText::{
        x: damageNumbersX,
        y: damageNumbersY - random() * 10.0,
        alpha: 1.0,
        vy: -0.8,
        decay: 0.03,
      })
      state.lastDamageTime = timestamp
    }

    // Create particles
    for _i in 0..=particleCount {
      state.particles.push(Particle::{
        x: targetX + (random() - 0.5) * 20.0,
        y: targetY + (random() - 0.5) * 20.0,
        vx: (random() - 0.8) * particleSpeed,
        vy: (random() - 0.5) * particleSpeed,
        radius: random() * particleSize + 1.0,
        alpha: 0.8,
        decay: 0.02 + random() * 0.01,
      })
    }

    // Update particles
    let mut i = state.particles.length() - 1
    while i >= 0 {
      let p = state.particles[i]
      p.x = p.x + p.vx
      p.y = p.y + p.vy
      p.alpha = p.alpha - p.decay
      if p.alpha <= 0.0 {
        state.particles.remove(i) |> ignore
      }
      i = i - 1
    }

    // Update damage texts
    let mut i = state.damageTexts.length() - 1
    while i >= 0 {
      let d = state.damageTexts[i]
      d.y = d.y + d.vy
      d.alpha = d.alpha - d.decay
      if d.alpha <= 0.0 {
        state.damageTexts.remove(i) |> ignore
      }
      i = i - 1
    }

    // Draw particles
    for p in state.particles {
      ctx.save()
      let color = color.replace(old="%alpha", new="\{p.alpha}")
      ctx.fillStyle(color)
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0.0, @math.PI * 2.0)
      ctx.fill()
      ctx.restore()
    }

    // Draw damage texts
    for d in state.damageTexts {
      ctx.save()
      let color = color.replace(old="%alpha", new="\{d.alpha}")
      ctx.fillStyle(color)
      ctx.font("bold 14px Arial")
      ctx.fillText("-\{state.totalDamage.to_int()}", d.x, d.y)
      ctx.restore()
    }
  }
  // update_fn(timestamp)
  // Register the update function to be called each frame
  register_frame_callback(update_fn)
}
