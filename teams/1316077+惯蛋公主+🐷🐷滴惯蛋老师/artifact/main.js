const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const gameScreen = document.getElementById("game-screen");
const startBtn = document.getElementById("start-btn");
const quizConfirmBtn = document.getElementById("quiz-confirm");
const quizError = document.getElementById("quiz-error");
const quizForm = document.getElementById("quiz-form");
const assignmentStage = document.getElementById("assignment-stage");
const tableStage = document.getElementById("table-stage");
const finalizeBtn = document.getElementById("finalize-btn");
const defaultErrorText = quizError.textContent;

const questionOrder = ["tempo", "sacrifice", "memory"];

const personaProfiles = {
  AAA: {
    name: "战略稳健型",
    description: "节奏稳扎稳打，擅长控场和资源管理，让整局对局有条不紊地推进。",
    image: "Picture/战略稳健型.png"
  },
  AAB: {
    name: "团队智变型",
    description: "擅长洞察队友节奏，灵活调整策略，在合作与变化之间找到最佳平衡点。",
    image: "Picture/团队智变型.png"
  },
  ABA: {
    name: "理性独行型",
    description: "喜欢凭借缜密的计算独立推进局面，对局内的信息分析和推理尤为敏锐。",
    image: "Picture/理性独行型.png"
  },
  ABB: {
    name: "冷静应变型",
    description: "临场反应冷静沉着，善于根据场面局势及时调整打法，化解突发危机。",
    image: "Picture/冷静应变型.png"
  },
  BAA: {
    name: "冲锋协作型",
    description: "出牌果断勇猛，同时愿意为队友创造机会，力求在配合中拿下胜局。",
    image: "Picture/冲锋协作型.png"
  },
  BAB: {
    name: "激情战术型",
    description: "充满进攻欲望，敢于使用高压战术撕开缺口，用节奏掌控对方心理。",
    image: "Picture/激情战术型.png"
  },
  BBA: {
    name: "强势主导型",
    description: "天生的指挥官，希望掌控全局节奏，为队伍制定清晰的发力路径。",
    image: "Picture/强势主导型.png"
  },
  BBB: {
    name: "感性冒险型",
    description: "牌风多变敢拼，乐于尝试高风险高收益的打法，让牌局充满戏剧性。",
    image: "Picture/感性冒险型.png"
  }
};

const playerBindings = {
  avatar: document.getElementById("player-avatar"),
  name: document.getElementById("player-name"),
  code: document.getElementById("player-code"),
  desc: document.getElementById("player-desc")
};

const tableBindings = {
  player: {
    avatar: document.getElementById("table-player-avatar"),
    name: document.getElementById("table-player-name")
  },
  ally: {
    avatar: document.getElementById("table-ally-avatar"),
    name: document.getElementById("table-ally-name")
  },
  opponentLeft: {
    avatar: document.getElementById("table-opponent-left-avatar"),
    name: document.getElementById("table-opponent-left-name")
  },
  opponentRight: {
    avatar: document.getElementById("table-opponent-right-avatar"),
    name: document.getElementById("table-opponent-right-name")
  }
};

const cardLayerBindings = {
  playerHand: document.getElementById("player-hand"),
  trickCards: document.getElementById("trick-cards"),
  passBtn: document.getElementById("pass-btn")
};
const seatElements = {
  player: document.querySelector(".seat-player"),
  opponentLeft: document.querySelector(".seat-opponent-left"),
  ally: document.querySelector(".seat-ally"),
  opponentRight: document.querySelector(".seat-opponent-right")
};
const passTags = {
  player: document.querySelector('.pass-tag[data-seat="player"]'),
  opponentLeft: document.querySelector('.pass-tag[data-seat="opponentLeft"]'),
  ally: document.querySelector('.pass-tag[data-seat="ally"]'),
  opponentRight: document.querySelector('.pass-tag[data-seat="opponentRight"]')
};
const seatOrder = ["player", "opponentLeft", "ally", "opponentRight"];

const SUIT_SYMBOLS = {
  spade: "♠",
  heart: "♥",
  club: "♣",
  diamond: "♦",
  joker: "🂿"
};

const RANK_SEQUENCE = [
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
  "2",
  "SJ",
  "BJ"
];
const SUIT_SEQUENCE = ["club", "diamond", "heart", "spade", "joker"];
const DECK_MULTIPLIER = 2;

const gameRuntime = {
  deck: [],
  hands: null,
  turnOrder: ["player", "opponentRight", "ally", "opponentLeft"],
  currentTurnIndex: 0
};
const trickState = {
  leader: null,
  currentOwner: null,
  currentCombo: null,
  passed: new Set(),
  round: 1
};
let currentTurn = "player";

const roleBindings = {
  ally: {
    select: document.getElementById("ally-select"),
    avatar: document.getElementById("ally-avatar"),
    name: document.getElementById("ally-name")
  },
  opponentLeft: {
    select: document.getElementById("opponent-left-select"),
    avatar: document.getElementById("opponent-left-avatar"),
    name: document.getElementById("opponent-left-name")
  },
  opponentRight: {
    select: document.getElementById("opponent-right-select"),
    avatar: document.getElementById("opponent-right-avatar"),
    name: document.getElementById("opponent-right-name")
  }
};

let currentPlayerProfile = null;
const defaultPersonaFallback =
  Object.values(personaProfiles)[0] ?? {
    name: "默认性格",
    description: "",
    image: ""
  };
let wasmEngineState = {
  ready: false,
  cards: null
};

function showScreen(screen) {
  [startScreen, quizScreen, gameScreen].forEach((section) => {
    section.classList.toggle("visible", section === screen);
    section.classList.toggle("hidden", section !== screen);
    section.setAttribute("aria-hidden", section === screen ? "false" : "true");
  });
}

function collectAnswers() {
  const result = {};
  for (const key of questionOrder) {
    const selection = quizForm.querySelector(`input[name="${key}"]:checked`);
    if (!selection) {
      return null;
    }
    result[key] = selection.value;
  }
  return result;
}

function getPersonaCode(answers) {
  return questionOrder.map((key) => answers[key]).join("");
}

function clearPlayerPersona() {
  currentPlayerProfile = null;
  playerBindings.avatar.classList.add("hidden");
  playerBindings.avatar.removeAttribute("src");
  playerBindings.avatar.alt = "";
  playerBindings.name.textContent = "等待测试结果";
  playerBindings.code.textContent = "";
  playerBindings.desc.textContent = "完成上方三道测试题后，将生成你的惯蛋性格画像。";
}

function renderPlayerPersona(profile) {
  playerBindings.avatar.src = profile.image;
  playerBindings.avatar.alt = `${profile.name}形象`;
  playerBindings.avatar.classList.remove("hidden");
  playerBindings.name.textContent = profile.name;
  playerBindings.code.textContent = `牌风编码：${profile.code}`;
  playerBindings.desc.textContent = profile.description;
}

function renderSeat(binding, persona, role) {
  let effectivePersona = persona;
  if (!effectivePersona) {
    if (role === "player" && currentPlayerProfile) {
      effectivePersona = currentPlayerProfile;
    } else {
      effectivePersona = defaultPersonaFallback;
    }
  }
  if (effectivePersona.image) {
    binding.avatar.src = effectivePersona.image;
    binding.avatar.classList.remove("hidden");
  } else {
    binding.avatar.classList.add("hidden");
    binding.avatar.removeAttribute("src");
  }
  binding.avatar.alt = `${effectivePersona.name}形象`;
  binding.name.textContent = effectivePersona.name;
}

function populatePersonaOptions() {
  const optionItems = ['<option value="">请选择性格</option>'];
  for (const [code, persona] of Object.entries(personaProfiles)) {
    optionItems.push(`<option value="${code}">${persona.name}</option>`);
  }
  const optionsMarkup = optionItems.join("");
  Object.values(roleBindings).forEach(({ select }) => {
    select.innerHTML = optionsMarkup;
  });
}

function updatePreview(role, code) {
  const binding = roleBindings[role];
  if (!binding) return;
  const persona = personaProfiles[code];
  if (persona) {
    binding.avatar.src = persona.image;
    binding.avatar.alt = `${persona.name}形象`;
    binding.avatar.classList.remove("hidden");
    binding.name.textContent = persona.name;
  } else {
    binding.avatar.classList.add("hidden");
    binding.avatar.removeAttribute("src");
    binding.avatar.alt = "";
    binding.name.textContent = "等待选择";
  }
}

function resetSelections() {
  Object.entries(roleBindings).forEach(([role, { select }]) => {
    select.value = "";
    updatePreview(role, "");
  });
  finalizeBtn.disabled = true;
}

function resetStageViews() {
  assignmentStage.classList.add("visible");
  assignmentStage.classList.remove("hidden");
  assignmentStage.setAttribute("aria-hidden", "false");

  tableStage.classList.add("hidden");
  tableStage.classList.remove("visible");
  tableStage.setAttribute("aria-hidden", "true");

  resetSelections();
  Object.entries(tableBindings).forEach(([role, binding]) => renderSeat(binding, null, role));
  resetTableCards();
}

function checkFinalizeReady() {
  const ready = Object.values(roleBindings).every(({ select }) => select.value);
  finalizeBtn.disabled = !ready;
}

function enterTable(selections) {
  renderSeat(tableBindings.player, currentPlayerProfile, "player");
  renderSeat(tableBindings.ally, personaProfiles[selections.ally], "ally");
  renderSeat(
    tableBindings.opponentLeft,
    personaProfiles[selections.opponentLeft],
    "opponentLeft"
  );
  renderSeat(
    tableBindings.opponentRight,
    personaProfiles[selections.opponentRight],
    "opponentRight"
  );
  renderPlayerHand(getInitialHand());

  assignmentStage.classList.add("hidden");
  assignmentStage.classList.remove("visible");
  assignmentStage.setAttribute("aria-hidden", "true");

  tableStage.classList.add("visible");
  tableStage.classList.remove("hidden");
  tableStage.setAttribute("aria-hidden", "false");
}

function handleSelectChange(role) {
  const selectValue = roleBindings[role].select.value;
  updatePreview(role, selectValue);
  checkFinalizeReady();
}

function resetForm() {
  quizForm.reset();
  quizError.classList.add("hidden");
  quizError.textContent = defaultErrorText;
}

function resetTableCards() {
  if (cardLayerBindings.playerHand) {
    cardLayerBindings.playerHand.innerHTML = "";
  }
  gameRuntime.deck = [];
  gameRuntime.hands = null;
  gameRuntime.currentTurnIndex = 0;
  trickState.leader = null;
  trickState.currentOwner = null;
  trickState.currentCombo = null;
  trickState.passed.clear();
  trickState.round = 1;
  hideAllPassTags();
  clearTrickArea(true);
  setCurrentTurn("player");
}

function renderPlayerHand(cards) {
  if (!cardLayerBindings.playerHand) {
    return;
  }
  const hand = Array.isArray(cards) ? cards : [];
  cardLayerBindings.playerHand.innerHTML = "";
  hand.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "poker-card";
    cardEl.dataset.suit = card.suit;
    if (card.suit === "heart" || card.suit === "diamond") {
      cardEl.classList.add("red");
    }

    cardEl.addEventListener("click", () => handlePlayCard(card));

    const topCorner = document.createElement("div");
    topCorner.className = "card-corner top";
    topCorner.textContent = formatCardLabel(card);

    const centerSymbol = document.createElement("div");
    centerSymbol.className = "card-center";
    centerSymbol.textContent = SUIT_SYMBOLS[card.suit] ?? "";

    const bottomCorner = document.createElement("div");
    bottomCorner.className = "card-corner bottom";
    bottomCorner.textContent = formatCardLabel(card);

    if (card.annotation) {
      const note = document.createElement("div");
      note.className = "card-annotation";
      note.textContent = card.annotation;
      cardEl.append(topCorner, centerSymbol, bottomCorner, note);
    } else {
      cardEl.append(topCorner, centerSymbol, bottomCorner);
    }
    cardLayerBindings.playerHand.appendChild(cardEl);
  });
}

startBtn.addEventListener("click", () => {
  resetForm();
  clearPlayerPersona();
  resetStageViews();
  showScreen(quizScreen);
  const firstRadio = quizForm.querySelector('input[name="tempo"]');
  if (firstRadio) {
    firstRadio.focus();
  }
});

quizConfirmBtn.addEventListener("click", () => {
  const answers = collectAnswers();
  if (!answers) {
    quizError.textContent = defaultErrorText;
    quizError.classList.remove("hidden");
    return;
  }
  quizError.classList.add("hidden");

  const code = getPersonaCode(answers);
  const persona = personaProfiles[code];
  if (!persona) {
    quizError.textContent = "抱歉，暂未找到对应的性格画像，请重试。";
    quizError.classList.remove("hidden");
    return;
  }
  quizError.textContent = defaultErrorText;

  currentPlayerProfile = { code, ...persona };
  renderPlayerPersona(currentPlayerProfile);
  resetStageViews();
  showScreen(gameScreen);
});

Object.keys(roleBindings).forEach((role) => {
  roleBindings[role].select.addEventListener("change", () => handleSelectChange(role));
});

finalizeBtn.addEventListener("click", () => {
  if (!currentPlayerProfile) {
    return;
  }
  const selections = {
    ally: roleBindings.ally.select.value,
    opponentLeft: roleBindings.opponentLeft.select.value,
    opponentRight: roleBindings.opponentRight.select.value
  };
  if (!selections.ally || !selections.opponentLeft || !selections.opponentRight) {
    return;
  }
  enterTable(selections);
});

// 键盘辅助：使用方向键选择选项，Enter 进入下一步
quizScreen.addEventListener("keydown", (event) => {
  const { key } = event;
  if (key !== "ArrowUp" && key !== "ArrowDown" && key !== "Enter") {
    return;
  }

  const activeElement = document.activeElement;
  if (key === "Enter") {
    if (quizScreen.classList.contains("visible")) {
      quizConfirmBtn.click();
      event.preventDefault();
    }
    return;
  }

  const currentFieldset = activeElement.closest("fieldset") || quizForm.querySelector("fieldset");
  if (!currentFieldset) {
    return;
  }

  const options = Array.from(currentFieldset.querySelectorAll('input[type="radio"]'));
  const currentIndex = options.indexOf(activeElement);
  let nextIndex = currentIndex;

  if (key === "ArrowDown") {
    nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
  } else if (key === "ArrowUp") {
    nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
  }

  const nextOption = options[nextIndex];
  if (nextOption) {
    nextOption.focus();
    event.preventDefault();
  }
});

// 允许按数字 1/2 快速选择选项
quizScreen.addEventListener("keypress", (event) => {
  const { key } = event;
  if (key !== "1" && key !== "2") {
    return;
  }
  const fieldset = Array.from(quizForm.querySelectorAll("fieldset")).find(
    (set) => !set.querySelector("input:checked")
  );
  if (!fieldset) {
    return;
  }
  const options = fieldset.querySelectorAll('input[type="radio"]');
  const target = key === "1" ? options[0] : options[1];
  if (target) {
    target.checked = true;
    target.focus();
    event.preventDefault();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  loadGuandanEngine();
  populatePersonaOptions();
  clearPlayerPersona();
  resetStageViews();
  setCurrentTurn("player");
  if (cardLayerBindings.passBtn) {
    cardLayerBindings.passBtn.addEventListener("click", handlePlayerPass);
  }
  startBtn.focus();
});

async function loadGuandanEngine() {
  try {
    const response = await fetch("./moonbit/guandan_engine_main.wasm");
    if (!response.ok) {
      return;
    }
    const bytes = await response.arrayBuffer();
    const imports = {
      spectest: {
        print_i32() {},
        print_i64() {},
        print_f32() {},
        print_f64() {},
        print_char() {},
        print_string() {},
        memory: new WebAssembly.Memory({ initial: 32 })
      }
    };
    const { instance } = await WebAssembly.instantiate(bytes, imports);
    const exports = instance.exports || {};
    const memory = exports.memory || imports.spectest.memory;
    if (!memory) {
      return;
    }

    if (typeof exports.demo_hand_ptr === "function" && typeof exports.demo_hand_len === "function") {
      const ptr = exports.demo_hand_ptr();
      const len = exports.demo_hand_len();
      const bufferView = new Uint8Array(memory.buffer, ptr, len);
      const text = new TextDecoder().decode(bufferView);
      wasmEngineState = {
        ready: true,
        cards: JSON.parse(text)
      };
    } else if (typeof exports.demo_hand === "function") {
      const ptr = exports.demo_hand();
      const len =
        typeof exports.demo_hand_len === "function" ? exports.demo_hand_len() : 0;
      let deckJSON = "";
      if (len > 0) {
        const view = new Uint8Array(memory.buffer, ptr, len);
        deckJSON = new TextDecoder().decode(view);
      }
      if (deckJSON) {
        wasmEngineState = {
          ready: true,
          cards: JSON.parse(deckJSON)
        };
      }
    }
  } catch (error) {
    console.warn("加载 MoonBit 引擎失败，使用前端洗牌手牌。", error);
  }
}

function getInitialHand() {
  if (!gameRuntime.hands) {
    const initial = startNewDeal();
    if (Array.isArray(initial)) {
      return [...initial];
    }
  } else if (Array.isArray(gameRuntime.hands.player)) {
    return [...gameRuntime.hands.player];
  }

  if (wasmEngineState.ready && Array.isArray(wasmEngineState.cards)) {
    return wasmEngineState.cards.flatMap((stack) =>
      Array.isArray(stack)
        ? stack.map((label) => deserializeCard(label))
        : []
    );
  }
  return [];
}

function deserializeCard(text) {
  if (typeof text !== "string" || text.length === 0) {
    return { rank: "", suit: "joker", annotation: "" };
  }
  const rank = text.slice(0, -1);
  const suitSymbol = text.slice(-1);
  const suitEntry = Object.entries(SUIT_SYMBOLS).find(([, symbol]) => symbol === suitSymbol);
  return {
    rank,
    suit: suitEntry ? suitEntry[0] : "joker",
    annotation: suitEntry ? "" : text
  };
}

function startNewDeal() {
  const moonbitResult = dealFromMoonBit();
  let hands;
  let remainder = [];
  if (moonbitResult) {
    hands = moonbitResult.hands;
    remainder = moonbitResult.remainder;
  } else {
    const deck = shuffleDeck(createFullDeck());
    hands = {
      player: [],
      opponentRight: [],
      ally: [],
      opponentLeft: []
    };
    const totalCards = 27 * gameRuntime.turnOrder.length;
    for (let index = 0; index < totalCards; index += 1) {
      const role = gameRuntime.turnOrder[index % gameRuntime.turnOrder.length];
      hands[role].push(deck[index]);
    }
    Object.keys(hands).forEach((role) => {
      hands[role] = sortHand(hands[role]);
    });
    remainder = deck.slice(totalCards);
  }
  gameRuntime.deck = remainder;
  gameRuntime.hands = hands;
  gameRuntime.currentTurnIndex = 0;
  trickState.round = 0;
  startNewTrick("player");
  return hands.player;
}

function createFullDeck() {
  const cards = [];
  for (let n = 0; n < DECK_MULTIPLIER; n += 1) {
    for (const rank of RANK_SEQUENCE.slice(0, 13)) {
      for (const suit of SUIT_SEQUENCE.slice(0, 4)) {
        cards.push({
          rank,
          suit,
          annotation: ""
        });
      }
    }
    cards.push({ rank: "SJ", suit: "joker", annotation: "小王" });
    cards.push({ rank: "BJ", suit: "joker", annotation: "大王" });
  }
  return cards;
}

function shuffleDeck(deck) {
  const cards = [...deck];
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function sortHand(hand) {
  return [...hand].sort((a, b) => {
    const rankDiff = rankWeight(a.rank) - rankWeight(b.rank);
    if (rankDiff !== 0) {
      return rankDiff;
    }
    return suitWeight(a.suit) - suitWeight(b.suit);
  });
}

function rankWeight(rank) {
  const index = RANK_SEQUENCE.indexOf(rank);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function suitWeight(suit) {
  const index = SUIT_SEQUENCE.indexOf(suit);
  return index === -1 ? SUIT_SEQUENCE.length : index;
}

function dealFromMoonBit() {
  const exported = window.moonbitGuandan;
  if (!exported || typeof exported.deal !== "function") {
    return null;
  }
  try {
    const payload = exported.deal();
    if (!payload) return null;
    const parsed = typeof payload === "string" ? JSON.parse(payload) : payload;
    const hands = {
      player: [],
      opponentRight: [],
      ally: [],
      opponentLeft: []
    };
    gameRuntime.turnOrder.forEach((role) => {
      const raw = parsed?.hands?.[role];
      if (Array.isArray(raw)) {
        hands[role] = raw.map(deserializeCard).filter(Boolean);
      }
    });
    const remainder = Array.isArray(parsed?.remainder)
      ? parsed.remainder.map(deserializeCard).filter(Boolean)
      : [];
    return { hands, remainder };
  } catch (error) {
    console.warn("MoonBit 发牌解析失败，使用前端洗牌。", error);
    return null;
  }
}

function formatCardLabel(card) {
  const rank = card.rank ?? "";
  const suitSymbol = SUIT_SYMBOLS[card.suit] ?? "";
  if (rank === "SJ") return "SJ";
  if (rank === "BJ") return "BJ";
  return `${rank}${suitSymbol}`;
}

function handlePlayCard(card) {
  if (currentTurn !== "player") {
    return;
  }
  if (!Array.isArray(gameRuntime.hands?.player)) {
    return;
  }
  const index = gameRuntime.hands.player.indexOf(card);
  if (index === -1) {
    return;
  }
  const [played] = gameRuntime.hands.player.splice(index, 1);
  if (!played) {
    return;
  }
  renderPlayerHand(gameRuntime.hands.player);
  const combo = { cards: [played] };
  if (trickState.currentOwner === null) {
    trickState.leader = "player";
  }
  trickState.currentOwner = "player";
  trickState.currentCombo = combo;
  trickState.passed.clear();
  hideAllPassTags();
  showTrick("player", combo.cards);
  advanceTurn("player");
}

function handlePlayerPass() {
  if (currentTurn !== "player") {
    return;
  }
  showPassTag("player");
  trickState.passed.add("player");
  if (trickState.currentOwner && trickState.passed.size >= seatOrder.length - 1) {
    const winner = trickState.currentOwner;
    startNewTrick(winner);
    return;
  }
  advanceTurn("player");
}

function showTrick(seat, cards) {
  if (!cardLayerBindings.trickCards) return;
  const zone = cardLayerBindings.trickCards;
  zone.classList.remove("fade-out");
  zone.innerHTML = "";
  cards.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "played-card";
    cardEl.dataset.suit = card.suit;
    if (card.suit === "heart" || card.suit === "diamond") {
      cardEl.classList.add("red");
    }
    const top = document.createElement("div");
    top.className = "card-corner";
    top.textContent = formatCardLabel(card);

    const center = document.createElement("div");
    center.className = "card-center";
    center.textContent = SUIT_SYMBOLS[card.suit] ?? "";

    const bottom = document.createElement("div");
    bottom.className = "card-corner";
    bottom.textContent = formatCardLabel(card);

    cardEl.append(top, center, bottom);
    zone.appendChild(cardEl);
  });
}

function clearTrickArea(immediate = false) {
  if (!cardLayerBindings.trickCards) return;
  const zone = cardLayerBindings.trickCards;
  if (immediate) {
    zone.innerHTML = "";
    zone.classList.remove("fade-out");
    return;
  }
  zone.classList.add("fade-out");
  setTimeout(() => {
    zone.innerHTML = "";
    zone.classList.remove("fade-out");
  }, 220);
}

function showPassTag(seat) {
  const tag = passTags[seat];
  if (!tag) return;
  tag.classList.add("visible");
  if (tag.passTimeout) {
    clearTimeout(tag.passTimeout);
  }
  tag.passTimeout = setTimeout(() => {
    tag.classList.remove("visible");
    tag.passTimeout = null;
  }, 1800);
}

function hideAllPassTags() {
  Object.values(passTags).forEach((tag) => {
    if (!tag) return;
    tag.classList.remove("visible");
    if (tag.passTimeout) {
      clearTimeout(tag.passTimeout);
      tag.passTimeout = null;
    }
  });
}

function setCurrentTurn(seat) {
  currentTurn = seat;
  Object.entries(seatElements).forEach(([key, element]) => {
    if (!element) return;
    if (key === seat) {
      element.classList.add("active-seat");
    } else {
      element.classList.remove("active-seat");
    }
  });
  if (cardLayerBindings.passBtn) {
    cardLayerBindings.passBtn.disabled = seat !== "player";
  }
}

function startNewTrick(newLeader) {
  clearTrickArea();
  hideAllPassTags();
  trickState.leader = newLeader;
  trickState.currentOwner = null;
  trickState.currentCombo = null;
  trickState.passed.clear();
  trickState.round += 1;
  setCurrentTurn(newLeader);
  if (newLeader !== "player") {
    processAITurn(newLeader);
  }
}

function getNextSeat(seat) {
  const index = seatOrder.indexOf(seat);
  if (index === -1) {
    return "player";
  }
  return seatOrder[(index + 1) % seatOrder.length];
}

function advanceTurn(seat) {
  const nextSeat = getNextSeat(seat);
  setCurrentTurn(nextSeat);
  if (nextSeat === "player") {
    return;
  }
  processAITurn(nextSeat);
}

function processAITurn(seat) {
  setTimeout(() => {
    showPassTag(seat);
    trickState.passed.add(seat);
    if (trickState.currentOwner && trickState.passed.size >= seatOrder.length - 1) {
      const winner = trickState.currentOwner;
      startNewTrick(winner);
      return;
    }
    advanceTurn(seat);
  }, 900);
}

function cardsToLabels(cards) {
  return cards.map((card) => formatCardLabel(card));
}

if (!window.moonbitGuandan) {
  window.moonbitGuandan = {};
}

window.moonbitGuandan.deal = () => {
  const deck = shuffleDeck(createFullDeck());
  const hands = {
    player: [],
    opponentRight: [],
    ally: [],
    opponentLeft: []
  };
  const totalCards = 27 * gameRuntime.turnOrder.length;
  for (let index = 0; index < totalCards; index += 1) {
    const role = gameRuntime.turnOrder[index % gameRuntime.turnOrder.length];
    hands[role].push(deck[index]);
  }
  Object.keys(hands).forEach((role) => {
    hands[role] = sortHand(hands[role]);
  });
  const remainder = deck.slice(totalCards);
  return {
    hands: {
      player: cardsToLabels(hands.player),
      opponentRight: cardsToLabels(hands.opponentRight),
      ally: cardsToLabels(hands.ally),
      opponentLeft: cardsToLabels(hands.opponentLeft)
    },
    remainder: cardsToLabels(remainder)
  };
};

