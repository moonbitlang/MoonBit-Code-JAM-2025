///|
pub struct WaveProgressBarRender {}

///|
pub fn WaveProgressBarRender::new() -> WaveProgressBarRender {
  WaveProgressBarRender::{  }
}

///|
let waveProgressBarRenderInstance : Ref[WaveProgressBarRender?] = Ref::new(None)

///|
pub let waveProgressBarRenderSingleton : WaveProgressBarRender = WaveProgressBarRender::get_instance()

///|
pub fn WaveProgressBarRender::get_instance() -> WaveProgressBarRender {
  match waveProgressBarRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = WaveProgressBarRender::new()
      waveProgressBarRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn WaveProgressBarRender::render(_self : WaveProgressBarRender) -> Unit {
  // let x = @TopBar.waveProgressBarSingleton.x
  // let y = @TopBar.waveProgressBarSingleton.y
  // let w = @TopBar.waveProgressBarSingleton.w
  // let h = @TopBar.waveProgressBarSingleton.h
  // let progress = @TopBar.waveProgressBarSingleton.curWave /
  //   @TopBar.waveProgressBarSingleton.maxWave
  // @UIComposeRender.drawProgressBar(x, y, w, h, progress~)
}
