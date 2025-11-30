///|
pub(open) trait Enemy {
  position(Self) -> @Point.EnemyPoint
  is_alive(Self) -> Bool
  take_damage(Self, Double) -> Unit
  is_flying(Self) -> Bool = _
  health(Self) -> Double
  max_health(Self) -> Double
  move_path(Self) -> Array[@Point.PathPoint]
  get_cur_point_index(Self) -> Int
  set_cur_point_index(Self, index : Int) -> Unit
  move_next_point(Self) -> @Point.PathPoint
  set_move_next_point(Self, point : @Point.PathPoint) -> Unit
  enemy_type(Self) -> EnemyType
  // beetower effect 
  apply_poison(Self, damage_per_second : Double, duration : Double) -> Unit = _
  // VirusEnemy effect
  set_divide_effect(Self, DivideAnimation) -> Unit = _
  get_divide_effect(Self) -> DivideAnimation = _
  id(Self) -> Int
  died_glod(Self) -> Int
  on_enemy_died(Self) -> Unit = _
  get_enemy_status(Self) -> EnemyStatus
  set_enemy_status(Self, EnemyStatus) -> Unit
  get_enemy_speed(Self) -> Double
  set_enemy_speed(Self, speed : Double) -> Unit
  // render size
  render_small_size(Self) -> Bool = _
  render_normal_size(Self) -> Bool = _
  render_big_size(Self) -> Bool = _
  set_render_small(Self, Bool) -> Unit
  set_render_normal(Self, Bool) -> Unit
  set_render_big(Self, Bool) -> Unit
}

///|
impl Enemy with get_divide_effect(self) -> DivideAnimation {
  ignore(self)
  {
    x1: -1.0,
    y1: -1.0,
    x2: -1.0,
    y2: -1.0,
    x3: -1.0,
    y3: -1.0,
    start_time: -1.0,
    total_time: -1.0,
    finished: false,
    enemy_id1: -1,
    enemy_id2: -1,
  }
}

///|
impl Enemy with set_divide_effect(self, d : DivideAnimation) -> Unit {
  ignore(self)
  ignore(d)
}

///|
impl Enemy with render_small_size(_self) -> Bool {
  false
}

///|
impl Enemy with render_normal_size(_self) -> Bool {
  true
}

///|
impl Enemy with render_big_size(_self) -> Bool {
  false
}

///|
impl Enemy with on_enemy_died(self) -> Unit {
  // self.take_damage(damage)
  if !self.is_alive() {
    @EventSystem.dispatch_gold_gain_event({
      x: self.position().x,
      y: self.position().y,
      amount: self.died_glod(),
    })
  }
  // if self.enemy_type() is VirusEnemy {
  //   @EventSystem.dispatch_virus_divide_render_event({
  //     x: 1,
  //     y: 1,
  //     timestamp: 1,
  //     dt: 0,
  //     is_alive: true,
  //   })
  // }
}

// Add a global counter for generating unique IDs

///|
let enemyIdCounter : Ref[Int] = Ref::new(0)
// Function to generate the next unique enemy ID

///|
pub fn generate_enemy_id() -> Int {
  let current_id = enemyIdCounter.val
  enemyIdCounter.val = current_id + 1
  current_id
}

///|
impl Enemy with is_flying(_self) {
  false
}

///|
impl Enemy with apply_poison(
  _self,
  damage_per_second : Double,
  duration : Double,
) {
  let damage_fn = fn() { _self.take_damage(damage_per_second) }
  _apply_poison(duration, damage_fn)
}

///|
extern "js" fn _apply_poison(duration : Double, damage_fn : () -> Unit) -> Unit =
  #| (duration,damage_fn) => {
  #|const interval = 1000;
  #|const startTime = Date.now();
  #|let count = 0;
  #|
  #|const intervalId = setInterval(() => {
  #|  const elapsed = Date.now() - startTime;
  #|  if (elapsed >= duration) {
  #|    clearInterval(intervalId);
  // #|    console.log("已停止，总耗时", elapsed, "毫秒，执行了", count, "次");
  #|    return;
  #|  }
  #|
  // #|  count++;
  // #|  console.log(`执行中... 第 ${count} 次，已运行 ${elapsed} 毫秒`);
  #|
  // #|  // 你的函数逻辑
  #|damage_fn()
  #|}, interval);
  #|}
