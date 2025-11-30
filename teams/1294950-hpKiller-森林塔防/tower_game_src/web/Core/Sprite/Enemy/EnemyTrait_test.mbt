///|
pub(open) trait A {
  b(Self) -> Unit = _
  d(Self) -> Unit
}

///|
impl A with b(_) -> Unit {
  println("default impl")
}

///|
pub struct C {}

///|
pub fn C::new() -> C {
  // ignore(self)
  C::{  }
}

///|
impl A for C with b(_) {
  println("call b() in C")
}

///|
impl A for C with d(_) {
  println("call d() in C")
}

///|
pub struct D {}

///|
pub fn D::new() -> D {
  // ignore(self)
  D::{  }
}

///|
impl A for D with d(_) {
  println("call d() in d")
}

///|
pub struct S {
  c : Array[&A]
}

///|
pub fn S::new() -> S {
  { c: [C::new(), D::new()] }
}

///|
test "trait" {
  for c in S::new().c {
    c.b()
  }
}
