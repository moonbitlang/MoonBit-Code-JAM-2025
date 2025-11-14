pub extern "js" fn b2Bound() -> B2Bound =
  #| () => new b2Bound()

pub extern "js" fn isLower(self : B2Bound) -> Bool =
  #| self => self.IsLower()

pub extern "js" fn isUpper(self : B2Bound) -> Bool = 
  #| self => self.IsUpper()

pub extern "js" fn swap(self : B2Bound, b : B2Bound) -> Unit =
  #| self => { self.Swap(b) }