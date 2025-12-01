///|
pub(all) enum NeutralElementType {
  StoneNeutralElement // 石头
  SlotMachineNeutralElement // 彩票机 ，不知道有没有时间实现
  TreasureChestNeutralElement // 宝藏，获得一大笔财富
  WeedNeutralElement // 小草
  ConveyorBeltNeutralElement // 传送带，由路径和开关按钮组成
  SearchLightNeutralElement // 探照灯，开阔视野
  EnergyLightNeutralElement // 能量等，只有在灯范围内的元素才能攻击
} derive(Eq)
