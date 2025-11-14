///| image ffi

pub(all) enum BlendMode {
  NORMAL
  ADD
  DARKEST
  LIGHTEST
  DIFFERENCE
  EXCLUSION
  MULTIPLY
  SCREEN
  REPLACE
  OVERLAY
  HARD_LIGHT
  SOFT_LIGHT
  DODGE
  BURN
}

pub impl Show for BlendMode with to_string(self){
  match self {
    NORMAL => "NORMAL"
    ADD => "ADD"
    DARKEST => "DARKEST"
    LIGHTEST => "LIGHTEST"
    DIFFERENCE => "DIFFERENCE"
    EXCLUSION => "EXCLUSION"
    MULTIPLY => "MULTIPLY"
    SCREEN => "SCREEN"
    REPLACE => "REPLACE"
    OVERLAY => "OVERLAY"
    HARD_LIGHT => "HARD_LIGHT"
    SOFT_LIGHT => "SOFT_LIGHT"
    DODGE => "DODGE"
    BURN => "BURN"
  }
}

pub impl Show for BlendMode with output(self, logger : &Logger){
  logger.write_string(self.to_string())
}

pub(all) enum FilterType{
  THRESHOLD
  GRAY
  OPAQUE
  INVERT
  POSTERIZE
  BLUR
  ERODE
  DILATE
}

pub impl Show for FilterType with to_string(self){
  match self {
    THRESHOLD => "threshold"
    GRAY => "gray"
    OPAQUE => "opaque"
    INVERT => "invert"
    POSTERIZE => "posterize"
    BLUR => "blur"
    ERODE => "erode"
    DILATE => "dilate"
  }
}

pub impl Show for FilterType with output(self, logger : &Logger){
  logger.write_string(self.to_string())
}

pub impl Show for FilterType
pub impl Show for BlendMode

pub trait P5ImageTrait{
  getImageInstance(Self) -> P5Image
  blend(Self, sx : Double, sy: Double, sw : Double, sh : Double, dx : Double, dy : Double, dw : Double, dh : Double, mode : BlendMode) -> Unit = _
  copy(Self, source: &P5ImageTrait?, sx : Double, sy: Double, sw : Double, sh : Double, dx : Double, dy : Double, dw : Double, dh : Double) -> Unit = _
  delay(Self, d : Double, index : Int?) -> Unit = _
  filter(Self, filtermodel : FilterType, filterParam: Double?, useWebGL: Bool) -> Unit = _
  // get api with no parameter
  get_image(Self, region: (Double,Double,Double,Double)?) -> P5Image = _
  // return [R, G, B, A]
  get_pixels(Self, x:Double, y:Double) -> (Double,Double,Double,Double) = _
  // for gif image
  get_current_frame(Self) -> Int = _
  height(Self) -> Int = _
  width(Self) -> Int = _
  pause(Self) -> Unit = _
  play(Self) -> Unit = _
  set_frame(Self, index : Int) -> Unit = _
  resize(Self, w : Int, h : Int) -> Unit = _
  load_pixels(Self) -> Unit = _
  update_pixels(Self) -> Unit = _
  pixels(Self) -> Array[Int] = _
  num_frames(Self) -> Int = _
}


///| realse Trait
/// 

pub impl P5ImageTrait for P5Image

pub impl P5ImageTrait for P5Image with getImageInstance(self : P5Image) -> P5Image {
  self
}

impl P5ImageTrait with blend(self, sx : Double, sy: Double, sw : Double, sh : Double, dx : Double, dy : Double, dw : Double, dh : Double, mode : BlendMode) -> Unit {
  self.getImageInstance().blend_(sx, sy, sw, sh, dx, dy, dw, dh, mode.to_string())
}

impl P5ImageTrait with copy(self, source: &P5ImageTrait?, sx : Double, sy: Double, sw : Double, sh : Double, dx : Double, dy : Double, dw : Double, dh : Double) -> Unit {
  if source.is_empty() {
    self.getImageInstance().copy_(None, sx, sy, sw, sh, dx, dy, dw, dh)
  } else {
    self.getImageInstance().copy_(Some(source.unwrap().getImageInstance()), sx, sy, sw, sh, dx, dy, dw, dh)
  }
}

impl P5ImageTrait with delay(self, d : Double, index : Int?) -> Unit {
  self.getImageInstance().delay_(d, index)
}

impl P5ImageTrait with filter(self, filtermodel : FilterType, filterParam: Double?, useWebGL: Bool) -> Unit {
  self.getImageInstance().filter_(filtermodel.to_string(), filterParam, useWebGL=useWebGL)
}

impl P5ImageTrait with get_image(self, region: (Double,Double,Double,Double)?) -> P5Image {
  if region.is_empty() {
    self.getImageInstance().get_image_(None)
  } else {
    self.getImageInstance().get_image_(region)
  }
}

impl P5ImageTrait with get_pixels(self, x:Double, y:Double) -> (Double,Double,Double,Double) {
  self.getImageInstance().get_pixels_(x, y)
}

impl P5ImageTrait with get_current_frame(self) -> Int {
  self.getImageInstance().get_current_frame_()
}

impl P5ImageTrait with height(self) -> Int {
  self.getImageInstance().height_()
}

impl P5ImageTrait with width(self) -> Int {
  self.getImageInstance().width_()
}

impl P5ImageTrait with pause(self) -> Unit {
  self.getImageInstance().pause_()
}

impl P5ImageTrait with play(self) -> Unit {
  self.getImageInstance().play_()
}

impl P5ImageTrait with set_frame(self, index : Int) -> Unit {
  self.getImageInstance().set_frame_(index)
}

impl P5ImageTrait with resize(self, w : Int, h : Int) -> Unit {
  self.getImageInstance().resize_(w, h)
}

impl P5ImageTrait with load_pixels(self) -> Unit {
  self.getImageInstance().load_pixels_()
}

impl P5ImageTrait with update_pixels(self) -> Unit {
  self.getImageInstance().update_pixels_()
}

impl P5ImageTrait with pixels(self) -> Array[Int] {
  self.getImageInstance().pixels_()
}

impl P5ImageTrait with num_frames(self) -> Int {
  self.getImageInstance().num_frames_()
}


///|FFI Part
/// 

extern "js" fn P5Image::blend_(
  self : P5Image,
  sx : Double,
  sy : Double,
  sw : Double,
  sh : Double,
  dx : Double,
  dy : Double,
  dw : Double,
  dh : Double,
  mode : String,
) -> Unit =
  #| (self, sx, sy, sw, sh, dx, dy, dw, dh, mode) => (self, sx, sy, sw, sh, dx, dy, dw, dh, mode)

extern "js" fn P5Image::copy_(
  self : P5Image,
  source : P5Image?,
  sx : Double,
  sy : Double,
  sw : Double,
  sh : Double,
  dx : Double,
  dy : Double,
  dw : Double,
  dh : Double,
) -> Unit =
  #| (self, source, sx, sy, sw, sh, dx, dy, dw, dh) => {
  #|    if (source){
  #|      self.copy(source, sx, sy, sw, sh, dx, dy, dw, dh)
  #|    } else {
  #|      self.copy(sx, sy, sw, sh, dx, dy, dw, dh)
  #|    }
  #|}

extern "js" fn P5Image::delay_(
  self : P5Image,
  d : Double,
  index : Int?
) -> Unit =
  #| (self, d, index) =>{
  #|   if (index){
  #|     self.delay(d, index);
  #|  } else {
  #|    self.delay(d);
  #|  }
  #|}

extern "js" fn P5Image::filter_(
  self : P5Image,
  filtermodel : String,
  filterParam : Double?,
  useWebGL~: Bool = true
) -> Unit =
  #| (self, filtermodel, filterParam, useWebGL) => {
  #|   if (filterParam){
  #|     self.filter(filtermodel, filterParam, useWebGL);
  #|   } else {
  #|     self.filter(filtermodel, useWebGL);
  #|   }
  #|}

extern "js" fn P5Image::get_image_(
  self : P5Image,
  region : (Double,Double,Double,Double)?
) -> P5Image =
  #| (self, region) => {
  #|   if (region){
  #|     x = region._0;
  #|     y = region._1;
  #|     w = region._2;
  #|     h = region._3;
  #|     return self.get(x, y, w, h);
  #|   } else {
  #|     return self.get();
  #|   }
  #|}

extern "js" fn P5Image::get_pixels_(
  self : P5Image,
  x : Double,
  y : Double
) -> (Double,Double,Double,Double) =
  #| (self, x, y) => self.get(x, y)

extern "js" fn P5Image::get_current_frame_(
  self : P5Image,
) -> Int =
  #| (self) => self.getCurrentFrame()

extern "js" fn P5Image::height_(self : P5Image) -> Int =
  #| (self) => self.height

extern "js" fn P5Image::width_(self : P5Image) -> Int =
  #| (self) => self.width

extern "js" fn P5Image::pause_(self : P5Image) -> Unit =
  #| (self) => self.pause()

extern "js" fn P5Image::play_(self : P5Image) -> Unit =
  #| (self) => self.play()

extern "js" fn P5Image::set_frame_(
  self : P5Image,
  index : Int
) -> Unit =
  #| (self, index) => self.setFrame(index)

extern "js" fn P5Image::resize_(
  self : P5Image,
  w : Int,
  h : Int
) -> Unit =
  #| (self, w, h) => self.resize(w, h)

extern "js" fn P5Image::load_pixels_(self : P5Image) -> Unit =
  #| (self) => self.loadPixels()

extern "js" fn P5Image::update_pixels_(self : P5Image) -> Unit =
  #| (self) => self.updatePixels()

extern "js" fn P5Image::pixels_(self : P5Image) -> Array[Int] =
  #| (self) => self.pixels

extern "js" fn P5Image::num_frames_(self : P5Image) -> Int =
  #| (self) => self.numFrames()

