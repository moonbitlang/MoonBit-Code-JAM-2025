pub extern "js" fn getlowerValues(self : B2BoundValues) -> Array[Int] = 
  #| (self) => self.lowerValues

pub extern "js" fn getupperValues(self : B2BoundValues) -> Array[Int] = 
  #| (self) => self.upperValues

pub extern "js" fn b2BoundValues() -> B2BoundValues =
  #| () => new B2BoundValue()
