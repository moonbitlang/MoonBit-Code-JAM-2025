///|
pub(all) struct PositiveMagneticFieldData {
  mut magnetic_field_active : Bool // 是否处于磁场激活状态
  mut magnetic_field_timer : Double // 磁场动画计时器（3秒）
  mut has_magnetic_pair : Bool // 是否存在配对的NegativeMagneticTower
  mut magnetic_ray_active : Bool // 磁力射线是否激活
  mut positive_tower_id : Int
  mut negative_tower_id : Int
  mut positive_tower_x : Double
  mut positive_tower_y : Double
  mut negative_tower_x : Double
  mut negative_tower_y : Double
}

///|
pub fn PositiveMagneticFieldData::new() -> PositiveMagneticFieldData {
  PositiveMagneticFieldData::{
    magnetic_field_active: false,
    magnetic_field_timer: 0.0,
    has_magnetic_pair: false,
    magnetic_ray_active: false,
    positive_tower_id: -1,
    negative_tower_id: -1,
    positive_tower_x: -1,
    positive_tower_y: -1,
    negative_tower_x: -1,
    negative_tower_y: -1,
  }
}

///|
pub let positive_magnetic_min_distance = 160.0

///|
pub let magnetic_field_timer_max = 3000.0

///|
pub let positive_magnetic_width = 40.0

///|
pub let positive_magnetic_field_datas : Ref[Array[PositiveMagneticFieldData]] = Ref::new(
  Array::new(),
)
