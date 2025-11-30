///|
pub extern "js" fn playBackgroundMusic(vol : Double) -> Unit =
  #| (vol) => {
  #|  const clampedVol = Math.min(Math.max(vol, 0), 1);
  #|
  #|  // 使用统一的音频上下文创建方式，适配WX和Web
  #|  const audioContext = typeof wx !== 'undefined' ? 
  #|    wx.createWebAudioContext() : 
  #|    new (window.AudioContext || window.webkitAudioContext)();
  #|
  #|  const oscillator = audioContext.createOscillator();
  #|  const gainNode = audioContext.createGain();
  #|
  #|  oscillator.connect(gainNode);
  #|  gainNode.connect(audioContext.destination);
  #|
  #|  // 背景音乐特性设置
  #|  oscillator.type = 'sine';
  #|  oscillator.frequency.setValueAtTime(110, audioContext.currentTime);
  #|  oscillator.frequency.exponentialRampToValueAtTime(80, audioContext.currentTime + 30);
  #|
  #|  // 应用音量
  #|  gainNode.gain.setValueAtTime(clampedVol, audioContext.currentTime);
  #|  gainNode.gain.linearRampToValueAtTime(clampedVol, audioContext.currentTime + 0.1);
  #|
  #|  oscillator.start();
  #|}

///|
#deprecated("not use")
pub extern "js" fn setMusicVolume(vol : Double) -> Unit =
  #| (vol) => {
  #|  const clampedVol = Math.min(Math.max(vol, 0), 1);
  #|  const musicData = typeof wx !== 'undefined' ? 
  #|    wx.__backgroundMusic : 
  #|    window.__backgroundMusic;
  #|  
  #|  if (musicData) {
  #|    // 更新存储的音量值
  #|    musicData.vol = clampedVol;
  #|    // 应用新的音量
  #|    musicData.gainNode.gain.linearRampToValueAtTime(
  #|      clampedVol, 
  #|      musicData.audioContext.currentTime + 0.1
  #|    );
  #|  }
  #|}

///|
#deprecated("not use")
pub extern "js" fn stopBackgroundMusic() -> Unit =
  #| => {
  #|  const musicData = typeof wx !== 'undefined' ? 
  #|    wx.__backgroundMusic : 
  #|    window.__backgroundMusic;
  #|  
  #|  if (musicData) {
  #|    musicData.oscillator.stop();
  #|    if (typeof wx !== 'undefined') {
  #|      wx.__backgroundMusic = null;
  #|    } else {
  #|      window.__backgroundMusic = null;
  #|    }
  #|  }
  #|}
