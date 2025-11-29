

const GMAP_CYAN = 0
const GMAP_LIME = 1 
const GMAP_PURPLE = 2
const GMAP_RED = 3
// 4 countries
const GMAP_GRASS = 4
const GMAP_NEST = 5


struct Nation {
  tops:Set[Int] //the top roles
  areas:Set[Int] //the areas belong to it
  roles:Set[Int] // all of the roles
  mut gold:Double
  mut eco:Double
  mut soldierNum:Int
  mut popu:Double
  iconId:Int
  heros:Set[Int]
  mut cacheEco:Double

}
let nations:Array[Nation] = [
  {
    cacheEco:0, heros:Set::new(),soldierNum:0,tops:Set::new(), areas:Set::new(), roles:Set::new(), gold:0,eco:0,popu:0,iconId:GMAP_CYAN
  },{
    cacheEco:0, heros:Set::new(),soldierNum:0,tops:Set::new(), areas:Set::new(), roles:Set::new(), gold:0,eco:0,popu:0,iconId:GMAP_LIME
  },{
    cacheEco:0, heros:Set::new(),soldierNum:0,tops:Set::new(), areas:Set::new(), roles:Set::new(), gold:0,eco:0,popu:0,iconId:GMAP_PURPLE
  },{
    cacheEco:0, heros:Set::new(),soldierNum:0,tops:Set::new(), areas:Set::new(), roles:Set::new(), gold:0,eco:0,popu:0,iconId:GMAP_RED
  },{
    cacheEco:0, heros:Set::new(),soldierNum:0,tops:Set::new(), areas:Set::new(), roles:Set::new(), gold:0,eco:0,popu:0,iconId:GMAP_GRASS
  },{
    cacheEco:0, heros:Set::new(),soldierNum:0,tops:Set::new(), areas:Set::new(), roles:Set::new(), gold:0,eco:0,popu:0,iconId:GMAP_NEST
  }
]
fn gen_nation_icon_id() -> Int {
  GMAP_CYAN
}
fn gen_nation() -> Nation {
  let nation = {
    cacheEco:0.0,heros:Set::new(),soldierNum:0,tops:Set::new(), areas:Set::new(), roles:Set::new(), gold:0, eco:0, popu:0, iconId:gen_nation_icon_id()
  }
  nations.push(nation)
  nation
}
fn get_nation_name(nationId:Int) -> String {
  match nationId {
    GMAP_CYAN => return "玩家"
    GMAP_GRASS => return "大自然"
    GMAP_NEST => return "魔物"
    _ => ()
  }
  let nation = get_nation(nationId)
  "国家[" + nationId.to_string() + "]" 
}
fn get_nation(nationId:Int) -> Nation {
  for i in nations.length()..<(nationId + 1) {
    let _ = gen_nation()
  }
  nations[nationId]
}
fn reg_role(self:Nation, id:Int) -> Unit {
  self.roles.add(id)
}
fn unreg_role(self:Nation, id:Int) -> Unit {
  self.roles.remove(id)
}
fn remove_area_gxy(self:Nation, x:Int, y:Int) -> Unit {
  self.remove_area(x * globe_width + y)
}
fn remove_area(self:Nation, areaId:Int) -> Unit {
  if areaId < 0 || areaId >= world.areas.length() {
    return
  }
  let area = world.areas[areaId]
  area.nationId = -1
  self.areas.remove(areaId)
}

