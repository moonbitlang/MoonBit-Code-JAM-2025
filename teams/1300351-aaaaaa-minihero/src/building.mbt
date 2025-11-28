let fieldSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Nature/Wheatfield.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)
let houseSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanHouses.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)
let apartmentSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanHouses.png",1,width=16,height=16,offset=Vec2D(0, 16))),
  ZBUILDING
)
let workshopSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanWorkshops.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)
let nestSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Miscellaneous/Portal.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)
let chestSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Miscellaneous/Chests.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)
let cityCoreSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanTaverns.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)
let blackSmithSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanResources.png",1,width=16,height=16,offset=Vec2D(0, 32))),
  ZBUILDING
)
let summoningPlatformSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanTower.png",1,width=16,height=16,offset=Vec2D(0, 48))),
  ZBUILDING
)
let trainingTableSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanBarracks.png",1,width=16,height=16,offset=Vec2D(16, 64))),
  ZBUILDING
)
let infantyBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanBarracks.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)

let archerBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanBarracks.png",1,width=16,height=16,offset=Vec2D(16, 16))),
  ZBUILDING
)
let siegeBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanBarracks.png",1,width=16,height=16,offset=Vec2D(48, 32))),
  ZBUILDING
)
let marketSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanMarket.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)
let wallSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Cyan/CyanTower.png",1,width=16,height=16,offset=Vec2D(0, 48))),
  ZBUILDING
)















let limeHouseSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeHouses.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)
let limeApartmentSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeHouses.png",1,width=16,height=16,offset=Vec2D(0, 16))),
  ZBUILDING
)
let limeWorkshopSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeWorkshops.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)

let limeCityCoreSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeTaverns.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)
let limeBlackSmithSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeResources.png",1,width=16,height=16,offset=Vec2D(0, 32))),
  ZBUILDING
)
let limeSummoningPlatformSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeTower.png",1,width=16,height=16,offset=Vec2D(0, 48))),
  ZBUILDING
)
let limeTrainingTableSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeBarracks.png",1,width=16,height=16,offset=Vec2D(16, 64))),
  ZBUILDING
)
let limeInfantyBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeBarracks.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)

let limeArcherBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeBarracks.png",1,width=16,height=16,offset=Vec2D(16, 16))),
  ZBUILDING
)
let limeSiegeBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeBarracks.png",1,width=16,height=16,offset=Vec2D(48, 32))),
  ZBUILDING
)
let limeMarketSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeMarket.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)
let limeWallSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Lime/LimeTower.png",1,width=16,height=16,offset=Vec2D(0, 48))),
  ZBUILDING
)








let purpleHouseSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleHouses.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)
let purpleApartmentSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleHouses.png",1,width=16,height=16,offset=Vec2D(0, 16))),
  ZBUILDING
)
let purpleWorkshopSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleWorkshops.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)

let purpleCityCoreSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleTaverns.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)
let purpleBlackSmithSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleResources.png",1,width=16,height=16,offset=Vec2D(0, 32))),
  ZBUILDING
)
let purpleSummoningPlatformSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleTower.png",1,width=16,height=16,offset=Vec2D(0, 48))),
  ZBUILDING
)
let purpleTrainingTableSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleBarracks.png",1,width=16,height=16,offset=Vec2D(16, 64))),
  ZBUILDING
)
let purpleInfantyBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleBarracks.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)

let purpleArcherBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleBarracks.png",1,width=16,height=16,offset=Vec2D(16, 16))),
  ZBUILDING
)
let purpleSiegeBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleBarracks.png",1,width=16,height=16,offset=Vec2D(48, 32))),
  ZBUILDING
)
let purpleMarketSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleMarket.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)
let purpleWallSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Purple/PurpleTower.png",1,width=16,height=16,offset=Vec2D(0, 48))),
  ZBUILDING
)











let redHouseSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedHouses.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)
let redApartmentSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedHouses.png",1,width=16,height=16,offset=Vec2D(0, 16))),
  ZBUILDING
)
let redWorkshopSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedWorkshops.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZBUILDING
)

let redCityCoreSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedTaverns.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)
let redBlackSmithSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedResources.png",1,width=16,height=16,offset=Vec2D(0, 32))),
  ZBUILDING
)
let redSummoningPlatformSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedTower.png",1,width=16,height=16,offset=Vec2D(0, 48))),
  ZBUILDING
)
let redTrainingTableSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedBarracks.png",1,width=16,height=16,offset=Vec2D(16, 64))),
  ZBUILDING
)
let redInfantyBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedBarracks.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)

let redArcherBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedBarracks.png",1,width=16,height=16,offset=Vec2D(16, 16))),
  ZBUILDING
)
let redSiegeBarracksSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedBarracks.png",1,width=16,height=16,offset=Vec2D(48, 32))),
  ZBUILDING
)
let redMarketSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedMarket.png",1,width=16,height=16,offset=Vec2D(16, 0))),
  ZBUILDING
)
let redWallSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Buildings/Red/RedTower.png",1,width=16,height=16,offset=Vec2D(0, 48))),
  ZBUILDING
)




fn get_build_name(cate:Int) -> String {
  //match cate {
  //  Empty => "空"
  //  Field => "田地"
  //  House => "民居"
  //  Apartment => "公寓"
  //  WorkShop => "工坊"
  //  Nest => "魔物巢穴"
  //  Chest => "宝箱"
  //  CityCore => "市政厅"
  //  BlacksmithShop => "铁匠铺"
  //  SummoningPlatform => "演武场"
  //  DesignHouse => "研究所"
  //  TrainingTable => "募兵所"
  //  Barracks => "兵营"
  //  Market => "市场"
  //_ _ => "建筑类型:" + cate.to_string()
  //}
  if cate >= 0 && cate < buildDescs.length() {
    return buildDescs[cate].name
  }
  return "建筑类型:" + cate.to_string()
}
fn is_army_build(self:Building) -> Bool {
  is_army_build_cate(self.cate)
}
fn is_army_build_cate(cate:Int) -> Bool {
  match cate {
    ArcherBarracks | InfantryBarracks | SiegeTroopsBarracks => true
    _ => false
  }
}

struct BuildDesc {
  //eco:Double
  //popu:Double
  //food:Double

  name:String
  jobName:String
  armyLimit:Int
  popuLimit:Int
  cityDefense:Double
  maxLimit:Int
  ecoCost:Double
  ecoPerson:Double
  foodPerson:Double
  equipPerson:Double
  maxPerson:Int
}


const Empty = 0
const Field = 1
const House = 2
const Apartment = 3
const WorkShop = 4
const Nest = 5
const Chest = 6
const CityCore = 7

const  BlacksmithShop = 8
const SummoningPlatform = 9
const  DesignHouse = 10
const TrainingTable = 11


const InfantryBarracks = 12
const ArcherBarracks = 13
const SiegeTroopsBarracks = 14


const Market = 15
const Wall = 16
let buildDescs:Array[BuildDesc] = [
   {ecoPerson:0,jobName:"",ecoCost:10,  name:"空",  foodPerson:0, equipPerson:0, armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:1, maxPerson:1}
  ,{ecoPerson:0,jobName:"",ecoCost:20, name:"田地",  foodPerson:4, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:20, maxPerson:1}
  ,{ecoPerson:0,jobName:"农民",ecoCost:10,  name:"民居", foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:4, cityDefense:0, maxLimit:10, maxPerson:0}
  ,{ecoPerson:0,jobName:"",ecoCost:10,  name:"公寓", foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:8, cityDefense:0, maxLimit:40, maxPerson:1}
  ,{ecoPerson:0,jobName:"工人",ecoCost:50,  name:"工坊", foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:1, maxPerson:1}
  ,{ecoPerson:0,jobName:"",ecoCost:10,  name:"魔物巢穴", foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:100, maxPerson:0}
  ,{ecoPerson:0,jobName:"",ecoCost:10,  name:"宝箱", foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:100, maxPerson:0}
  ,{ecoPerson:1,jobName:"管理人员", ecoCost:5, name:"市政厅", foodPerson:2, equipPerson:0,armyLimit:0, popuLimit:2, cityDefense:0, maxLimit:1, maxPerson:5}
  ,{ecoPerson:0,jobName:"铁匠",   ecoCost:20, name:"铁匠铺", foodPerson:0, equipPerson:0.5,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:4, maxPerson:2}
  ,{ecoPerson:2,jobName:"酒保",ecoCost:20, name:"酒馆", foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:1, maxPerson:1}
  ,{ecoPerson:0,jobName:"研究员",ecoCost:10,  name:"研究所",  foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:1, maxPerson:1}
  ,{ecoPerson:0,jobName:"募兵员",ecoCost:15, name:"募兵所", foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:1, maxPerson:0}
  ,{ecoPerson:0,jobName:"步兵",ecoCost:15,  name:"步兵兵营", foodPerson:0, equipPerson:0,armyLimit:10, popuLimit:0, cityDefense:0, maxLimit:10, maxPerson:10}
  ,{ecoPerson:0,jobName:"弓兵",ecoCost:15, name:"弓兵兵营", foodPerson:0, equipPerson:0,armyLimit:10, popuLimit:0, cityDefense:0, maxLimit:10, maxPerson:10}
  ,{ecoPerson:0,jobName:"攻城兵",ecoCost:15, name:"攻城兵兵营", foodPerson:0, equipPerson:0,armyLimit:10, popuLimit:0, cityDefense:0, maxLimit:10, maxPerson:10}
  ,{ecoPerson:10,jobName:"商户",ecoCost:50, name:"商铺",  foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:0, maxLimit:1, maxPerson:5}
  ,{ecoPerson:0,jobName:"建筑工",ecoCost:10,  name:"城墙",  foodPerson:0, equipPerson:0,armyLimit:0, popuLimit:0, cityDefense:20, maxLimit:10, maxPerson:0}
]

let lordChosenBuildings:Array[Int] = [
  CityCore, 
  House, 
  Field, 
  BlacksmithShop, 
  SummoningPlatform,
  TrainingTable, InfantryBarracks, ArcherBarracks, SiegeTroopsBarracks, Market, Wall
]
let rndLordChosenBuildings:Array[Int] = [
  CityCore,
  House, 
  Field, 
  BlacksmithShop, 
  SummoningPlatform,
  TrainingTable, InfantryBarracks, ArcherBarracks, SiegeTroopsBarracks, Market, Wall
]
fn shuffle_rnd_gen(upper:Int) -> Int {
  grand.int(limit=upper)
}

let buildingSprites:Array[@sprite.Sprite] = [//nationId 0 4 5  cyan
  fieldSprite,//0  Empty 
  fieldSprite,//1  Field
  houseSprite,//2   House
  apartmentSprite,//3  Apartment
  workshopSprite,//4  WorkShop
  nestSprite,//5  Nest
  chestSprite,//6  Chest
  cityCoreSprite,//7  CityCore
  blackSmithSprite,//8  BlacksmithShop
  summoningPlatformSprite,//9  SummoningPlatform
  apartmentSprite,//10  DesignHouse
  trainingTableSprite,//11  TrainingTable
  infantyBarracksSprite,//12  InfantryBarracks
  archerBarracksSprite,//13  ArcherBarracks
  siegeBarracksSprite,//14  SiegeTroopsBarracks
  marketSprite,//15  Market
  wallSprite,//16  Wall
]

//cyan 0, lime 1, purple 2, red 3
let limeBuildingSprites:Array[@sprite.Sprite] = [ //nationId 1 
  fieldSprite,//0  Empty 
  fieldSprite,//1  Field
  limeHouseSprite,//2   House
  limeApartmentSprite,//3  Apartment
  workshopSprite,//4  WorkShop
  nestSprite,//5  Nest
  chestSprite,//6  Chest
  limeCityCoreSprite,//7  CityCore
  limeBlackSmithSprite,//8  BlacksmithShop
  limeSummoningPlatformSprite,//9  SummoningPlatform
  limeApartmentSprite,//10  DesignHouse
  limeTrainingTableSprite,//11  TrainingTable
  limeInfantyBarracksSprite,//12  InfantryBarracks
  limeArcherBarracksSprite,//13  ArcherBarracks
  limeSiegeBarracksSprite,//14  SiegeTroopsBarracks
  limeMarketSprite,//15  Market
  limeWallSprite,//16  Wall
]

let purpleBuildingSprites:Array[@sprite.Sprite] = [// nationId 2
  fieldSprite,//0  Empty 
  fieldSprite,//1  Field
  purpleHouseSprite,//2   House
  purpleApartmentSprite,//3  Apartment
  workshopSprite,//4  WorkShop
  nestSprite,//5  Nest
  chestSprite,//6  Chest
  purpleCityCoreSprite,//7  CityCore
  purpleBlackSmithSprite,//8  BlacksmithShop
  purpleSummoningPlatformSprite,//9  SummoningPlatform
  purpleApartmentSprite,//10  DesignHouse
  purpleTrainingTableSprite,//11  TrainingTable
  purpleInfantyBarracksSprite,//12  InfantryBarracks
  purpleArcherBarracksSprite,//13  ArcherBarracks
  purpleSiegeBarracksSprite,//14  SiegeTroopsBarracks
  purpleMarketSprite,//15  Market
  purpleWallSprite,//16  Wall
]

let redBuildingSprites:Array[@sprite.Sprite] = [//nationId 3
  fieldSprite,//0  Empty 
  fieldSprite,//1  Field
  redHouseSprite,//2   House
  redApartmentSprite,//3  Apartment
  workshopSprite,//4  WorkShop
  nestSprite,//5  Nest
  chestSprite,//6  Chest
  redCityCoreSprite,//7  CityCore
  redBlackSmithSprite,//8  BlacksmithShop
  redSummoningPlatformSprite,//9  SummoningPlatform
  redApartmentSprite,//10  DesignHouse
  redTrainingTableSprite,//11  TrainingTable
  redInfantyBarracksSprite,//12  InfantryBarracks
  redArcherBarracksSprite,//13  ArcherBarracks
  redSiegeBarracksSprite,//14  SiegeTroopsBarracks
  redMarketSprite,//15  Market
  redWallSprite,//16  Wall
]

struct Building {
  id:Int//the id of the building
  cate:Int //the category
  level:Int //like the monster nest level
  owner:Int
  nationId:Int
  mut hp:Int
  x:Int
  y:Int
  roles:Set[Int]
}
fn Building::to_desc(self:Building) -> String {
  let mut s = ""
  if self.cate >= 0 {
    let desc = buildDescs[self.cate]
    s += "建筑" + desc.name + "[" + self.id.to_string() + "]"
    s += "(♥:" + self.hp.to_string() + ")"
    if self.nationId >= 0 {
      s += "(" + get_nation_name(self.nationId) + ")"
    }
  }
  s
}
fn Building::get_sprite(self:Building) -> @sprite.Sprite {
  let mut nationId = self.nationId
  if nationId < 0 || nationId == GMAP_NEST || nationId == GMAP_GRASS  || nationId >= GMAP_NEST {
    nationId = 0
  }
  let sprites = match nationId  {
    GMAP_CYAN =>  buildingSprites 
    GMAP_PURPLE =>  purpleBuildingSprites 
    GMAP_LIME =>  limeBuildingSprites 
    GMAP_RED =>  redBuildingSprites 
    _ => buildingSprites 
  }
  let mut cate = self.cate 
  if cate < 0 || cate >= sprites.length() {
    cate = 0
  }
  sprites[cate]
}


fn cost_per(cate:Int) -> Int {
  match cate {
    Field => 10
    WorkShop => 60
    House => 120
    Apartment => 600
    _ => 0
  }
}

fn gold_per_day(cate:Int, level:Int) -> Int {
  match cate {
    Field => 15
    WorkShop => 60
    Market => 100
    _ => 0
  }
}