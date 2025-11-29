
///|raw tax: acc that day
/// tax: after calculated
struct Area {
  roleOccupy : Map[Int, Int] //pos -> roleId
  terrain : Array[Int]
  buildings : Map[Int, Building] //not allow multiply bulding at a place
  buildOccupy:Map[Int, Int]
  buildStat : Map[Int, Int] //the num of each cate
  mut humanCnt : Int
  mut enemyCnt : Int
  mut cityLevel : Int
  mut lordId : Int
  mut nationId : Int
  mut raw_tax : Double
  mut gold : Double
  mut core:Int
  nests:Set[Int]
  
  mut eco:Double // all eco value
  mut popu:Int
  mut food:Double// all food
  mut equip:Double // all equips

  mut ecoSpeed:Double
  mut popuSpeed:Double
  mut foodSpeed:Double
  mut equipSpeed:Double
  
  mut armyLimit:Int
  mut popuLimit:Int
  mut freeRoleNum:Int

  gx:Int
  gy:Int
  mut cityDefense:Double
  buildCatePersonNum:Map[Int, Int]
}
fn find_wall(self:Area) -> Building? {
  for _, build in self.buildings {
    if build.cate == Wall && build.hp > 10 {
      return Some(build)
    }
  }
  None
}
fn can_change_own(self:Area, tNationId:Int) -> Bool {
  if self.nationId < 0 {
    return true
  }
  if self.nationId == GMAP_NEST {
    if self.nests.length() > 0 {
      return false
    }
    if tNationId < 0 || tNationId >= nations.length() {
      return false
    }
  }

  for _, roleId in self.roleOccupy {
      if world.roleMap.contains(roleId) {
        let role = world.roleMap[roleId]
        if role.inTeam {
          continue
        }
        if role.gx != self.gx || role.gy != self.gy {
          continue
        }
        if role.nationId == self.nationId && role.is_equiped() {
          return false
        }
      }
  }

  //for _, build in self.buildings {
  //  if build.hp <= 0 {
  //    continue
  // }
  //  if build.nationId == self.nationId {
  //    return false
  //  }
  //}
  
  true
}
fn get_area_id(self:Area) -> Int {
  self.gx * globe_width + self.gy
}
fn area_has_monster(self:Area) -> Bool {
  for _, roleId in self.roleOccupy {
    if world.roleMap.get(roleId) is Some(role) {
      if role.nationId == GMAP_NEST && role.life.hp > 0 {
        return true
      }
    }
  }
  false
}
fn no_monster_anymore(self:Area) -> Bool {
  for buildId, build in self.buildings {
    if build.cate == Nest && build.hp >= 0{
      return false
    }
  }
  for _, roleId in self.roleOccupy {
    if world.roleMap.get(roleId) is Some(role) {
      if role.nationId == GMAP_NEST && role.life.hp > 0 {
        return false
      }
    }
  }
  true
}
fn empty(self:Area) -> Bool {
  self.buildings.length() == 0 && self.roleOccupy.length() == 0
}
fn change_own(self:Area, tNationId:Int) -> Unit {
  let oldSrcId = self.nationId

  let areaId = self.get_area_id()
  
  let oldBuildings:Map[Int, Building] = self.buildings.copy()
  for buildId, build in oldBuildings {
    if build.nationId == oldSrcId || oldSrcId < 0 {
      if build.cate == Nest { continue }
      self.destroy_build(buildId, build.x, build.y, areaId)
      if tNationId >= 0 {
        let _ = self.add_build(build.cate, build.x, build.y, tNationId)
      }
    }
  }
  //set_gmap_color(areaId, GMAP_GRASS)
      
      self.nationId = tNationId
      if (oldSrcId >= 0) {
        get_nation(oldSrcId).areas.remove(areaId)
      }
      if self.lordId >= 0 {
        if world.roleMap.contains(self.lordId) {
          let role = world.roleMap[self.lordId]
          role.areas.remove(areaId)
          self.lordId = -1
        } else {
          self.lordId = -1
        }
      }



      if tNationId >= 0 {
        world.area_to_city(areaId, opNationId = tNationId)
        set_gmap_color(areaId, get_nation(tNationId).iconId)
      } else {
        if (self.nests.length() > 0) {
          get_nation(GMAP_NEST).areas.add(areaId)
          self.nationId = GMAP_NEST
          set_gmap_color(areaId, GMAP_NEST)
        } else {
          set_gmap_color(areaId, GMAP_GRASS)
        }
      }
  
  if tNationId == world.player.nationId && oldSrcId != tNationId {
    log("玩家获得了被魔物占领的区域(" + self.gx.to_string() + "," + self.gy.to_string() + ")")
  }
}
fn auto_clean(self:Area) -> Unit {
  let clearPoses:Set[Int] = Set::new()
  for pos, roleId in self.roleOccupy {
    if world.roleMap.get(roleId) is Some(role) {
      if (role.inGlobe || role.inTeam || role.gx != self.gx || role.gy != self.gy || role.life.hp <= 0) {
        clearPoses.add(pos)
      }
    }
  }
  for pos in clearPoses {
    self.roleOccupy.remove(pos)
  }
  
}
fn auto_fill_build_cate_num(self:Area, cate:Int, num:Int, useEco?:Bool = true) -> Unit {
  let mut successNum = 0
  for i in 0 ..< (num*6) {
    let (x,y) = self.find_empty_pos()
    //let cate = lordChosenBuildings[grand.int(limit = lordChosenBuildings.length())]
    //println("auto fill cate" + cate.to_string())
    if self.can_build(cate, x, y, self.nationId, useEco~) {
      let cost = buildDescs[cate].ecoCost
      if !useEco || self.eco >= cost {
        let _ = self.add_build(cate, x, y, self.nationId)
        //println("add build")
        successNum = successNum + 1
        if successNum >= num {
          break
        }
      }
    }
  }
}
fn auto_release_from_cate(self:Area, cate:Int) -> Unit {
  for buildId, build in self.buildings {
    if build.nationId != self.nationId { continue }
    if build.cate != cate { continue }
    if build.roles.length() > 0 {
      let mut findRole = None
      for id in build.roles {
        if world.roleMap.contains(id) {
          let role = world.roleMap[id]
          // in this area
          if !role.inGlobe && role.gx == self.gx && role.gy == self.gy {
            findRole = Some(role)
            break
          }
        }
      }
      if findRole is Some(r) {
        self.release_role_from_build(r)
      }
    }
  }
}

/// auto add a soldier to leader
fn auto_alloc_to_leader(self:Area, leader:Role) -> Unit {
  for _, roleId in self.roleOccupy {
    if world.roleMap.contains(roleId) {
      let role = world.roleMap[roleId]
      if role.nationId != self.nationId || role.jobBuildCate != leader.followSoldierType {
        continue
      }
      self.alloc_soldier_to_leader(role, leader)
      return
    }
  }
}

/// auto add a soldier to leader
fn alloc_soldier_to_leader(self:Area, soldier:Role, leader:Role) -> Unit {
  leader.soldiers.push(soldier.id)
  soldier.leaderId = leader.id
  soldier.inTeam = true
  world.clear_footprint(soldier)
  
}
/// auto release this soldier
fn release_soldier(self:Area, soldier:Role) -> Unit {
  soldier.unbind_leader()
}
// auto release this soldier from it's leader
fn auto_release_soldier_from_leader(self:Area, leader:Role) -> Unit {
  if leader.soldiers.length() == 0 {
    return
  }
  
  let soldierId = leader.soldiers.remove(0)
  if world.roleMap.contains(soldierId) {
    leader.unbind_soldier(soldierId)
  }
}

fn auto_alloc_to_cate(self:Area, cate:Int, logback?:Bool = false) -> Unit {
   
    let desc = buildDescs[cate]
    let mut maxPersonNum = 0
    if self.buildStat.contains(cate) {
      maxPersonNum = desc.maxPerson * self.buildStat[cate]
    } else {
      maxPersonNum = 0
    }
    let mut existPerNum = 0
    if self.buildCatePersonNum.contains(cate) {
      existPerNum = self.buildCatePersonNum[cate]
    }
    if existPerNum < maxPersonNum {
      for _, roleId in self.roleOccupy {
        if !world.roleMap.contains(roleId) {
          continue
        }
        let role = world.roleMap[roleId]
        if role.jobBuild >= 0 || role.id == world.player.id || role.nationId != self.nationId {
          continue
        }
        
        for buildId, build in self.buildings {
          if build.is_army_build() {
            if self.equip < 1 {
              if logback {
                log("缺少足够的装备来增加士兵")
              }
              return
            }
            
          }
          if build.cate == cate && build.nationId == self.nationId && build.roles.length() < desc.maxPerson {
            self.alloc_role_to_build(build, role)
            if build.is_army_build() {
              self.equip -= 1
            }
            return
          }
        }
      }
    }
}
fn belong_player(self:Area) -> Bool {
  self.nationId == world.player.nationId
}

fn auto_alloc_role_to_cate(self:Area, cate:Int) -> Bool {
    if self.freeRoleNum == 0 {//not alloc when self.freeRoleNum == 0
      return false
    }
    let desc = buildDescs[cate]
    if self.food <= 0 && desc.foodPerson <= 0 {
      //println("self food:" + self.food.to_string())
      return false
    }
    let mut maxPersonNum = 0
    if self.buildStat.contains(cate) {
      maxPersonNum = desc.maxPerson * self.buildStat[cate]
    } else {
      maxPersonNum = 0
    }
    let mut existPerNum = 0
    if self.buildCatePersonNum.contains(cate) {
      existPerNum = self.buildCatePersonNum[cate]
    }
    if existPerNum < maxPersonNum {
      for _, roleId in self.roleOccupy {
        if !world.roleMap.contains(roleId) {
          //println("skip a not exist role")
          continue
        }
        let role = world.roleMap[roleId]
        if role.jobBuild >= 0 || role.id == world.player.id || role.nationId != self.nationId || role.cate == HERO {
          //println("skip a role")
          continue 
        }
        for buildId, build in self.buildings {
          if build.cate == cate && build.nationId == self.nationId && build.roles.length() < desc.maxPerson {
            self.alloc_role_to_build(build, role)
            //println("auto alloc for area: " + self.gx.to_string() + "," + self.gy.to_string())
            return true
          }
          //println("skip a build")
        }
      }
    }
    //println("exsit:" + existPerNum.to_string() + "and max " + maxPersonNum.to_string())
    false
} 
fn auto_alloc_role(self:Area) -> Bool {
  if self.auto_alloc_role_to_cate(CityCore) {
    return true
  }
  rndLordChosenBuildings.shuffle_in_place(rand = shuffle_rnd_gen)
  for cate in rndLordChosenBuildings {
    if self.auto_alloc_role_to_cate(cate) {
      return true
    }
  }
  false
}



fn alloc_role_to_build(self:Area, build:Building, role:Role) -> Unit {
  if role.jobBuild >= 0 {
    if self.buildings.contains(role.jobBuild) {
      let obuild = self.buildings[role.jobBuild]
      obuild.roles.remove(role.id)
      log("角色[" + role.id.to_string() + "]离开了" + buildDescs[obuild.cate].name + "[" + obuild.id.to_string() + "]")
      if self.buildCatePersonNum.contains(obuild.cate) {
        self.buildCatePersonNum[obuild.cate] -= 1
      }
    }
    role.jobBuild = -1
    role.jobBuildCate = -1
  }
  if self.buildCatePersonNum.contains(build.cate) {
    self.buildCatePersonNum[build.cate] += 1
    build.roles.add(role.id)
  } else {
    self.buildCatePersonNum.set(build.cate, 1)
  }
  build.roles.add(role.id)
  role.jobBuild = build.id
  role.jobGx = role.gx
  role.jobGy = role.gy
  role.jobBuildCate = build.cate
  let areaId = self.get_area_id()
  if role.nationId == world.player.nationId && areaId == world.showAreaId && world.inGlobe {
    log("角色[" + role.id.to_string() + "]前往了" + buildDescs[build.cate].name + "[" + build.id.to_string() + "]处工作")
  }
  if build.nationId >= 0 {
    let nation = get_nation(build.nationId) 
    match build.cate {
      ArcherBarracks|InfantryBarracks|SiegeTroopsBarracks => {
        nation.soldierNum += 1
      }
      _ => ()
    }
  }
  self.freeRoleNum -= 1
}

fn release_role_from_build(self:Area, role:Role) -> Unit {

  if role.jobBuild >= 0 {
    if self.buildings.contains(role.jobBuild) {
      let obuild = self.buildings[role.jobBuild]
      obuild.roles.remove(role.id)
      if self.buildCatePersonNum.contains(obuild.cate) {
        self.buildCatePersonNum[obuild.cate] -= 1
      }
    }

    role.jobBuild = -1
    let cate = role.jobBuildCate
    role.jobBuildCate = -1
    
    if role.nationId >= 0 {
      let nation = get_nation(role.nationId) 
      match cate {
        ArcherBarracks|InfantryBarracks|SiegeTroopsBarracks => {
          nation.soldierNum -= 1
        }
        _ => ()
      }
    }


  }
}
fn can_build(
  self:Area,
  cate : Int,
  x : Int,
  y : Int,
  nationId : Int,
  level? : Int = 0,
  useEco?:Bool = true,
  logback?:Bool= false,
  consoleBack?:Bool = false,
  allowingDebt?:Bool = false
) -> Bool {
  
  if self.get_occupy(x, y) >= 0{
    if logback {
      log("此处被占用, 无法建造")
    }
    if consoleBack {
      println("此处被占用, 无法建造")
    }
    return false
  }

  if cate < 0 || cate >= buildDescs.length() {
    if logback {
      log("超出范围的建筑类别")
    }
    if consoleBack {
      println("超出范围的建筑类别")
    }
    return false
  }
  
  let desc = buildDescs[cate]
  if nationId == self.nationId {
    if self.buildStat.contains(cate) && self.buildStat[cate] >= desc.maxLimit {
      let desc = buildDescs[cate]
      if logback {
        log("此区域" + desc.name + "的数量达到上限" + desc.maxLimit.to_string() + ",无法建造")
      }
      if consoleBack {
        println("此区域" + desc.name + "的数量达到上限" + desc.maxLimit.to_string() + ",无法建造")
      }
      return false
    }
    if !allowingDebt && useEco && self.eco < desc.ecoCost {
      if logback {
        log("此区域经济值不足" + desc.name + "所需的" + desc.ecoCost.to_string() + ",无法建造")
      }
      if consoleBack {
        println("此区域经济值不足" + desc.name + "所需的" + desc.ecoCost.to_string() + ",无法建造")
      }
      return false
    }
  }
  let _ = level

  true
}
fn show_area_building_texts(self:Area) -> Unit {
  self.recalc_build_stat()
  if world.opRoot is Some(root) {
    if (root.areaLower as &Control).visible_in_tree() &&  !root.areaLower.showHero {
      root.areaLower.render()
    }
  }
}
///
/// update buildStat: cate -> num
/// update 
///   ecoSpeed, popuSpeed, foodSpeed,equipSpeed
/// armyLimit, popuLimit:Int, freeRoleNum:Int
fn recalc_build_stat(self:Area, showing?:Bool=true) -> Unit {
  self.buildStat.clear()
  for _, build in self.buildings {
    if build.nationId != self.nationId {
      continue
    }
    if self.buildStat.contains(build.cate) {
      self.buildStat[build.cate] += 1
    } else {
      self.buildStat.set(build.cate, 1)
    }
  }
  
  let mut cacheArmyLimit:Int = 0
  let mut cachePopuLimit:Int = 0
  let mut freeRoleNum:Int = 0

  let mut cachePopuNum:Int = 0
  let mut cacheArmyNum:Int = 0

  let mut cacheEcoSpeed = 0.0
  let mut cachePopuSpeed = 0.0
  let mut cacheFoodSpeed = 0.0
  let mut cacheEquipSpeed = 0.0
  let mut foodConsume = 0.0
  let clearPosSet:Set[Int] = Set::new()
  for pos, roleId in self.roleOccupy{
      if world.roleMap.contains(roleId) {
          let role = world.roleMap[roleId]
          if role.life.hp <= 0 { continue}
          if role.nationId == self.nationId {
            if role.cate == HERO {
            
            } else {
              if role.jobBuildCate < 0 && role.cate != ENEMY {
                freeRoleNum += 1
              }
            }

            if !role.inGlobe && !role.inTeam && role.gx == self.gx && role.gy == self.gy {
              cachePopuNum += 1
            } else {
              clearPosSet.add(pos)
            }
            

            if role.jobBuildCate >= 0 {
              if !role.inTeam {
                foodConsume += 1
              }
              match role.jobBuildCate {
                ArcherBarracks | InfantryBarracks | SiegeTroopsBarracks => {
                  cacheArmyNum += 1
                  ()
                }
                _ => ()
              }
            }

        }
      }
  }
  for _, build in self.buildings {
    if build.nationId == self.nationId {
      let desc = buildDescs[build.cate]
      cacheArmyLimit += desc.armyLimit
      cachePopuLimit += desc.popuLimit
    }
  }
  for buildCate, num in self.buildCatePersonNum {
    let buildDesc = buildDescs[buildCate]
    cacheEcoSpeed   += buildDesc.ecoPerson * num.to_double()
    cacheFoodSpeed  += buildDesc.foodPerson * num.to_double()
    cacheEquipSpeed += buildDesc.equipPerson * num.to_double()
  }
  self.ecoSpeed = cacheEcoSpeed
  self.foodSpeed = cacheFoodSpeed
  self.equipSpeed = cacheEquipSpeed
  self.freeRoleNum = freeRoleNum
  self.popu = cachePopuNum
  
  self.armyLimit = cacheArmyLimit
  self.popuLimit = cachePopuLimit
  if (showing) {
    if !world.inGlobe && world.showAreaId == (self.gx * globe_width + self.gy) {
      if world.opRoot is Some(root) {
        let _ = root.areaLower.popu.set_text("人口(" + cachePopuNum.to_string() +  "/" + self.popuLimit.to_string() + ")")
        let _ = root.areaLower.army.set_text("部队(" + cacheArmyNum.to_string() + "/" + cacheArmyLimit.to_string() + ")")
        let _ = root.areaLower.eco.set_text("经济:" + self.eco.to_string() + "(+"  + self.ecoSpeed.to_string() + ")")
        let _ = root.areaLower.food.set_text("食物:"+ self.food.to_string() +"(+" +  (self.foodSpeed - foodConsume).to_string() + ")")
        let _ = root.areaLower.equip.set_text("装备:"+ self.equip.to_string() +"(+" +  self.equipSpeed.to_string() + ")")
      }
    }
  }
}



///|find the pos to build, ignore roleoccupy
fn find_empty_pos(self : Area) -> (Int, Int) {
  let mut x = -1
  let mut y = -1
  let mut pos = 0
  for i = 0; i < 3; i = i + 1 {
    x = grand.int(limit=area_width)
    y = grand.int(limit=area_width)
    pos = x * area_width + y
    if self.buildOccupy.contains(pos) {
      continue
    }
    if !terrainPass[self.terrain[pos]] {
      continue
    }
    return (x, y)
  }
  for i = 0; i < area_width; i = i + 1 {
    for j = 0; j < area_width; j = j + 1 {
      pos = i * area_width + j
      if self.buildOccupy.contains(pos) {
        continue
      }
      if !terrainPass[self.terrain[pos]] {
        continue
      }
    }
  }
  return (x, y)
}
fn lord_add_build_at(self:Area, cate:Int, ax:Int, ay:Int, level?:Int = 0, allowingDebt?:Bool=false, logback?:Bool=false, consoleBack?:Bool=false) -> Int {
  if cate < 0 {
    return -1
  }
  let buildDesc = buildDescs[cate]
  if self.can_build(cate, ax, ay, self.nationId, level~, logback~, consoleBack~, allowingDebt~) {
    self.eco -= buildDesc.ecoCost
    if self.eco < 0 {
      world.aiWarn.notNegEcoBuild = true
    }
    let buildId = self.add_build(cate, ax, ay, self.nationId, level~)
    if self.nationId == world.player.nationId && !world.inGlobe && world.showAreaId == self.gx * globe_width + self.gy{
      log("在(" +ax.to_string() + "," + ay.to_string() + ")" + "处建造了" + buildDesc.name + "[" + buildId.to_string() + "]")
    }
    buildId
  } else {
    if self.nationId == world.player.nationId {
      
      log("在(" +ax.to_string() + "," + ay.to_string() + ")" + "处建造" + buildDesc.name + "失败")
    }
    -1
  }
}