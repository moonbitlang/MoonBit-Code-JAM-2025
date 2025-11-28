///|
trait Monoid {
  empty() -> Self
  append(Self, Self) -> Self
}

///|
impl[T] Monoid for Array[T] with empty() {
  []
}

///|
impl[T] Monoid for Array[T] with append(self, other) {
  let r = self.copy()
  r.push_iter(other.iter())
  r
}

///|
struct StateMonad[S, W, A]((S) -> (A, S, W))

///|
fn[S, W : Monoid, A] pure(x : A) -> StateMonad[S, W, A] {
  s => (x, s, W::empty())
}

///|
fn[S, W : Monoid, A, B] StateMonad::bind(
  m : StateMonad[S, W, A],
  f : (A) -> StateMonad[S, W, B],
) -> StateMonad[S, W, B] {
  s0 => {
    let (a, s1, w1) = m(s0)
    let (b, s2, w2) = f(a)(s1)
    (b, s2, W::append(w1, w2))
  }
}

///|
fn[S, W : Monoid] StateMonad::get() -> StateMonad[S, W, S] {
  s => (s, s, W::empty())
}

///|
fn[S, W : Monoid] StateMonad::put(sNew : S) -> StateMonad[S, W, Unit] {
  _ => ((), sNew, W::empty())
}

///|
fn[S, W : Monoid] StateMonad::modify(f : (S) -> S) -> StateMonad[S, W, Unit] {
  s => ((), f(s), W::empty())
}

///|
fn[S, W : Monoid] StateMonad::tell(w : W) -> StateMonad[S, W, Unit] {
  s => ((), s, w)
}

///|
fn[S, W : Monoid, A] run(m : StateMonad[S, W, A], s0 : S) -> (A, S, W) {
  m(s0)
}

///|
fn[S, W, A] eval(m : (S) -> (A, S, W), s0 : S) -> A {
  let (a, _, _) = m(s0)
  a
}

///|
fn[S, W, A] exec(m : (S) -> (A, S, W), s0 : S) -> (S, W) {
  let (_, s, w) = m(s0)
  (s, w)
}
