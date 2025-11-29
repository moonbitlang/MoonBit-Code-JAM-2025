
const JobIdle = 0
const JobFarmer = 1
const JobSoldier = 2
const JobHero = 3


const NPC = 1
const ENEMY = 2
const HERO = 3
let epool:Set[@entity.Entity] = Set::new()


struct Life {
  mut hp:Int
  mut hp_max:Int
  mut atk:Int
  mut exp:Int
  mut level:Int
  mut gold:Double
  mut score:Int
  mut atkRange:Int
}

fn life_gen() -> Life {
  return {
    hp:4,
    hp_max:4,
    atk:1,
    exp:0,
    level:1,
    gold:0,
    score:0,
    atkRange:1
  }
}

fn levelup_to(self:Life, level:Int) -> Unit {
  while self.level < level {
    self.level += 1
    self.atk +=1 
    self.hp_max += 2
    self.hp = self.hp_max
  }
}

fn gain_exp(self:Life, val:Int) -> Unit {
  self.exp += val
  if self.exp >= (2 << self.level) {
    self.exp -= (2 << self.level)
    self.level += 1
    self.atk += 1
    self.hp_max += 2
    self.hp = self.hp_max
  }
}
fn role_cate_to_str(cate:Int) -> String {
  match cate {
    HERO => "hero"
    NPC => "npc"
    ENEMY => "monster"
    _ => "cate:" + cate.to_string()
  }
}


struct Role {

  id:Int
  
  mut cate:Int
  ge:@entity.Entity
  ae:@entity.Entity
  mut inGlobe:Bool
  mut gx:Int
  mut gy:Int
  mut ax:Int
  mut ay:Int
  life:Life
  mut nationId:Int
  mut lordId:Int
  mut isLord:Bool
  areas:Set[Int]
  vassal:Set[Int]
  mut atkArea:Int
  mut atkTarget:Int
  mut atkBuild:Int
  mut rcate:Int
  mut jobBuild:Int
  mut jobBuildCate:Int
  mut jobGx:Int
  mut jobGy:Int

  soldiers:Array[Int]
  mut followSoldierType:Int
  mut leaderId:Int
  mut inTeam:Bool //when in team, the role will not act
  mut equiped:Bool
}



impl Hash for Role with hash(self) -> Int {self.id}

impl Hash for Role with hash_combine(self, hasher) -> Unit {
   hasher.combine_int(self.id)
}

impl Eq for Role with equal(self, target) -> Bool { self.id == target.id}

fn get_atk(self:Role) -> Int {
  let mut val:Int = self.life.atk
  for roleId in self.soldiers {
    if world.roleMap.contains(roleId) {
      let role = world.roleMap[roleId]
      val += role.life.atk
    }
  }
  val
}
fn hide(self:Role) -> Unit {
  @system.deferred_event_system(0.0)
  if self.ae.is_alive() {
    self.ae.destroy()
  }
  if self.ge.is_alive() {
    self.ge.destroy()
  }
  @system.deferred_event_system(0.0)
  epool.add(self.ae)
  epool.add(self.ge)
}
fn is_player(self:Role) -> Bool {
  self.id == world.player.id
} 
fn to_border(self:Role) -> Unit {
  if grand.double() > 0.5 {
    if grand.double() > 0.5 {
      self.ax = 0
    } else {
      self.ax = area_width - 1
    }
  } else {
    if grand.double() > 0.5 {
      self.ay = 1
    } else {
      self.ay = area_width - 1
    }
  }
}




fn is_equiped(self:Role) -> Bool {
  if self.equiped || self.cate == HERO || self.cate == ENEMY {
    return true
  } else {
    match self.jobBuildCate {
      ArcherBarracks|InfantryBarracks|SiegeTroopsBarracks => {
        return true
      }
      _  => {
          return false
      }
    }
  }
  return false
}
fn genEnemyForNest(self:GameWorld, x:Int, y:Int, build:Building, dir:Int) -> Bool {
  if x < 0 || y < 0 || x >= globe_width || y >= globe_width || dir < 0 || dir >= 4 {
    return false
  }
  let off = nearPoses[dir]
  let enemy = self.genEnemy(x, y, level = build.level)
  
  let mut ax = build.x + off[0]
  let mut ay = build.y + off[1]

  if ax < 0 || ax >= area_width {
    ax = build.x
  }
  if ay < 0 || ay >= area_width {
    ay = build.y
  }
  enemy.ax = ax
  enemy.ay = ay
  enemy.toArea(border = false) 
  return true
}


let barbarian_nums:Array[Int] = [5,4,3,3,2,1]
let barbarian_rates:Array[Double] = [0.12, 0.11, 0.1, 0.09, 0.07, 0.05]
fn gen_all_babarians(self:GameWorld) -> Unit {
  if world.enemyCnt > 100 {
    return
  }
  let areas = self.areas.copy()
  areas.sort_by((a,b)=> b.eco.compare(a.eco))
  if areas.length() > 5 {
    for i in 0..<6 {
      let area = areas[i]
      if grand.double() < barbarian_rates[i] {
        //generate
        for j in 0..<barbarian_nums[i] {
          let barbarian = self.gen_barbarian(area.gx, area.gy)
          barbarian.toArea()
        }
      }
    }
  }
}





const RCate_Human = 0
const RCate_Barbarian = 11
const RCate_RangedBarbarin = 12


fn init_role_by_cate(self:Role) -> Unit {
  match self.rcate {
    RCate_Barbarian => {
      if self.life.hp_max < 7 {
        self.life.hp_max = 7
        self.life.hp = self.life.hp_max
      }
    }
    RCate_RangedBarbarin => {
      if self.life.hp_max < 5 {
        self.life.hp_max = 5
        self.life.hp = self.life.hp_max
      }
      if self.life.atkRange < 3 {
        self.life.atkRange = 3
      }
    }
    _ => ()
  }
}

fn genEnemy(self:GameWorld, x:Int, y:Int, level?:Int = 0, rcate?:Int = -1) -> Role {
  let mut iconLevel = level 
  if iconLevel < 0 {
    iconLevel = 0
  }
  if iconLevel >= levelEnemySprites.length() {
    iconLevel = levelEnemySprites.length() - 1
  }
  let (gsprite, gfrom_pool) = role_entity_from_pool(levelEnemySprites[iconLevel])
  let (asprite, afrom_pool) = role_entity_from_pool(levelEnemySprites[iconLevel])
  let enemy:Role =  {
    cate:ENEMY,
    
    nationId:GMAP_NEST,
    ge:gsprite,
    ae:asprite,
    inGlobe:true,gx:grand.int(limit = globe_width),gy:grand.int(limit = globe_width),
    ax:grand.int(limit = area_width),ay:grand.int(limit = area_width),
    id:world.genRoleId(),life:life_gen(),jobGx:0,jobGy:0,
    lordId:-1, isLord:false, vassal:Set::new(), areas:Set::new(),jobBuildCate:-1,inTeam:false,
    atkArea:-1,atkBuild:-1,atkTarget:-1,rcate:0,jobBuild:-1, leaderId:-1, soldiers:[],followSoldierType:-1
    ,equiped:false
  }
  
  if x >= 0 {
    enemy.gx = x
  }
  if y >= 0 {
    enemy.gy = y
  }
  
  enemy.to_border()
  world.roleMap[enemy.id] = enemy

  world.set_goccupy(enemy.gx, enemy.gy, enemy.id)
  world.enemyCnt += 1
  get_nation(enemy.nationId).reg_role(enemy.id)
  
  if level > 0 {
    enemy.life.levelup_to(level)
  }
  enemy.rcate = rcate
  enemy.init_role_by_cate()
  if (gfrom_pool || afrom_pool) {
    enemy.change_sprite_by_cate()
  }
  enemy.ae.destroy()
  enemy.repos()
  return enemy
}

fn gen_barbarian(self:GameWorld, gx:Int, gy:Int) -> Role {
  let mut rcate:Int = RCate_RangedBarbarin
  if grand.double() >= 0.3 {
    rcate = RCate_Barbarian
  }
  self.genEnemy(gx, gy, level = 0, rcate~)
}

fn change_sprite_by_cate(self:Role) -> Unit {
  @system.deferred_event_system(0.0)
  if self.id == world.player.id {
    @sprite.sprites.set(self.ge, heroSprite)
    @sprite.sprites.set(self.ae, heroSprite)
  } else {
    match self.cate {
      HERO|NPC => {
        let spriteIdx = self.nationId % npcSprites.length()
        @sprite.sprites.set(self.ge, npcSprites[spriteIdx])
        @sprite.sprites.set(self.ae, npcSprites[spriteIdx])
      }
      ENEMY => {
        let mut iconLevel = self.life.level
        if iconLevel < 0 {
          iconLevel = 0
        }
        if iconLevel >= levelEnemySprites.length() {
          iconLevel = levelEnemySprites.length() - 1
        }
        @sprite.sprites.set(self.ge, levelEnemySprites[iconLevel])
        @sprite.sprites.set(self.ae, levelEnemySprites[iconLevel])
      }
      _ => ()
    }
  }
  @system.deferred_event_system(0.0)
}
fn change_to_player_sprite(self:Role) -> Unit {
  @system.deferred_event_system(0.0)
  @sprite.sprites.set(self.ge, heroSprite)
  @sprite.sprites.set(self.ae, heroSprite)  
  @system.deferred_event_system(0.0)
}


fn genNPC(self:GameWorld, x:Int, y:Int, nationId?:Int = -1, isHero?:Bool) -> Role {
  let mut toNationId = nationId
  if nationId < 0 {
    toNationId = rndNationId()
  }
  
  let mut cate = NPC
  if isHero is Some(ish) && ish {
    cate = HERO
  }

  let spriteIdx = toNationId % npcSprites.length()

  let (gsprite, gfrom_pool) = role_entity_from_pool(npcSprites[spriteIdx])
  let (asprite, afrom_pool) = role_entity_from_pool(npcSprites[spriteIdx])

  let npc:Role = {
    cate,
    nationId,
    ge:gsprite,
    ae:asprite,
    inGlobe:true,
    gx:grand.int(limit = globe_width),
    gy:grand.int(limit = globe_width),
    ax:grand.int(limit = area_width),
    ay:grand.int(limit = area_width),
    id:world.genRoleId(),
    life:life_gen(),
    jobGx:0, jobGy:0,
    lordId:-1, isLord:false, vassal:Set::new(), areas:Set::new(),jobBuildCate:-1,inTeam:false,
    atkArea:-1,atkBuild:-1,atkTarget:-1,rcate:0,jobBuild:-1, soldiers:[], leaderId:-1, followSoldierType:-1,

    equiped:false
  }
  npc.life.hp_max = 5
  npc.life.hp = npc.life.hp_max
  npc.life.atk = 2
  
  npc.nationId = toNationId
  
  if cate == HERO && npc.nationId >= 0 {
    get_nation(npc.nationId).heros.add(npc.id)
    npc.followSoldierType = InfantryBarracks
  }

  if x >= 0 {
    npc.gx = x
  }
  if y >= 0 {
    npc.gy = y
  }
  npc.to_border()
  world.roleMap[npc.id] = npc

  world.set_goccupy(npc.gx, npc.gy, npc.id)
  if (world.heroCnt < 7) && (grand.double() < 0.1) {
    npc.cate = HERO
    world.heroCnt += 1
    println("generate a hero " + npc.id.to_string())
  } else {
    world.npcCnt += 1
  }
  get_nation(npc.nationId).reg_role(npc.id)
  if (gfrom_pool || afrom_pool) {
    npc.change_sprite_by_cate()
  }
  npc.ge.destroy()
  npc.ae.destroy()
  npc.repos()
  return npc
}

fn get_name(self:Role) -> String {
  "角色[" + self.id.to_string() + "]"
}

fn get_follow_soldier_type_name(self:Role) -> String {
  match self.followSoldierType {
    InfantryBarracks => "步兵"
    ArcherBarracks => "弓兵"
    SiegeTroopsBarracks => "攻城兵"
    _ => "兵种类型" + self.followSoldierType.to_string()
  }
}

fn switch_follow_solider_type(self:Role, dir?:Int = -1)-> Unit {
  if dir == -1 {
    match self.followSoldierType {
      InfantryBarracks => {
        self.followSoldierType = SiegeTroopsBarracks
      }
      ArcherBarracks => {
        self.followSoldierType = InfantryBarracks
      }
      SiegeTroopsBarracks => {
        self.followSoldierType = ArcherBarracks
      }
      _ => ()
    }
  } else {
    match self.followSoldierType {
      InfantryBarracks => {
        self.followSoldierType = ArcherBarracks
      }
      ArcherBarracks => {
        self.followSoldierType = SiegeTroopsBarracks
      }
      SiegeTroopsBarracks => {
        self.followSoldierType = InfantryBarracks
      }
      _ => ()
      
    }
  }
  self.clear_soldiers()
}

//unbind the relation of all the soldiers
fn clear_soldiers(self:Role) -> Unit {
  let soldiers = self.soldiers.copy()
  for idx in 0..<soldiers.length() {
    let roleId = soldiers[idx]
    if world.roleMap.contains(roleId) {
      let role = world.roleMap[roleId]
      if role.leaderId == self.id {
        role.leaderId = -1
        self.leader_split_solider(role)
      }
    }
  }
  self.soldiers.clear()
}
fn leader_split_solider(self:Role, soldier:Role) -> Unit {
  let role = soldier
  role.gx = self.gx
  role.ax = self.ax
  role.inTeam = false
  if self.inGlobe {
    role.toGlobe()
  } else {
    role.toArea()
  }
}
//leader unbind the target soldier
fn unbind_soldier(self:Role, soldierId:Int) -> Unit {
  let roleId = soldierId
  if world.roleMap.contains(roleId) {
    let role = world.roleMap[roleId]
    role.leaderId = -1
    let pos = self.soldiers.search(roleId)
    if pos is Some(i) {
      let _ = self.soldiers.remove(i)
    }
    self.leader_split_solider(role)
  }
}

//soldier unbind the leader
fn unbind_leader(self:Role) -> Unit {
  if self.leaderId < 0 {
    return
  }
  if world.roleMap.contains(self.leaderId) {
    let leader = world.roleMap[self.leaderId]
    let pos = leader.soldiers.search(self.id)
      if pos is Some(i) {
        let _ = leader.soldiers.remove(i)
    }
    leader.leader_split_solider(self)
  }
  self.leaderId = -1
}

fn get_target_str(self:Role) -> String {
  let mut s = ""
  if self.atkTarget >= 0 {
    if world.roleMap.get(self.atkTarget) is Some(target) {
      s += "  目标:角色[" + self.atkTarget.to_string() + "]"
      if target.nationId >= 0 {
        s += "(" + get_nation_name(target.nationId) + ")"
      }
    }
  }
  if self.atkBuild >= 0 {
    let areaId = self.gx * globe_width + self.gy
    if areaId >= 0 && areaId < world.areas.length() {
      let area = world.areas[areaId]
      if area.buildings.get(self.atkBuild) is Some(build) {
        let buildDesc = buildDescs[build.cate]
        s += "  目标建筑" + buildDesc.name + "[" + build.id.to_string() + "]" + "(♥:" + build.hp.to_string() + ")"
      }
      s += ""
    }
  }
  if self.atkTarget < 0 && self.atkBuild < 0 && self.atkArea >= 0 && self.atkArea < world.areas.length() {
    let area = world.areas[self.atkArea]
    let gx = area.gx
    let gy = area.gy
    s += "  目标区域(" + gx.to_string() +  "," + gy.to_string() + ")"  
    if area.nationId >= 0 {
      s += "(" + get_nation_name(area.nationId) + ")"
    }
  }
  s
}

fn to_desc(self:Role, withoutTarget?:Bool) -> String {
  let mut s = ""
  s += "角色[" + self.id.to_string() + "]"
  if self.nationId >= 0 {
    s += "," + get_nation_name(self.nationId)
  }
  s += ",♥:" + self.life.hp.to_string()
  s += ",🗡:" + self.get_atk().to_string()
  //s += ",金币:" + self.life.gold.to_string()
  //s += ",等级:" + self.life.level.to_string()
  if !(withoutTarget is Some(true)) {
    s += self.get_target_str()
  }
  if self.jobBuildCate >= 0 {
    let desc = buildDescs[self.jobBuildCate]
    s += "," + desc.jobName
  }
  if self.is_equiped() {
    s += ",武装者"
  }
  s
}
fn to_string(self:Role) -> String {
  let mut s = ""
  s += "id:" + self.id.to_string() + " " + role_cate_to_str(self.cate) + " inGlobe:" + self.inGlobe.to_string()
  s += " g" + self.gx.to_string() + "," + self.gy.to_string() 
  s += " a" + self.ax.to_string() + "," + self.ay.to_string() 
  s += " hp" + self.life.hp.to_string() + " level:" + self.life.level.to_string() + " atk:" + self.life.atk.to_string()
  return s
}
fn action(self:Role) -> Unit {
  if self.id == world.player.id {
    return
  }
  self.rnd_move()
}
fn setIcon(self:Role, iconId:Int) ->Unit {}



fn repos(self:Role) -> Unit {
  @system.deferred_event_system(0.0)
  if self.inGlobe {
    self.ge.set_offset(@math.Vec2D(self.gx.to_double() * 16.0, world.offy + self.gy.to_double() * 16.0))
    
    if world.inGlobe {
      if !self.inTeam {
        if !self.ge.is_alive() {
          self.ge.respawn()
        }
      }
    } else {
      if self.ge.is_alive() {
        self.ge.destroy()
      }
    }
  } else {
    self.ae.set_offset(@math.Vec2D(self.ax.to_double() * 16.0, world.offy + self.ay.to_double() * 16.0))
    let areaId = self.gx * globe_width + self.gy
    if !world.inGlobe && world.showAreaId == areaId {
      if !self.ae.is_alive() {
        self.ae.respawn()
      }
    } else {
      if self.ae.is_alive() {
        self.ae.destroy()
      }
    }
  }
}
fn toGlobe(self:Role) -> Unit {
  
  if not(self.inGlobe) {
    
    let areaId = self.gx * globe_width + self.gy
    let area = world.areas[areaId]
    match self.cate {
      NPC => {
        area.humanCnt -= 1
        world.npcCnt += 1
      }
      HERO => {
        area.humanCnt -= 1
        world.heroCnt += 1
      }
      ENEMY => {
        area.enemyCnt -= 1
        world.enemyCnt += 1
      }
      _ => ignore(true)
    }
    area.clear_occupy(self.ax, self.ay, self.id)
    self.ae.destroy()
    if !self.inTeam {
      self.ge.respawn()
    }
    self.inGlobe = true
    world.set_goccupy(self.gx, self.gy, self.id)
    if world.player.id == self.id {
      world.showGlobe()
    }
    if world.role_in_camera(self) {
      log("角色["  + self.id.to_string() + "]离开了当前区域(" + self.gx.to_string() + "," + self.gy.to_string() + ")")
    }
  }
}
fn toArea(self:Role,border?:Bool=true) -> Unit {
  if self.inGlobe {
    let areaId = self.gx * globe_width + self.gy
    let area = world.areas[areaId]
    if area.empty() && area.nationId == GMAP_NEST && self.nationId != GMAP_NEST {
      area.change_own(self.nationId)
    }
    //area.set_occupy(self.ax, self.ay, self.id)
    match self.cate {
      NPC => {
        area.humanCnt += 1
        world.npcCnt -= 1
      }
      HERO => {
        area.humanCnt += 1
        world.heroCnt -= 1
      }
      ENEMY => {
        area.enemyCnt += 1
        world.enemyCnt -= 1
      }
      _ => ignore(true)
    }
    if !self.inTeam {
      self.ae.respawn()
    }
    self.ge.destroy()
    self.inGlobe = false
    world.clear_goccupy(self.gx, self.gy, self.id)

    //if self.atkArea >= 0 {
      //if self.atkArea == areaId {
        //if area.core >= 0 && nation_negative(self.nationId, area.nationId) {
        //  self.atkBuild = area.core
        //}
      //}
      //self.atkArea = -1
    //}

    if world.player.id == self.id {
      world.showArea(areaId)
      self.repos()
      //println("show area id " + areaId.to_string()) 
    }
    if (border) {
      self.to_border()
    }
    area.set_occupy(self.ax, self.ay, self.id)
    if world.role_in_camera(self) {
      log("角色["  + self.id.to_string() + "]进入了当前区域(" + self.gx.to_string() + "," + self.gy.to_string() + ")")
    }
  }
  self.repos()
}
fn atk(self:Role, target:Role) -> Unit {
  target.life.hp -= self.get_atk()
  if self.id == world.player.id {
    let mut s = "敌人[" + target.id.to_string() + "], ♥:" + target.life.hp.to_string()
    s += ",🗡:" + target.get_atk().to_string() + ",等级:"+ target.life.level.to_string()
    world.enemyBarText.content = s
  }
  if target.life.hp > 0 {
    target.atkBack(self)
  } else {
    world.beat(self, target)
  }
}
fn negative(self:Role, target:Role) -> Bool {
  return nation_negative(self.nationId, target.nationId)
} 