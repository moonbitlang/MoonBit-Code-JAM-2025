///|
pub(all) enum TowerType {
  PlasmaTower // 单体爆发性伤害
  CurveTower // 迷糊塔,是敌人变成右方援军,没攻击效果
  LightningTower // 伤害高,多目标攻击
  ChargeJarTower // 最平常的塔
  PositiveMagneticTower // 正极磁铁塔
  NegativeMagneticTower // 负极磁铁塔
  BeeTower // 子弹有毒
  SnowflakeTower // 群体减速
  LaserTower // 子弹穿刺
  FrozenTower // 个体冰冻
  DecayTower // 攻击越久伤害越高
  ChainTower // 攻击在敌人之间弹射
  SpeedTower // 没伤害,增加友军攻速
  SkyTower // 穿云塔，攻击天空中的敌人,单体
  ThunderTower // 雷电塔，空中多目标
  TreasureTower // 宝藏塔，攻击时能产生而外的钱
} derive(Eq)
