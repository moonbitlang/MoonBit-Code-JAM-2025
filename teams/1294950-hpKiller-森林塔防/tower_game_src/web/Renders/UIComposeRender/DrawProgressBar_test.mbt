///|
/// 
fn c(_ : String, _b? : String? = Some("aa")) -> Unit {
  if _b is Some(_b) {
    // println(a)
    // println(b)
  } else {
    // println(a)
    // println(b)
  }
}

///|
test "pass" {
  c("aa")
  c("aa", _b=Some("ddd"))
}
