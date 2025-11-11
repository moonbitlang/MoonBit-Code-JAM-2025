
class ShenDiaoGame {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.loadingScreen = document.querySelector(".loading-screen");
    this.loadingProgress = document.getElementById("loadingProgress");
    this.battleIndicator = document.querySelector(".battle-indicator");


    this.gameState = {
      foundXiaolongnv: false,
      foundJueqingdan: false,
      foundBloodyWine: false,
      openedChest: false,
      enteredCave: false,
    };


    this.fightSystem = new FightSystem(this);


    this.sceneSystem = new SceneSystem(this);


    this.player = new PlayerCharacter(this);


    this.keys = {};
    this.setupInput();


    this.images = {};
    this.loadResources();


    this.lastTime = 0;
    this.gameLoop = this.gameLoop.bind(this);
  }

  setupInput() {
    document.addEventListener("keydown", (e) => {
      this.keys[e.key.toLowerCase()] = true;

      if (this.fightSystem.battleActive) {
        if (["w", "a", "s", "d"].includes(e.key.toLowerCase())) {
          this.fightSystem.handlePlayerMove(e.key);
        } else if (e.key === " " || e.key === "1" || e.key === "2") {
          this.fightSystem.handlePlayerAttack(e.key);
        } else if (e.key === "Escape") {
          this.fightSystem.endBattle();
        }
      } else {
        this.handlePlayerInput(e.key);
      }
    });

    document.addEventListener("keyup", (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });
  }

  handlePlayerInput(key) {
    key = key.toLowerCase();

    switch (key) {
      case "w":
      case "a":
      case "s":
      case "d":
        this.player.move(key);
        break;
      case "b":
        if (this.sceneSystem.currentScene === 1) {
          this.fightSystem.startBattle(this.canvas.width);
        }
        break;
      case " ":
      case "1":
      case "2":
        if (this.fightSystem.battleActive) {
          this.fightSystem.handlePlayerAttack(key);
        }
        break;
    }
  }

  async loadResources() {
    const totalResources = 20;
    let loaded = 0;

    for (let i = 0; i < totalResources; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      loaded++;
      this.loadingProgress.style.width = `${(loaded / totalResources) * 100}%`;
    }

    setTimeout(() => {
      this.loadingScreen.style.display = "none";
      this.gameLoop();
    }, 500);
  }

  gameLoop(timestamp) {
    const deltaTime = timestamp - this.lastTime || 0;
    this.lastTime = timestamp;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.sceneSystem.render(this.ctx);
    this.player.update(deltaTime);
    this.player.render(this.ctx);

    if (this.fightSystem.battleActive) {
      this.fightSystem.updateBattle(timestamp);
      this.fightSystem.renderBattle(this.ctx);
      this.battleIndicator.style.display = "block";
    } else {
      this.battleIndicator.style.display = "none";
    }

    this.updateUI();
    requestAnimationFrame(this.gameLoop);
  }

  updateUI() {
    document.getElementById(
      "yangguoHealth"
    ).textContent = `${this.fightSystem.yangguo.stats.health}/${this.fightSystem.yangguo.stats.maxHealth}`;
    document.getElementById(
      "gongsunzhiHealth"
    ).textContent = `${this.fightSystem.gongsunzhi.stats.health}/${this.fightSystem.gongsunzhi.stats.maxHealth}`;

    const yangguoHealthPercent =
      (this.fightSystem.yangguo.stats.health /
        this.fightSystem.yangguo.stats.maxHealth) *
      100;
    const gongsunzhiHealthPercent =
      (this.fightSystem.gongsunzhi.stats.health /
        this.fightSystem.gongsunzhi.stats.maxHealth) *
      100;

    document.querySelector(
      ".yangguo-health"
    ).style.width = `${yangguoHealthPercent}%`;
    document.querySelector(
      ".gongsunzhi-health"
    ).style.width = `${gongsunzhiHealthPercent}%`;

    const currentTime = performance.now() / 1000;
    const skill1CD =
      this.fightSystem.yangguo.stats.skill1Cooldown -
      (currentTime - this.fightSystem.yangguo.stats.skill1LastUsedTime);
    const skill2CD =
      this.fightSystem.yangguo.stats.skill2Cooldown -
      (currentTime - this.fightSystem.yangguo.stats.skill2LastUsedTime);

    document.getElementById("skill1CD").textContent =
      skill1CD > 0 ? `${skill1CD.toFixed(1)}s` : "就绪";
    document.getElementById("skill2CD").textContent =
      skill2CD > 0 ? `${skill2CD.toFixed(1)}s` : "就绪";
  }
}


class FightSystem {
  constructor(game) {
    this.game = game;
    this.battleActive = false;
    this.battleLogicPaused = false;
    this.showControlHelp = false;
    this.controlHelpStartTime = 0;
    this.lastBattleUpdateTime = 0;
    this.lastMoveTime = 0;

    this.yangguo = new BattleCharacter("杨过", 120, { x: 200, y: 300 });
    this.gongsunzhi = new BattleCharacter("公孙止", 150, { x: 500, y: 300 });

    this.initializeBattleCharacters();
  }

  initializeBattleCharacters() {
    this.yangguo.stats = {
      health: 3379,
      maxHealth: 3379,
      attackDamage: 43,
      attackSpeed: 0.2,
      attackRange: 50,
      lastAttackTime: 0,
      isAttacking: false,
      attackType: "普通攻击",
      currentAnimation: "idle",
      animationStartTime: 0,
      moveSpeed: 6,
      skill1Cooldown: 10.0,
      skill2Cooldown: 3.0,
      skill1LastUsedTime: -10,
      skill2LastUsedTime: -10,
    };

    this.gongsunzhi.stats = {
      health: 9999,
      maxHealth: 9999,
      attackDamage: 300,
      attackSpeed: 2,
      attackRange: 40,
      lastAttackTime: 0,
      isAttacking: false,
      attackType: "普通攻击",
      currentAnimation: "battle",
      animationStartTime: 0,
      moveSpeed: 0,
    };
  }

  startBattle(sceneWidth) {
    this.battleActive = true;
    this.battleSceneWidth = sceneWidth;
    this.lastBattleUpdateTime = performance.now() / 1000;
    this.lastMoveTime = this.lastBattleUpdateTime;

    this.yangguo.position = { x: 100, y: 300 };
    this.gongsunzhi.position = { x: 600, y: 300 };
    this.yangguo.facing = "right";

    this.yangguo.setAnimation("idle");
    this.gongsunzhi.setAnimation("battle");

    this.showControlHelp = true;
    this.battleLogicPaused = true;
    this.controlHelpStartTime = performance.now() / 1000;
  }

  endBattle() {
    this.battleActive = false;
  }

  updateBattle(currentTime) {
    if (!this.battleActive) return;

    const deltaTime = currentTime / 1000 - this.lastBattleUpdateTime;
    this.lastBattleUpdateTime = currentTime / 1000;

    if (
      this.showControlHelp &&
      currentTime / 1000 - this.controlHelpStartTime > 3.0
    ) {
      this.showControlHelp = false;
      this.battleLogicPaused = false;
    }

    if (this.battleLogicPaused) {
      this.updateCharacterAnimations(currentTime);
      return;
    }

    if (!this.game.gameState.foundJueqingdan && this.yangguo.stats.health > 0) {
      if (Math.floor((currentTime / 1000) * 2) % 2 === 0) {
        this.yangguo.stats.health -= 4;
        if (this.yangguo.stats.health < 0) this.yangguo.stats.health = 0;

        if (this.yangguo.stats.health <= 0) {
          this.endBattle();
          return;
        }
      }
    }

    this.updateCharacterAnimations(currentTime);
    this.gongsunzhi.chaseTarget(
      this.yangguo.position,
      deltaTime,
      this.battleSceneWidth,
      600
    );

    if (
      this.yangguo.stats.isAttacking &&
      currentTime / 1000 - this.yangguo.stats.lastAttackTime >= 0.8
    ) {
      this.yangguo.stats.isAttacking = false;
    }

    if (
      currentTime / 1000 - this.gongsunzhi.stats.lastAttackTime >=
      this.gongsunzhi.stats.attackSpeed
    ) {
      if (this.isInAttackRange(this.gongsunzhi, this.yangguo)) {
        this.performAttack(this.gongsunzhi, this.yangguo, "普通攻击");
        this.gongsunzhi.stats.lastAttackTime = currentTime / 1000;
      }
    }

    if (this.yangguo.stats.health <= 0 || this.gongsunzhi.stats.health <= 0) {
      this.endBattle();
    }
  }

  updateCharacterAnimations(currentTime) {
    if (!this.battleActive) return;

    if (this.yangguo.stats.isAttacking) {
      if (this.yangguo.stats.currentAnimation !== "attack") {
        this.yangguo.setAnimation("attack");
      }
    } else if (this.yangguo.stats.currentAnimation === "sprint") {
      if (currentTime / 1000 - this.lastMoveTime > 0.5) {
        this.yangguo.setAnimation("idle");
      }
    } else {
      this.yangguo.setAnimation("idle");
    }

    if (this.gongsunzhi.stats.currentAnimation !== "battle") {
      this.gongsunzhi.setAnimation("battle");
    }
  }

  handlePlayerMove(key) {
    if (!this.battleActive || this.battleLogicPaused) return;

    const sceneHeight = 600;
    const currentTime = performance.now() / 1000;

    switch (key.toLowerCase()) {
      case "a":
        this.yangguo.move("left", this.battleSceneWidth, sceneHeight);
        this.yangguo.facing = "left";
        this.yangguo.setAnimation("sprint");
        this.lastMoveTime = currentTime;
        break;
      case "d":
        this.yangguo.move("right", this.battleSceneWidth, sceneHeight);
        this.yangguo.facing = "right";
        this.yangguo.setAnimation("sprint");
        this.lastMoveTime = currentTime;
        break;
      case "w":
        this.yangguo.move("up", this.battleSceneWidth, sceneHeight);
        this.yangguo.setAnimation("sprint");
        this.lastMoveTime = currentTime;
        break;
      case "s":
        this.yangguo.move("down", this.battleSceneWidth, sceneHeight);
        this.yangguo.setAnimation("sprint");
        this.lastMoveTime = currentTime;
        break;
    }
  }

  handlePlayerAttack(key) {
    if (!this.battleActive || this.battleLogicPaused) return;

    const currentTime = performance.now() / 1000;

    if (
      currentTime - this.yangguo.stats.lastAttackTime >=
      this.yangguo.stats.attackSpeed
    ) {
      this.yangguo.stats.isAttacking = true;
      this.yangguo.setAnimation("attack");

      const inRange = this.isInAttackRange(this.yangguo, this.gongsunzhi);

      switch (key) {
        case "1":
          if (
            currentTime - this.yangguo.stats.skill1LastUsedTime <
            this.yangguo.stats.skill1Cooldown
          ) {
            return;
          }

          if (inRange) {
            this.performAttack(this.yangguo, this.gongsunzhi, "玉女素心剑法");
            this.yangguo.stats.skill1LastUsedTime = currentTime;
          } else {
            this.yangguo.stats.skill1LastUsedTime = currentTime;
          }
          break;

        case "2":
          if (
            currentTime - this.yangguo.stats.skill2LastUsedTime <
            this.yangguo.stats.skill2Cooldown
          ) {
            return;
          }

          if (inRange) {
            this.performAttack(this.yangguo, this.gongsunzhi, "天罗地网式");
            this.yangguo.stats.skill2LastUsedTime = currentTime;
          } else {
            this.yangguo.stats.skill2LastUsedTime = currentTime;
          }
          break;

        case " ":
          if (inRange) {
            this.performAttack(this.yangguo, this.gongsunzhi, "普通攻击");
          }
          break;
      }

      this.yangguo.stats.lastAttackTime = currentTime;
    }
  }

  isInAttackRange(attacker, target) {
    const dx = attacker.position.x - target.position.x;
    const dy = attacker.position.y - target.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= attacker.stats.attackRange;
  }

  performAttack(attacker, target, skillName) {
    let baseDamage = attacker.stats.attackDamage;
    let finalDamage = baseDamage;

    if (this.game.gameState.foundBloodyWine && attacker.name === "杨过") {
      finalDamage = Math.floor(baseDamage * 1.2);
    }

    if (skillName === "玉女素心剑法") {
      if (!this.game.gameState.foundXiaolongnv) {
        return;
      }
      finalDamage = 3000;
    } else if (skillName === "天罗地网式") {
      finalDamage = Math.floor(finalDamage * 1.8);
    }

    target.stats.health -= finalDamage;
    if (target.stats.health < 0) target.stats.health = 0;
  }

  renderBattle(ctx) {
    if (!this.battleActive) return;

    ctx.fillStyle = "#0f3460";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.yangguo.render(ctx);
    this.gongsunzhi.render(ctx);

    this.renderHealthBars(ctx);
  }

  renderHealthBars(ctx) {
    const yangguoHealthPercent =
      this.yangguo.stats.health / this.yangguo.stats.maxHealth;
    ctx.fillStyle = "#333";
    ctx.fillRect(50, 20, 200, 20);
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(50, 20, 200 * yangguoHealthPercent, 20);

    const gongsunzhiHealthPercent =
      this.gongsunzhi.stats.health / this.gongsunzhi.stats.maxHealth;
    ctx.fillStyle = "#333";
    ctx.fillRect(ctx.canvas.width - 250, 20, 200, 20);
    ctx.fillStyle = "#F44336";
    ctx.fillRect(ctx.canvas.width - 250, 20, 200 * gongsunzhiHealthPercent, 20);
  }
}


class BattleCharacter {
  constructor(name, size, position) {
    this.name = name;
    this.size = size;
    this.position = position;
    this.stats = {};
    this.isChasing = false;
    this.facing = "right";
    this.currentAnimation = "idle";
    this.animationStartTime = 0;
  }

  setAnimation(animationType) {
    if (this.currentAnimation !== animationType) {
      this.currentAnimation = animationType;
      this.animationStartTime = performance.now() / 1000;
    }
  }

  move(direction, sceneWidth, sceneHeight) {
    const moveDistance = this.stats.moveSpeed;

    switch (direction) {
      case "left":
        this.position.x = Math.max(0, this.position.x - moveDistance);
        break;
      case "right":
        this.position.x = Math.min(
          sceneWidth - this.size,
          this.position.x + moveDistance
        );
        break;
      case "up":
        this.position.y = Math.max(0, this.position.y - moveDistance);
        break;
      case "down":
        this.position.y = Math.min(
          sceneHeight - this.size,
          this.position.y + moveDistance
        );
        break;
    }
  }

  chaseTarget(target, deltaTime, sceneWidth, sceneHeight) {
    const chaseSpeed = 80;
    const moveDistance = Math.max(1, Math.floor(chaseSpeed * deltaTime));

    const dx = target.x - this.position.x;
    const dy = target.y - this.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > this.stats.attackRange) {
      const directionX = dx / distance;
      const directionY = dy / distance;

      this.position.x += directionX * moveDistance;
      this.position.y += directionY * moveDistance;

      if (directionX < 0) {
        this.facing = "left";
      } else if (directionX > 0) {
        this.facing = "right";
      }

      this.isChasing = true;
      this.setAnimation("battle");
    } else {
      this.isChasing = false;
    }

    this.position.x = Math.max(
      0,
      Math.min(sceneWidth - this.size, this.position.x)
    );
    this.position.y = Math.max(
      0,
      Math.min(sceneHeight - this.size, this.position.y)
    );
  }

  render(ctx) {
    ctx.fillStyle = this.name === "杨过" ? "#FFC107" : "#9C27B0";
    ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText(this.name, this.position.x, this.position.y - 10);
  }
}


class SceneSystem {
  constructor(game) {
    this.game = game;
    this.currentScene = 0;
    this.scenes = [
      { name: "绝情谷迷宫", color: "#2E7D32" },
      { name: "绝情谷", color: "#1976D2" },
      { name: "鳄鱼潭", color: "#00695C" },
    ];
  }

  render(ctx) {
    const scene = this.scenes[this.currentScene];
    ctx.fillStyle = scene.color;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    document.querySelector(
      ".scene-indicator"
    ).textContent = `场景: ${scene.name}`;
  }
}


class PlayerCharacter {
  constructor(game) {
    this.game = game;
    this.position = { x: 340, y: 620 };
    this.size = 40;
    this.direction = "right";
    this.isMoving = false;
  }

  move(direction) {
    const moveDistance = 3;
    this.isMoving = true;

    switch (direction) {
      case "w":
        this.position.y -= moveDistance;
        break;
      case "s":
        this.position.y += moveDistance;
        break;
      case "a":
        this.position.x -= moveDistance;
        this.direction = "left";
        break;
      case "d":
        this.position.x += moveDistance;
        this.direction = "right";
        break;
    }

    this.position.x = Math.max(
      0,
      Math.min(this.game.canvas.width - this.size, this.position.x)
    );
    this.position.y = Math.max(
      0,
      Math.min(this.game.canvas.height - this.size, this.position.y)
    );
  }

  update(deltaTime) {
    this.isMoving = false;
  }

  render(ctx) {
    ctx.fillStyle = this.direction === "left" ? "#4CAF50" : "#F44336";
    ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

    ctx.fillStyle = "white";
    ctx.font = "12px Arial";
    ctx.fillText("玩家", this.position.x, this.position.y - 5);
  }
}


window.onload = function () {
  const game = new ShenDiaoGame();
  window.game = game;
};
