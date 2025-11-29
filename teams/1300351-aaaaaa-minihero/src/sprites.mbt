
let grass:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(32, 0)))
let grass1:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(0, 0)))
let grass2:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(16, 0)))
let grass3:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(32, 0)))
let grass4:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(48, 0)))
let grass5:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(64, 0)))

let heroAnimation:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Champions/Arthax.png",1,width=16,height=16,offset=Vec2D(64, 0)))
let heroSprite:@sprite.Sprite = @sprite.Sprite::from_animation(heroAnimation, ZROLE)

let enemyAnimation:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Slimes/MegaSlimeBlue.png",1,width=16,height=16,offset=Vec2D(64, 0)))

let npcAnimation:@sprite.Animation = @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Workers/FarmerTemplate.png",1,width=16,height=16,offset=Vec2D(64, 0)))


let emptySprite:@sprite.Sprite = @sprite.Sprite::from_text(@sprite.Text::new("",color="white",font="16px ThaleahFat"), ZBUILDING)
      

let enemySprite:@sprite.Sprite = @sprite.Sprite::from_animation(enemyAnimation, ZROLE)
let levelEnemySprites:Array[@sprite.Sprite] = [
  @sprite.Sprite::from_animation(//0
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Slimes/Slime.png",1,width=16,height=16,offset=Vec2D(64, 0))),ZROLE)
  ,
  @sprite.Sprite::from_animation(//1
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Slimes/MegaSlimeGreen.png",1,width=16,height=16,offset=Vec2D(64, 0))),ZROLE)
  ,@sprite.Sprite::from_animation(//2
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Slimes/MegaSlimeBlue.png",1,width=16,height=16,offset=Vec2D(64, 0))),ZROLE)
  ,@sprite.Sprite::from_animation(//3
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Orcs/ClubGoblin.png",1,width=16,height=16,offset=Vec2D(0, 0))),ZROLE)
  ,@sprite.Sprite::from_animation(//4
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Orcs/SpearGoblin.png",1,width=16,height=16,offset=Vec2D(0, 0))),ZROLE)
  ,@sprite.Sprite::from_animation(//5
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Orcs/OrcMage.png",1,width=16,height=16,offset=Vec2D(0, 0))),ZROLE)
  ,@sprite.Sprite::from_animation(//6
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/GiantAnimals/GiantCrab.png",1,width=16,height=16,offset=Vec2D(0, 0))),ZROLE)
  ,@sprite.Sprite::from_animation(//7
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Frostborn/Mammoth.png",1,width=16,height=16,offset=Vec2D(0, 0))),ZROLE)
  ,@sprite.Sprite::from_animation(//8
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Frostborn/Wendigo.png",1,width=16,height=16,offset=Vec2D(0, 0))),ZROLE)
  ,@sprite.Sprite::from_animation(//9
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Monsters/Frostborn/Yeti.png",1,width=16,height=16,offset=Vec2D(0, 0))),ZROLE)
]

let npcSprite:@sprite.Sprite = @sprite.Sprite::from_animation(npcAnimation, ZROLE)
let npcSprites:Array[@sprite.Sprite] = [
  @sprite.Sprite::from_animation(
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Workers/CyanWorker/FarmerCyan.png",1,width=16,height=16,offset=Vec2D(64, 0))), ZROLE)
  ,@sprite.Sprite::from_animation(
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Workers/LimeWorker/FarmerLime.png",1,width=16,height=16,offset=Vec2D(64, 0))), ZROLE)
  ,@sprite.Sprite::from_animation(
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Workers/PurpleWorker/FarmerPurple.png",1,width=16,height=16,offset=Vec2D(64, 0))), ZROLE)
  ,@sprite.Sprite::from_animation(
    @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Characters/Workers/RedWorker/FarmerRed.png",1,width=16,height=16,offset=Vec2D(64, 0))), ZROLE)
  
]
let grasses:Array[@sprite.Animation] = [grass1, grass2, grass3, grass4, grass5]



let grassSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(32, 0))),
  ZGROUND
)
let groundSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(48, 0))),
  ZGROUND
)
let desertSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Shore.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZGROUND
)
let waterSprite:@sprite.Sprite = @sprite.Sprite::from_animation(
  @sprite.Animation::new(@sprite.frames_from_atlas("assets/MiniWorldSprites/Ground/Grass.png",1,width=16,height=16,offset=Vec2D(0, 0))),
  ZGROUND
)
let terrainSprites:Array[@sprite.Sprite] = [
  grassSprite, groundSprite, desertSprite, waterSprite
]
let cyanSprite:@sprite.Sprite = @sprite.Sprite::from_color_rect(
  @sprite.ColorRect::new(Vec2D(16.0, 16.0), "cyan"), 
  ZGROUND
);

let limeSprite:@sprite.Sprite = @sprite.Sprite::from_color_rect(
  @sprite.ColorRect::new(Vec2D(16.0, 16.0), "lime"), 
  ZGROUND
);
let purpleSprite:@sprite.Sprite = @sprite.Sprite::from_color_rect(
  @sprite.ColorRect::new(Vec2D(16.0, 16.0), "purple"), 
  ZGROUND
);
let redSprite:@sprite.Sprite = @sprite.Sprite::from_color_rect(
  @sprite.ColorRect::new(Vec2D(16.0, 16.0), "red"), 
  ZGROUND
);
let blackSprite:@sprite.Sprite = @sprite.Sprite::from_color_rect(
  @sprite.ColorRect::new(Vec2D(16.0, 16.0), "black"), 
  ZGROUND
);

let colorSprites:Array[@sprite.Sprite] = [cyanSprite, limeSprite, purpleSprite, redSprite]

let gmapSprites:Array[@sprite.Sprite] = [cyanSprite, limeSprite, purpleSprite, redSprite, grassSprite, blackSprite]
