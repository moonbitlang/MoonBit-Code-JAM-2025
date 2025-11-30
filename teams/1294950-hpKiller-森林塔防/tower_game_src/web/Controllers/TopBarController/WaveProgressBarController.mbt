///|
pub struct WaveProgressBarController {}

///|
pub fn WaveProgressBarController::new() -> WaveProgressBarController {
  WaveProgressBarController::{  }
}

///|
let waveProgressBarControllerInstance : Ref[WaveProgressBarController?] = Ref::new(
  None,
)

///|
pub let waveProgressBarControllerSingleton : WaveProgressBarController = WaveProgressBarController::get_instance()

///|
pub fn WaveProgressBarController::get_instance() -> WaveProgressBarController {
  match waveProgressBarControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = WaveProgressBarController::new()
      waveProgressBarControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn WaveProgressBarController::update(
  self : WaveProgressBarController,
  dt : Double,
) -> Unit {
  let wave_config = @Map.enemyWaveConfigSingleton()
  let wave_progress = @TopBar.waveProgressBarSingleton
  wave_progress.curWave = wave_config.cur_wave.to_double()

  // Get max wave count from the first path configuration
  if wave_config.path_wave_configs.length() > 0 {
    wave_progress.maxWave = wave_config.path_wave_configs[0].waves
      .length()
      .to_double()
  } else {
    wave_progress.maxWave = 0.0
  }
  ignore(dt)
  ignore(self)
}
