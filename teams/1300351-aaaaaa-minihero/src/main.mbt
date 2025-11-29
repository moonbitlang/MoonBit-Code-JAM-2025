// Copyright 2025 International Digital Economy Academy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

///|
const ZOOM : Double = 2.0

///|
const VIEWPORT_WIDTH : Double = 480.0

///|
const VIEWPORT_HEIGHT : Double = 320.0

///|
const REAL_VIEWPORT_WIDTH : Double = VIEWPORT_WIDTH * ZOOM

///|
const REAL_VIEWPORT_HEIGHT : Double = VIEWPORT_HEIGHT * ZOOM

///|
const MAP_HEIGHT : Double = 640.0

///|
const MAP_WIDTH : Double = 640.0

///|
const FPS : Double = 60

///|
fn main {
  @system.App::new()
  .with_canvas_width(REAL_VIEWPORT_WIDTH)
  .with_canvas_height(REAL_VIEWPORT_HEIGHT)
  .with_image_smooth(false)
  .with_zoom(ZOOM)
  .with_fps(FPS.to_uint())
  .add_plugin(@plugins.default_plugin)
  .add_system(game_start1, schedule=Startup)
  .add_system(game_update_system1)
  .add_system(click_check_system)
  .run()
}


let grand:@random.Rand = @random.Rand::new()

fn init {}

//fn role_entity_from(animation:@sprite.Animation) -> @entity.Entity {
//  return @style.add_widget(
//        @style.screen_root,
//        sprite= zindex =>  @sprite.Sprite::from_animation(animation, ZROLE),
//        h_offset=0.0,
//        v_offset=0.0,
//  );
//}

fn role_entity_from_pool(sprite:@sprite.Sprite) -> (@entity.Entity, Bool) {
  if epool.length() > 0 {
    let mut eop:Option[@entity.Entity] = None
    for e in epool {
      eop = Some(e)
      break
    }
    if eop is Some(e) {
      epool.remove(e)
      return (e, true)
    }
  }
  return (@style.add_widget(
    @style.screen_root,
    sprite= zindex => sprite,
    h_offset=0.0,
    v_offset=0.0,
  ), false)
}
fn entity_from(sprite:@sprite.Sprite) -> @entity.Entity {
  return @style.add_widget(
    @style.screen_root,
    sprite= zindex => sprite,
    h_offset=0.0,
    v_offset=0.0,
  )
}
fn entity_fromd(sprite:@sprite.Sprite, hoff:Double, voff:Double) -> @entity.Entity {
  return @style.add_widget(
    @style.screen_root,
    sprite= zindex => sprite,
    h_offset=hoff,
    v_offset=voff,
  )
}

const GRASS = 0
const GROUND = 1
const DESERT = 2
const WATER = 3
const TERRAIN_MAX = 4//grow when allocating

fn terrain_to_str(icon:Int) -> String {
  match icon {
    GRASS => "grass"
    GROUND => "ground"
    DESERT => "desert"
    WATER => "water"
    _ => "icon:" + icon.to_string()
  }
}
let terrainPass:Array[Bool] = [
  true,//grass
  true,//ground
  true,//desert
  false//water
]


fn role_in_camera(self:GameWorld, role:Role) -> Bool {
  if role.inTeam {
    return false
  }
  //不做判断, 否则人太多了
  //if self.inGlobe && role.inGlobe {
  //  return true
  //}
  if !self.inGlobe && !role.inGlobe && self.showAreaId == role.gx * globe_width + role.gy {
    return true
  }
  false
}
///|
fn add_build(
  self : Area,
  cate : Int,
  x : Int,
  y : Int,
  nationId : Int,
  level? : Int = 0,
) -> Int {
  let id = world.genBuildingId()
  let build = { id, cate, level, owner: -1, hp: 10 * (level + 1), nationId, x, y , roles:Set::new()}
  self.buildings[id] = build
  match cate {
    CityCore => self.core = id
    Nest => {
      world.nestCnt += 1
      ignore(self.nests.add(id))
    }
    _ => ()
  }
  let buildDesc = buildDescs[cate]
  if nationId == self.nationId {
    if buildDesc.cityDefense > 0 {
      self.cityDefense += buildDesc.cityDefense
    }
    if buildDesc.armyLimit > 0 {
      self.armyLimit += buildDesc.armyLimit
    }
    if buildDesc.popuLimit > 0 {
      self.popuLimit += buildDesc.popuLimit
    }
  }
  //println("add build" + cate.to_string())
  self.set_build_occupy(x, y, id)

  let areaId = self.gx * globe_width + self.gy
  if world.showAreaId == self.gx * globe_width + self.gy {
    @system.deferred_event_system(0.0)
    let pos = x * area_width + y
    if areaId == world.showAreaId && !world.inGlobe {
      let e = world.areaBes[pos]
      @sprite.sprites.set(e, build.get_sprite())
      if !e.is_alive() {
        e.respawn()
      }
    }
    @system.deferred_event_system(0.0)
  }
  id
}


const TO_CITY_POPULATION = 5

fn set_build_occupy(self:Area, x:Int, y:Int, id:Int) -> Unit {
  let pos = x * area_width + y
  if self.buildOccupy.contains(pos) {
    self.buildOccupy[pos] = id
  } else {
    self.buildOccupy.set(pos, id)
  }
}

fn clear_build_occupy(self:Area, x:Int, y:Int, id:Int) -> Unit {
  let pos = x * area_width + y
  if (self.buildOccupy.contains(pos)) {
    if self.buildOccupy[pos] == id {
      self.buildOccupy.remove(pos)
    } 
  }
}
fn get_occupy(self:Area, x:Int, y:Int) -> Int {
  let pos = x * area_width + y
  if self.roleOccupy.contains(pos) {
    self.roleOccupy[pos]
  } else {
    -1
  }
}
///|
fn set_occupy(self : Area, x : Int, y : Int, id : Int) -> Unit {
  let pos = x * area_width + y
  if self.roleOccupy.contains(pos) {
    self.roleOccupy[pos] = id
  } else {
    self.roleOccupy.set(pos, id)
  }
}
fn clear_occupy(self:Area, x:Int, y:Int, id:Int) -> Unit {
  let pos = x * area_width + y
  if (self.roleOccupy.contains(pos)) {
    if self.roleOccupy[pos] == id {
      self.roleOccupy.remove(pos)
    }
  }
}
// with different level
struct City {
  id:Int
  level:Int
}
///|
/// wannaBuildCate: the cate to build 
struct GameWorld {
  mut wannaBuildCate:Int
  
  globe : Array[@entity.Entity]
  globePanel : @entity.Entity
  areas : Array[Area]
  areaEs : Array[@entity.Entity] //area terrain
  areaPanel : @entity.Entity
  areaBes : Array[@entity.Entity] //area building
  areaBuildPanel:@entity.Entity

  mut player : Role
  mut totalcnt : Int
  mut gxstart : Int
  mut gystart : Int
  mut lastKeyTime : Double
  mut roleIdCnt : Int
  roleMap : Map[Int, Role]
  globeOccupy : Array[Int]
  areaOccupy : Array[Int]
  mut accTime : Double
  mut steps : Int

  travelText: @sprite.Text
  enemyBarText:@sprite.Text
  gameEndPanel:@entity.Entity

  mut npcCnt : Int
  mut heroCnt : Int
  mut enemyCnt : Int
  //mut cityIdCnt:Int//city use the grid idx as id
  mut buildingIdCnt : Int
  offy : Double //where to render to map
  mut showAreaId : Int
  mut inGlobe:Bool
  mut roleBugInt:Int
  mut nestCnt:Int
  gmap:Array[Int]
  war:Map[Int, Set[Int]]

  mut opRoot:Option[RootControl]


  mut aiWarn:AIWarn
}
struct AIWarn {
  mut notNegEcoBuild:Bool
}
fn to_peace(src:Int, target:Int)-> Unit {
  if world.war.contains(src) {
    world.war[src].remove(target)
  } 
  if world.war.contains(target) {
    world.war[target].remove(src)
  }
}

fn to_war(src:Int, target:Int)-> Unit {
  if world.war.contains(src) {
    world.war[src].add(target)
  } else {
    let set = Set::new()
    set.add(target)
    world.war[src] = set
  }
  if world.war.contains(target) {
    world.war[target].add(src)
  } else {
    let set = Set::new()
    set.add(src)
    world.war[target] = set
  }
}


let world:GameWorld = {
  aiWarn:{
    notNegEcoBuild:false
  },
  opRoot:None,
  wannaBuildCate:-1,
  war:{},
  gmap:[],
  roleBugInt:3,
  inGlobe:true,
  areas:[],
  npcCnt:0,
  heroCnt:0,
  enemyCnt:0,
  buildingIdCnt:0,
  nestCnt:0,
  showAreaId:0,
  offy:20,
  travelText:@sprite.Text::new("", color="gold", font="8px ThaleahFat", baseline=Top,align=Left),
  enemyBarText:@sprite.Text::new("", color="red", font="8px ThaleahFat", baseline=Top,align=Left),
  gameEndPanel:@style.add_widget(
      @style.screen_root,
      sprite=zindex => @sprite.Sprite::from_text( @sprite.Text::new("游戏结束", color="black", font="30px ThaleahFat", baseline=Top,align=Left), zindex),
      h_offset=90,
      v_offset=130.0,
    ),
  globe:[],
 
  globePanel:@style.add_widget(
      @style.screen_root,
      sprite=zindex => @sprite.Sprite::from_text( @sprite.Text::new(
        "",color="gold",font="32px ThaleahFat",baseline=Top,align=Left,
      ), zindex),
      h_offset=0.0,
      v_offset=20.0,
    ),
  globeOccupy:[],
  areaEs:[],
  areaBes:[],
  areaPanel:@style.add_widget(
      @style.screen_root,
      sprite=zindex => @sprite.Sprite::from_text( @sprite.Text::new(
        "",color="gold",font="32px ThaleahFat",baseline=Top,align=Left,
      ), zindex),
      h_offset=0.0,
      v_offset=20.0
    ),
  areaBuildPanel:@style.add_widget(
      @style.screen_root,
      sprite=zindex => @sprite.Sprite::from_text( @sprite.Text::new(
        "",color="gold",font="32px ThaleahFat",baseline=Top,align=Left,
      ), zindex),
      h_offset=0.0,
      v_offset=20.0,
    ),
  areaOccupy:[],
  totalcnt:5,
  gxstart:0,
  gystart:0,
  player:{
    nationId:0,
    ge:entity_from(heroSprite),
    ae:entity_from(heroSprite),
    inGlobe:true,gx:0,gy:0,ax:0,ay:0,
    id:0,
    life:life_gen(),
    cate:HERO,
    lordId:-1, isLord:false, vassal:Set::new(), areas:Set::new(),
    atkArea:-1, atkBuild:-1, atkTarget:-1,rcate:0,jobBuild:-1,jobBuildCate:-1,
    soldiers:[], leaderId:-1, followSoldierType:-1, jobGx:0, jobGy:0,inTeam:false,equiped:false
  },
  lastKeyTime:0,
  roleIdCnt:1,
  roleMap:{},
  accTime:0,
  steps:0
}




extern "js" fn aiBoardLog(s:String) -> Unit =
  #|(s) => (function(){
  #|  if (s.length == 0) return;
  #|  s = s.replace("\\n", "\n");
  #|  let p = document.createElement("pre");
  #|  p.innerText = s;
  #|  if (aiBoard.childElementCount > 0) {
  #|    aiBoard.insertBefore(p, aiBoard.children[0])
  #|  } else {
  #|    aiBoard.appendChild(p)
  #|
  #|  }
  #|  if (aiBoard.childElementCount > 50) {
  #|    aiBoard.removeChild(aiBoard.childNodes[aiBoard.childElementCount - 1]) 
  #|  }
  #|  return
  #|})()
extern "js" fn log(s:String) -> Unit =
  #|(s) => (function(){
  #|  function isXn(str, pat)  {
  #|          if (str == pat) {
  #|              return str + "x2";
  #|          }
  #|          let items = str.split("x");
  #|          let istr = items[items.length - 1];
  #|          items.pop();
  #|          let joinstr = items.join("x");
  #|          if (joinstr == pat) {
  #|              return joinstr + "x" + (Number(istr) + 1);
  #|          } else {
  #|              return null;
  #|          }
  #|  }
  #|  let p = document.createElement("p");
  #|  p.innerText = s;
  #|  if (logBoard.childElementCount > 0) {
  #|    let dupStr = isXn(logBoard.children[0].innerText, s);
  #|    if (dupStr == null) {
  #|      logBoard.insertBefore(p, logBoard.children[0]);
  #|    } else {  logBoard.children[0].innerText = dupStr;}
  #|  } else {
  #|    logBoard.appendChild(p);
  #|  }
  #|  if (logBoard.childElementCount > 30) {
  #|    logBoard.removeChild(logBoard.childNodes[logBoard.childElementCount - 1]);
  #|  }
  #|  return
  #|})()
extern "js" fn mouse_point_role(id : Int, inGlobe:Bool) -> String =
  #|(id, inGlobe) => (function(){
  #|  console.log("id is ", id, "inGlobe", inGlobe)
  #|  return ""
  #|})()

extern "js" fn btn_input() -> String =
  #|() => (function(){
  #|  let s = keyObj.btn;
  #|  keyObj.btn = "";
  #|  return s
  #|})()

extern "js" fn btn_input_x() -> Int =
  #|() => (function(){
  #|  return keyObj.x
  #|})()
extern "js" fn btn_input_y() -> Int =
  #|() => (function(){
  #|  return keyObj.y
  #|})()

extern "js" fn btn_input_idx() -> Int =
  #|() => (function(){
  #|  return keyObj.idx
  #|})()

extern "js" fn strategy(observeStr:String, raw:Bool) -> Array[Int] =
  #|(observeStr, raw) => (function(){
  #|  return observe_and_act(observeStr, raw)
  #|})()

extern "js" fn show_to_board(str : String) -> Unit =
  #|(str) => (function(){
  #|  if (board != null) {
  #|    board.innerText = str
  #|  }
  #|})()
fn showGlobe(self:GameWorld) -> Unit {
  world.travelText.content = "大世界旅行中!"
  //panel change
  self.inGlobe = true
  self.showAreaId = -1
  self.globePanel.respawn()
  self.areaPanel.destroy()
  self.areaBuildPanel.destroy()
  //globePanel doesn't need repaint

  @system.deferred_event_system(0.0)
  //render roles
  for _, role in world.roleMap {
    if role.inGlobe {
      if !role.inTeam {
        if !role.ge.is_alive() {
          role.ge.respawn()
        }
      }
    } else {
      if role.ae.is_alive() {
        role.ae.destroy()
      }
    }
  }
  if world.opRoot is Some(root) {
    (root.nationTable as &Control).show()
    root.nationTable.render()
    (root.areaLower as &Control).hide()
  }
}
fn showArea(self:GameWorld, pos:Int) -> Unit {
  world.travelText.content = ""
  self.inGlobe = false
  self.showAreaId = pos
  self.globePanel.destroy()
  self.areaPanel.respawn()
  self.areaBuildPanel.respawn()
  //render terrain
  let area = self.areas[pos]
  batch_render_terrain(area.terrain, world.areaEs)
  
  //world.batch_render_area(area.terrain)
  //println(area.terrain[0].to_string() + " " + area.terrain[1].to_string())
  //render roles
  for i in 0..<(area_width * area_width) {
    world.areaBes[i].destroy()
  }

  area.show_area_building_texts()
  @system.deferred_event_system(0.0)

  for _, build in area.buildings {
    if !area.buildOccupy.contains(build.x * area_width + build.y) {continue}
    let pos = build.x * area_width + build.y
    let e = world.areaBes[pos]
    @sprite.sprites.set(e, build.get_sprite())
    e.respawn()
    //sprintln("build show at " + pos.to_string() + " " + build.cate.to_string())
  }

  let x = pos / area_width
  let y = pos - x * area_width

  @system.deferred_event_system(0.0)
  for _,role in world.roleMap {
    if role.ge.is_alive() {
      role.ge.destroy()
    }
    if role.inGlobe {
      if role.ae.is_alive() {
        role.ae.destroy()
      }
      
    } else {
      if role.gx == x && role.gy == y {
        if !role.inTeam {
          if  !role.ae.is_alive() {
            role.ae.respawn()
          }
        }
      } else {
        if role.ae.is_alive() {
          role.ae.destroy()
        }
      }
    }
  }
  if world.opRoot is Some(root) {
    (root.nationTable as &Control).hide()
    //world.areaLower[0].tabs.show()
    root.areaLower.showHero = false
    root.areaLower.render()
  }
} 
fn genRoleId(self:GameWorld) -> Int {
  let id = self.roleIdCnt
  self.roleIdCnt += 1
  return id
}
fn genBuildingId(self:GameWorld) -> Int {
  let id = self.buildingIdCnt
  self.buildingIdCnt += 1
  return id
}
fn rndNationId() -> Int {
  grand.int(limit = 4)
}
fn init_gen_city(self:GameWorld, opNationId?:Int = -1, nationRoleCnt?:Int = 0) -> Unit {
  let x = grand.int(limit = globe_width)
  let y = grand.int(limit = globe_width)
  let pos = x * globe_width + y
  let area = self.areas[pos]
  //println("inir for area level " + area.cityLevel.to_string())
  if area.cityLevel < 0 {
    area.gold = 3000
    for i in 0..<3 {
      if (world.roleMap.length() - world.enemyCnt < HUMAN_POPULATION) {
        let role = self.genNPC(x,y)
        role.toArea()
      }
    }
    for i in 0..< nationRoleCnt {
      if world.roleMap.length() - world.enemyCnt < HUMAN_POPULATION {
        let role = self.genNPC(x,y, nationId = opNationId)
        role.toArea()
      }
    }

    self.area_to_city(pos, opNationId = opNationId)
    
    area.auto_fill_build_cate_num(House, 4, useEco = false)
    area.auto_fill_build_cate_num(Field, 5, useEco = false)
    area.auto_fill_build_cate_num(BlacksmithShop, 1, useEco = false)
    area.auto_fill_build_cate_num(Wall, 2, useEco = false)
    area.auto_fill_build_cate_num(InfantryBarracks, 1, useEco = false)
    area.food += 100
    area.equip += 20
    for _ in 0..<5 {
      if !area.auto_alloc_role() { break }
    }
    for _ in 0..<2 {
      area.auto_alloc_to_cate(InfantryBarracks)
    }

  }
}
fn gen_nest_gxy(self:GameWorld, level:Int, x:Int, y:Int) -> Unit {
  let pos = x * globe_width + y
  let area = self.areas[pos]
  let (ax, ay) = area.find_empty_pos()
  
  if ax < 0 || ay < 0 {
    return
  }
  
  let buildId = area.add_build(Nest, ax, ay, GMAP_NEST, level~) 
  
  if area.nationId < 0 {
    area.change_own(GMAP_NEST)
  }

  if (area.buildings.contains(buildId)) {
    if world.enemyCnt < ENEMY_LIMIT {
      for i in 0 ..< 5 {
        let _ = self.genEnemyForNest(x, y, area.buildings[buildId], grand.int(limit = 4))
      }
    }
  }
}
fn rnd_nest_level() -> Int {
  for i in 0..<levelEnemySprites.length() {
    if grand.double() < 0.5 {
      return i
    }
  }
  levelEnemySprites.length() - 1
}
fn gen_nest(self:GameWorld, opLevel?:Int = -1) -> Unit {
  let mut level = opLevel
  if level < 0 {
    level = rnd_nest_level() //grand.int(limit = levelEnemySprites.length())
  }
  let x = grand.int(limit = globe_width)
  let y = grand.int(limit = globe_width)
  self.gen_nest_gxy(level, x, y)
}

fn genNPCForHouse(self:GameWorld, gx:Int, gy:Int, build:Building) -> Bool {
  if gx < 0 || gy < 0 || gx >= globe_width || gy >= globe_width {
    return false
  }
  if (world.roleMap.length() - world.enemyCnt < HUMAN_POPULATION) {
    let enemy = self.genNPC(gx, gy, nationId = build.nationId)
    enemy.ax = build.x
    enemy.ay = build.y
    enemy.toArea(border = false)
    return true
  }
  false
}

fn nation_negative(src:Int, target:Int) -> Bool {
  if src == target {
    return false
  }
  if src == GMAP_NEST || target == GMAP_NEST{
    return true
  }
  if world.war.contains(src) && world.war[src].contains(target) {
    return true
  }
  return false

}
fn atk_build(self:Role, target:Building) -> Unit {
  if self.is_player() {
    log("攻击" + target.id.to_string())
    world.enemyBarText.content = "建筑[" + target.id.to_string() + "], ♥:" + target.hp.to_string()
  }
  target.hp -= self.get_atk()
  if target.hp <= 0 {
    let areaId = self.gx * globe_width + self.gy
    let area = world.areas[areaId]
    let mut passNationId = -1
    if self.nationId >= 0 && self.nationId != GMAP_NEST {
      passNationId = self.nationId
    }
    match target.cate {
      Nest => {
        self.life.score += 100
        ignore(area.nests.remove(target.id))
        if self.is_player() {
          log("拆毁了怪物巢穴" + target.id.to_string() + "获得功绩100点")
        }
      }
      _ => ()
    }

    area.destroy_build(target.id, target.x, target.y, areaId, newNationId = passNationId)
    if target.nationId == GMAP_NEST && area.nationId == GMAP_NEST {
   
      if area.no_monster_anymore() {
     
        let nation = get_nation(area.nationId)
        nation.remove_area(areaId)
        set_gmap_color(areaId, GMAP_GRASS)
      }
    }

    if area.can_change_own(self.nationId) {

      area.change_own(self.nationId)
    }
    
  } else {
    if target.cate == Nest {
      let areaId = self.gx * globe_width + self.gy
      let area = world.areas[areaId]
      if (!area.area_has_monster()) {
        let _ = world.genEnemyForNest(self.gx, self.gy, target, grand.int(limit=4))
      }
    }
  }
}
///|x,y is the pos in the area
fn destroy_build(self : Area, buildId : Int, x : Int, y : Int, areaId:Int, newNationId?:Int=-1) -> Unit {
  if self.buildings.contains(buildId) {
    let build = self.buildings[buildId]
    
    if build.roles.length() > 0 {
      let arr = build.roles.to_array()
      for roleId in arr {
        if world.roleMap.contains(roleId) {
          //release the roles
          let role = world.roleMap[roleId]
          self.release_role_from_build(role)
        }
      }
    }
    let buildDesc = buildDescs[build.cate]
    if build.nationId == self.nationId {
      if buildDesc.cityDefense > 0 {
        self.cityDefense -= buildDesc.cityDefense
        if self.cityDefense < 0 {
          self.cityDefense = 0// city defense can be damaged
        }
      }
      if buildDesc.armyLimit > 0 {
        self.armyLimit -= buildDesc.armyLimit
      }
      if buildDesc.popuLimit > 0 {
        self.popuLimit -= buildDesc.popuLimit
      }
    }
    self.buildings.remove(buildId)
    if build.cate == Nest {
      world.nestCnt -= 1
      self.nests.remove(build.id)
    }
  }
  self.clear_build_occupy(x, y, buildId)

  
  @system.deferred_event_system(0.0)
  let pos = x * area_width + y
  if areaId == world.showAreaId && !world.inGlobe {
    let e = world.areaBes[pos]
    @sprite.sprites.set(e, emptySprite)
    if e.is_alive() {
      e.destroy()
    }
  }
  @system.deferred_event_system(0.0)
}
fn interact(self:Role, target:Role) -> Unit {
  if self.negative(target) {
    if self.is_player() {
      log("攻击" + target.id.to_string())
    }
    if target.is_player() {
      log("被" + self.id.to_string() + "攻击")
    }
    self.atk(target)
  } else {
    if self.is_player() {
      log("被" + target.id.to_string() + "治愈血量")
    }
    self.hp_restore()
    target.hp_restore()
  }
}
fn hp_restore(self:Role) -> Unit {
  if self.life.hp < self.life.hp_max {
    self.life.hp +=1 
  }
}
fn atkBack(self:Role, target:Role) -> Unit {
  target.life.hp -= self.get_atk()

  if self.is_player() {
    log("攻击" + target.id.to_string())
  }
  if target.is_player() {
    log("被" + self.id.to_string() + "攻击")
  }

  if target.life.hp <= 0 {
    world.beat(self, target)
  }
  if !self.is_equiped() && !self.equiped && grand.double() < 0.05 {
    self.equiped = true
  }
}
const RIGHT = 0
const DOWN = 1
const LEFT = 2
const UP = 3
let rnd_move_pairs:Array[@math.Vec2D] = [@math.Vec2D(1,0),@math.Vec2D(0,1),@math.Vec2D(-1,0),@math.Vec2D(0,-1)]
fn move_forward(self:Role, x:Int, y:Int, ofGlobe:Bool, about?:Bool= true) -> Unit {
  if about && grand.double() < 0.4 {
    self.move(rnd_move_pairs[grand.int(limit = rnd_move_pairs.length())])  
    return
  }
  if ofGlobe {
    if grand.double() < 0.5 {
      if self.gx < x {
        self.move(rnd_move_pairs[RIGHT])
        return
      } else if self.gx > x {
        self.move(rnd_move_pairs[LEFT])
        return
      }
      if self.gy < y {
        self.move(rnd_move_pairs[DOWN])
        return
      } else if self.gy > y {
        self.move(rnd_move_pairs[UP])
        return
      }
    } else {
      if self.gy < y {
        self.move(rnd_move_pairs[DOWN])
        return
      } else if self.gy > y {
        self.move(rnd_move_pairs[UP])
        return
      }
      if self.gx < x {
        self.move(rnd_move_pairs[RIGHT])
        return
      } else if self.gx > x {
        self.move(rnd_move_pairs[LEFT])
        return
      }
    }
  } else {
    if grand.double() < 0.5 {
      if self.ax < x {
        self.move(rnd_move_pairs[RIGHT])
        return
      } else if self.ax > x {
        self.move(rnd_move_pairs[LEFT])
        return
      }
      if self.ay < y {
        self.move(rnd_move_pairs[DOWN])
        return
      } else if self.ay > y {
        self.move(rnd_move_pairs[UP])
        return
      }
    } else {
      if self.ay < y {
        self.move(rnd_move_pairs[DOWN])
        return
      } else if self.ay > y {
        self.move(rnd_move_pairs[UP])
        return
      }
      if self.ax < x {
        self.move(rnd_move_pairs[RIGHT])
        return
      } else if self.ax > x {
        self.move(rnd_move_pairs[LEFT])
        return
      }
    }
  }
}
fn find_atk_build_or_role(self:Role, area:Area) -> Bool {
  for _, roleId in area.roleOccupy {
    if world.roleMap.contains(roleId) {
      let role = world.roleMap[roleId]
      if role.nationId == self.nationId {continue}
      if role.inTeam {
        continue
      }
      if self.gx == role.gx && self.gy == role.gy && role.life.hp > 0 {
        if nation_negative(self.nationId, role.nationId) {
          self.atkTarget = role.id
          return true
        }
      }
    }
  }
  if self.nationId != GMAP_NEST && (self.nationId == area.nationId || !nation_negative(self.nationId, area.nationId)) {
    if area.nests.length() == 0 {
      return false
    } else {
      for buildId in area.nests {
        if area.buildings.contains(buildId) {
          let build = area.buildings[buildId]
          if build.hp < 0 {continue}
          self.atkBuild = buildId
          return true;
        }
      }
    }
  }
  for _, build in area.buildings {
    if nation_negative(self.nationId, build.nationId) {
      if build.hp <= 0 {
        continue
      }
      self.atkBuild = build.id
      return true
    }
  }

  false
}
fn rnd_move(self:Role) -> Unit {
  if self.atkArea >= 0  && self.atkArea < world.areas.length() {
    let tgx = self.atkArea / globe_width 
    let tgy = self.atkArea - globe_width * tgx
    if self.inGlobe {
      if (self.gx == tgx && self.gy == tgy) {
        self.toArea()
        return
      } else {
        self.move_forward(tgx, tgy, true)
        return
      }
    } else {
      if self.gx != tgx || self.gy != tgy {
        self.toGlobe()
        return
      }
    }
  }
  
  if self.atkBuild >= 0 {
    if self.inGlobe {
      self.atkBuild = -1
    } else {
      let areaId = self.gx * globe_width + self.gy
      let area = world.areas[areaId]
      if area.buildings.contains(self.atkBuild) {
        let build = area.buildings[self.atkBuild]
        if  (!nation_negative(self.nationId, build.nationId)) || build.hp <= 0{
          self.atkBuild = -1
        } else {
          if build.x != self.ax || build.y != self.ay {
            self.move_forward(build.x, build.y, false)
            return
          } else {
            self.atkBuild = -1
          }
        }
      } else {
        self.atkBuild = -1
      }
    }
  } else if self.atkTarget >= 0 {
    if self.inGlobe {
      self.atkTarget = -1
    }
    if (world.roleMap.contains(self.atkTarget)) {
      let target = world.roleMap[self.atkTarget]
      if target.inGlobe {
        self.atkTarget = -1
      } else if target.gx != self.gx || target.gy != self.gy {
        self.atkTarget = -1
      } else {
        self.move_forward(target.ax, target.ay, false)
        return
      }
    } else {
      self.atkTarget = -1
    }
  } else {
    //match self.nationId {
    //  GMAP_NEST => {
    //    let areaId = self.gx * globe_width + self.gy
    //    let area = world.areas[areaId]
    //    //if area.core >= 0 && area.buildings.contains(area.core) {
    //    //  self.atkBuild = area.core
    //    //}
    //    ()
    //  }
    //  _ => ()
    //}
  }
  if (self.atkBuild < 0 && self.atkTarget < 0) && (self.atkArea >= 0) && !self.inGlobe {      
    let areaId = self.gx * globe_width + self.gy
    let area = world.areas[areaId]
    if self.atkArea == areaId {
      if !self.find_atk_build_or_role(area) {
        //the is no target at this area
        self.atkArea = -1
      }
    }
    //fidn a atk target
  }
  if self.atkBuild < 0 && self.atkTarget < 0 && self.atkArea < 0 && !self.inGlobe{
    let equiped = self.is_equiped()
    let areaId = self.gx * globe_width + self.gy
    let area = world.areas[areaId]
    if self.find_atk_build_or_role(area) {
        return // return if he find the atk role/building
    }
  }
  self.move(rnd_move_pairs[grand.int(limit = rnd_move_pairs.length())])  
}
fn move(self:Role, vec:@math.Vec2D) -> Unit {
  if vec.0 == 0 && vec.1 == 0 {
    return
  }
  let debug = self.id == world.player.id
  //println("move")
  if self.inGlobe {
    //println("in globe")
  }
  if self.inGlobe {
    if debug {
      //println("in globe")
    }
    let mut ngx = self.gx
    let mut ngy = self.gy
    if vec.0 > 0 {
      ngx += 1
      if ngx >= globe_width {return}
    } else if vec.0 < 0 {
      ngx -= 1 
      if ngx < 0 {return}
    } else if vec.1 > 0 {
      ngy += 1
      if ngy >= globe_width {return}
    } else if vec.1 < 0 {
      ngy -= 1
      if ngy < 0 {return}
    }
    
    let idx = ngx * globe_width + ngy
    
    let existId= world.globeOccupy[idx]
    if existId >= 0 {
        if world.roleMap.contains(existId) && existId != self.id {
          let target = world.roleMap[existId]
          if (target.inGlobe) {
            self.interact(target)
            return 
          } else {
            world.clear_goccupy(target.gx, target.gy, existId)
          }
        } else {
          world.clear_goccupy(ngx, ngy, existId)
        }
    }
    let area = world.areas[idx]
    if nation_negative(area.nationId, self.nationId) {
      if area.cityDefense > 0 {
        let wallOp = area.find_wall()
        if wallOp is Some(wall) {
          self.atk_build(wall)
        } else {
          area.cityDefense = 0
        }
        return
      }
    }

    world.clear_goccupy(self.gx, self.gy, self.id)
    world.set_goccupy(ngx, ngy, self.id)

    self.gx = ngx
    self.gy = ngy
    //@position.positions.set(self.ge, @math.Vec2D(self.gx.to_double() * 16.0, self.gy.to_double() * 16.0))
    self.ge.set_offset(@math.Vec2D(self.gx.to_double() * 16.0, self.gy.to_double() * 16.0))
    //println("change pos")
    if !(self.nationId == GMAP_NEST) {
      if world.player.id != self.id && grand.double() < 0.05 {
        self.toArea()
      }
      return
    }
  } else {
    if debug {
      //println("not in globe")
    }
    if self.gx < 0 {
      self.gx = 0
    }
    if self.gy < 0 {
      self.gy = 0
    }
    let areaId = self.gx * globe_width + self.gy
    let area = world.areas[areaId]
    let mut nax = self.ax
    let mut nay = self.ay
    
    let mut leave = false
    if vec.0 > 0 {
      nax +=1 
      if nax >= area_width {
        leave = true
      }
    } else if vec.0 < 0 {
      nax -= 1
      if nax < 0 {
        leave = true
      }
    } else if vec.1 > 0 {
      nay += 1
      if nay >= area_width  {
        leave = true
      }
    } else if vec.1 < 0 {
      nay -= 1 
      if nay < 0 {
        leave = true
      }
    }
    
    if leave && !(self.nationId == GMAP_NEST && self.jobBuild < 0) {
      //如果有工作, 那么不会游荡到其他的地图
      if world.player.id == self.id || grand.double() < 0.01 {
        self.toGlobe()
      }
      return
    }
    if (leave) {
      return
    }
    let pos = nax * area_width + nay
    let icon = area.terrain[pos]
    if icon < 0 {
      return
    }
    //println("from " + self.ax.to_string() + " ," + self.ay.to_string() + "   " + nax.to_string() + "," + nay.to_string() + " icon " + icon.to_string())
    if !terrainPass[icon] {
      return
    }

    if area.buildOccupy.contains(pos) {
      let buildId = area.buildOccupy[pos]
      if buildId >= 0 && area.buildings.contains(buildId) {
        let build = area.buildings[buildId]
        if nation_negative(self.nationId, build.nationId) {
          self.atk_build(build)
          return
        }
      }
    }


    let existId = area.get_occupy(nax, nay)
    
    if existId >= 0 {
      if world.roleMap.contains(existId) && existId != self.id {
        let target = world.roleMap[existId]
        if (!target.inGlobe && !target.inTeam && target.gx == self.gx && target.gy == self.gy) {
          self.interact(target)
          return
        }
      }
      area.clear_occupy(nax, nay, existId)
    }
      
    
    
    area.clear_occupy(self.ax, self.ay, self.id)
    area.set_occupy(nax, nay, self.id)
    self.ax = nax
    self.ay = nay
    self.ae.set_offset(@math.Vec2D(self.ax.to_double() * 16.0, self.ay.to_double() * 16.0))
    //@position.positions.set(self.ae, @math.Vec2D(self.ax.to_double() * 16.0, self.ay.to_double() * 16.0))
  }
  if world.player.id == self.id {
    world.enemyBarText.content = ""
  }
}
//50 then need 5s to load, it may not be good to do so!
let globe_width = 18
let area_width = 18
const ZGROUND = 1
const ZBUILDING = 2
const ZROLE = 3
const ZBACKGROUND = 99
const ZUI = 100
//fn batch_render_area(self:GameWorld, terrain:Array[Int]) -> Unit {
//  for e in self.areaEs {
//    if e.is_alive() {
//      e.destroy()
//    }
//  }
//  @system.deferred_event_system(0.0)
//  self.areaEs.clear()
//  let mut pos = 0
//  for i=0;i<area_width; i= i + 1 {
//    for j=0;j<area_width;j=j+1 {
//      let icon = terrain[pos]
//      let grid = @style.add_widget(
//        world.areaPanel,
//        sprite= zindex =>  terrainSprites[icon],
//        h_offset=0.0,
//        v_offset=20.0,
//      )
//      @position.positions.set(grid, @math.Vec2D(i.to_double()*16.0, j.to_double()*16.0))//
//      world.areaEs.push(grid)
//      pos = pos + 1
//    }
//  }
//  println("area children num " + world.areaPanel.get_children().length().to_string())
//}
fn batch_render_gmap(gmap:Array[Int], entities:Array[@entity.Entity]) -> Unit {
  @system.deferred_event_system(0.0)
  for i = 0; i < gmap.length() && i < entities.length(); i = i + 1 {
    let icon = gmap[i]
    let e = entities[i]
    if icon >= 0 {
      //println("at pos " + i.to_string() + " icon is " + icon.to_string())
      @sprite.sprites.set(entities[i],  gmapSprites[icon])
      if !e.is_alive() {
        e.respawn()
      }
    } else {
      if e.is_alive() {
        e.destroy()
      }
    }
  }
}
fn batch_render_terrain(terrain:Array[Int], entities:Array[@entity.Entity]) -> Unit {
  @system.deferred_event_system(0.0)
  for i = 0; i < terrain.length() && i < entities.length(); i = i + 1 {
    let icon = terrain[i]
    let e = entities[i]
    
    if icon >= 0 {
      //println("at pos " + i.to_string() + " icon is " + icon.to_string())
      @sprite.sprites.set(e,  terrainSprites[icon])
      if !e.is_alive() {
        e.respawn() 
      }
    } else {
      if e.is_alive() {
        e.destroy()
      }
    }
  }
}
fn set_gmap_color(pos:Int, icon:Int) -> Unit {
    @system.deferred_event_system(0.0)
    world.gmap[pos] = icon
    let e = world.globe[pos]
    if icon >= 0 {
      //println("at pos " + i.to_string() + " icon is " + icon.to_string())
      @sprite.sprites.set(e,  gmapSprites[icon])
      if !e.is_alive() && world.inGlobe {
        e.respawn()
      }
    } else {
      if e.is_alive() {
        e.destroy()
      }
    }
    @system.deferred_event_system(0.0)
}
fn set_gmap_xycolor(x:Int, y:Int, icon:Int) ->Unit {
  set_gmap_color(x * globe_width + y, icon)
}
fn game_start1(duration:Double) -> Unit {
  world.player.life.gold = 5

  //Widget::add_on_just_pressed_to_entity(world.areaPanel, click_and_build)
  @backend.load_font("ThaleahFat", "assets/fonts/ThaleahFat.ttf")
  @camera.set_limits(top=0.0, bottom=MAP_HEIGHT, left=0.0, right=MAP_WIDTH)
  let root = RootControl::{
    w:Widget::new(),
    nationTable:NationTable::new(),
    areaLower:AreaLowerTab::new(),
    areaTop:AreaTop::new(),
    header:HeaderLine::new()
  }


  world.opRoot = Some(root)
  (root as &Control).add_children([root.nationTable, root.areaLower, root.areaTop, root.header])

  let _ = root.nationTable.getWidget().set_offset(@math.Vec2D(300, 80))
  let _ = root.areaLower.getWidget().set_offset(@math.Vec2D(300, 80))
  (root.areaTop as &Control).show()
  (root.header as &Control).show()

  (root.nationTable as &Control).hide()
  (root.areaLower as &Control).hide()

  get_nation(world.player.nationId).heros.add(world.player.id)
  world.player.followSoldierType = InfantryBarracks


  let _ = @style.add_widget(
      @style.screen_root,
      sprite=zindex => @sprite.Sprite::from_text( world.travelText, zindex),
      h_offset=0.0,
      v_offset=12.0
  )
  let _ = @style.add_widget(
      @style.screen_root,
      sprite=zindex => @sprite.Sprite::from_text( world.enemyBarText, zindex),
      h_offset=50.0,
      v_offset=12.0
  )

  world.gameEndPanel.destroy()
  
  
  get_nation(world.player.nationId).reg_role(world.player.id)
  for i=0;i<globe_width; i= i + 1 {
    for j=0;j<globe_width;j=j+1 {
      let grid = @style.add_widget(
        world.globePanel,
        sprite= zindex =>  @sprite.Sprite::from_animation(
          grasses[grand.int(limit = grasses.length())]
        , ZGROUND),
        h_offset=i.to_double()*16.0,
        v_offset=j.to_double()*16.0,
      )
      @position.positions.set(grid, @math.Vec2D(i.to_double()*16.0, j.to_double()*16.0)) 
      world.globe.push(grid)
      world.globeOccupy.push(-1)
      world.gmap.push(GMAP_GRASS)
      let area:Area = {
        terrain:[],buildings:{},buildStat:{},roleOccupy:{},humanCnt:0,enemyCnt:0,cityLevel:-1,lordId:-1,nationId:-1,
        raw_tax:0, gold:0, core:-1, nests:Set::new(),buildOccupy:{}, eco:0, popu:0,food:0,
        ecoSpeed:0,popuSpeed:0,foodSpeed:0,armyLimit:0, popuLimit:0, gx:i, gy:j, cityDefense:0,equip:0,
        buildCatePersonNum:{},freeRoleNum:0, equipSpeed:0
      }

      area.nationId = -1
      area.core = -1

      for u = 0; u < area_width; u = u + 1 {
        for v = 0; v < area_width; v = v + 1 {
          area.terrain.push(grand.int(limit = TERRAIN_MAX))
        }
      }
      world.areas.push(area)
    }
  }
  batch_render_gmap(world.gmap, world.globe)
  
  for i=0;i<area_width; i= i + 1 {
    for j=0;j<area_width;j=j+1 {
      let grid = @style.add_widget(
        world.areaPanel,
        sprite= zindex =>  @sprite.Sprite::from_animation(grasses[grand.int(limit = grasses.length())], ZGROUND),
        h_offset=i.to_double()*16.0,
        v_offset=j.to_double()*16.0
      )
      //@position.positions.set(grid, @math.Vec2D(i.to_double()*16.0, j.to_double()*16.0))
      world.areaEs.push(grid)
      world.areaOccupy.push(-1)

      //let building =  @style.add_widget(
      //  world.areaPanel,
      //  sprite= zindex =>  @sprite.Sprite::from_animation(grasses[grand.int(limit = grasses.length())], ZGROUND),
      //  h_offset=i.to_double()*16.0,
      //  v_offset=j.to_double()*16.0
      //)
      //@position.positions.set(building, @math.Vec2D(i.to_double()*16.0, j.to_double()*16.0))
      //world.areaBes.push(building)
      //building.destroy()
    }
  }
  
  for i=0;i<area_width; i= i + 1 {
    for j=0;j<area_width;j=j+1 {
      let grid = @style.add_widget(
        world.areaBuildPanel,
        sprite= zindex =>  @sprite.Sprite::from_animation(grasses[grand.int(limit = grasses.length())], ZBUILDING),
        h_offset=i.to_double()*16.0,
        v_offset=j.to_double()*16.0
      )
      //let grid = @style.screen_root.spawn_child()
      @sprite.sprites.set(
        grid, @sprite.Sprite::from_text(@sprite.Text::new("",color="white",font="16px ThaleahFat"), ZBUILDING)
      )
      //@position.positions.set(grid, @math.Vec2D(i.to_double()*16.0, j.to_double()*16.0))
      world.areaBes.push(grid)
    }
  }

  world.areaBuildPanel.respawn()
  world.areaPanel.destroy()
  world.player.ge.destroy()
  world.player.ae.destroy()
  world.set_goccupy(world.player.gx, world.player.gy, world.player.id)
  world.player.life.gain_exp(8)
  world.player.toArea()
  world.showArea(0)
  world.player.repos()
  world.player.ae.respawn()
  world.roleMap[world.player.id] = world.player
  @sprite.render_sprite_system(0.0)
  @system.deferred_event_system(0.0)

  world.player.toArea()
  world.player.repos()


  for i in 0..<50 {
    let nationId = get_rnd_avail_nation_id()
    world.init_gen_city(nationRoleCnt = 12, opNationId = nationId)
  }
  
  //for i in 0..<10 {
  //  world.gen_nest_gxy(i, i, 0)
  //}
  
  for i in 0..<5 {
    world.gen_nest()
  }
  for i in 0..<5 {
    let role = world.genEnemy(world.player.gx, world.player.gy)
    role.toArea()
  }
  ignore(duration)
}
fn get_rnd_avail_nation_id() -> Int {
  grand.int(limit = 4)
}
fn clear_footprint(self:GameWorld, role:Role) -> Unit {
  // clear the position occupy
  if self.inGlobe {
    self.clear_goccupy(role.gx, role.gy, role.id)
  } else {
    let area = world.areas[role.gx * globe_width + role.gy]
    area.clear_occupy(role.ax, role.ay, role.id)
  }

  //area and world role num cnt
  match role.cate {
    NPC => {
      if role.inGlobe {
        world.npcCnt -= 1
      } else {
        let area = world.areas[role.gx * globe_width + role.gy]
        area.humanCnt -= 1
      }
    }
    HERO => {
      if role.inGlobe {
        world.heroCnt -= 1
      } else {
        let area = world.areas[role.gx * globe_width + role.gy]
        area.humanCnt -= 1
      }
    }
    ENEMY => {
      if role.inGlobe {
        world.enemyCnt -= 1
      } else {
        let area = world.areas[role.gx * globe_width + role.gy]
        area.enemyCnt -= 1
      }
    }
    _ => ignore(true)
  }
}



fn die(self:GameWorld, role:Role) -> Unit{
  self.clear_footprint(role)
  self.roleMap.remove(role.id)
  if role.leaderId >= 0 {
    role.unbind_leader()
  }
  if role.soldiers.length() > 0 {
    role.clear_soldiers()
  }
  
  
  if role.jobBuild >= 0 {
    let area = self.areas[role.jobGx * globe_width + role.jobGy]
    if area.buildings.contains(role.jobBuild) {
      let build = area.buildings[role.jobBuild]
      area.release_role_from_build(role)
    }
  }

  get_nation(role.nationId).unreg_role(role.id)
  if role.cate == HERO && role.nationId >= 0 {
    get_nation(role.nationId).heros.remove(role.id)
  }
  role.hide()

  let oldNationId = role.nationId
  if role.id == self.player.id {
    for _, role in self.roleMap {
      if role.cate == HERO && oldNationId == role.nationId {
        log("因为操作的角色死亡, 所以控制迁移到了新英雄" + role.get_name())
        self.set_hero(role)
        break
      }
    }
  }
  epool.add(role.ge)
  epool.add(role.ae)
}
fn set_hero(self:GameWorld, role:Role) -> Unit {
        self.player = role
        @system.deferred_event_system(0.0)
        @sprite.sprites.set(self.player.ge,  heroSprite)
        @sprite.sprites.set(self.player.ae,  heroSprite)
        
        self.camera_center_at(self.player)
        @system.deferred_event_system(0.0)
        self.player.toGlobe()
}
fn camera_center_at(self:GameWorld, role:Role) -> Unit {
  if role.inGlobe {
    self.showGlobe()
    role.ge.respawn()
  } else {
    self.showAreaId = role.gx * globe_width + role.gx
    self.showArea(role.gx * globe_width + role.gx)
    role.ae.respawn()
  }
}
fn beat(self:GameWorld, role1:Role, role2:Role) -> Unit {
  
  if role2.life.hp <= 0 {
    if role1.is_player() {
      log("消灭了" + role2.id.to_string())
    }
    let mut exp_level = role2.life.level - role1.life.level
    if exp_level < 0 {
      exp_level = 0
    } else {
      exp_level += 1
    }
    self.die(role2)
    if !role2.inGlobe && !role2.inTeam {
      let mut areaId = role2.gx * globe_width + role2.gy
      if areaId < 0 { areaId = 0 }
      let area = world.areas[areaId]

      if role2.nationId == GMAP_NEST && area.nationId == GMAP_NEST {
        if area.no_monster_anymore() {
          let nation = get_nation(area.nationId)
          nation.remove_area(areaId)
          set_gmap_color(areaId, GMAP_GRASS)
        }
      }
      if area.nationId >= 0 && area.can_change_own( role1.nationId ) {
        area.change_own( role1.nationId )
      }  
    }
    

    role1.life.gain_exp(2 << exp_level)
    
    if role2.cate == ENEMY {
      role1.life.gold += role2.life.level.to_double()
    }

    if role2.cate == ENEMY {
      role1.life.score += role2.life.level
    }
      
    if role2.nationId >= 0 {
      let cate = role2.jobBuildCate
      let nation = get_nation(role2.nationId) 
      match cate {
        ArcherBarracks|InfantryBarracks|SiegeTroopsBarracks => {
          nation.soldierNum -= 1
        }
        _ => ()
      }
    }
    

  }
}
fn set_goccupy(self:GameWorld, x:Int, y:Int, id:Int) -> Unit {
  let idx= x * globe_width + y
  self.globeOccupy[idx] = id 
}
fn clear_goccupy(self:GameWorld, x:Int, y:Int, id:Int) -> Unit {
  let idx= x * globe_width + y
  if self.globeOccupy[idx] == id {
    self.globeOccupy[idx] = -1
  }
}

///|clear old lord binds, set new lord binds, gound to city / change lord
fn role_to_city_lord(
  self : GameWorld,
  areaId : Int,
  best_role_id : Int,
) -> Unit {
  let area : Area = self.areas[areaId]
  let mut ex:Int = -1
  let mut ey:Int = -1
  if area.cityLevel < 0 {
    let (_ex,_ey) = area.find_empty_pos()
    ex = _ex
    ey = _ey
    if ex < 0 || ey < 0 {
      //println("no empty pos")
      return
    }
  } 
  //println("loard start" + area.nationId.to_string())
  if best_role_id >= 0 {
    let role = self.roleMap[best_role_id]
    role.areas.add(areaId)
    //role's lordId not change

    if area.lordId >= 0 {
      let oldLordId = area.lordId
      if world.roleMap.contains(oldLordId) {
        let oldLord = world.roleMap[oldLordId]
        oldLord.areas.remove(areaId)
      } else {
        area.lordId = -1
      }
    }
    area.lordId = role.id
    if !world.roleMap.contains(role.lordId) {
      role.lordId = -1
    }
    if role.lordId >= 0 {
      let lord = world.roleMap[role.lordId]
      if !role.isLord {
        role.vassal.add(role.id)
      }
    }
    role.isLord = true
    get_nation(role.nationId).areas.add(areaId)
    area.nationId = role.nationId
    set_gmap_color(areaId, get_nation(area.nationId).iconId)
    //println("area gmap color" + area.nationId.to_string())
    if area.cityLevel < 0 || area.core < 0 {
      if area.cityLevel < 0 {
        area.cityLevel = 0     //build a citycore
      }
      let buildId = area.add_build(CityCore, ex, ey, area.nationId, level = 0)
      area.core = buildId
    }
  }
}

///|choose a new lord for this area
fn area_regen_lord(self : GameWorld, areaId : Int) -> Unit {
  let area : Area = self.areas[areaId]
  let nationId = area.nationId
  let mut best_role_id = -1
  let mut best_val : Double = -1
  if grand.double() > 0.5 {
      for _, id in area.roleOccupy {
        if self.roleMap.contains(id) {
          let role = self.roleMap[id]
          if role.nationId != nationId {
            continue
          }
          if role.life.gold > best_val {
            best_role_id = role.id
            best_val = role.life.gold
          }
        }
      }
  } else {
      for _, id in area.roleOccupy {
        if self.roleMap.contains(id) {
          let role = self.roleMap[id]
          if role.nationId != nationId {
            continue
          }
          if role.life.score.to_double() > best_val {
            best_role_id = role.id
            best_val = role.life.score.to_double()
          }
        }
      }
  }
  world.role_to_city_lord(areaId, best_role_id)
}
///|from ground to city
fn area_to_city(self : GameWorld, areaId : Int, opNationId?:Int = -1) -> Unit {
  let area : Area = self.areas[areaId]
  
  if area.cityLevel >= 0 {
    return
  }
  let mut best_role_id = -1
  let mut best_val : Double = -1
  if area.humanCnt > TO_CITY_POPULATION || opNationId >= 0 {
    if grand.double() > 0.5 {
      for _, id in area.roleOccupy {
        if self.roleMap.contains(id) {
          let role = self.roleMap[id]
          if opNationId >= 0 && role.nationId != opNationId {
            continue
          }
          if role.life.gold > best_val {
            best_role_id = role.id
            best_val = role.life.gold
          }
        }
      }
    } else {
      for _, id in area.roleOccupy {
        if self.roleMap.contains(id) {
          let role = self.roleMap[id]
          if opNationId >= 0 && role.nationId != opNationId {
            continue
          }
          if role.life.score.to_double() > best_val {
            best_role_id = role.id
            best_val = role.life.score.to_double()
          }
        }
      }
    }
    world.role_to_city_lord(areaId, best_role_id)
    //println("area to city loar" + areaId.to_string())
  }
}
fn hideBuildLines(self:GameWorld) -> Unit {
  if world.opRoot is Some(root) {
    let buildLines = root.areaLower.buildLines
    for _, lines in buildLines {
      (lines as &Control).hide()
    }
  }
}
fn renderBuildLines(self:GameWorld) -> Unit {
  if world.opRoot is Some(root) {
    if !world.inGlobe && self.showAreaId >= 0 {
      let area = self.areas[self.showAreaId]
      let buildLines = root.areaLower.buildLines
      for _, lines in buildLines {
        (lines as &Control).hide()
      }
      let mut lineIdx = 0
      for cate in lordChosenBuildings {
        if !buildLines.contains(cate) {
          let lines = BuildLine::new(cate)
          buildLines.set(cate, lines)
          (root.areaLower as &Control).add_child(lines)
          let _ = lines.getWidget().set_offset(@math.Vec2D(0, 60 + lineIdx.to_double() * 12))
        } else {
          let lines = buildLines[cate]
          let _ = lines.getWidget().set_offset(@math.Vec2D(0, 60 + lineIdx.to_double() * 12))
        }
        lineIdx = lineIdx + 1
        let lines = buildLines[cate]
        
      
          if !area.buildStat.contains(cate) {
            lines.set_alloc(0, 0)
            lines.set_num(0)
            (lines as &Control).show()
            
          } else {
            let buildNum = area.buildStat[cate]
            let personLimit = buildDescs[cate].maxPerson * buildNum
            let mut existNum = 0
            if area.buildCatePersonNum.contains(cate) {
              existNum = area.buildCatePersonNum[cate]
            }
            lines.set_alloc(existNum, personLimit)
            lines.set_num(buildNum)
            (lines as &Control).show()
          }
      }
      
      //for cate, _ in area.buildStat {
      //  if !buildLines.contains(cate) {
      //    let lines = BuildLine::new(cate)
      //    buildLines.set(cate, lines)
      //    self.areaLower[0].tabs.add_child(lines.line)
      //  }
      //}
      //let mut lineIdx = 0
      //for cate, buildNum in area.buildStat {
      // let personLimit = buildDescs[cate].maxPerson * buildNum
      // let mut existNum = 0
      // if area.buildCatePersonNum.contains(cate) {
      //   existNum = area.buildCatePersonNum[cate]
      // }
        //if buildLines.contains(cate) {
        //  let lines = buildLines[cate]
      //   let _ = lines.line.set_offset(@math.Vec2D(0, 60 + lineIdx.to_double() * 12))
        //  lines.set_alloc(existNum, personLimit)
    //     lines.set_num(buildNum)
    //     lines.line.show()
      //    lineIdx += 1
      //  }
      //}

    // for cate, lines in buildLines {
    //   if !area.buildStat.contains(cate) {
    //     let _ = lines.line.set_offset(@math.Vec2D(0, 60 + lineIdx.to_double() * 12))
      //    lines.set_alloc(0, 0)
      //    lines.set_num(0)
      //    lines.line.show()
      //    lineIdx += 1
      //  }
      //}

    }
  }
}
let nearPoses = [[-1, 0], [1, 0], [0, 1], [0, -1]]
const DAY = 24
const HUMAN_POPULATION = 600
const ENEMY_LIMIT = 100
const WORLD_POPULATION = 400 // HUMAN_POPULATION + ENEMY_LIMIT
fn step(self:GameWorld) -> Unit {
  if world.opRoot is Some(root) {
  let _ = root.areaTop.time.set_text("当前时刻:" + (self.steps / 24).to_string() + "天" + (self.steps % 24).to_string() + "时")
  
  let _ = root.areaTop.roleDesc.set_text("")
  let _ = root.areaTop.roleDescExtra.set_text("")
  let _ = root.areaTop.buildDesc.set_text("")
  
  
  self.accTime = 0
  
  let mut allstr = ""
  {


      let actions = strategy(world.gen_observe_rawtext(), true)
      if actions.length() > 0 {
        world.aiWarn = {notNegEcoBuild:false}
      }
      for i = 0; i <= actions.length() - 3; i = i + 3 {
        let id0 = actions[i]
        let act0 = actions[i + 1]
        let arg0 = actions[i + 2]
        allstr += perform_actv2(id0, act0, arg0)
      }
      //old action version
      //let mid = actions.length() / 2
      //for i = 0; i < mid; i = i + 1 {
      //  perform_act(actions[i], actions[mid+i])
      //}
  }
  {
      let actions = strategy(world.gen_observe_json(), false)
      for i = 0; i <= actions.length() - 3; i = i + 3 {
        let id0 = actions[i]
        let act0 = actions[i + 1]
        let arg0 = actions[i + 2]
        allstr += perform_actv2(id0, act0, arg0)
      }
  }
  //only when ai received the flag can it be cleared
  
  
  aiBoardLog(allstr)

  let iterRoles = []
  for _, role in world.roleMap {
    iterRoles.push(role)
  }

  let hp_grow = world.steps % 60 == 0
  let dayStart = self.steps % DAY == 0
  for role in iterRoles {
    if role.id != self.player.id {
      if !role.inTeam {
        role.action()
      }
    }
    if hp_grow {
      role.hp_restore()
    }
    if dayStart {
      if role.isLord && role.areas.length() > 0 {
        for areaId in role.areas {
          let area = self.areas[areaId]
          if area.nationId != self.player.nationId {
            let (x,y) = area.find_empty_pos()
            let cate = lordChosenBuildings[grand.int(limit = lordChosenBuildings.length())]
            if area.can_build(cate, x, y, area.nationId) {
              let cost = buildDescs[cate].ecoCost
              if area.eco >= cost {
                area.eco -= cost
                let _ = area.add_build(cate, x, y, area.nationId)   
              }
            }
          }
        }
      }
    }
  }

  
  //gen enmey or npc near player
  if !world.player.inGlobe {
      let area = world.areas[world.showAreaId]
      if world.steps % 10 == 0 && area.roleOccupy.length() == 1 {
        let role = world.genEnemy(world.player.gx, world.player.gy)
        role.toArea()
      }
      if world.steps % DAY * 2 == 0 && area.enemyCnt < 5 && world.enemyCnt < ENEMY_LIMIT {
        let role = world.genEnemy(world.player.gx, world.player.gy)
        role.toArea()
      }
      if (root.areaLower as &Control).visible_in_tree() {
        root.areaLower.render()
      }

  }
  for nation in nations {
    nation.cacheEco = 0
  }
  if world.steps % DAY == 0 {
    for areaId = 0; areaId < self.areas.length();areaId = areaId + 1 {
      let area = self.areas[areaId]
      let gx = area.gx
      let gy = area.gy
      
      if area.cityLevel < 0 && area.humanCnt > TO_CITY_POPULATION {
        world.area_to_city(areaId)
      }
      let role_born_day = world.steps % DAY * 5 == 0
      
      //let mut cachePopuSpeed:Double = 0
      
      let mut cacheArmyLimit:Int = 0
      let mut cachePopuLimit:Int = 0

      let mut cachePopuNum:Int = 0
      let mut cacheArmyNum:Int = 0

      let freeEquiped:Array[Role] = []
      let enemies:Array[Role] = []
      let mut heroCnt = 0
      let mut freeRoleNum = 0
      for _, roleId in area.roleOccupy{
        if world.roleMap.contains(roleId) {
          let role = world.roleMap[roleId]
          if role.nationId == area.nationId {
            if role.cate == HERO {
              heroCnt += 1
            } else {
              if role.jobBuildCate < 0 && role.cate != ENEMY {
                freeRoleNum += 1
              }
            }
            if !role.inGlobe && !role.inTeam && role.gx == area.gx && role.gy == area.gy {
              cachePopuNum += 1
            }
            
            //if role.job == JobSoldier {
            //  cacheArmyNum += 1
            //}
            if role.jobBuildCate >= 0 {
              match role.jobBuildCate {
                ArcherBarracks | InfantryBarracks | SiegeTroopsBarracks => {
                  cacheArmyNum += 1
                  ()
                }
                _ => ()
              }
            }

            let equiped = role.is_equiped()
            if equiped {
              if (role.atkBuild < 0 && role.atkTarget < 0) || grand.double() < 0.05 {
                freeEquiped.push(role)
              }
            }
          }
          if nation_negative(area.nationId, role.nationId) {
            enemies.push(role)
          }
        }
        if enemies.length() > 0 {
          for i in 0..<freeEquiped.length() {
            let role = freeEquiped[i]
            let enemy = enemies[i % enemies.length()]
            role.atkTarget = enemy.id
          }
        }
      }
      area.popu = cachePopuNum
      
      if world.roleMap.length() - world.enemyCnt < HUMAN_POPULATION && area.nationId >= 0 {
        if world.steps % DAY * 15 == 0 && heroCnt < 5 {
          if area.eco >= 10 {
            area.eco -= 10
            let hero = world.genNPC(gx, gy, nationId = area.nationId, isHero = true)
          }
        }
      }

      
      
      let mut opHouse:Option[Building] = None
      //iter buildings
      for _, build in area.buildings {
        let mut gold:Double =  gold_per_day(build.cate, build.level).to_double()
        let t = gold / 5
        gold -= t
        area.raw_tax += t
        if world.roleMap.contains(build.owner) {
          let role = world.roleMap[build.owner]
          role.life.gold += gold
        }
        if area.enemyCnt < 5 && world.enemyCnt < ENEMY_LIMIT{
          match build.cate {
            Nest => {
              let mut gened = false
              for dir in 0..<4 {
                if gened { break }
                if world.enemyCnt < ENEMY_LIMIT {
                  gened = self.genEnemyForNest(gx, gy, build, dir)
                }
              }
              ()
            }
            _ => ()
          }
        }
        if area.nationId == build.nationId {
          match build.cate {
            CityCore|House|Apartment => {
              opHouse = Some(build)
            }
            _ => ()
          }
        }
        
        if build.nationId == area.nationId {
          let desc = buildDescs[build.cate]
          cacheArmyLimit += desc.armyLimit
          cachePopuLimit += desc.popuLimit
        }
      }
      if role_born_day && area.popu < area.popuLimit && role_born_day && opHouse is Some(build) {
        let mut gened = false
        for off in nearPoses {
          if gened { break }
          if world.roleMap.length() - world.enemyCnt < HUMAN_POPULATION { 
            gened = self.genNPCForHouse(gx + off[0], gy + off[1], build)
          }
        }
      }

      let mut cacheEcoSpeed:Double = 0
      let mut cacheFoodSpeed:Double = 0
      let mut cacheEquipSpeed = 0.0

      //area.armyLimit = cacheArmyLimit
      //area.popuLimit = cachePopuLimit
      
      //area.eco += area.ecoSpeed
      for buildCate, num in area.buildCatePersonNum {
        let buildDesc = buildDescs[buildCate]
        //if buildDesc.ecoPerson > 0 {
          cacheEcoSpeed   += buildDesc.ecoPerson * num.to_double()
          cacheFoodSpeed  += buildDesc.foodPerson * num.to_double()
          cacheEquipSpeed += buildDesc.equipPerson * num.to_double()
        //}
      }

      area.ecoSpeed = cacheEcoSpeed
      //area.popuSpeed = cachePopuSpeed
      area.foodSpeed = cacheFoodSpeed
      area.freeRoleNum = freeRoleNum
      area.eco += cacheEcoSpeed
      area.food += cacheFoodSpeed
      area.equip += cacheEquipSpeed
      if area.nationId >= 0 {
        get_nation(area.nationId).cacheEco += area.eco
      }
      //area.popu += area.popuSpeed
      //area.food += area.foodSpeed

      //if !world.inGlobe && world.showAreaId == areaId {
        //self.popuLabel.content = "人口(" + cachePopuNum.to_string() +  "/" + area.popuLimit.to_int().to_string() + ")"
        //self.armyLabel.content = "部队(" + cacheArmyNum.to_string() + "/" + cacheArmyLimit.to_int().to_string() + ")"
        //self.ecoLabel.content = "经济:" + area.eco.to_string() + "(+"  + area.ecoSpeed.to_string() + ")"
        //self.foodLabel.content = "食物:"+area.food.to_string() +"(+" +  area.foodSpeed.to_string() + ")"
        //let _ = self.areaLower[0].popu.set_text("人口(" + cachePopuNum.to_string() +  "/" + area.popuLimit.to_string() + ")")
        //let _ = self.areaLower[0].army.set_text("部队(" + cacheArmyNum.to_string() + "/" + cacheArmyLimit.to_string() + ")")
        //let _ = self.areaLower[0].eco.set_text("经济:" + area.eco.to_string() + "(+"  + area.ecoSpeed.to_string() + ")")
        //let _ = self.areaLower[0].food.set_text("食物:"+area.food.to_string() +"(+" +  area.foodSpeed.to_string() + ")")
      //  area.recalc_build_stat()
      //  area.show_area_building_texts()
      //
      //}

      //about tax
      let part = area.raw_tax / 3
      let mut remain = part
      area.gold += part
      area.raw_tax = 0
      if (area.nationId < 0) {
        area.gold += part
      } else {
        get_nation(area.nationId).gold += part
        if area.lordId <= 0 {
          get_nation(area.nationId).gold += part
        } else {
          let mut maxCnt = 20
          let mut roleId = area.lordId
          while maxCnt > 0 && roleId >= 0 && world.roleMap.contains(roleId) {
            let role = self.roleMap[roleId]
            role.life.gold += remain / 2
            remain = remain / 2
            roleId = role.lordId
            maxCnt = maxCnt - 1
          }
        }
        get_nation(area.nationId).gold += remain
      }
      if area.nationId >= 0 {
        area.gold += 1
        get_nation(area.nationId).gold += 1
      }
      let roleOccupy = area.roleOccupy.copy()
      let mut s = ""
      for _, roleId in roleOccupy {
        if self.roleMap.contains(roleId) {
          let role = self.roleMap[roleId]
          if role.nationId == area.nationId && role.life.hp > 0 && !role.inTeam && role.jobBuildCate >= 0 {
            let desc = buildDescs[role.jobBuildCate]
            if area.food <= 0 && desc.foodPerson <= 0 {
              area.release_role_from_build(role)
              if areaId == self.showAreaId && !self.inGlobe {
                s += " " + role.get_name()
              }
            } else {
              if (area.food > 0) {
                area.food -= 1
              }
            }
          }
        }
      }
      if s.length() > 0 {
        log(s + "因为食物供应不足而辞职了")
      }
      //if area.food > 0 {
      //  println(areaId.to_string() + "has fodd")
      //}
      area.recalc_build_stat(showing = false)
      //println("check fro areaId:" + areaId.to_string() + "x:" + area.gx.to_string() + "" + area.gy.to_string())
      for k in 0..<10 {
          if !area.auto_alloc_role() {
            //println("alloc at " + self.steps.to_string())
            break
          }
      }
      
      
    }
    for nation in nations {
      nation.eco = nation.cacheEco
    }
    
    if world.steps % DAY * 15 == 0 {
      world.gen_all_babarians()
    }
    //a strategy per day
    for nationId in 0..<4 {
      if grand.double() < 0.1 {
        if world.war.contains(nationId) {
          let warset = world.war[nationId]
          if warset.length() > 0 {
            let targetId = warset.to_array()[grand.int(limit = warset.length())]
            army_attack(nationId, targetId)
          }
        }
      }
      
      if grand.double() < 0.001 {
        let targetId = grand.int(limit = 4)
        if (targetId != nationId) {
          if world.war.contains(nationId) {
            let warset = world.war[nationId]
            if !warset.contains(targetId) && targetId != nationId {
              to_war(nationId, targetId)
            }
          } else {
            to_war(nationId, targetId)
          }
        }
      }
      if grand.double() < 0.002 {
        // in peace
        if world.war.contains(nationId) {
          let warset = world.war[nationId]
          if warset.length() > 0 {
            let targetId = warset.to_array()[grand.int(limit = warset.length())]
            to_peace(nationId, targetId)
          }
        }
      }
    }
    if world.steps % (20 * DAY) == 0 && world.nestCnt < 50{
      //world.gen_nest(opLevel = world.player.life.level + 1)
      //world.gen_nest(opLevel = grand.int(limit = 10))
      world.gen_nest(opLevel = rnd_nest_level())
    }
    if self.inGlobe {
      root.nationTable.render()
    }
  }
  
  if !world.inGlobe && world.showAreaId >= 0 {
    let area = world.areas[world.showAreaId]
    
    area.recalc_build_stat()
    area.show_area_building_texts()
  }
  let mut status_str = "玩家角色"
  status_str += " ♥:" + world.player.life.hp.to_string()
  status_str += " 🗡:" + world.player.get_atk().to_string()
  status_str += " 💰:" + world.player.life.gold.to_string()
  status_str += " 功绩:" + world.player.life.score.to_string()
  status_str += " 等级:" + world.player.life.level.to_string()
  if world.opRoot is Some(root) {
    let _ = root.header.status.set_text(status_str)
  }
  //world.hpText.content = "血量:" + world.player.life.hp.to_string()
  //world.levelText.content = "等级:" + world.player.life.level.to_string()
  //let mut extraStr = "攻击:" + world.player.get_atk().to_string()
  //extraStr += " 金币:" + world.player.life.gold.to_string()
  //extraStr += " 功绩:" + world.player.life.score.to_string()
  //world.atkText.content = extraStr


  world.steps += 1
  }
}
fn clamp(x:Int, low:Int, high:Int) -> Int {
  let mut r = x
  if x < low {
    r = low
  }
  if x > high {
    r = high
  }
  return r
}

fn act_arg_to_areaId(arg:Int) -> Int {
  let mut areaId = arg 
  if areaId < 0 { areaId = 0}
  if areaId >= world.areas.length() {areaId = world.areas.length() - 1}
  areaId
}
fn act_arg_to_nationId(arg:Int) -> Int {
  let mut nationId = arg
  if nationId < 0 { nationId = 0}
  if nationId >= nations.length() { nationId = nations.length() - 1 }
  nationId
}
fn perform_actv2(id:Int, act:Int, arg0:Int) -> String {
  let mut allstr = ""
  match act {
    0 => {
      let mut opLevel = arg0
      if opLevel < 0 { opLevel = 0}
      if opLevel > 9 { opLevel = 9}
      let areaId:Int = act_arg_to_areaId(id)
      let gx = areaId / globe_width
      let gy = areaId - globe_width * gx

      let _ = world.gen_nest_gxy(opLevel, gx, gy)
      allstr += "在世界" + gx.to_string() + "," + gy.to_string() + "处生成级别为" + opLevel.to_string() + "的魔物巢穴" +"\r\n"
    }
    1 => {
      let nationId1 = act_arg_to_nationId(id)
      let areaId = act_arg_to_areaId(arg0)
      let area = world.areas[areaId]
      let nationId2 = area.nationId
      if (nationId1 >= 0 && nationId2 >= 0 && nationId1 != nationId2) {
        if !nation_negative(nationId1, nationId2) {
          log("国家[" + nationId1.to_string() + "]向国家[" + nationId2.to_string() + "]宣战了")
          to_war(nationId1, nationId2) 
        } else {
          log("国家[" + nationId1.to_string() + "]向国家[" + nationId2.to_string() + "]发起了军事行动")
        }
      }
      let gx = areaId / globe_width
      let gy = areaId - gx * globe_width
      let soldierCnt = army_attack_area(nationId1, areaId)
      if (nationId1 >= 0 && area.nationId != nationId1) {
        if soldierCnt > 0 {
          allstr += ("国家[" + nationId1.to_string() + "]向世界" + gx.to_string() + "," + gy.to_string() + "处发起军事行动, 动员人数" + soldierCnt.to_string() + "\r\n")
        }
      }
      
    }
    3 => {
      let nationId1 = act_arg_to_nationId(id)
      let areaId = act_arg_to_areaId(arg0)
      let area = world.areas[areaId]
      let nationId2 = area.nationId
      //if (nationId1 >= 0 && nationId2 >= 0 && nationId1 != nationId2) {
      //  if !nation_negative(nationId1, nationId2) {
      //    log("国家[" + nationId1.to_string() + "]向国家[" + nationId2.to_string() + "]宣战了")
      //    to_war(nationId1, nationId2) 
      //  } else {
      //    log("国家[" + nationId1.to_string() + "]向国家[" + nationId2.to_string() + "]发起了军事行动")
      //  }
      //}
      let gx = areaId / globe_width
      let gy = areaId - gx * globe_width
      let soldierCnt = army_attack_area(nationId1, areaId)
      if (nationId1 >= 0 && area.nationId != nationId1) {
        if soldierCnt > 0 {
          allstr += ("国家[" + nationId1.to_string() + "]向世界" + gx.to_string() + "," + gy.to_string() + "处发起军事行动, 动员人数" +  soldierCnt.to_string() + "\r\n")
        }
      }
      
    }
    2 => {
      let nationId1 = act_arg_to_nationId(id)
      let nationId2 = act_arg_to_nationId(arg0)
      if nationId1 == GMAP_NEST || nationId2 == GMAP_NEST {
        return ""
      }
      if nationId1 == GMAP_GRASS || nationId2 == GMAP_GRASS {
        return ""
      }
      if grand.double() < 0.5 {
        log("国家" + nationId1.to_string() + "与国家" + nationId2.to_string() + "议和,两国重归于好")
        allstr += ("国家" + nationId1.to_string() + "与国家" + nationId2.to_string() + "议和,两国重归于好" + "\r\n")
        to_peace(nationId1, nationId2)
      } else {
        log("国家" + nationId1.to_string() + "与国家" + nationId2.to_string() + "议和失败了")
      }
    }
    4 => {
      let nationId1 = act_arg_to_nationId(id)
      let nationId2 = act_arg_to_nationId(arg0)
      //if nationId1 == GMAP_NEST || nationId2 == GMAP_NEST {
      //  return ""
      //}
      if nation_negative(nationId1, nationId2) {
        return ""
      }
      if nationId1 == GMAP_GRASS || nationId2 == GMAP_GRASS {
        return ""
      }
      if !nation_negative(nationId1, nationId2) {
        log("国家[" + nationId1.to_string() + "]向国家[" + nationId2.to_string() + "]宣战了")
        to_war(nationId1, nationId2) 
      }
    }
    10..<20 => {
      let cate = act - 10
      let areaId = act_arg_to_areaId(id)
      let area = world.areas[areaId]
      let (_ex, _ey) = area.find_empty_pos()
      if _ex < 0 || _ey < 0 {
        return allstr
      }
      let mut lineStr = "" 
      if cate >= 0 && cate < buildDescs.length() {
        let desc = buildDescs[cate]
        let gx = areaId / globe_width
        let gy = areaId - globe_width * gx
        lineStr += ("在世界" + gx.to_string() + "," + gy.to_string() + "区域内" + _ex.to_string() + "," + _ey.to_string() + "试图建造" + desc.name)
      }
      let buildId = area.lord_add_build_at(cate, _ex, _ey, consoleBack = true, allowingDebt = true)
      if area.buildings.get(buildId) is Some(build) {  
        lineStr += "成功了, 位于(" + build.x.to_string() + "," + build.y.to_string() + ")"
      } else {
        lineStr += "失败了"
      }
      allstr += lineStr + "\r\n"
      ()
    }
    _ => { () }
  }
  allstr
}

fn perform_act(id:Int, act:Int) -> Unit{
  match act {
    0|1|2|3|4|5|6|7|8|9 => {
        let _ = world.gen_nest(opLevel = act)
    }
    11 | 12 | 13 | 14 => {
      let roleId = id 
      if roleId >= 0 && world.roleMap.contains(roleId){ 
        let role = world.roleMap[roleId]
        if role.areas.length() > 0 {

          let areaIds:Array[Int] = role.areas.to_array()
          
          let area = world.areas[areaIds[grand.int(limit = areaIds.length())]]
          
          let (_ex, _ey) = area.find_empty_pos()
          if _ex < 0 || _ey < 0 {
            return
          }
          get_nation(id).gold -= cost_per(act - 10).to_double()
          if get_nation(id).gold < 0 {
            get_nation(id).gold = 0
          }
          let _ = area.add_build(act - 10, _ex, _ey, area.nationId)
        }
       }
      ()
    }
    17 => {
      if id < 0 || id >= 4 {
        return
      }
      world.init_gen_city(opNationId = id, nationRoleCnt = 1)
      ()
    }
    20 | 21| 22| 23 => {
      if id < 0 || id >= 4 {
        return
      }
      to_war(id, act - 20)
      log("国家[" + id.to_string() + "]向国家[" + (act - 24).to_string() + "]宣战了")
      army_attack(id, act - 20)
    }
    24|25|26|27 => {
      if id < 0 || id >= 4 {
        return
      }
      if grand.double() < 0.5 {
        log("国家" + id.to_string() + "与国家" + (act - 24).to_string() + "议和,两国重归于好")
        to_peace(id, act - 24)
      } else {
        log("国家" + id.to_string() + "与国家" + (act - 24).to_string() + "议和失败了")
      }
    }
    _ => {()}
  }
}



fn army_attack(src:Int, target:Int) -> Unit {
  if src < 0 || src >= nations.length() {
    return
  }
  if target < 0 || target >= nations.length() {
    return
  }
  let nation0 = get_nation(src)
  let nation1 = get_nation(target)
  if nation0.areas.length() > 0 && nation1.areas.length() > 0{
    let area = world.areas[nation0.areas.to_array()[grand.int(limit = nation0.areas.length())]]
    let tareaId = nation1.areas.to_array()[grand.int(limit = nation1.areas.length())]
    //let tarea = world.areas[tareaId]
    for _, id in area.roleOccupy {
      if world.roleMap.contains(id) {
        let role = world.roleMap[id]
        if role.nationId == src {
          if role.is_equiped() && grand.double() < 0.5 {
            role.atkArea = tareaId
          }
        }
      }
    }
    let tarea = world.areas[tareaId]
    for _, id in tarea.roleOccupy {
      if world.roleMap.contains(id) {
        let role = world.roleMap[id]
        if role.nationId == tarea.nationId {
          if !role.is_equiped() && grand.double() < 0.5 {
            role.equiped = true
          }
        }
      }

    }
    if (src >= 0 && target >= 0) {
      log("国家" + src.to_string() + "发起了对国家" + target.to_string() + "的袭击")
    }
  }
}


fn army_attack_area(src:Int, targetAreaId:Int) -> Int {
  let mut allSoldierCnt = 0
  let nation0 = get_nation(src)
  let tareaId = targetAreaId
  let tarea = world.areas[tareaId]
  //if tarea.nationId == src {
  //  return
  //}
  ///let nation1 = get_nation(tarea.nationId)
  if nation0.areas.length() > 0 {
    let area = world.areas[nation0.areas.to_array()[grand.int(limit = nation0.areas.length())]]
    //let tarea = world.areas[tareaId]
    for _, id in area.roleOccupy {
      if world.roleMap.contains(id) {
        let role = world.roleMap[id]
        if role.nationId == src {
          if role.is_equiped() && grand.double() < 0.5 {
            role.atkArea = tareaId
            allSoldierCnt += 1
          }
        }
      }
    }
    let mut s = "国家" + src.to_string() + "发起了对区域" + tareaId.to_string() + "的军事行动"
    if tarea.nationId >= 0 {
      s += ",此区域归属" + tarea.nationId.to_string()
    }
    log(s)
  }

  for _, id in tarea.roleOccupy {
      if world.roleMap.contains(id) {
        let role = world.roleMap[id]
        if role.nationId == tarea.nationId {
          if !role.is_equiped() && grand.double() < 0.5 {
            role.equiped = true
          }
        }
      }
    }
  allSoldierCnt
}

fn gen_observe_json(self:GameWorld) -> String {
  return "[]"
}
fn gen_observe_rawtext(self:GameWorld) -> String {
  let mut s = ""
  for id in 0..<4 {
    let nation = get_nation(id)
    s += "国家[" + id.to_string() + "]"+ ""
    if self.war.contains(id) {
      let warset = self.war[id]
      if warset.length() > 0 {
        s += "交战方:["
        for tid in warset {
          s += " " + tid.to_string()
        }
        s += "]"
      }
    }
  }
  for areaId in 0..<self.areas.length() {
    let area = self.areas[areaId]
    let mut substr = ""
    if area.nationId >= 0 {
      substr += " 属于国家" + area.nationId.to_string() + ","
    }
    if area.enemyCnt > 0 {
      substr += "魔物数量:" + area.enemyCnt.to_string() + ","
    }
    if area.roleOccupy.length() > 0 {
      substr += "总人数:" + area.roleOccupy.length().to_string() + ","
    }
    if area.eco > 0 {
      substr += "经济值:" + area.eco.to_string() + ","
    }
    
    for cate, num in area.buildStat {
      substr += ",有" + buildDescs[cate].name + num.to_string() + "座"
    }
    let soldierMap:Map[Int, Int] = Map::new()
    for _, roleId in area.roleOccupy {
      if self.roleMap.contains(roleId) {
        let role = self.roleMap[roleId]
        if role.life.hp <= 0 || role.inTeam { continue }
        if !role.is_equiped() { continue }
        if soldierMap.contains(role.nationId) {
          soldierMap[role.nationId] += 1
        } else {
          soldierMap.set(role.nationId, 1)
        }
      }
    }

    for nationId, num in soldierMap {
      substr += ",势力" + nationId.to_string() + "武装人数" + num.to_string()
    }
    
    if substr.length() > 0 {
      s += "区域[id:" + areaId.to_string() + "," + substr + "]"
    }
    //for _, roleId in area.roleOccupy {
    //  if self.roleMap.contains(roleId) {
    //    let role = self.roleMap[roleId]
    //    s += "人物[" + roleId.to_string() + "]血量:" + role.life.hp.to_string() + ","   
    //  }
    //}
  }
  if self.aiWarn.notNegEcoBuild {
    s += "注意,  不要透支经济进行建造, 一定要注意地区的经济值是否足够对应建筑所需。"
  }
  return s
}
fn wanna_build_at(ax:Int, ay:Int) -> Unit {
  if world.showAreaId >= 0 && world.wannaBuildCate >= 0  {
          let area = world.areas[world.showAreaId]
          if area.nationId == world.player.nationId {
            let _ = area.lord_add_build_at(world.wannaBuildCate, ax, ay, logback = true)
          } else {
            log("无法在不属于自己的城市建造")
          }
  }
}
fn game_update_system1(duration:Double) -> Unit {
  if world.opRoot is Some(root) {
        let mut mgx = ((@inputs.mouse.pos.0 / ZOOM) / 16.0).to_int()
    let mut mgy = ((@inputs.mouse.pos.1 / ZOOM - world.offy) / 16.0).to_int()
    
    let mut max = ((@inputs.mouse.pos.0 / ZOOM) / 16.0).to_int()
    let mut may = ((@inputs.mouse.pos.1 / ZOOM - world.offy) / 16.0).to_int()
    
    mgx = clamp(mgx, 0, globe_width - 1)
    mgy = clamp(mgy, 0, globe_width - 1)
    
    max = clamp(max, 0, globe_width - 1)
    may = clamp(may, 0, globe_width - 1)
    

    let mut s =  "mouse pos " + @inputs.mouse.pos.0.to_string() + "," + @inputs.mouse.pos.0 .to_string()
    let mouse_debug = false
    if world.inGlobe {
      s += "gmap grid " + mgx.to_string() + "," + mgy.to_string() + "\r\n"
      let existRoleId = world.globeOccupy[mgx * globe_width + mgy]
      if world.opRoot is Some(root) {
        if world.roleMap.get(existRoleId) is Some(target) {
          root.areaTop.renderHoverRole(target)
        }
      }
      if world.wannaBuildCate >= 0 {
        world.wannaBuildCate = -1
      }
    } else {
      s += " lmap grid " + max.to_string() + "," + may.to_string() + "\r\n"
      let gpos = world.showAreaId
      let area = world.areas[gpos]
      let apos = max * area_width + may
      let existRoleId = area.get_occupy(max, may)
      if world.opRoot is Some(root) {
        if world.roleMap.get(existRoleId) is Some(target) {
          root.areaTop.renderHoverRole(target)
        }
      }
      if area.buildOccupy.get(apos) is Some(buildId) {
        if area.buildings.get(buildId) is Some(build) { 
          let _ = root.areaTop.buildDesc.set_text(build.to_desc(), font = "8px ThaleahFat")
        }
      }
      
      let icon = area.terrain[apos]
      s += "icon:" + terrain_to_str(icon) + "\r\n"

      if @inputs.just_release_mouse.left_button && world.wannaBuildCate >= 0{
        let mut rmax = ((@inputs.mouse.pos.0 / ZOOM) / 16.0).to_int()
        let mut rmay = ((@inputs.mouse.pos.1 / ZOOM - world.offy) / 16.0).to_int()
        let raw_rmax = rmax
        let raw_rmay = rmay
        rmax = clamp(rmax, 0, globe_width - 1)
        rmay = clamp(rmay, 0, globe_width - 1)

        if raw_rmax != rmax  || raw_rmay != rmay {
          world.wannaBuildCate = -1
        }
        if world.showAreaId >= 0 && world.wannaBuildCate >= 0  {
          s += " wannabuildcate:" + world.wannaBuildCate.to_string()
        }
        wanna_build_at(raw_rmax, raw_rmay)
        
      }
    }
    if mouse_debug {
      show_to_board(s + "\r\n\r\n" + world.player.to_string())
    }
    @system.deferred_event_system(0.0)
    if world.player.life.hp <= 0 {
      if !world.gameEndPanel.is_alive() {
        world.gameEndPanel.respawn()
      }
      for _, role in world.roleMap {
        role.ge.destroy()
        role.ae.destroy()
      }
      @system.deferred_event_system(0.0)
      return
    }
    
   


    ///let _ = show_to_board("position:" + @inputs.mouse.pos.0.to_string() + "," + @inputs.mouse.pos.1.to_string() + ")")
    
    if world.roleBugInt > 0 {
      world.roleBugInt -= 1
      world.player.ae.destroy()
      world.player.ge.destroy()
      world.areaPanel.destroy()
      world.globePanel.destroy()
      @system.deferred_event_system(0.0)
      
      world.player.repos()
      if world.player.inGlobe {
        world.player.ge.respawn()
        world.globePanel.respawn()
      
      } else {
        world.player.ae.respawn()
        world.areaPanel.respawn()
        
      }

      @system.deferred_event_system(0.0)

      
    }
    world.accTime += duration
    
    if world.totalcnt > 0 {
      world.totalcnt = world.totalcnt - 1
      //println(world.totalcnt)
    }
    
    if world.lastKeyTime >= 0.1 {
      world.lastKeyTime = -1 // wait for key to set 0.0, not grow
    }
    if world.lastKeyTime >= 0.0 {
      world.lastKeyTime += duration // acc until 60.0 and set to -1
      ///println("time" + world.lastKeyTime.to_string())
    }
    let inputK = btn_input()
    let inputX = btn_input_x()
    let inputY = btn_input_y()
    let inputIdx = btn_input_idx()
    match inputK {
      "W" => {world.player.move(@math.Vec2D(0, -1))}
      "A" => {world.player.move(@math.Vec2D(-1, 0))}
      "S" => {world.player.move(@math.Vec2D(0, 1))}
      "D" => {world.player.move(@math.Vec2D(1, 0))}
      "Q" => {
        if world.player.inGlobe {
          world.player.toArea()
        } else {
          world.player.toGlobe()
        }
      }
      "H" => heroAddClick()
      "B" => {
        let mut idx = 0
        for i, line in root.areaLower.buildLines {
          if inputIdx == idx {
            world.wannaBuildCate = line.cate
            wanna_build_at(inputX, inputY)
          }
          idx = idx + 1
        }
      }
      "+" => {
        if !world.inGlobe {
          if root.areaLower.showHero {
            let mut idx = 0
            for i, line in root.areaLower.heroPage.lines {
              ui_hero_add_soldier(line.heroId)
              idx = idx + 1
            }
          } else {
            let mut idx = 0
            for i, line in root.areaLower.buildLines {
              if inputIdx == idx {
                ui_build_alloc_add(line.cate)
                break
              }
              idx = idx + 1
            }
          }
        }
      }
      "-" => {
        if !world.inGlobe {
          if root.areaLower.showHero {
            let mut idx = 0
            for i, line in root.areaLower.heroPage.lines {
              ui_hero_minus_soldier(line.heroId)
              idx = idx + 1
            }
          } else {
            let mut idx = 0
            for i, line in root.areaLower.buildLines {
              if inputIdx == idx {
                ui_build_alloc_minus(line.cate)
                break
              }
              idx = idx + 1
            }
          }
        }
      }
      "建筑/英雄" => {
        root.areaLower.showHero = !root.areaLower.showHero
        root.areaLower.render()
      }
      _ => ()
    }
    if world.lastKeyTime < 0 {
      
      let mut vel = @inputs.key_vector(KeyW, KeyS, KeyA, KeyD).normalize()
      //this is for speed, so we change it !
      if @inputs.is_just_released(@inputs.KeyW) {
        vel = Vec2D(0,-1)
      } else if @inputs.is_just_released(@inputs.KeyA) {
        vel = Vec2D(1,0)
      } else if @inputs.is_just_released(@inputs.KeyS) {
        vel = Vec2D(0,1)
      } else if @inputs.is_just_released(@inputs.KeyD) {
        vel = Vec2D(-1,0)
      }

      world.player.move(vel)
      if vel.0 != 0 || vel.1 != 0 {
        world.lastKeyTime = 0.0
        world.step()
      } else if @inputs.is_just_released(@inputs.KeyX) {
        world.player.rnd_move()
        //world.lastKeyTime = 0.0
        world.step()
        
      } else if @inputs.is_just_released(@inputs.KeyQ) {
        if world.player.inGlobe {
          world.player.toArea()
        } else {
          world.player.toGlobe()
        }
      }
    }

    @system.deferred_event_system(0.0)



    @system.deferred_event_system(0.0)
    world.player.repos()
    

    for _, role in world.roleMap {
      role.repos()
    }

    if world.accTime > 5 {
      world.step()
    } 
  }
  //println(world.hero.gx.to_string() + "," + world.hero.gy.to_string())
  ignore(duration)
}
