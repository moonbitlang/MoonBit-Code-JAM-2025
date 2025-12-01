///|
pub fn get_all_map_config() -> Array[MapConfig] {
  [
    {
      level: 1,
      neutral_element: [

      // @NeutralElement.SlotMachineNeutralElement::new(x=2, y=2, health=100),
      // @NeutralElement.StoneNeutralElement::new(x=3, y=1, health=100),
      // @NeutralElement.SlotMachineNeutralElement::new(x=3, y=2, health=100),
      // @NeutralElement.TreasureChestNeutralElement::new(x=3, y=3, health=100),
      // @NeutralElement.WeedNeutralElement::new(x=3, y=4, health=100),
      // @NeutralElement.ConveyorBeltNeutralElement::new(x=3, y=5, health=100),
      // @NeutralElement.SearchLightNeutralElement::new(x=3, y=6, health=100),
      // @NeutralElement.EnergyLightNeutralElement::new(x=3, y=7, health=100),

      // @NeutralElement.StoneNeutralElement::new(x=5, y=3, health=100),
      ],
      enemy_path_waves: [
        {
          path_id: 1,
          points: [
            { x: 3, y: 3, is_jump_point: false },
            { x: 10, y: 3, is_jump_point: false },
            // { x: 10, y: 6, is_jump_point: false },
            // { x: 5, y: 6, is_jump_point: false },
            // { x: 8, y: 7, is_jump_point: false },
            // { x: 10, y: 7, is_jump_point: false },
          ],
          waves: [
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.KangarooEnemy,
            // ),
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.FlyingEnemy,
            // ),
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.EggsEnemy,
            // ),
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.GroundEnemy,
            // ),
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.TurtleEnemy,
            // ),
            EnemyWave::new(
              max_enemies=1,
              spawn_timer=2000,
              enemy_type=@Enemy.CaterpillarEnemy,
            ),
            EnemyWave::new(
              max_enemies=1,
              spawn_timer=2000,
              enemy_type=@Enemy.VirusEnemy,
            ),
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.CheetahEnemy,
            // ),
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.MechaEnemy,
            // ),
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.UFOEnemy,
            // ),
            // EnemyWave::new(
            //   max_enemies=1,
            //   spawn_timer=2000,
            //   enemy_type=@Enemy.BearEnemy,
            // ),
          ],
        },
        // {
        //   path_id: 1,
        //   points: [
        //     // { x: 5, y: 1, is_jump_point: false },
        //     // { x: 5, y: 8, is_jump_point: false },
        //     { x: 10, y: 6, is_jump_point: false },
        //     { x: 5, y: 6, is_jump_point: false },
        //     { x: 8, y: 7, is_jump_point: false },
        //     { x: 10, y: 7, is_jump_point: false },
        //   ],
        //   waves: [
        //     EnemyWave::new(
        //       max_enemies=2,
        //       spawn_timer=2000,
        //       enemy_type=@Enemy.VirusEnemy,
        //     ),
        //     EnemyWave::new(
        //       max_enemies=3,
        //       spawn_timer=2000,
        //       enemy_type=@Enemy.VirusEnemy,
        //     ),
        //   ],
        // },
      ],
      available_tower: [
        // LaserTower, // 子弹穿刺
        // FrozenTower, // 个体冰冻
        // DecayTower, // 攻击越久伤害越高
        // ChainTower, // 攻击在敌人之间弹射
        // SpeedTower, // 没伤害,增加友军攻速
        // SkyTower, // 穿云塔，攻击天空中的敌人,单体
        // ThunderTower, // 雷电塔，空中多目标
        // TreasureTower, // 宝藏塔，攻击时能产生而外的钱
        // PlasmaTower, // 单体爆发性伤害
        // CurveTower, // 迷糊塔,是敌人变成右方援军,没攻击效果
        // LightningTower, // 伤害高,多目标攻击
        // ChargeJarTower, // 最平常的塔
        // PositiveMagneticTower, // 正极磁铁塔
        // NegativeMagneticTower, // 负极磁铁塔
        BeeTower,
      ],
      coins: 5000,
    }, // 子弹有毒
    // SnowflakeTower, // 群体减速
    // @Tower.SnowflakeTower,
    // @Tower.BeeTower,
    {
      level: 2,
      neutral_element: [
      // @NeutralElement.WeedNeutralElement::new(x=3, y=3, health=100),
      // @NeutralElement.StoneNeutralElement::new(x=4, y=4, health=100),
      // @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
      ],
      enemy_path_waves: [
        {
          path_id: 1,
          points: [
            { x: 5, y: 3, is_jump_point: false },
            { x: 10, y: 3, is_jump_point: false },
          ],
          waves: [
            EnemyWave::new(
              max_enemies=1,
              spawn_timer=100,
              enemy_type=VirusEnemy,
            ),
          ],
        },
        // EnemyWave::new(max_enemies=1, spawn_timer=100),
        {
          path_id: 2,
          points: [
            { x: 5, y: 6, is_jump_point: false },
            { x: 10, y: 6, is_jump_point: false },
          ],
          waves: [
            EnemyWave::new(
              max_enemies=0,
              spawn_timer=100,
              enemy_type=VirusEnemy,
            ),
          ],
        },
        // EnemyWave::new(max_enemies=1, spawn_timer=100),
      ],
      available_tower: [@Tower.BeeTower, @Tower.NegativeMagneticTower],
      coins: 1000,
    },
    // @Tower.LightningTower,
    // @Tower.ChargeJarTower,
    // @Tower.PlasmaTower,
    {
      level: 3,
      neutral_element: [
      // @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
      // @NeutralElement.WeedNeutralElement::new(x=3, y=3, health=100),
      ],
      enemy_path_waves: [
        {
          path_id: 1,
          points: [
            { x: 5, y: 2, is_jump_point: false },
            { x: 10, y: 2, is_jump_point: false },
          ],
          waves: [
            EnemyWave::new(
              max_enemies=1,
              spawn_timer=200,
              enemy_type=@Enemy.VirusEnemy,
            ),
          ],
        },
        // EnemyWave::new(max_enemies=1, spawn_timer=200),
        // EnemyWave::new(max_enemies=1, spawn_timer=200),
        {
          path_id: 2,
          points: [
            { x: 5, y: 5, is_jump_point: false },
            { x: 10, y: 5, is_jump_point: false },
          ],
          waves: [
            EnemyWave::new(
              max_enemies=5,
              spawn_timer=5000,
              enemy_type=@Enemy.VirusEnemy,
            ),
            // EnemyWave::new(max_enemies=1, spawn_timer=200),
            // EnemyWave::new(max_enemies=1, spawn_timer=200),
          ],
        },
        {
          path_id: 3,
          points: [
            { x: 5, y: 7, is_jump_point: false },
            { x: 10, y: 7, is_jump_point: false },
          ],
          waves: [
            EnemyWave::new(
              max_enemies=3,
              spawn_timer=1500,
              enemy_type=@Enemy.VirusEnemy,
            ),
            // EnemyWave::new(max_enemies=0, spawn_timer=200),
            // EnemyWave::new(max_enemies=1, spawn_timer=200),
          ],
        },
      ],
      available_tower: [
        // @Tower.LightningTower,
        // @Tower.ChargeJarTower,
        // @Tower.PlasmaTower,
        @Tower.PositiveMagneticTower,
        @Tower.NegativeMagneticTower,
        // @Tower.CurveTower,
        @Tower.BeeTower,
      ],
      coins: 1500,
    },
  ]
  // {
  //   level: 4,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 5,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 6,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 7,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 8,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 9,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 10,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 11,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 12,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
  // {
  //   level: 13,
  //   // paths: [{ id: 1, points: [{ x: 1, y: 1, is_jump_point: false }] }],
  //   neutral_element: [
  //     @NeutralElement.SlotMachineNeutralElement::new(x=5, y=5, health=100),
  //   ],
  //   enemy_path_waves: [
  //     {
  //       path_id: 1,
  //       points: [
  //         { x: 5, y: 3, is_jump_point: false },
  //         { x: 10, y: 3, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //     {
  //       path_id: 2,
  //       points: [
  //         { x: 5, y: 6, is_jump_point: false },
  //         { x: 10, y: 6, is_jump_point: false },
  //       ],
  //       waves: [EnemyWave::new()],
  //     },
  //   ],
  //   available_tower: [
  //     @Tower.LightningTower,
  //     @Tower.ChargeJarTower,
  //     @Tower.PlasmaTower,
  //     @Tower.PositiveMagneticTower,
  //     @Tower.NegativeMagneticTower,
  //     @Tower.CurveTower,
  //     @Tower.BeeTower,
  //   ],
  // },
}

///|
pub fn get_level_count() -> Int {
  get_all_map_config().length()
}
