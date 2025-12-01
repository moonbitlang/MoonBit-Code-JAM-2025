///|
pub(all) struct NeutralElementRender {}

///|
pub fn NeutralElementRender::new() -> NeutralElementRender {
  NeutralElementRender::{  }
}

///|
let neutralElementRenderInstance : Ref[NeutralElementRender?] = Ref::new(None)

///|
pub let neutralElementRenderSingleton : NeutralElementRender = NeutralElementRender::get_instance()

///|
pub fn NeutralElementRender::get_instance() -> NeutralElementRender {
  match neutralElementRenderInstance.val {
    Some(render) => render
    None => {
      let new_instance = NeutralElementRender::new()
      neutralElementRenderInstance.val = Some(new_instance)
      new_instance
    }
  }
}

///|
pub fn NeutralElementRender::render(
  self : NeutralElementRender,
  timestamp : Double,
) -> Unit {
  ignore(timestamp)
  ignore(self)
  for e in @Map.map_grid_system_singleton.neutralElement {
    let x = (e.position().x + 0.5) * @Core.map.gridSize
    let y = (e.position().y + 0.5) * @Core.map.gridSize
    match e.neutralElement_type() {
      @NeutralElement.WeedNeutralElement =>
        weedNeutralElementRenderSingleton.render(timestamp, x, y, e)
      @NeutralElement.SlotMachineNeutralElement =>
        slotMachineNeutralElementRenderSingleton.render(timestamp, x, y, e)
      @NeutralElement.StoneNeutralElement =>
        stoneNeutralElementRenderSingleton.render(timestamp, x, y, e)
      @NeutralElement.TreasureChestNeutralElement =>
        treasureChestNeutralElementRenderSingleton.render(timestamp, x, y, e)
      @NeutralElement.SearchLightNeutralElement =>
        searchLightNeutralElementRenderSingleton.render(timestamp, x, y, e)
      @NeutralElement.ConveyorBeltNeutralElement =>
        conveyorBeltNeutralElementRenderSingleton.render(timestamp, x, y, e)
      @NeutralElement.EnergyLightNeutralElement =>
        energyLightNeutralElementRenderSingleton.render(timestamp, x, y, e)
    }
  }
  if @NeutralElement.neutral_element_click_singleton.render_attack_tips {
    self.render_attack_tips(timestamp)
  }
}

///|
pub fn NeutralElementRender::render_attack_tips(
  self : NeutralElementRender,
  time : Double,
) -> Unit {
  let ctx = @Core.ctxSingleton
  ignore(self)
  let ne = @NeutralElement.neutral_element_click_singleton
  let centerX = ne.cur_center_x
  let centerY = ne.cur_center_y
  let amplitude = 8.0 // 浮动幅度
  let frequency = 0.01 // 浮动频率
  let offsetY = @math.sin(time * frequency) * amplitude
  ctx.save()
  // 设置线条样式
  ctx.lineWidth(15) // 线条宽度
  ctx.lineCap("round")
  ctx.strokeStyle("#a82042ff") // 线条颜色
  ctx.fillStyle("#a82042ff")
  // 绘制叹号的竖线部分
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - 30 + offsetY) // 起始点
  ctx.lineTo(centerX, centerY + 10 + offsetY) // 结束点
  ctx.stroke()

  // 绘制叹号的圆点部分
  ctx.beginPath()
  ctx.arc(centerX, centerY + 30 + offsetY, 8, 0, 2 * @math.PI) // 圆心在(50,50)，半径为15
  ctx.fill()
  ctx.restore()
}
