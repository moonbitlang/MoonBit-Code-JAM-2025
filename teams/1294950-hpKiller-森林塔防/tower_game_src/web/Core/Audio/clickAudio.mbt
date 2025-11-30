///|
/// 
#deprecated("not use")
pub extern "js" fn playClickSound(vol : Double) -> Unit =
  #|(vol) => {
  #|  // 使用存储的音量或传入的音量
  #|  const currentVol = typeof wx !== 'undefined' ? 
  #|    (wx.__soundVolume !== undefined ? wx.__soundVolume : vol) : 
  #|    (window.__soundVolume !== undefined ? window.__soundVolume : vol);
  #|  
  #|  const clampedVol = Math.min(Math.max(currentVol, 0), 1);
  #|
  #|  const audioContext = typeof wx !== 'undefined' ? 
  #|    (wx.__audioContext || wx.createWebAudioContext()) : 
  #|    (window.audioContext || new (window.AudioContext || window.webkitAudioContext)());
  #|
  #|  // 保存音频上下文
  #|  if (typeof wx !== 'undefined') {
  #|    wx.__audioContext = audioContext;
  #|  } else {
  #|    window.audioContext = audioContext;
  #|  }
  #|
  #|  const oscillator = audioContext.createOscillator();
  #|  const gainNode = audioContext.createGain();
  #|
  #|  oscillator.connect(gainNode);
  #|  gainNode.connect(audioContext.destination);
  #|
  #|  oscillator.type = 'sine';
  #|  oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
  #|  oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.15);
  #|
  #|  // 使用存储的音量
  #|  gainNode.gain.setValueAtTime(clampedVol, audioContext.currentTime);
  #|  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
  #|
  #|  oscillator.start();
  #|  oscillator.stop(audioContext.currentTime + 0.2);
  #|}

///|
#deprecated("not use")
pub extern "js" fn isPointInSliderButton(
  x : Double,
  y : Double,
  sliderX : Double,
  sliderY : Double,
  sliderWidth : Double,
  value : Double,
) -> Bool =
  #| (x, y, sliderX, sliderY, sliderWidth, value) => {
  #|    const buttonX = sliderX + sliderWidth * value;
  #|    const buttonY = sliderY + sliderHeight / 2;
  #|    const buttonRadius = 25;
  #|    return Math.sqrt((x - buttonX) ** 2 + (y - buttonY) ** 2) <= buttonRadius;
  #|}

// ///|
// let audioContextRef : Ref[Bool] = Ref::new(false)

// ///|
// pub extern "js" fn initAudioContext() -> Unit =
//   #| if (!window.audioContext) {
//   #|   window.audioContext = new (window.AudioContext || window.webkitAudioContext)();
//   #| }

// ///|
// pub fn ensureAudioContext() -> Unit {
//   if not(audioContextRef.val) {
//     initAudioContext()
//     audioContextRef.val = true
//   }
// }
