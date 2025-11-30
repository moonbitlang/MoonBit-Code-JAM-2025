///|
pub(all) struct WaveProgressBar {
  x : Double
  y : Double
  w : Double
  h : Double
  mut curWave : Double
  mut maxWave : Double
}

///|
pub fn WaveProgressBar::new(
  curWave? : Double = -1.0,
  maxWave? : Double = -1.0,
) -> WaveProgressBar {
  WaveProgressBar::{ x: 600, y: 50.0, w: 200.0, h: 20.0, curWave, maxWave }
}

///|
let waveProgressBarInstance : Ref[WaveProgressBar?] = Ref::new(None)

///|
pub let waveProgressBarSingleton : WaveProgressBar = WaveProgressBar::get_instance()

///|
pub fn WaveProgressBar::get_instance() -> WaveProgressBar {
  match waveProgressBarInstance.val {
    Some(render) => render
    None => {
      let new_instance = WaveProgressBar::new()
      waveProgressBarInstance.val = Some(new_instance)
      new_instance
    }
  }
}
