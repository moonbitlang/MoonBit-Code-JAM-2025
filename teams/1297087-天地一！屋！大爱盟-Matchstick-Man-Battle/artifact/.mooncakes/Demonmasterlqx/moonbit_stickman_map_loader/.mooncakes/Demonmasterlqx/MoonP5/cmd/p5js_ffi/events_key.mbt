///|
pub(all) enum KeyCode {
  // 字母键
  KeyA
  KeyB
  KeyC
  KeyD
  KeyE
  KeyF
  KeyG
  KeyH
  KeyI
  KeyJ
  KeyK
  KeyL
  KeyM
  KeyN
  KeyO
  KeyP
  KeyQ
  KeyR
  KeyS
  KeyT
  KeyU
  KeyV
  KeyW
  KeyX
  KeyY
  KeyZ

  // 数字键 (主键盘)
  Digit0
  Digit1
  Digit2
  Digit3
  Digit4
  Digit5
  Digit6
  Digit7
  Digit8
  Digit9

  // 数字键盘
  Numpad0
  Numpad1
  Numpad2
  Numpad3
  Numpad4
  Numpad5
  Numpad6
  Numpad7
  Numpad8
  Numpad9
  NumpadAdd
  NumpadSubtract
  NumpadMultiply
  NumpadDivide
  NumpadDecimal
  NumpadEnter

  // 功能键
  F1
  F2
  F3
  F4
  F5
  F6
  F7
  F8
  F9
  F10
  F11
  F12

  // 箭头键
  ArrowUp
  ArrowDown
  ArrowLeft
  ArrowRight

  // 修饰键
  Shift
  Control
  Alt
  Meta
  CapsLock
  Tab

  // 特殊键
  Enter
  Escape
  Space
  Backspace
  Delete
  Insert
  Home
  End
  PageUp
  PageDown

  // 标点符号键
  Semicolon // ;
  Equal // =
  Comma // ,
  Minus // -
  Period // .
  Slash // /
  Backquote // `
  BracketLeft // [
  Backslash // \
  BracketRight // ]
  Quote // '
  UnknownKey
} derive(Eq, Show, Hash)

///|
pub fn keyCodeToInt(code : KeyCode) -> Int {
  match code {
    // 字母键 (A-Z: 65-90)
    KeyA => 65
    KeyB => 66
    KeyC => 67
    KeyD => 68
    KeyE => 69
    KeyF => 70
    KeyG => 71
    KeyH => 72
    KeyI => 73
    KeyJ => 74
    KeyK => 75
    KeyL => 76
    KeyM => 77
    KeyN => 78
    KeyO => 79
    KeyP => 80
    KeyQ => 81
    KeyR => 82
    KeyS => 83
    KeyT => 84
    KeyU => 85
    KeyV => 86
    KeyW => 87
    KeyX => 88
    KeyY => 89
    KeyZ => 90

    // 数字键 (主键盘: 48-57)
    Digit0 => 48
    Digit1 => 49
    Digit2 => 50
    Digit3 => 51
    Digit4 => 52
    Digit5 => 53
    Digit6 => 54
    Digit7 => 55
    Digit8 => 56
    Digit9 => 57

    // 数字键盘 (96-111)
    Numpad0 => 96
    Numpad1 => 97
    Numpad2 => 98
    Numpad3 => 99
    Numpad4 => 100
    Numpad5 => 101
    Numpad6 => 102
    Numpad7 => 103
    Numpad8 => 104
    Numpad9 => 105
    NumpadMultiply => 106
    NumpadAdd => 107
    NumpadSubtract => 109
    NumpadDecimal => 110
    NumpadDivide => 111
    // 注意：数字键盘Enter键与主Enter键共享键码13

    // 功能键 (F1-F12: 112-123)
    F1 => 112
    F2 => 113
    F3 => 114
    F4 => 115
    F5 => 116
    F6 => 117
    F7 => 118
    F8 => 119
    F9 => 120
    F10 => 121
    F11 => 122
    F12 => 123

    // 箭头键
    ArrowLeft => 37
    ArrowUp => 38
    ArrowRight => 39
    ArrowDown => 40

    // 修饰键
    Shift => 16
    Control => 17
    Alt => 18
    Meta => 91 // Windows key
    CapsLock => 20
    Tab => 9

    // 特殊键
    Enter => 13
    NumpadEnter => 13 // 数字键盘Enter与主Enter共享键码
    Escape => 27
    Space => 32
    Backspace => 8
    Delete => 46
    Insert => 45
    Home => 36
    End => 35
    PageUp => 33
    PageDown => 34

    // 标点符号键
    Semicolon => 186 // ;
    Equal => 187 // =
    Comma => 188 // ,
    Minus => 189 // -
    Period => 190 // .
    Slash => 191 // /
    Backquote => 192 // `
    BracketLeft => 219 // [
    Backslash => 220 // \
    BracketRight => 221 // ]
    Quote => 222 // '

    // 未知键
    UnknownKey => -1
  }
}

///|
pub fn intToKeyCode(code : Int) -> KeyCode {
  match code {
    // 字母键 (A-Z: 65-90)
    65 => KeyA
    66 => KeyB
    67 => KeyC
    68 => KeyD
    69 => KeyE
    70 => KeyF
    71 => KeyG
    72 => KeyH
    73 => KeyI
    74 => KeyJ
    75 => KeyK
    76 => KeyL
    77 => KeyM
    78 => KeyN
    79 => KeyO
    80 => KeyP
    81 => KeyQ
    82 => KeyR
    83 => KeyS
    84 => KeyT
    85 => KeyU
    86 => KeyV
    87 => KeyW
    88 => KeyX
    89 => KeyY
    90 => KeyZ

    // 数字键 (主键盘: 48-57)
    48 => Digit0
    49 => Digit1
    50 => Digit2
    51 => Digit3
    52 => Digit4
    53 => Digit5
    54 => Digit6
    55 => Digit7
    56 => Digit8
    57 => Digit9

    // 数字键盘 (96-111)
    96 => Numpad0
    97 => Numpad1
    98 => Numpad2
    99 => Numpad3
    100 => Numpad4
    101 => Numpad5
    102 => Numpad6
    103 => Numpad7
    104 => Numpad8
    105 => Numpad9
    106 => NumpadMultiply
    107 => NumpadAdd
    109 => NumpadSubtract
    110 => NumpadDecimal
    111 => NumpadDivide
    // 注意：数字键盘Enter键与主Enter键共享键码13

    // 功能键 (F1-F12: 112-123)
    112 => F1
    113 => F2
    114 => F3
    115 => F4
    116 => F5
    117 => F6
    118 => F7
    119 => F8
    120 => F9
    121 => F10
    122 => F11
    123 => F12

    // 箭头键
    37 => ArrowLeft
    38 => ArrowUp
    39 => ArrowRight
    40 => ArrowDown

    // 修饰键
    16 => Shift
    17 => Control
    18 => Alt
    91 => Meta // Left Windows key
    92 => Meta // Right Windows key
    20 => CapsLock
    9 => Tab

    // 特殊键
    13 => Enter
    27 => Escape
    32 => Space
    8 => Backspace
    46 => Delete
    45 => Insert
    36 => Home
    35 => End
    33 => PageUp
    34 => PageDown

    // 标点符号键
    186 => Semicolon // ;
    187 => Equal // =
    188 => Comma // ,
    189 => Minus // -
    190 => Period // .
    191 => Slash // /
    192 => Backquote // `
    219 => BracketLeft // [
    220 => Backslash // \
    221 => BracketRight // ]
    222 => Quote // '

    // 默认情况
    _ => UnknownKey
  }
}

///|
/// https://p5js.org/zh-Hans/reference/p5/key/
extern "js" fn P5Instance::getKey_(self : P5Instance) -> String =
  #| (self) => self.key

///|
/// https://p5js.org/zh-Hans/reference/p5/keyCode/
extern "js" fn P5Instance::getKeyCodeInt_(self : P5Instance) -> Int =
  #| (self) => self.keyCode

///|
/// https://p5js.org/zh-Hans/reference/p5/keyCode/
fn P5Instance::getKeyCode_(self : P5Instance) -> KeyCode {
  let code = self.getKeyCodeInt_()
  return intToKeyCode(code)
}

///|
/// https://p5js.org/zh-Hans/reference/p5/keyIsDown/
extern "js" fn P5Instance::keyIsDownInt_(
  self : P5Instance,
  keyCode : Int,
) -> Bool =
  #| (self, keyCode) => self.keyIsDown(keyCode)

///|
fn P5Instance::keyIsDown_(self : P5Instance, keyCode : KeyCode) -> Bool {
  let code = keyCodeToInt(keyCode)
  return self.keyIsDownInt_(code)
}

///|
/// https://p5js.org/zh-Hans/reference/p5/keyIsPressed/
extern "js" fn P5Instance::keyIsPressed_(self : P5Instance) -> Bool =
  #| (self) => self.keyIsPressed

///|
/// https://p5js.org/zh-Hans/reference/p5/keyPressed/
extern "js" fn P5Instance::setKeyPressed_(
  self : P5Instance,
  callback : () -> Bool,
) =
  #| (self, callback) => self.keyPressed = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/keyPressed/
extern "js" fn P5Instance::cancelKeyPressed_(self : P5Instance) =
  #| (self) => self.keyPressed = null

///|
/// https://p5js.org/zh-Hans/reference/p5/keyReleased/
extern "js" fn P5Instance::setKeyReleased_(
  self : P5Instance,
  callback : () -> Bool,
) =
  #| (self, callback) => self.keyReleased = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/keyReleased/
extern "js" fn P5Instance::cancelKeyReleased_(self : P5Instance) =
  #| (self) => self.keyReleased = null

///|
/// https://p5js.org/zh-Hans/reference/p5/keyTyped/
extern "js" fn P5Instance::setKeyTyped_(
  self : P5Instance,
  callback : () -> Bool,
) =
  #| (self, callback) => self.keyTyped = callback

///|
/// https://p5js.org/zh-Hans/reference/p5/keyTyped/
extern "js" fn P5Instance::cancelKeyTyped_(self : P5Instance) =
  #| (self) => self.keyTyped = null
