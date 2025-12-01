struct RootControl {
  w:Widget
  nationTable:NationTable
  areaLower:AreaLowerTab
  areaTop:AreaTop
  header:HeaderLine
}
impl Control for RootControl with render(self:RootControl) -> Unit {}
impl Control for RootControl with getWidget(self:RootControl) -> Widget {self.w}

struct HeaderLine {
  w:Widget
  status:Widget
}
fn HeaderLine::new() -> HeaderLine {
  let line = HeaderLine::{
    w:Widget::new(),
    status:Widget::new()
  }
  (line as &Control).add_widgets([line.status.set_offsetxy(0, 2)])
  
  line
}
impl Control for HeaderLine with render(self:HeaderLine) -> Unit {}
impl Control for HeaderLine with getWidget(self:HeaderLine) -> Widget {self.w}

struct AreaTop {
  w:Widget
  time:Widget
  roleDesc:Widget
  roleDescExtra:Widget
  buildDesc:Widget
}
fn AreaTop::new() -> AreaTop {
  let top = AreaTop::{
    w:Widget::new(),
    time:Widget::new(), roleDesc:Widget::new(), buildDesc:Widget::new(), roleDescExtra:Widget::new()
  }
  (top as &Control).add_widgets([top.time, top.roleDesc, top.roleDescExtra, top.buildDesc])
  let _ = top.time.set_offset(@math.Vec2D(300, 20))
  let _ = top.roleDesc.set_offset(@math.Vec2D(300, 30))
  let _ = top.roleDescExtra.set_offset(@math.Vec2D(300, 40))
  let _ = top.buildDesc.set_offset(@math.Vec2D(300, 50))

  top
}
fn renderHoverRole(self:AreaTop, target:Role) -> Unit {
  let mut gridDesc = ""
  let mut gridDescExtra = ""
  if world.opRoot is Some(root) {
    gridDesc += target.to_desc(withoutTarget = true)
    gridDescExtra += target.get_target_str()
  
  }      
  let _ = self.roleDesc.set_text(gridDesc, font = "8px ThaleahFat")
  let _ = self.roleDescExtra.set_text(gridDescExtra, font = "8px ThaleahFat")
          
}
impl Control for AreaTop with getWidget(self:AreaTop) -> Widget {
  self.w
}
impl Control for AreaTop with render(self:AreaTop) -> Unit {
  
} 
struct NationTable {
  table:Widget
  
  titles:Array[Widget]
  lines:Array[NationLine]
}
impl Control for NationTable with getWidget(self:NationTable) -> Widget {
  self.table
}

struct NationLine {
  line:Widget

  name:Widget
  soldierNum:Widget
  eco:Widget
  popu:Widget

  nationId:Int
}
impl Control for NationLine with getWidget(self:NationLine) -> Widget {
  self.line
}
impl Control for NationLine with render(self:NationLine) -> Unit {}

fn NationTable::new() -> NationTable {
  let table = NationTable::{
    table:Widget::new(),
    titles:[
      Widget::new(), Widget::new(off=@math.Vec2D(35,0)), Widget::new(off=@math.Vec2D(65,0)), Widget::new(off=@math.Vec2D(95, 0))
    ], lines : []
  }


  for w in table.titles {
    (table as &Control).add_widget(w)
  } 
  
  let _ = table.titles[0].set_text("名称")
  let _ = table.titles[1].set_text("兵力")
  let _ = table.titles[2].set_text("经济")
  let _ = table.titles[3].set_text("人口")

  table
}

fn NationLine::set_data(self:NationLine, soldierNum:Int, eco:Double, popu:Int) -> Unit {
  let _ = self.soldierNum.set_text(soldierNum.to_string())
  let _ = self.eco.set_text(eco.to_string())
  let _ = self.popu.set_text(popu.to_string())
}

fn NationLine::new(nationId:Int) -> NationLine {

  let line = NationLine::{
    nationId, line:Widget::new(), 
      name:Widget::new(off = @math.Vec2D(0, 0)), 
      soldierNum:Widget::new(off = @math.Vec2D(40, 0)), 
      eco:Widget::new(off = @math.Vec2D(70, 0)), 
      popu:Widget::new(off = @math.Vec2D(100, 0))
  }

  (line as &Control).add_widgets([line.name, line.soldierNum, line.eco, line.popu])

  line
}

impl Control for NationTable with render(self:NationTable) -> Unit {
  let start = self.lines.length()
  
  for i in start..<nations.length() {
    let line = NationLine::new(i)
    (self as &Control).add_child(line)
    let _ = line.name.set_text(get_nation_name(i))
    self.lines.push(line)
  }

  for i in 0..<self.lines.length() {
    let line = self.lines[i]
    // remain padding for the title
    let _ = line.getWidget().set_offset(@math.Vec2D(0, (i + 1).to_double() * 20))
    let nation = get_nation(i)
    let _ = line.name.set_text(get_nation_name(i), color = get_nation_colorstr(i))
    if i == GMAP_NEST {
      world.enemyCnt = nation.roles.length()
    }
    line.set_data(nation.soldierNum, nation.eco, nation.roles.length())
  }
}
fn get_nation_colorstr(nationId:Int) -> String {
  match nationId {
    GMAP_CYAN => "cyan"
    GMAP_PURPLE => "purple"
    GMAP_LIME => "lime"
    GMAP_GRASS => "green"
    GMAP_RED => "red"
    GMAP_NEST => "black"
    _ => "green"
  }
}

struct AreaLowerTab{
  tabs:Widget// the whole container


  popu:Widget
  army:Widget
  eco:Widget
  food:Widget
  equip:Widget

  buildTitle:Widget
  heroTitle:Widget
  recruitTitle:Widget


  areaTitle:Widget

  buildLines:Map[Int, BuildLine]
  heroPage:HeroPage

  mut showHero:Bool
}
impl Control for AreaLowerTab with getWidget(self:AreaLowerTab) -> Widget {
  self.tabs
}
fn AreaLowerTab::renderStat(self:AreaLowerTab) -> Unit {
  if world.inGlobe {
    let _ = self.areaTitle.set_text("") 
  } else {
    let mut s = "区域(" + world.player.gx.to_string() + "," + world.player.gy.to_string() + ")"
    if world.showAreaId >= 0 {
      let area = world.areas[world.showAreaId]
      if area.nationId == world.player.nationId {
        s += ",属于玩家"
      } else {
        if (area.nationId >= 0) {
          s += ",属于" + get_nation_name(area.nationId)
          if nation_negative(world.player.nationId, area.nationId) {
            s += ",与你敌对"
          }
        }
      }
      if area.nationId >= 0 {
        if area.freeRoleNum > 0 {
          s += ",空闲人口:" + area.freeRoleNum.to_string()
        }
      }
    }
    let _ = self.areaTitle.set_text(s) 
  }
}

impl Control for AreaLowerTab with render(self:AreaLowerTab) -> Unit {
  if self.showHero {
  //if self.heroPage.page.visible_in_tree() {
    self.heroPage.render()
    world.hideBuildLines()
  } else {
    (self.heroPage as &Control).hide()
    world.renderBuildLines()
  }
  self.renderStat()
  (self as &Control).show()
}
fn AreaLowerTab::new()-> AreaLowerTab {
  let tabs = AreaLowerTab::{
    tabs:Widget::new(),
    popu:Widget::new(),
    army:Widget::new(),
    food:Widget::new(),
    eco:Widget::new(),
    equip:Widget::new(),
    
    showHero:false,

    buildTitle:Widget::new(),
    heroTitle:Widget::new(),
    recruitTitle:Widget::new(),
    areaTitle:Widget::new(),

    buildLines:Map::new(),
    heroPage:HeroPage::new()    
  }

  let _ = tabs.buildTitle.set_text("建造").set_offset(@math.Vec2D(0, 45))
  let _ = tabs.heroTitle.set_text("英雄").set_offset(@math.Vec2D(40, 45))
  let _ = tabs.recruitTitle.set_text("招募流民").set_offset(@math.Vec2D(80, 45))
  
  let _ = tabs.areaTitle.set_text("").set_offset(@math.Vec2D(0, -10))
  
  //let _ = tabs.popu.set_offset(@math.Vec2D(0, 4))
  //let _ = tabs.army.set_offset(@math.Vec2D(80, 4))
  //let _ = tabs.food.set_offset(@math.Vec2D(0, 16))
  //let _ = tabs.eco.set_offset(@math.Vec2D(80, 16))
  (tabs as &Control).add_widgets([
    tabs.popu.set_offset(@math.Vec2D(0, 4))
    ,tabs.army.set_offset(@math.Vec2D(60, 4))
   
    ,tabs.eco.set_offset(@math.Vec2D(0, 16))
    ,tabs.food.set_offset(@math.Vec2D(60, 16))
    ,tabs.equip.set_offset(@math.Vec2D(120, 16))
    ,tabs.buildTitle
    ,tabs.heroTitle
    ,tabs.recruitTitle
    ,tabs.areaTitle
  ])
  (tabs as &Control).add_child(tabs.heroPage)
  
  (tabs.heroPage as &Control).hide()
  
  tabs.buildTitle.add_onclick(callback = fn(btn) {
    println("show build page")
    tabs.showHero = false
    tabs.render()
  })
  tabs.buildTitle.nick = "buildTitle"
  
  tabs.heroTitle.add_onclick(callback = fn(btn) {
    println("show hero page")
    tabs.showHero = true
    tabs.render()
  })
  tabs.recruitTitle.add_onclick(callback = fn(btn) {
    if world.showAreaId >= 0 {
      let area = world.areas[world.showAreaId]
      //if area.nationId != world.player.nationId {
      //  log("不可以在不属于自己的区域招募")
      //}
      area.auto_clean()
      let mut cost = 5.0 * area.roleOccupy.length().to_double()
      if cost <= 0 {
        cost = 5.0
      }
      if world.player.life.gold > cost {
        world.player.life.gold -= cost
        log("消耗了" + cost.to_string() + "金币招募了一个新人")
        let npc = world.genNPC(world.player.gx, world.player.gy, nationId = world.player.nationId)
        npc.toArea()
        if !world.inGlobe {
          if world.opRoot is Some(root) {
            root.areaLower.renderStat()
          }
        }
      } else {
        log("需要消耗 5 * 当前区域人数的金币 来招募人口, 当前金币不足" + cost.to_string())
      }
    }
    tabs.render()
  })
  tabs.heroTitle.nick = "heroTitle"
  
  tabs
}

struct HeroPage {
  page:Widget// the whole container

  heroNum:Widget
  heroAdd:Widget
  
  lines:Array[HeroLine]
  dieHeroLine:Array[HeroLine]
}
impl Control for HeroPage with getWidget(self:HeroPage) -> Widget {
  self.page
}
fn heroAddClick() -> Unit {
  if !world.inGlobe && world.showAreaId >= 0 && world.opRoot is Some(root) {
      let area = world.areas[world.showAreaId]
      let gx = world.showAreaId / globe_width
      let gy = world.showAreaId - gx * globe_width
      if area.nationId != world.player.nationId {
        log("只能在自己的城镇征召英雄")
        return
      }       
      if area.eco >= 10 {
        area.eco -= 10
        let hero = world.genNPC(gx, gy, nationId = area.nationId, isHero = true)
        if root.areaLower.showHero {
          root.areaLower.render()
        }
      } else {
        log("经济不足10, 无法征召新英雄")
        //println("the area's eco is too little: " + area.eco.to_string())
      }
  }
}
fn HeroPage::new()->HeroPage {
  let page = HeroPage:: {
    page:Widget::new(),
    heroNum:Widget::new(off = @math.Vec2D(0, 60)), heroAdd:Widget::new(off = @math.Vec2D(80, 60)),
    lines:[],
    dieHeroLine:[]
  }
  let _ = page.heroAdd.set_text("新增")
  page.heroAdd.add_onclick(callback = fn(btn) {
    heroAddClick()
  })
  
  page.heroAdd.nick = "hero add"
  (page as &Control).add_widgets([page.heroNum, page.heroAdd])

  page
}
impl Control for HeroPage with render(self:HeroPage) -> Unit {
  let nationId = world.player.nationId
  let nation = get_nation(nationId)
  let _ = self.heroNum.set_text("英雄数量:" + nation.heros.length().to_string())
  let start = self.lines.length()
  let heroIds = nation.heros.to_array()

  for i in start..<heroIds.length() {
    if self.dieHeroLine.length() > 0 {
      let line = self.dieHeroLine.remove(0)
      self.lines.push(line)
    } else {
      let line = HeroLine::new()
      (self as &Control).add_widget(line.line)
      self.lines.push(line)
    }
  }
  for i in 0..<heroIds.length() {
    let heroId = heroIds[i]
    let line = self.lines[i]
    if world.roleMap.contains(heroId) {
      let hero = world.roleMap[heroId]
      line.heroId = heroId
      let _ = line.hero.set_text(hero.get_name())
      let _ = line.soldierTypeName.set_text(hero.get_follow_soldier_type_name())
      let _ = line.follow.set_text(hero.soldiers.length().to_string() + "/"  + 10.0.to_string())
      line.line.set_offsetxy(0.0, 70 + i.to_double() * 10.0).show()
    } else {
      self.lines[i].line.hide()
    }
  }
  (self as &Control).show()
}

struct HeroLine {
  line:Widget
  
  hero:Widget
  left:Widget
  soldierTypeName:Widget
  right:Widget

  leftFollow:Widget
  follow:Widget
  rightFollow:Widget
  control:Widget
  mut heroId:Int
}
impl Control for HeroLine with getWidget(self:HeroLine) -> Widget {self.line}
impl Control for HeroLine with render(self:HeroLine) -> Unit {}
fn ui_hero_minus_soldier(heroId:Int) -> Unit {
if world.roleMap.contains(heroId) && world.opRoot is Some(root) {
      let hero = world.roleMap[heroId]
      let areaId = hero.gx * globe_width + hero.gy
      if areaId >= 0 && areaId < world.areas.length() {
        let area = world.areas[areaId]
        area.auto_release_soldier_from_leader(hero)
        if (root.areaLower as &Control).visible_in_tree() && root.areaLower.showHero {
          root.areaLower.render()
        }
      }
    }
}
fn ui_hero_add_soldier(heroId:Int) -> Unit {
  if world.roleMap.contains(heroId) && world.opRoot is Some(root) {
      let hero = world.roleMap[heroId]
      let areaId = hero.gx * globe_width + hero.gy
      if areaId >= 0 && areaId < world.areas.length() {
        let area = world.areas[areaId]
        area.auto_alloc_to_leader(hero)
        if (root.areaLower as &Control).visible_in_tree() && root.areaLower.showHero {
          root.areaLower.render()
        }
      }      
    }
}

fn HeroLine::new() -> HeroLine {
  let line = HeroLine::{
    line:Widget::new(),
    hero:Widget::new(off=@math.Vec2D(0,0)),
    left:Widget::new(off=@math.Vec2D(55,0), shapeSize = @math.Vec2D(5, 10)),
    soldierTypeName:Widget::new(off=@math.Vec2D(60, 0)),
    right:Widget::new(off=@math.Vec2D(100, 0), shapeSize = @math.Vec2D(5, 10)),
    leftFollow:Widget::new(off=@math.Vec2D(110,0), shapeSize = @math.Vec2D(5, 10)),
    follow:Widget::new(off=@math.Vec2D(115, 0)),
    rightFollow:Widget::new(off=@math.Vec2D(135, 0), shapeSize = @math.Vec2D(5, 10)),
    control:Widget::new(off=@math.Vec2D(140, 0), shapeSize = @math.Vec2D(20, 10)),
    heroId:-1

  }

  let _ = line.left.set_text("<")
  line.left.add_onclick(callback = fn(btn) {
    println("hero minus soldier")
    if world.roleMap.contains(line.heroId) && world.opRoot is Some(root) {
      let hero = world.roleMap[line.heroId]
      hero.switch_follow_solider_type(dir = -1)
      if (root.areaLower as &Control).visible_in_tree() &&  root.areaLower.showHero {
        root.areaLower.render()
      }
    }
  })
  line.left.nick = "hero-line-left"

  let _ = line.right.set_text(">")
  line.right.add_onclick(callback = fn(btn) {
    println("hero add soldier")
    if world.roleMap.contains(line.heroId) && world.opRoot is Some(root) {
      let hero = world.roleMap[line.heroId]
      hero.switch_follow_solider_type(dir = 1)
      if (root.areaLower as &Control).visible_in_tree() &&  root.areaLower.showHero {
        root.areaLower.render()
      }
    }
  })
  line.right.nick = "hero-line-right"

  let _ = line.leftFollow.set_text("<")
  line.leftFollow.add_onclick(callback = fn(btn) {
    println("minus1")
    ui_hero_add_soldier(line.heroId)
  })
  line.leftFollow.nick = "leftFollow"

  let _ = line.rightFollow.set_text(">")
  line.rightFollow.add_onclick(callback = fn(btn) {
    println("add1")
    ui_hero_minus_soldier(line.heroId)
    
  })
  line.rightFollow.nick = "rightFollow"
  line.control.nick ="hero-control"
  let _ = line.control.set_text("控制")
  line.control.add_onclick(callback = fn(btn) {
    println("control")
    if world.roleMap.contains(line.heroId) {
      let hero = world.roleMap[line.heroId]
      if hero.id != world.player.id && hero.nationId == world.player.nationId {
        world.set_hero(hero)
      }
    }
  })
  (line as &Control).add_widgets([
    line.hero,line.left,line.soldierTypeName,line.right,line.leftFollow,line.rightFollow,line.follow,line.control
  ])
  line
}
impl Eq for HeroLine with equal(self, other) {self.heroId == other.heroId}

///
/// BuildLine::new(cate)
/// line.line.set_offset to change it's position
/// .line is the the whole line, container of the other field widgets
struct BuildLine {
  line:Widget 

  name:Widget  // 建筑名
  num:Widget // n座
  minus:Widget // -
  allocs:Widget// 人数(a/b)
  add:Widget// +
  choose:Widget// o
  cate:Int

}
impl Control for BuildLine with render(self:BuildLine) -> Unit {}
impl Control for BuildLine with getWidget(self:BuildLine) -> Widget {self.line}



fn BuildLine::set_alloc(self:BuildLine, a:Int, b:Int) -> Unit {
  let _ = self.allocs.set_text("人数" + a.to_string() + "/" + b.to_string())
}
fn BuildLine::set_num(self:BuildLine, n:Int) -> Unit {
  let _ = self.num.set_text( n.to_string() + "座")
}
fn ui_build_alloc_add(cate:Int) -> Unit {
  if !world.inGlobe && world.showAreaId >= 0  && world.opRoot is Some(root) {
        let area = world.areas[world.showAreaId]
        if !area.belong_player() {
          log("不可以调整不属于自己的城市")
          return
        }
        if area.freeRoleNum < 1 {
          log("空闲的人物不够")
          return
        }
        area.auto_alloc_to_cate(cate, logback = area.belong_player())
        area.recalc_build_stat()
        if (root.areaLower as &Control).visible_in_tree() &&  !root.areaLower.showHero {
          root.areaLower.render()
        }
      }
}
fn ui_build_alloc_minus(cate:Int) -> Unit {
  if !world.inGlobe && world.showAreaId >= 0 && world.opRoot is Some(root) {
        let area = world.areas[world.showAreaId]
        if !area.belong_player() {
          log("不可以调整不属于自己的城市")
          return
        }
        area.auto_release_from_cate(cate)
        area.recalc_build_stat()
        if (root.areaLower as &Control).visible_in_tree() &&  !root.areaLower.showHero {
          root.areaLower.render()
        }
  }
}

fn BuildLine::new(cate:Int) -> BuildLine {
  let line = {
    cate,
    line:Widget::new(),
    name:Widget::new(off = @math.Vec2D(0, 0)),
    num:Widget::new(off = @math.Vec2D(50, 0)),
    minus:Widget::new(off = @math.Vec2D(75, 0), shapeSize = @math.Vec2D(5, 10)),
    allocs:Widget::new(off = @math.Vec2D(80, 0)),
    add:Widget::new(off = @math.Vec2D(120, 0), shapeSize = @math.Vec2D(5, 10)),
    choose:Widget::new(off = @math.Vec2D(135, 0), shapeSize = @math.Vec2D(10, 10))
  }

  (line as &Control).add_widgets([line.name,line.num,line.minus,line.allocs,line.add,line.choose])

  let _ = line.name.set_text(get_build_name(cate))
  let _ = line.minus.set_text("-")
  let _ = line.add.set_text("+")
  let _ = line.choose.set_text("建造")
  line.add.add_onclick(
    callback = fn (e:@inputs.MouseButton)-> Unit {
      println("build add")
      ui_build_alloc_add(cate)
    }
  )
  line.add.nick = "build line add"
  line.minus.add_onclick(
    callback = fn (e:@inputs.MouseButton)-> Unit {
      println("build minus")
      ui_build_alloc_minus(cate)
    }
  )
  line.minus.nick = "build line minus"
  line.choose.add_onclick(
    
    callback = fn (e:@inputs.MouseButton)-> Unit {
      println("buld choose")
      world.wannaBuildCate = cate
      let desc = buildDescs[cate]
      let mut s = "选中了建筑类型:" + desc.name + ",消耗经济值" + desc.ecoCost.to_string() + "可以建造它.点击地图以外的地方取消选中."
      s += ",数量上限:" + desc.maxLimit.to_string()
      if desc.maxPerson > 0 {
        s += ",提供岗位数:" + desc.maxPerson.to_string()
      }
      if desc.ecoPerson > 0 {
        s += ",每日每人经济产出:" + desc.ecoPerson.to_string()
      }
      if desc.foodPerson > 0 {
        s += ",每日每人食物产出:" + desc.foodPerson.to_string()
      }
      if desc.equipPerson > 0 {
        s += ",每日每人装备产出:" + desc.equipPerson.to_string()
      }
      if desc.cityDefense > 0 {
        s += "提供城防值" + desc.cityDefense.to_string()
      }

      log(s)
      
    }
  )
  line.choose.nick = "build line choose"

  line
}


