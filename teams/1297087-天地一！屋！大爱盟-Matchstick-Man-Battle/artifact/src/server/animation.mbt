pub(all) struct SampleAnimation {
  fun : (&@box2d.World, &@p5js.P5JS) -> AnimationState
}

pub fn SampleAnimation::new(fun: (&@box2d.World, &@p5js.P5JS) -> AnimationState) -> Self {
  SampleAnimation::{
    fun: fun
  }
}

pub impl Animation for SampleAnimation with update (self: SampleAnimation, world: &@box2d.World, p5: &@p5js.P5JS) -> AnimationState {
  (self.fun)(world, p5)
}
pub struct SmokeParticle {
  mut x: Double
  mut y: Double
  mut r: Double
  mut alpha: Double
  vx: Double
  vy: Double
  mut rot: Double
  mut life: Double
	beg : Int
}

let r :Ref[@random.Rand] = Ref::new(@random.Rand::new())
pub fn random_range(min: Double, max: Double) -> Double {
  let t = @random.Rand::double
  return (t(r.val) * (max - min)) + min
}

fn register_smoke_animation(game: Game, base_x: Double, base_y: Double) -> Unit {
  let frame_counter : Ref[Int] = Ref::new(0)
  let smokes: Ref[Array[SmokeParticle]] = Ref::new(Array::new())

  let animation = SampleAnimation::new(
    fn(world: &@box2d.World, p5: &@p5js.P5JS) -> AnimationState {
      world |> ignore
      frame_counter.val = frame_counter.val + 1

      // —— 第一次帧：环形爆发，产生集中气场 —— 
      if frame_counter.val == 1 {
        let burst_count = 24
        for i = 0; i < burst_count; i = i + 1 {
          let ang = (i.to_double() / burst_count.to_double()) * 2.0 * 3.14159265359 + random_range(-0.15, 0.15)
          let dist = random_range(2.0, 6.0)        // 初始分布更靠近中心
          let speed = random_range(0.6, 1.5)       // 扩散速度较小，更集中
          let p = SmokeParticle::{
            x: base_x + @cmath.cos(ang) * dist,
            y: base_y + @cmath.sin(ang) * dist * 0.6,  // y方向压缩，形成略椭圆形气场
            r: random_range(3.0, 7.0),
            alpha: random_range(180.0, 255.0),
            vx: @cmath.cos(ang) * speed * 0.5,  // 更轻的径向运动
            vy: random_range(-0.6, -0.25),
            rot: random_range(0.0, 6.28318530718),
            life: random_range(60.0, 90.0),
            beg: frame_counter.val
          }
          smokes.val.push(p)
        }
      }

      // —— 后续轻微补烟，脚下余气 —— 
      if frame_counter.val.mod(8) == 0 && frame_counter.val < 60 {
        let p = SmokeParticle::{
          x: base_x + random_range(-3.0, 3.0),
          y: base_y + random_range(-2.0, 2.0),
          r: random_range(2.0, 5.0),
          alpha: random_range(150.0, 220.0),
          vx: random_range(-0.3, 0.3),
          vy: random_range(-0.4, -0.1),
          rot: random_range(0.0, 6.28318530718),
          life: random_range(40.0, 70.0),
          beg: frame_counter.val
        }
        smokes.val.push(p)
      }

      // 绘制背景淡层（让气场更柔和）
      p5.noStroke()
      p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(15.0))

      let alive: Array[SmokeParticle] = []
      for s in smokes.val {
        let p = s

        // —— 运动更新 —— 
        p.x = p.x + p.vx + 0.08 * @cmath.sin(p.rot + frame_counter.val.to_double() * 0.07)
        p.y = p.y + p.vy + 0.05 * @cmath.cos(p.rot + frame_counter.val.to_double() * 0.05)
        p.r = p.r + 0.05
        p.alpha = p.alpha - (180.0 / (p.life + 5.0))
        p.rot = p.rot + 0.08
        p.life = p.life - 1.0

        // —— 绘制多层发光烟雾 —— 
        if p.alpha > 8.0 && p.life > 0.0 {
          let base_r = 210.0
          let base_g = 235.0
          let base_b = 255.0

          p5.noStroke()
          // 外层朦胧
          p5.fillColorPara(base_r, Some(base_g), Some(base_b), Some(p.alpha * 0.25))
          p5.ellipse(p.x, p.y, p.r * 2.0, p.r * 2.0)
          // 中层
          p5.fillColorPara(base_r, Some(base_g), Some(base_b), Some(p.alpha * 0.55))
          p5.ellipse(p.x, p.y, p.r * 1.2, p.r * 1.2)
          // 内层亮点
          p5.fillColorPara(255.0, Some(255.0), Some(255.0), Some(p.alpha * 0.8))
          p5.ellipse(p.x, p.y, p.r * 0.45, p.r * 0.45)

          alive.push(p)
        }
      }

      smokes.val.clear()
      for pp in alive {
        smokes.val.push(pp)
      }

      // 结束条件
      if smokes.val.length() == 0 {
        return AnimationState::Completed
      }

      AnimationState::InProgress
    }
  )

  game.add_animation(animation)
  println("踏空气场烟雾已注册在 (\{base_x}, \{base_y})")
}



pub struct BloodParticle {
  mut x: Double
  mut y: Double
  mut r: Double
  mut alpha: Double
  mut vx: Double
  mut vy: Double
  mut life: Double
}

pub fn register_blood_spray_animation(game: Game, x: Double, y: Double, vx: Double, vy: Double) -> Unit {
  let frame_counter: Ref[Int] = Ref::new(0)
  let particles: Ref[Array[BloodParticle]] = Ref::new(Array::new())

  // 计算打击方向角度
  let dir_angle = @cmath.atan2(vy, vx)
  let base_speed = @cmath.sqrt(vx * vx + vy * vy) * 5.0  // 基础速度与输入方向强度相关

  let animation = SampleAnimation::new(
    fn(world: &@box2d.World, p5: &@p5js.P5JS) -> AnimationState {
      world |> ignore
      frame_counter.val = frame_counter.val + 1

      // —— 第一次帧：喷射出一批血雾 —— 
      if frame_counter.val == 1 {
        let count = 36
        for i = 0; i < count; i = i + 1 {
          // 扇形扩散角：±30°范围内偏移，这里加大了偏移量
          let offset_angle = random_range(-0.2, 0.2)
          let speed_factor = random_range(0.6, 1.5) // 加大了速度范围
          let ang = dir_angle + offset_angle
          let speed = base_speed * speed_factor

          // 粒子生成时位置微小随机偏移，避免所有粒子从同一点发出
          let p = BloodParticle::{
            x: x + random_range(-2.0, 2.0),  // 稍微增加偏移范围
            y: y + random_range(-2.0, 2.0),  // 稍微增加偏移范围
            r: random_range(2.0, 4.0),
            alpha: random_range(200.0, 255.0),
            vx: @cmath.cos(ang) * speed,
            vy: @cmath.sin(ang) * speed,
            life: random_range(45.0, 75.0)
          }
          particles.val.push(p)
        }
      }

      // —— 更新与绘制 —— 
      let gravity = 0.25
      let air_drag = 0.96
      let alive: Array[BloodParticle] = []

      for s in particles.val {
        let p = s

        // 基本物理更新
        p.x = p.x + p.vx * 0.16
        p.y = p.y + p.vy * 0.16
        p.vy = p.vy + gravity          // 重力下坠
        p.vx = p.vx * air_drag
        p.vy = p.vy * air_drag

        p.r = p.r + 0.02
        p.alpha = p.alpha - (220.0 / (p.life + 8.0))
        p.life = p.life - 1.0

        // 绘制血雾：深红 + 内层亮点
        if p.alpha > 8.0 && p.life > 0.0 {
          p5.noStroke()
          // 外层深红雾
          p5.fillColorPara(160.0, Some(0.0), Some(0.0), Some(p.alpha * 0.25))
          p5.ellipse(p.x, p.y, p.r * 2.4, p.r * 2.4)

          // 主体红色
          p5.fillColorPara(220.0, Some(20.0), Some(20.0), Some(p.alpha * 0.6))
          p5.ellipse(p.x, p.y, p.r * 1.4, p.r * 1.4)

          // 中心亮红
          p5.fillColorPara(255.0, Some(60.0), Some(60.0), Some(p.alpha * 0.8))
          p5.ellipse(p.x, p.y, p.r * 0.5, p.r * 0.5)

          alive.push(p)
        }
      }

      particles.val.clear()
      for pp in alive {
        particles.val.push(pp)
      }

      // 结束条件：所有粒子消失并经过最低帧数
      if particles.val.length() == 0 && frame_counter.val > 100 {
        return AnimationState::Completed
      }

      AnimationState::InProgress
    }
  )

  game.add_animation(animation)
  println("血雾动画已注册在 (\{x}, \{y})，方向 (\{vx}, \{vy})")
}
