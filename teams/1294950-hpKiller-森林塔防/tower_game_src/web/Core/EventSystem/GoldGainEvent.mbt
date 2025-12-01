///|
pub(all) struct GoldGainEvent {
  x : Double
  y : Double
  amount : Int
}

///|
let goldGainEventListeners : Array[(GoldGainEvent) -> Unit] = Array::new()

///|
pub fn add_gold_gain_listener(listener : (GoldGainEvent) -> Unit) -> Unit {
  goldGainEventListeners.insert(0, listener)
}

///|
pub fn dispatch_gold_gain_event(event : GoldGainEvent) -> Unit {
  for listener in goldGainEventListeners {
    listener(event)
  }
}
