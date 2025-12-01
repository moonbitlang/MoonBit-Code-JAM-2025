///|
fn init {
  initGlobal()
  // _initPoisonStates()
}

///|
fn main {
  let gameController = @Controllers.GameController::get_instance(
    @Core.canvasSingleton, @Core.ctxSingleton, @Core.map,
  )
  let gameRender = @Renders.GameRender::new()
  let animate_ref : Ref[(Double) -> Unit] = Ref::new(fn(_) { () })
  let last : Ref[Double] = Ref::new(0.0)
  let animate = fn(timestamp : Double) -> Unit {
    let rawDt = if last.val == 0.0 { 16.67 } else { timestamp - last.val }
    last.val = timestamp
    let speed = @TopBarController.speedControllerSingleton.timeScale()
    let paused = @TopBarController.pauseControllerSingleton.isPaused()
    let dt = if paused { 0.0 } else { rawDt * speed }
    gameController.update(dt, timestamp)
    gameRender.render(dt, timestamp)

    // Process frame callbacks only when not paused
    if !paused {
      for callback in @TowerRender.frame_callbacks.val {
        callback(timestamp)
      }
    }
    let _ = @Core.requestAnimationFrame(
      @Core.to_frame_callback(animate_ref.val),
    )

  }

  // Handle pause state after the main loop
  // if paused {
  //   // When paused, still allow one final update to process any pending actions
  //   gameController.update(0.0)
  //   gameRender.render(last.val)
  // }
  animate_ref.val = animate
  let _ = @Core.requestAnimationFrame(@Core.to_frame_callback(animate))

}

///|
pub extern "js" fn initGlobal() -> Unit =
  #|() => {
  #|  let g;
  #|  if (typeof globalThis !== 'undefined') {
  #|    g = globalThis;
  #|  } else if (typeof window !== 'undefined') {
  #|    g = window;
  #|  } else if (typeof global !== 'undefined') {
  #|    g = global;
  #|  } else if (typeof self !== 'undefined') {
  #|    g = self;
  #|  } else {
  #|    g = typeof GameGlobal !== 'undefined' ? GameGlobal : {};
  #|  }
  #|
  #|  g.TEST_GAME_CONFIG = {
  #|    version: '1.0.0',
  #|    debug: true,
  #|    score: 0
  #|  };
  #|
  #|  g.TEST_FILL_COLORS = "red";
  #|
  #|  g.getGlobal = function(key) {
  #|    return this[key];
  #|  };
  #|
  #|  let localStorage;
  #|  if (typeof wx !== 'undefined') {
  #|    localStorage = {
  #|      get length() {
  #|        const { keys } = wx.getStorageInfoSync();
  #|        return keys.length;
  #|      },
  #|
  #|      key(n) {
  #|        const { keys } = wx.getStorageInfoSync();
  #|        return keys[n];
  #|      },
  #|
  #|      getItem(key) {
  #|        const value = wx.getStorageSync(key);
  #|        return value === '' ? null : value;
  #|      },
  #|
  #|      setItem(key, value) {
  #|        return wx.setStorageSync(key, value);
  #|      },
  #|
  #|      removeItem(key) {
  #|        return wx.removeStorageSync(key);
  #|      },
  #|
  #|      clear() {
  #|        return wx.clearStorageSync();
  #|      }
  #|    };
  #|  } else {
  #|    localStorage = g.localStorage;
  #|  }
  // #|  localStorage.setItem("TEST_Storage_key","TEST_Storage_Value")
  #|  g.setGlobal = function(key, value) {
  #|    this[key] = value;
  #|  };
  #|
  #|  g.setGlobal("localStorage", localStorage);
  #|};

///|
#deprecated("not use")
extern "js" fn _initPoisonStates() -> Unit =
  #| () =>setGlobal("poisonStates",{})

///|
