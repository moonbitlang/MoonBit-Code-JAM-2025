///|
pub struct SelectTowerPanelController {}

///|
pub fn SelectTowerPanelController::new() -> SelectTowerPanelController {
  SelectTowerPanelController::{  }
}

///|
let selectTowerPanelControllerInstance : Ref[SelectTowerPanelController?] = Ref::new(
  None,
)

///|
pub let selectTowerPanelControllerSingleton : SelectTowerPanelController = SelectTowerPanelController::get_instance()

///|
pub fn SelectTowerPanelController::get_instance() -> SelectTowerPanelController {
  match selectTowerPanelControllerInstance.val {
    Some(render) => render
    None => {
      let new_instance = SelectTowerPanelController::new()
      selectTowerPanelControllerInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SelectTowerPanelController::update(
  self : SelectTowerPanelController,
  dt : Double,
) -> Unit {
  ignore(dt)
  ignore(self)
}

///|
pub fn SelectTowerPanelController::handle_input_point(
  self : SelectTowerPanelController,
  point : @Point.PixelPoint,
) -> Unit {
  // Check if clicking on upgrade panel
  if @Panels.selectTowerPanelSingleton.upgradePanelOpen {
    let center = @Panels.selectTowerPanelSingleton.upgradePanelCenter
    let radius = @Panels.selectTowerPanelSingleton.upgradePanelRadius
    let dx = point.x - center.x
    let dy = point.y - center.y
    let distance = (dx * dx + dy * dy).sqrt()
    if distance <= radius {
      // Click is within upgrade panel circle
      let upgradeButtonY = center.y - radius / 2
      let destroyButtonY = center.y + radius / 2
      let buttonRadius = radius / 3
      // Check if click is on upgrade button (circular button)
      let upgradeDx = point.x - center.x
      let upgradeDy = point.y - upgradeButtonY
      let upgradeDistance = (upgradeDx * upgradeDx + upgradeDy * upgradeDy).sqrt()
      if upgradeDistance <= buttonRadius {
        // Clicked on upgrade button
        match @Panels.selectTowerPanelSingleton.selectedTowerForUpgrade {
          Some(tower) =>
            // Check if tower is already at max level (level 3)
            if tower.level() >= 3 {
              // Could show a message that tower is at max level
              // println("Tower is already at maximum level")
            } else {
              let upgradeCost = tower.cost() * 0.5 // Upgrade cost is 50% of tower's base cost
              if @TopBarController.hduControllerSingleton.spend_gold(
                  upgradeCost,
                ) {
                tower.upgrade()
                // Optional: Show visual feedback that upgrade was successful
                // println("Tower upgraded to level \{tower.level()}")
              } else {
                // Not enough gold - could show a message
                // println("Not enough gold to upgrade tower")
              }
            }
          None => ()
        }
        @Panels.selectTowerPanelSingleton.upgradePanelOpen = false
        return
      }

      // Check if click is on destroy button (circular button)
      let destroyDx = point.x - center.x
      let destroyDy = point.y - destroyButtonY
      let destroyDistance = (destroyDx * destroyDx + destroyDy * destroyDy).sqrt()
      if destroyDistance <= buttonRadius {
        // Clicked on destroy button
        match @Panels.selectTowerPanelSingleton.selectedTowerForUpgrade {
          Some(tower) => {
            // Add 50% of cost back as gold
            @TopBarController.hduControllerSingleton.add_gold(
              tower.cost() * 0.5,
            )

            // Remove tower from tower array
            // Since we can't easily compare references, we'll use a simpler approach
            // We'll iterate through the array and try to remove the tower
            let towerArray = @Map.map_grid_system_singleton.tower
            let mut indexToRemove = -1
            for i = 0; i < towerArray.length(); i = i + 1 {
              // We'll use pointer comparison as a last resort
              // This is a workaround since we can't directly compare trait references
              let currentTower = towerArray[i]
              let targetTower = @Panels.selectTowerPanelSingleton.selectedTowerForUpgrade.unwrap()

              // Try to compare by position as a fallback
              if currentTower.position().x == targetTower.position().x &&
                currentTower.position().y == targetTower.position().y {
                indexToRemove = i
                break
              }
            }
            if indexToRemove >= 0 {
              ignore(towerArray.remove(indexToRemove))
            }

            // Remove tower from grid
            let pos = @Map.map_grid_system_singleton.to_1_base_map(
              @Point.BasePoint::new(x=tower.position().x, y=tower.position().y),
            )
            ignore(
              @Map.map_grid_system_singleton.freed(
                pos.x.to_int(),
                pos.y.to_int(),
              ),
            )

            // Clear the selected tower for upgrade
            @Panels.selectTowerPanelSingleton.selectedTowerForUpgrade = None

            // Optional: Show visual feedback that tower was destroyed
            // println("Tower destroyed")
          }
          None => ()
        }
        @Panels.selectTowerPanelSingleton.upgradePanelOpen = false
        return
      }
    } else {
      // Click outside upgrade panel
      @Panels.selectTowerPanelSingleton.upgradePanelOpen = false
      return
    }
  }

  // Handle tower placement panel
  if @Panels.selectTowerPanelSingleton.isOpen {
    // Use computeLayout to get item positions
    let (_, _, items) = @Panels.selectTowerPanelSingleton.computeLayout(
      @Core.map,
    )

    // Check if click is on a tower icon
    for i = 0; i < items.length(); i = i + 1 {
      let r = items[i]
      if point.x >= r.x &&
        point.x <= r.x + r.w &&
        point.y >= r.y &&
        point.y <= r.y + r.h {
        // Store the selected tower type
        @Panels.selectTowerPanelSingleton.selectedTowerType = Some(
          @Panels.selectTowerPanelSingleton.items[i],
        )
        // Close the panel
        @Panels.selectTowerPanelSingleton.isOpen = false
        // Place the tower at the original click position
        self.place_tower(
          @Panels.selectTowerPanelSingleton.items[i],
          @Panels.selectTowerPanelSingleton.openPanelTowerPoint,
        )
        return
      }
    }

    // Click was not on an icon, check if it's outside the panel
    let panelX = @Panels.selectTowerPanelSingleton.showPanelPiexlPoint.x
    let panelY = @Panels.selectTowerPanelSingleton.showPanelPiexlPoint.y
    if point.x < panelX ||
      point.x > panelX + @Panels.selectTowerPanelSingleton.showPanelW ||
      point.y < panelY ||
      point.y > panelY + @Panels.selectTowerPanelSingleton.showPanelH {
      @Panels.selectTowerPanelSingleton.isOpen = false
    }
    return
  }

  // Check if clicking on an existing tower to open upgrade panel
  for tower in @Map.map_grid_system_singleton.tower {
    let towerPos = @Map.map_grid_system_singleton.tower2pixel(tower.position())
    let dx = point.x - towerPos.x
    let dy = point.y - towerPos.y
    let distance = (dx * dx + dy * dy).sqrt()
    // Use a larger radius for click detection to make it easier to click on towers
    let towerRadius = @Panels.selectTowerPanelSingleton.iconSize
    if distance <= towerRadius {
      // Clicked on a tower, open upgrade panel
      @Panels.selectTowerPanelSingleton.upgradePanelOpen = true

      // Set initial panel position
      let mut panelX = point.x
      let mut panelY = point.y
      let panelRadius = @Panels.selectTowerPanelSingleton.iconSize * 2
      @Panels.selectTowerPanelSingleton.upgradePanelRadius = panelRadius

      // Adjust panel position to stay within canvas boundaries
      // Canvas dimensions from game.js: width = 1280, height = 720
      let canvasWidth = @Core.map.width
      let canvasHeight = @Core.map.height

      // Check right boundary
      if panelX + panelRadius > canvasWidth {
        panelX = canvasWidth - panelRadius
      }

      // Check left boundary
      if panelX - panelRadius < 0.0 {
        panelX = panelRadius
      }

      // Check bottom boundary
      if panelY + panelRadius > canvasHeight {
        panelY = canvasHeight - panelRadius
      }

      // Check top boundary
      if panelY - panelRadius < 0.0 {
        panelY = panelRadius
      }
      @Panels.selectTowerPanelSingleton.upgradePanelCenter = @Point.PixelPoint::new(
        x=panelX,
        y=panelY,
      )
      @Panels.selectTowerPanelSingleton.selectedTowerForUpgrade = Some(tower)
      return
    }
  }
  if !@Panels.selectTowerPanelSingleton.isOpen {
    self.handel_select_tower_panel(point)
  }

  // 该点有物体
  if @MapController.mapControllerSingleton.placed(point) {
    @Map.mapTipsSingleton.placed_tips = true
    @Map.mapTipsSingleton.placed_tips_points = point
  }
}

///|
pub fn SelectTowerPanelController::place_tower(
  _self : SelectTowerPanelController,
  towerType : @Tower.TowerType,
  position : @Point.TowerPoint,
) -> Unit {
  // Create a new tower based on the selected type
  match towerType {
    @Tower.LightningTower =>
      if @TopBar.hduSingleton.enough(@Tower.LIGHTNINGTOWER_COST) {
        let t = @Tower.LightningTower::new(
          health=100,
          range=100,
          damage=20,
          attack_speed=10,
          position~,
          cost=@Tower.LIGHTNINGTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.LIGHTNINGTOWER_COST)
      } else {
        // Not enough gold
      }
    @Tower.ChargeJarTower =>
      if @TopBar.hduSingleton.enough(@Tower.CHARGEJARTOWER_COST) {
        let t = @Tower.ChargeJarTower::new(
          health=100,
          range=100,
          damage=1,
          attack_speed=10,
          position~,
          cost=@Tower.CHARGEJARTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.CHARGEJARTOWER_COST)
      } else {
        // Not enough gold
      }
    @Tower.PositiveMagneticTower =>
      if @TopBar.hduSingleton.enough(@Tower.POSITIVEMAGNETICTOWER_COST) {
        let t = @Tower.PositiveMagneticTower::new(
          health=120,
          range=120,
          damage=2,
          attack_speed=8,
          position~,
          cost=@Tower.POSITIVEMAGNETICTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.POSITIVEMAGNETICTOWER_COST)
      } else {
        // Not enough gold
      }
    @Tower.NegativeMagneticTower =>
      if @TopBar.hduSingleton.enough(@Tower.NEGATIVEMAGNETICTOWER_COST) {
        let t = @Tower.NegativeMagneticTower::new(
          health=120,
          range=120,
          damage=3,
          attack_speed=8,
          position~,
          cost=@Tower.NEGATIVEMAGNETICTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.NEGATIVEMAGNETICTOWER_COST)
      } else {
        // Not enough gold
      }
    @Tower.CurveTower =>
      if @TopBar.hduSingleton.enough(@Tower.CURVETOWER_COST) {
        let t = @Tower.CurveTower::new(
          health=100,
          range=100,
          damage=2,
          attack_speed=10,
          position~,
          cost=@Tower.CURVETOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.CURVETOWER_COST)
      } else {
        // Not enough gold
      }
    @Tower.PlasmaTower =>
      if @TopBar.hduSingleton.enough(@Tower.PLASMATOWER_COST) {
        let t = @Tower.PlasmaTower::new(
          health=100,
          range=100,
          damage=3,
          attack_speed=10,
          position~,
          cost=@Tower.PLASMATOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.PLASMATOWER_COST)
      } else {
        // Not enough gold
      }
    @Tower.BeeTower =>
      if @TopBar.hduSingleton.enough(@Tower.BEETOWER_COST) {
        let t = @Tower.BeeTower::new(
          health=100,
          range=100,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.BEETOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.BEETOWER_COST)
      } else {
        // Not enough gold
      }
    @Tower.SnowflakeTower =>
      if @TopBar.hduSingleton.enough(@Tower.SNOWFLAKETOWER_COST) {
        let t = @Tower.BeeTower::new(
          health=100,
          range=100,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.SNOWFLAKETOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.SNOWFLAKETOWER_COST)
      } else {
        // Not enough gold
      }
    @Tower.LaserTower =>
      if @TopBar.hduSingleton.enough(@Tower.LASERTOWER_COST) {
        let t = @Tower.LaserTower::new(
          health=100,
          range=160,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.LASERTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.LASERTOWER_COST)
      } else {
        // Not enough gold
      }
    DecayTower =>
      if @TopBar.hduSingleton.enough(@Tower.DECAYTOWER_COST) {
        let t = @Tower.DecayTower::new(
          health=100,
          range=160,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.DECAYTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.DECAYTOWER_COST)
      } else {
        // Not enough gold
      }
    FrozenTower =>
      if @TopBar.hduSingleton.enough(@Tower.FROZENTOWER_COST) {
        let t = @Tower.FrozenTower::new(
          health=100,
          range=160,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.FROZENTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.FROZENTOWER_COST)
      } else {
        // Not enough gold
      }
    ChainTower =>
      if @TopBar.hduSingleton.enough(@Tower.CHAINTOWER_COST) {
        let t = @Tower.ChainTower::new(
          health=100,
          range=160,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.CHAINTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.CHAINTOWER_COST)
      } else {
        // Not enough gold
      }
    SkyTower =>
      if @TopBar.hduSingleton.enough(@Tower.SKYTOWER_COST) {
        let t = @Tower.SkyTower::new(
          health=100,
          range=160,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.SKYTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.SKYTOWER_COST)
      } else {
        // Not enough gold
      }
    SpeedTower =>
      if @TopBar.hduSingleton.enough(@Tower.SPEEDTOWER_COST) {
        let t = @Tower.SpeedTower::new(
          health=100,
          range=160,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.SPEEDTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.SPEEDTOWER_COST)
      } else {
        // Not enough gold
      }
    ThunderTower =>
      if @TopBar.hduSingleton.enough(@Tower.THUNDERTOWER_COST) {
        let t = @Tower.ThunderTower::new(
          health=100,
          range=160,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.THUNDERTOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.THUNDERTOWER_COST)
      } else {
        // Not enough gold
      }
    TreasureTower =>
      if @TopBar.hduSingleton.enough(@Tower.TREASURETOWER_COST) {
        let t = @Tower.TreasureTower::new(
          health=100,
          range=160,
          damage=2,
          attack_speed=2,
          position~,
          cost=@Tower.TREASURETOWER_COST,
          towerType~,
        )
        @Map.map_grid_system_singleton.tower.insert(0, t)
        @TopBar.hduSingleton.spend_gold(@Tower.TREASURETOWER_COST)
      } else {
        // Not enough gold
      }
  }
}

///|
fn SelectTowerPanelController::handel_select_tower_panel(
  self : SelectTowerPanelController,
  point : @Point.PixelPoint,
) -> Unit {
  ignore(self)
  @Panels.selectTowerPanelSingleton.currAvailableTowersCount = @Panels.selectTowerPanelSingleton.items
    .length()
    .to_double()
  @Panels.selectTowerPanelSingleton.openPanelTowerPoint = @Map.map_grid_system_singleton.pixel2tower(
    point,
  )
  let (panelW, panelH, _) = @Panels.selectTowerPanelSingleton.computeLayout(
    @Core.map,
  )
  @Panels.selectTowerPanelSingleton.showPanelH = panelH
  @Panels.selectTowerPanelSingleton.showPanelW = panelW

  // Calculate initial panel position - position above and to the left of the tower
  let towerPixel = @Map.map_grid_system_singleton.tower2pixel(
    @Panels.selectTowerPanelSingleton.openPanelTowerPoint,
  )
  let mut px = towerPixel.x -
    @Panels.selectTowerPanelSingleton.showPanelW -
    10.0
  let mut py = towerPixel.y -
    @Panels.selectTowerPanelSingleton.showPanelH -
    10.0

  // Adjust panel position to stay within canvas boundaries
  // Canvas dimensions from game.js: width = 1280, height = 720
  let canvasWidth = @Core.map.width
  let canvasHeight = @Core.map.height

  // Check right boundary - if panel would go off right edge, place it to the left of tower
  if px + @Panels.selectTowerPanelSingleton.showPanelW > canvasWidth {
    px = towerPixel.x - @Panels.selectTowerPanelSingleton.showPanelW - 10.0
  }

  // Check left boundary - if panel would go off left edge, place it to the right of tower
  if px < 0.0 {
    px = towerPixel.x + 10.0
  }

  // Check bottom boundary - if panel would go off bottom edge, place it above tower
  if py + @Panels.selectTowerPanelSingleton.showPanelH > canvasHeight {
    py = towerPixel.y - @Panels.selectTowerPanelSingleton.showPanelH - 10.0
  }

  // Check top boundary - if panel would go off top edge, place it below tower
  if py < 0.0 {
    py = towerPixel.y + 10.0
  }
  @Panels.selectTowerPanelSingleton.showPanelPiexlPoint = @Point.PixelPoint::new(
    x=px,
    y=py,
  )
  @Panels.selectTowerPanelSingleton.currClickPixelPoint = point
  @Panels.selectTowerPanelSingleton.isOpen = true
  // println(@Panels.selectTowerPanelSingleton.isOpen)
}

///|
fn _inPanel(point : @Point.PixelPoint) -> Bool {
  point.x > @Panels.selectTowerPanelSingleton.showPanelPiexlPoint.x &&
  point.x <
  @Panels.selectTowerPanelSingleton.showPanelPiexlPoint.x +
  @Panels.selectTowerPanelSingleton.showPanelW &&
  point.y > @Panels.selectTowerPanelSingleton.showPanelPiexlPoint.y &&
  point.y <
  @Panels.selectTowerPanelSingleton.showPanelPiexlPoint.y +
  @Panels.selectTowerPanelSingleton.showPanelH
}
