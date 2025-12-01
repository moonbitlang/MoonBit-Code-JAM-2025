///|
pub struct SelectTowerPanelRender {}

///|
fn get_tower_cost(towerType : @Tower.TowerType) -> Double {
  match towerType {
    @Tower.LightningTower => @Tower.LIGHTNINGTOWER_COST
    @Tower.ChargeJarTower => @Tower.CHARGEJARTOWER_COST
    @Tower.PositiveMagneticTower => @Tower.POSITIVEMAGNETICTOWER_COST
    @Tower.NegativeMagneticTower => @Tower.NEGATIVEMAGNETICTOWER_COST
    @Tower.CurveTower => @Tower.CURVETOWER_COST
    @Tower.PlasmaTower => @Tower.PLASMATOWER_COST
    @Tower.BeeTower => @Tower.BEETOWER_COST
    @Tower.SnowflakeTower => @Tower.SNOWFLAKETOWER_COST
    @Tower.LaserTower => @Tower.LASERTOWER_COST
    DecayTower => @Tower.DECAYTOWER_COST
    ChainTower => @Tower.CHAINTOWER_COST
    SpeedTower => @Tower.SPEEDTOWER_COST
    SkyTower => @Tower.SKYTOWER_COST
    FrozenTower => @Tower.FROZENTOWER_COST
    ThunderTower => @Tower.THUNDERTOWER_COST
    TreasureTower => @Tower.TREASURETOWER_COST
  }
}

///|
pub fn SelectTowerPanelRender::new() -> SelectTowerPanelRender {
  SelectTowerPanelRender::{  }
}

///|
let selectTowerPanelRenderInstance : Ref[SelectTowerPanelRender?] = Ref::new(
  None,
)

///|
pub let selectTowerPanelRenderSingleton : SelectTowerPanelRender = SelectTowerPanelRender::get_instance()

///|
pub fn SelectTowerPanelRender::get_instance() -> SelectTowerPanelRender {
  match selectTowerPanelRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = SelectTowerPanelRender::new()
      selectTowerPanelRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SelectTowerPanelRender::render(
  _self : SelectTowerPanelRender,
  _timestamp : Double,
) -> Unit {
  // Render placement panel if open
  if @Panels.selectTowerPanelSingleton.isOpen {
    let ctx = @Core.ctxSingleton
    ctx.save()

    // Use computeLayout to get panel dimensions and item positions
    let (panelW, panelH, items) = @Panels.selectTowerPanelSingleton.computeLayout(
      @Core.map,
    )
    if panelW > 0.0 {
      // Update panel position and dimensions
      @Panels.selectTowerPanelSingleton.showPanelW = panelW
      @Panels.selectTowerPanelSingleton.showPanelH = panelH

      // Calculate panel position based on layout
      let x = items[0].x - 10.0
      let y = items[0].y - 8.0
      @Panels.selectTowerPanelSingleton.showPanelPiexlPoint = @Point.PixelPoint::new(
        x~,
        y~,
      )
      // fill test pass
      // ctx.fillStyle("red")
      // ctx.fillRect(0,0,200,200)

      // println(x)
      // println(y)
      // println(panelW)
      // println(panelH)
      // Background with rounded corners
      ctx.save()
      ctx.fillStyle("rgba(0,0,0,0.65)")
      @UIComposeRender.drawRoundRect(ctx, x, y, panelW, panelH, 10.0)
      ctx.fill()
      ctx.restore()
      ctx.save()

      // Border
      ctx.strokeStyle("rgba(255,255,255,0.25)")
      ctx.lineWidth(1.0)
      @UIComposeRender.drawRoundRect(
        ctx,
        x + 0.5,
        y + 0.5,
        panelW - 1.0,
        panelH - 1.0,
        10.0,
      )
      ctx.stroke()
      ctx.restore()

      // Render tower items
      for i = 0; i < items.length(); i = i + 1 {
        let r = items[i]
        ctx.save()

        // Item card background
        ctx.fillStyle("rgba(255,255,255,0.08)")
        @UIComposeRender.drawRoundRect(ctx, r.x, r.y, r.w, r.h, 10.0)
        ctx.fill()
        ctx.restore()
        // Item card border

        ctx.save()
        ctx.strokeStyle("rgba(255,255,255,0.15)")
        ctx.lineWidth(1.0)
        @UIComposeRender.drawRoundRect(
          ctx,
          r.x + 0.5,
          r.y + 0.5,
          r.w - 1.0,
          r.h - 1.0,
          10.0,
        )
        ctx.stroke()
        ctx.restore()
        // Tower icon
        let cx = r.x + r.w / 2.0
        let cy = r.y + 26.0
        let gsIcon = 40.0
        match @Panels.selectTowerPanelSingleton.items[i] {
          @Tower.LightningTower =>
            @TowerRender.LightningTowerRender::render(
              ctx, cx, cy, 1.0, gsIcon, 0,
            )
          @Tower.ChargeJarTower =>
            @TowerRender.ChargeJarTowerRender::render(
              ctx, cx, cy, 1.0, gsIcon, 0,
            )
          @Tower.PositiveMagneticTower =>
            @TowerRender.PositiveMagneticTowerRender::render(
              ctx, cx, cy, 1.0, gsIcon, 0,
            )
          @Tower.NegativeMagneticTower =>
            @TowerRender.NegativeMagneticTowerRender::render(
              ctx, cx, cy, 1.0, gsIcon, 0,
            )
          @Tower.CurveTower =>
            @TowerRender.CurveTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          @Tower.PlasmaTower =>
            @TowerRender.PlasmaTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          @Tower.BeeTower =>
            @TowerRender.BeeTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          @Tower.SnowflakeTower =>
            @TowerRender.SnowflakeTowerRender::render(
              ctx, cx, cy, 1.0, gsIcon, 0,
            )
          @Tower.LaserTower =>
            @TowerRender.LaserTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          DecayTower =>
            @TowerRender.DecayTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          FrozenTower =>
            @TowerRender.FrozenTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          ChainTower =>
            @TowerRender.ChainTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          SkyTower =>
            @TowerRender.SkyTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          SpeedTower =>
            @TowerRender.SpeedTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          ThunderTower =>
            @TowerRender.ThunderTowerRender::render(ctx, cx, cy, 1.0, gsIcon, 0)
          TreasureTower =>
            @TowerRender.TreasureTowerRender::render(
              ctx, cx, cy, 1.0, gsIcon, 0,
            )
        }

        // Cost display
        ctx.save()
        let cost = get_tower_cost(@Panels.selectTowerPanelSingleton.items[i])
        ctx.fillStyle("#FFD700") // Gold color
        ctx.font("12px Arial")
        ctx.textAlign("center")
        ctx.textBaseline("bottom")
        ctx.fillText(cost.to_string(), r.x + r.w / 2.0, r.y + r.h - 6.0)
        ctx.restore()
      }
    }
    ctx.restore()
  }

  // Render upgrade panel if open (unchanged)
  if @Panels.selectTowerPanelSingleton.upgradePanelOpen {
    let center = @Panels.selectTowerPanelSingleton.upgradePanelCenter
    let ctx = @Core.ctxSingleton
    ctx.save()
    let radius = @Panels.selectTowerPanelSingleton.upgradePanelRadius

    // Draw circular panel with improved colors
    ctx.beginPath()
    ctx.arc(center.x, center.y, radius, 0, @math.PI * 2)
    ctx.fillStyle("rgba(50, 50, 70, 0.9)") // Dark blue-gray background
    ctx.fill()
    ctx.strokeStyle("rgba(100, 200, 255, 0.9)") // Light blue border
    ctx.lineWidth(2)
    ctx.stroke()

    // Draw inner circle for better visual hierarchy
    ctx.beginPath()
    ctx.arc(center.x, center.y, radius * 0.9, 0, @math.PI * 2)
    ctx.strokeStyle("rgba(100, 200, 255, 0.6)")
    ctx.lineWidth(1)
    ctx.stroke()

    // Draw upgrade button (top) with improved colors
    let upgradeButtonY = center.y - radius / 2
    let buttonRadius = radius / 3
    ctx.beginPath()
    ctx.arc(center.x, upgradeButtonY, buttonRadius, 0, @math.PI * 2)
    ctx.fillStyle("rgba(40, 150, 40, 0.9)") // Green background
    ctx.fill()
    ctx.strokeStyle("rgba(150, 255, 150, 1.0)") // Light green border
    ctx.lineWidth(2)
    ctx.stroke()

    // Get the selected tower for upgrade pricing information
    match @Panels.selectTowerPanelSingleton.selectedTowerForUpgrade {
      Some(tower) => {
        let upgradeCost = tower.cost() * 0.5 // Upgrade cost is 50% of tower's base cost

        // Draw upgrade icon/text with cost
        ctx.fillStyle("white")
        ctx.font("bold 14px Arial")
        ctx.textAlign("center")
        ctx.textBaseline("middle")
        ctx.fillText("升级", center.x, upgradeButtonY - 8)
        ctx.font("bold 12px Arial")
        ctx.fillText(upgradeCost.to_string(), center.x, upgradeButtonY + 8)
      }
      None => {
        // Draw upgrade icon/text without cost
        ctx.fillStyle("white")
        ctx.font("bold 14px Arial")
        ctx.textAlign("center")
        ctx.textBaseline("middle")
        ctx.fillText("升级", center.x, upgradeButtonY)
      }
    }

    // Draw destroy button (bottom) with improved colors
    let destroyButtonY = center.y + radius / 2
    ctx.beginPath()
    ctx.arc(center.x, destroyButtonY, buttonRadius, 0, @math.PI * 2)
    ctx.fillStyle("rgba(150, 40, 40, 0.9)") // Red background
    ctx.fill()
    ctx.strokeStyle("rgba(255, 150, 150, 1.0)") // Light red border
    ctx.lineWidth(2)
    ctx.stroke()

    // Draw destroy icon/text with refund amount
    match @Panels.selectTowerPanelSingleton.selectedTowerForUpgrade {
      Some(tower) => {
        let refundAmount = tower.cost() * 0.5 // Refund is 50% of tower's base cost
        ctx.fillStyle("white")
        ctx.font("bold 14px Arial")
        ctx.textAlign("center")
        ctx.textBaseline("middle")
        ctx.fillText("摧毁", center.x, destroyButtonY - 8)
        ctx.font("bold 12px Arial")
        ctx.fillText(refundAmount.to_string(), center.x, destroyButtonY + 8)
      }
      None => {
        // Draw destroy icon/text without refund amount
        ctx.fillStyle("white")
        ctx.font("bold 14px Arial")
        ctx.textAlign("center")
        ctx.textBaseline("middle")
        ctx.fillText("摧毁", center.x, destroyButtonY)
      }
    }
    ctx.restore()
  }
}
