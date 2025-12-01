///|
// pub extern "js" fn setSoundVolume(vol : Double) -> Unit =
//   #| (vol) => {
//   #|  const clampedVol = Math.min(Math.max(vol, 0), 1);
//   #|  
//   #|  // 存储音量值，以便在播放新音效时使用
//   #|  if (typeof wx !== 'undefined') {
//   #|    wx.__soundVolume = clampedVol;
//   #|  } else {
//   #|    window.__soundVolume = clampedVol;
//   #|  }
//   #|}
//   #|

test "round_to_one" {
  let a = 3.145
  let b = 0.159
  // a.round()
  println(round_to_one_decimal(a))
  println(round_to_one_decimal(b))
}

///|
fn round_to_one_decimal(value : Double) -> Double {
  (value * 10.0).round() / 10.0
}

///|
pub fn set_sound_volume(vol : Double) -> Unit {
  @LocalStorage.localStorageSingleton.set_item(
    "sound_volume",
    round_to_one_decimal(vol).to_string(),
  )
}

///|
pub fn get_sound_volume() -> String {
  @LocalStorage.localStorageSingleton.get_item("sound_volume")
}

///|
pub fn set_music_volume(vol : Double) -> Unit {
  @LocalStorage.localStorageSingleton.set_item(
    "music_volume",
    round_to_one_decimal(vol).to_string(),
  )
}

///|
pub fn get_music_volume() -> String {
  @LocalStorage.localStorageSingleton.get_item("music_volume")
}
