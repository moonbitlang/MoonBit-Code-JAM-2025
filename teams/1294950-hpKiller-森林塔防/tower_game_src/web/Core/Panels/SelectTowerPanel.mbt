///|
pub(all) struct SelectTowerPanel {
  margin : Double
  padding : Double
  iconSize : Double
  maxShow : Double
  maxLineShow : Double
  mut showPanelPiexlPoint : @Point.PixelPoint
  mut showPanelW : Double
  mut showPanelH : Double
  mut items : Array[@Tower.TowerType]
  mut offsetX : Double
  mut offsetY : Double
  mut currAvailableTowersCount : Double
  mut currClickPixelPoint : @Point.PixelPoint
  mut currClickTowerType : @Tower.TowerType
  mut openPanelTowerPoint : @Point.TowerPoint
  mut isOpen : Bool
  mut selectedTowerType : @Tower.TowerType?
  mut upgradePanelOpen : Bool
  mut upgradePanelCenter : @Point.PixelPoint
  mut upgradePanelRadius : Double
  mut selectedTowerForUpgrade : &@Tower.Tower?
}

///|
pub fn SelectTowerPanel::new(
  margin? : Double = 10,
  padding? : Double = 10,
  iconSize? : Double = 40,
  maxShow? : Double = 8,
  maxLineShow? : Double = 4,
  currAvailableTowersCount? : Double = 0,
  currClickPixelPoint? : @Point.PixelPoint = @Point.pixelPointSingleton,
  currClickTowerType? : @Tower.TowerType = LightningTower,
  openPanelTowerPoint? : @Point.TowerPoint = @Point.towerPointSingleton,
) -> SelectTowerPanel {
  SelectTowerPanel::{
    margin,
    padding,
    iconSize,
    maxShow,
    maxLineShow,
    showPanelPiexlPoint: @Point.pixelPointSingleton,
    showPanelW: 0,
    showPanelH: 0,
    items: [@Tower.LightningTower],
    offsetX: 0,
    offsetY: 0,
    currAvailableTowersCount,
    currClickPixelPoint,
    currClickTowerType,
    openPanelTowerPoint,
    isOpen: false,
    selectedTowerType: None,
    upgradePanelOpen: false,
    upgradePanelCenter: @Point.pixelPointSingleton,
    upgradePanelRadius: 0.0,
    selectedTowerForUpgrade: None,
  }
}

///|
let selectTowerPanelInstance : Ref[SelectTowerPanel?] = Ref::new(None)

///|
pub let selectTowerPanelSingleton : SelectTowerPanel = SelectTowerPanel::get_instance()

///|
pub fn SelectTowerPanel::get_instance() -> SelectTowerPanel {
  match selectTowerPanelInstance.val {
    Some(render) => render
    None => {
      let new_instance = SelectTowerPanel::new()
      selectTowerPanelInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn SelectTowerPanel::get_icon_at_position(
  self : SelectTowerPanel,
  point : @Point.PixelPoint,
  timestamp : Double,
) -> @Tower.TowerType? {
  if !self.isOpen {
    return None
  }
  let panelX = self.showPanelPiexlPoint.x
  let panelY = self.showPanelPiexlPoint.y
  let iconSize = self.iconSize
  let padding = self.padding
  let margin = self.margin
  ignore(timestamp)

  // Check if point is within panel bounds
  if point.x < panelX ||
    point.x > panelX + self.showPanelW ||
    point.y < panelY ||
    point.y > panelY + self.showPanelH {
    return None
  }

  // Calculate grid dimensions
  let towers = self.items
  let itemsPerRow = @cmp.minimum(towers.length().to_double(), self.maxLineShow).to_int()
  let rows = (towers.length() + itemsPerRow - 1) / itemsPerRow
  let iconSpacing = iconSize + padding

  // Center the grid horizontally
  let totalWidth = itemsPerRow.to_double() * iconSpacing - padding
  let startX = panelX +
    (self.showPanelW - totalWidth) / 2.0 +
    margin +
    padding / 2.0

  // Center the grid vertically
  let totalHeight = rows.to_double() * iconSpacing - padding
  let startY = panelY +
    (self.showPanelH - totalHeight) / 2.0 +
    margin +
    padding / 2.0

  // Render tower icons in a centered grid
  for i = 0; i < towers.length(); i = i + 1 {
    let row = i / itemsPerRow
    let col = i % itemsPerRow
    let iconX = startX + col.to_double() * iconSpacing + iconSize / 2
    let iconY = startY + row.to_double() * iconSpacing + iconSize / 2

    // Check if point is within icon bounds
    let iconLeft = iconX - iconSize / 2
    let iconRight = iconX + iconSize / 2
    let iconTop = iconY - iconSize / 2
    let iconBottom = iconY + iconSize / 2
    if point.x >= iconLeft &&
      point.x <= iconRight &&
      point.y >= iconTop &&
      point.y <= iconBottom {
      return Some(towers[i])
    }
  }
  return None
}

///|
/// Compute layout for the tower selection panel
/// Returns panel dimensions and item positions
pub fn SelectTowerPanel::computeLayout(
  self : SelectTowerPanel,
  map : @Core.Map,
) -> (Double, Double, Array[@Point.Rect]) {
  if !self.isOpen {
    return (0.0, 0.0, [])
  }
  let towers = self.items
  let count = towers.length()
  let itemW = 48.0
  let itemH = 64.0
  let gap = 12.0
  let hPad = 10.0
  let vPad = 8.0
  let width = count.to_double() * itemW +
    (count.to_double() - 1.0) * gap +
    hPad * 2.0
  let height = itemH + vPad * 2.0

  // Determine panel position (prefer upward, but downward if near top)
  let cx = self.currClickPixelPoint.x
  let cy = self.currClickPixelPoint.y
  let upY = cy - map.gridSize / 2.0 - 10.0 - height
  let downY = cy + map.gridSize / 2.0 + 10.0
  let preferUp = upY >= 0.0
  let x = @cmp.maximum(
    8.0,
    @cmp.minimum(map.width - width - 8.0, cx - width / 2.0),
  )
  // println("x1 \{map.width - width - 8.0}")
  // println("x2 \{cx - width / 2.0}")
  let y = if preferUp {
    upY
  } else {
    @cmp.minimum(map.height - height - 8.0, downY)
  }

  // Create item rectangles
  let items : Array[@Point.Rect] = []
  let mut ix = x + hPad
  for i = 0; i < count; i = i + 1 {
    items.push(@Point.Rect::new(ix, y + vPad, itemW, itemH))
    ix = ix + itemW + gap
  }
  (width, height, items)
}

///|
pub fn set_available_tower_by_level(level : Int) -> Unit {
  selectTowerPanelSingleton.items = @Map.get_map_by_level(level).available_tower
}

///|
fn init {
  set_available_tower_by_level(1)
}
