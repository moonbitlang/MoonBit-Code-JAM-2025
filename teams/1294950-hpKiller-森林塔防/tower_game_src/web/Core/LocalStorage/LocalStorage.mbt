///|
pub(all) struct LocalStorage {}

///|
pub fn LocalStorage::new() -> LocalStorage {
  LocalStorage::{  }
}

///|
let localStorageInstance : Ref[LocalStorage?] = Ref::new(None)

///|
pub let localStorageSingleton : LocalStorage = LocalStorage::get_instance()

///|
pub fn LocalStorage::get_instance() -> LocalStorage {
  match localStorageInstance.val {
    Some(render) => render
    None => {
      let new_instance = LocalStorage::new()
      localStorageInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
extern "js" fn setItem(k : String, v : String) -> Unit =
  #| (k,v) => {
  #|  if (typeof wx !== 'undefined'){
  #|    wx.setStorageSync(k, v)
  #|  }else{
  #|    localStorage.setItem(k,v)
  #|  }
  #|}

///|
extern "js" fn getItem(k : String) -> String =
  #| (k) => {
  #|  if (typeof wx !== 'undefined'){
  #|    return wx.getStorageSync(k)
  #|  }else{
  #|    if (localStorage.getItem(k) !==null ){
  #|      return localStorage.getItem(k)
  #|    }else {
  #|      return ''
  #|    }
  #|  }
  #|}

///|
extern "js" fn clear() -> Unit =
  #| () => {
  #|  if (typeof wx !== 'undefined'){
  #|    return wx.clearStorageSync()
  #|  }else{
  #|    return localStorage.clear()
  #|  }
  #|}

///|
pub fn LocalStorage::set_item(
  self : LocalStorage,
  k : String,
  v : String,
) -> Unit {
  ignore(self)
  // println("localStorage with k(\{k}) v(\{v})")
  setItem(k, v)
}

///|
pub fn LocalStorage::get_item(self : LocalStorage, k : String) -> String {
  ignore(self)
  getItem(k)
}

///|
pub fn LocalStorage::clear_cache(self : LocalStorage) -> Unit {
  ignore(self)
  clear()
}
