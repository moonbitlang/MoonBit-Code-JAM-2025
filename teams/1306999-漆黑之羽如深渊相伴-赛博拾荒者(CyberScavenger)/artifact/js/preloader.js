const ASSET_PATHS = [
  "assets/gfx/background_tile.png",
  "assets/gfx/explosion150xA.png",

  "assets/gfx/pickups/ChargeShield.png",

  "assets/gui/guide/squad_guide_01.png",
  "assets/gui/guide/squad_guide_02.png",
  "assets/gui/guide/squad_guide_03.png",
  "assets/gui/guide/squad_guide_04.png",
  "assets/gui/guide/squad_guide_05.png",

  "assets/gui/squad/desc/desc_atk.png",
  "assets/gui/squad/desc/desc_hp.png",
  "assets/gui/squad/desc/desc_shape_circle.png",
  "assets/gui/squad/desc/desc_shape_square.png",
  "assets/gui/squad/desc/desc_shape_triangle.png",

  "assets/gui/squad/synergy/synergy_bg_blue.png",
  "assets/gui/squad/synergy/synergy_bg_green.png",
  "assets/gui/squad/synergy/synergy_bg_orange.png",
  "assets/gui/squad/synergy/synergy_bg_purple.png",
  "assets/gui/squad/synergy/synergy_title.png",

  "assets/gui/squad/tabs/blue_light.png",
  "assets/gui/squad/tabs/blue_normal.png",
  "assets/gui/squad/tabs/green_light.png",
  "assets/gui/squad/tabs/green_normal.png",
  "assets/gui/squad/tabs/orange_light.png",
  "assets/gui/squad/tabs/orange_normal.png",
  "assets/gui/squad/tabs/purple_light.png",
  "assets/gui/squad/tabs/purple_normal.png",
  
  "assets/gui/squad/squad_background.png",
  "assets/gui/squad/squad_title.png",

  "assets/gui/start_menu/about.png",
  "assets/gui/start_menu/about_light.png",
  "assets/gui/start_menu/archive.png",
  "assets/gui/start_menu/archive_light.png",
  "assets/gui/start_menu/kanban_girl_animated.png",
  "assets/gui/start_menu/settings.png",
  "assets/gui/start_menu/settings_light.png",
  "assets/gui/start_menu/start.png",
  "assets/gui/start_menu/start_light.png",
  "assets/gui/start_menu/title.png",
  "assets/gui/start_menu/title_animated.png",

  "assets/gui/hud/stamina_frame.png",

  "assets/gui/upgrade/cards_confirm_hover.png",
  "assets/gui/upgrade/cards_confirm.png",
  "assets/gui/upgrade/upgrade_selection_card_hover.png",
  "assets/gui/upgrade/upgrade_selection_card_selected.png",
  "assets/gui/upgrade/upgrade_selection_card.png",

  "assets/sfx/Blip.wav",
  "assets/sfx/Boom.wav",
  "assets/sfx/Dead.wav",
  "assets/sfx/Hit.wav",
  "assets/sfx/Laser.wav",
  "assets/sfx/PowerUp.wav",
  "assets/sfx/Select.wav",
  "assets/sfx/Shoot.wav",
  "assets/sfx/Shoot8.wav",
  "assets/sfx/inst.mp3",
];


function preloadAsset(path) {
  return new Promise((resolve, reject) => {
    if (path.match(/\.(png|jpg|jpeg|gif)$/)) {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(`Failed to load image: ${path}`);
      img.src = path;
    } else if (path.match(/\.(mp3|wav|ogg)$/)) {
      const audio = new Audio();
      audio.oncanplaythrough = () => resolve(audio);
      audio.onerror = () => reject(`Failed to load audio: ${path}`);
      audio.src = path;
    } else {
      resolve(null);
    }
  });
}

async function main() {
  console.log(`[Preloader] Starting to load ${ASSET_PATHS.length} assets...`);
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  if (ASSET_PATHS.length === 0) {
    startGame();
    return;
  }

  let loadedAssetsCount = 0;
  const totalAssets = ASSET_PATHS.length;

  const promises = ASSET_PATHS.map(path => {
    return preloadAsset(path).then(asset => {
      loadedAssetsCount++;
      const progress = Math.round((loadedAssetsCount / totalAssets) * 100);
      progressBar.style.width = progress + '%';
      progressText.innerText = progress + '%';
      return asset;
    });
  });
  
  try {
    await Promise.all(promises);
    setTimeout(startGame, 200);
  } catch (error) {
    console.error("[Preloader] Error loading assets:", error);
    document.getElementById('loading-screen').innerHTML = `Error loading assets. Check console (F12).`;
  }
}

function startGame() {
  console.log("[Preloader] All assets loaded. Starting game systems...");
  const loadingScreen = document.getElementById('loading-screen');
  const canvasContainer = document.getElementById('canvas-container');
  
  if (loadingScreen) loadingScreen.style.display = 'none';
  if (canvasContainer) canvasContainer.style.display = 'block';

  const script = document.createElement('script');
  script.src = "./js/CyberScavenger.js";
  script.defer = true;

  script.onload = function() {
    console.log("[Preloader] CyberScavenger.js loaded. Starting post-processing loop.");
    startPostProcessingLoop();
  };
  
  // 4. 将脚本添加到页面，开始加载
  document.body.appendChild(script);
}

window.addEventListener('load', main);

function preloadAsset(path) {
  return new Promise((resolve, reject) => {
    if (path.match(/\.(png|jpg|jpeg|gif)$/)) {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(`Failed to load image: ${path}`);
      img.src = path;
    } else if (path.match(/\.(mp3|wav|ogg)$/)) {
      const audio = new Audio();
      audio.oncanplaythrough = () => resolve(audio);
      audio.onerror = () => reject(`Failed to load audio: ${path}`);
      audio.src = path;
    } else {
      resolve(null);
    }
  });
}

