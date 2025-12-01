///|
pub(all) enum EnemyType {
  KangarooEnemy // 跳跃 - 可能canvas 绘制不好
  FlyingEnemy // 飞
  EggsEnemy // 飞 死亡后留下蛋，蛋不攻击会长生性的敌人
  GroundEnemy // 地鼠 对 草地造成破坏
  TurtleEnemy // 乌龟 移动速度慢
  CaterpillarEnemy // 毛毛虫，平平无奇，没什么特点
  VirusEnemy // 病毒 ， 具有分裂效果
  CheetahEnemy // 猎豹，移动速度快
  MechaEnemy // 机甲怪，源源不断的长生敌人
  UFOEnemy // UFO , 随机吸走一个防御塔
  BearEnemy // 熊 ， 能发动挑衅 技能 强制防御塔攻击他
} derive(Eq)

///|
pub(all) enum EnemyStatus {
  Normal
  Poison
  SlowDown
  Divide
  Frozen
}
