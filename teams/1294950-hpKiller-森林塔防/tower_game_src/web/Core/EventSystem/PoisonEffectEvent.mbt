///|
pub(all) struct PoisonEffectEvent {
  ctx : @Core.CanvasRenderingContext2D
  timestamp : Double
  enemyKey : Int
  durationMs : Double
  damageValue : Double
  particleCount : Int
  particleSize : Double
  particleSpeed : Double
  color : String
}

///|
pub(all) struct ApplyPoisonEvent {
  enemyKey : Int
  damage_per_second : Double
  duration : Double
}

///|
let poisonEffectEventListeners : Array[(PoisonEffectEvent) -> Unit] = Array::new()

///|
let applyPoisonEventListeners : Array[(ApplyPoisonEvent) -> Unit] = Array::new()

///|
pub fn add_poison_effect_listener(
  listener : (PoisonEffectEvent) -> Unit,
) -> Unit {
  poisonEffectEventListeners.insert(0, listener)
}

///|
pub fn add_apply_poison_listener(listener : (ApplyPoisonEvent) -> Unit) -> Unit {
  applyPoisonEventListeners.insert(0, listener)
}

///|
pub fn dispatch_poison_effect_event(event : PoisonEffectEvent) -> Unit {
  for listener in poisonEffectEventListeners {
    listener(event)
  }
}

///|
pub fn dispatch_apply_poison_event(event : ApplyPoisonEvent) -> Unit {
  for listener in applyPoisonEventListeners {
    listener(event)
  }
}
