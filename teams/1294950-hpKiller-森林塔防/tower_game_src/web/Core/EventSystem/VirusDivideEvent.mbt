///|
pub(all) struct VirusDivideEvent {
  x : Double
  y : Double
  timestamp : Double
  is_alive : Bool
  dt : Double
}

///|
let virus_divide_render_listenrs : Array[(VirusDivideEvent) -> Unit] = Array::new()

///|
let virus_divide_controller_listenrs : Array[(VirusDivideEvent) -> Unit] = Array::new()

///|
pub fn add_virus_divide_render_listener(
  listener : (VirusDivideEvent) -> Unit,
) -> Unit {
  virus_divide_render_listenrs.insert(0, listener)
}

///|
pub fn dispatch_virus_divide_render_event(event : VirusDivideEvent) -> Unit {
  for listener in virus_divide_render_listenrs {
    listener(event)
  }
}

///|
pub fn add_virus_divide_controller_listener(
  listener : (VirusDivideEvent) -> Unit,
) -> Unit {
  virus_divide_controller_listenrs.insert(0, listener)
}

///|
pub fn dispatch_virus_divide_controller_envet(event : VirusDivideEvent) -> Unit {
  for listener in virus_divide_controller_listenrs {
    listener(event)
  }
}
