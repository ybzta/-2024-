const foxArt = `
  <svg class="animal-art" viewBox="0 0 260 220" aria-hidden="true">
    <ellipse cx="132" cy="197" rx="92" ry="12" fill="rgba(40,48,61,.08)"></ellipse>
    <path d="M36 143c-20-8-28-24-22-42 9-27 44-33 79-14 30 17 47 45 38 65-9 20-47 11-95-9Z" fill="#df6f28"></path>
    <path d="M16 100c28 5 59 25 84 56-22-4-44-8-64-13-19-10-26-27-20-43Z" fill="#fff1df"></path>
    <path d="M84 118c20-31 56-48 99-42 34 5 59 26 67 54 4 14-5 26-27 35-25 10-68 12-110 4-32-6-44-28-29-51Z" fill="#f08a35"></path>
    <path d="M169 81c10-31 25-53 45-66 3 31-6 57-27 77Z" fill="#f08a35"></path>
    <path d="M187 82c7-16 15-30 25-41 0 15-5 29-16 43Z" fill="#5b3528"></path>
    <path d="M126 84c-13-26-18-50-12-74 22 14 39 37 51 69Z" fill="#f08a35"></path>
    <path d="M134 81c-8-14-13-29-14-43 12 10 22 24 29 41Z" fill="#5b3528"></path>
    <path d="M150 82c27-18 63-8 78 17 7 12 16 20 28 26 6 3 5 9-1 12-19 10-43 11-72 5-34-7-52-22-54-39-1-8 6-15 21-21Z" fill="#f08a35"></path>
    <path d="M211 109c18 2 33 8 45 17-15 7-30 9-46 6-10-2-17-6-23-13 7-7 15-10 24-10Z" fill="#fff1df"></path>
    <path d="M205 125c-3 17-12 30-28 39-13-2-25-7-37-15 26-1 48-9 65-24Z" fill="#fff1df"></path>
    <circle cx="194" cy="101" r="5.8" fill="#14171c"></circle>
    <path d="M249 126c4-1 8 1 10 4-3 4-8 5-14 4 0-4 1-7 4-8Z" fill="#14171c"></path>
    <path d="M109 156c18 17 57 21 86 9-12 18-32 28-61 28-24 0-34-13-25-37Z" fill="#fff1df"></path>
    <path d="M101 160c-10 14-14 26-12 38h17c-1-12 3-23 12-34Z" fill="#6b3f2b"></path>
    <path d="M135 164c-6 12-7 23-3 34h17c-3-11-2-22 5-32Z" fill="#6b3f2b"></path>
    <path d="M184 164c3 12 2 23-4 34h17c6-11 7-23 3-36Z" fill="#6b3f2b"></path>
    <path d="M219 154c3 16 1 31-7 44h17c8-14 10-30 5-47Z" fill="#6b3f2b"></path>
  </svg>`;

const rawWords = [
  ["U1", "fox", "狐狸", "🦊"],
  ["U1", "giraffe", "长颈鹿", "🦒"],
  ["U1", "eagle", "鹰", "🦅"],
  ["U1", "wolf", "狼", "🐺"],
  ["U1", "penguin", "企鹅", "🐧"],
  ["U1", "care", "照顾", "🤲"],
  ["U1", "sandwich", "三明治", "🥪"],
  ["U1", "snake", "蛇", "🐍"],
  ["U1", "scary", "吓人的", "😨"],
  ["U1", "neck", "脖子", "🦒"],
  ["U1", "guess", "猜测", "❓"],
  ["U1", "shark", "鲨鱼", "🦈"],
  ["U1", "whale", "鲸", "🐋"],
  ["U1", "huge", "巨大的", "🔆"],
  ["U1", "dangerous", "危险的", "⚠️"],
  ["U1", "save", "救", "🛟"],
  ["U1", "luck", "幸运", "🍀"],
  ["U1", "Thai", "泰国的", "🇹🇭"],
  ["U1", "trunk", "象鼻", "🐘"],
  ["U1", "pick", "捡", "🤏"],
  ["U1", "carry", "拿", "🧺"],
  ["U1", "playful", "爱玩的", "🤸"],
  ["U1", "swimmer", "游泳者", "🏊"],
  ["U1", "culture", "文化", "🏛️"],
  ["U1", "however", "然而", "↔️"],
  ["U1", "danger", "危险", "⚠️"],
  ["U1", "forest", "森林", "🌲"],
  ["U1", "kill", "杀死", "✖️"],
  ["U1", "ivory", "象牙", "🐘"],
  ["U1", "friendly", "友好的", "😊"],
  ["U1", "quite", "相当", "➕"],
  ["U1", "fur", "软毛", "🧶"],
  ["U1", "blind", "失明的", "🕶️"],
  ["U1", "hearing", "听觉", "👂"],
  ["U1", "Antarctica", "南极洲", "🧊"],
  ["U1", "Africa", "非洲", "🌍"],
  ["U1", "Thailand", "泰国", "🇹🇭"],

  ["U2", "rule", "规则", "📏"],
  ["U2", "order", "秩序", "📋"],
  ["U2", "follow", "遵循", "👣"],
  ["U2", "arrive", "到达", "📍"],
  ["U2", "hallway", "走廊", "🏫"],
  ["U2", "uniform", "校服", "👔"],
  ["U2", "litter", "垃圾", "🗑️"],
  ["U2", "polite", "有礼貌的", "🙇"],
  ["U2", "treat", "对待", "🤝"],
  ["U2", "respect", "尊敬", "🙏"],
  ["U2", "if", "如果", "🔀"],
  ["U2", "jacket", "夹克衫", "🧥"],
  ["U2", "everything", "每件事", "🌐"],
  ["U2", "lend", "借给", "🤲"],
  ["U2", "sweet", "糖果", "🍬"],
  ["U2", "snack", "小吃", "🥨"],
  ["U2", "mobile", "可移动的", "📱"],
  ["U2", "queue", "队列", "🚶"],
  ["U2", "Dr", "博士", "🩺"],
  ["U2", "either", "也", "➕"],
  ["U2", "world", "世界", "🌍"],
  ["U2", "clothes", "衣服", "👕"],
  ["U2", "never", "从不", "🚫"],
  ["U2", "healthy", "健康的", "💪"],

  ["U3", "glove", "手套", "🧤"],
  ["U3", "mat", "垫子", "▭"],
  ["U3", "rope", "绳子", "🪢"],
  ["U3", "racket", "球拍", "🏸"],
  ["U3", "hardly", "几乎不", "🌫️"],
  ["U3", "ever", "曾经", "⏳"],
  ["U3", "once", "一次", "1️⃣"],
  ["U3", "twice", "两次", "2️⃣"],
  ["U3", "mine", "我的", "🙋"],
  ["U3", "hers", "她的", "👧"],
  ["U3", "maybe", "也许", "🤔"],
  ["U3", "well-used", "使用得多的", "🏷️"],
  ["U3", "practice", "练习", "✍️"],
  ["U3", "perfect", "完美的", "🌟"],
  ["U3", "seldom", "很少", "🌙"],
  ["U3", "badminton", "羽毛球", "🏸"],
  ["U3", "double", "双打", "👥"],
  ["U3", "sometime", "某时", "🕒"],
  ["U3", "volleyball", "排球", "🏐"],
  ["U3", "theirs", "他们的", "👥"],
  ["U3", "ours", "我们的", "👫"],
  ["U3", "result", "结果", "📊"],
  ["U3", "relax", "放松", "🧘"],

  ["U4", "dish", "一道菜", "🍽️"],
  ["U4", "choice", "选择", "☑️"],
  ["U4", "meal", "一餐", "🍽️"],
  ["U4", "pork", "猪肉", "🥩"],
  ["U4", "strawberry", "草莓", "🍓"],
  ["U4", "menu", "菜单", "📋"],
  ["U4", "customer", "顾客", "🧑"],
  ["U4", "serve", "服务", "🍽️"],
  ["U4", "waitress", "女服务员", "👩‍🍳"],
  ["U4", "sir", "先生", "🎩"],
  ["U4", "instead", "代替", "🔁"],
  ["U4", "pear", "梨", "🍐"],
  ["U4", "sugar", "糖", "🍬"],
  ["U4", "common", "共同的", "🔗"],
  ["U4", "among", "在……中", "⭕"],
  ["U4", "thirsty", "渴的", "🥤"],
  ["U4", "soft", "柔软的", "☁️"],
  ["U4", "enough", "足够的", "✅"],
  ["U4", "article", "文章", "📄"],
  ["U4", "anything", "任何事物", "❔"],
  ["U4", "Gongbao", "宫保", "🍗"],
  ["U4", "America", "美国", "🇺🇸"],
  ["U4", "Dongpo", "东坡", "🥘"],

  ["U5", "ride", "骑", "🚲"],
  ["U5", "moment", "时刻", "🕒"],
  ["U5", "work", "工作", "💼"],
  ["U5", "rush", "冲", "💨"],
  ["U5", "shine", "照耀", "☀️"],
  ["U5", "brightly", "明亮地", "✨"],
  ["U5", "colourful", "色彩鲜艳的", "🌈"],
  ["U5", "slowly", "缓慢地", "🐢"],
  ["U5", "online", "在线的", "💻"],
  ["U5", "New York", "纽约", "🗽"],
  ["U5", "Kenya", "肯尼亚", "🇰🇪"],
  ["U5", "USA", "美国", "🇺🇸"],
  ["U5", "Paris", "巴黎", "🗼"],
  ["U5", "Canada", "加拿大", "🇨🇦"],
  ["U5", "tourist", "游客", "🧳"],
  ["U5", "museum", "博物馆", "🏛️"],
  ["U5", "gallery", "美术馆", "🖼️"],
  ["U5", "photo", "照片", "📷"],
  ["U5", "raincoat", "雨衣", "🧥"],
  ["U5", "coffee", "咖啡", "☕"],

  ["U6", "rest", "休息", "🛋️"],
  ["U6", "affect", "影响", "〰️"],
  ["U6", "dry", "干的", "🏜️"],
  ["U6", "lightning", "闪电", "⚡"],
  ["U6", "stormy", "有暴风雨的", "⛈️"],
  ["U6", "north", "北方", "⬆️"],
  ["U6", "west", "西方", "⬅️"],
  ["U6", "south", "南方", "⬇️"],
  ["U6", "east", "东方", "➡️"],
  ["U6", "cloud", "云", "☁️"],
  ["U6", "magical", "神奇的", "✨"],
  ["U6", "rock", "岩石", "🪨"],
  ["U6", "area", "地区", "🗺️"],
  ["U6", "progress", "进展", "📈"],
  ["U6", "although", "虽然", "↔️"],
  ["U6", "still", "仍然", "⏳"],
  ["U6", "experience", "经历", "🎒"],
  ["U6", "through", "穿过", "➡️"],
  ["U6", "glad", "高兴的", "🙂"],
  ["U6", "rain", "雨", "🌧️"],
  ["U6", "weather", "天气", "🌤️"],
  ["U6", "cloudy", "多云的", "☁️"],
  ["U6", "windy", "多风的", "🌬️"],
  ["U6", "sunny", "晴朗的", "☀️"],
  ["U6", "hometown", "家乡", "🏠"],
  ["U6", "sad", "伤心的", "😢"],
  ["U6", "beach", "海滩", "🏖️"],
  ["U6", "again", "再次", "🔁"],
  ["U6", "snow", "雪", "❄️"],
  ["U6", "winter", "冬季", "⛄"],
  ["U6", "summer", "夏季", "☀️"],
  ["U6", "sweater", "毛衣", "🧶"],
  ["U6", "kite", "风筝", "🪁"],
  ["U6", "spring", "春季", "🌱"],
  ["U6", "season", "季节", "🍃"],
  ["U6", "umbrella", "伞", "☂️"],
  ["U6", "dirty", "肮脏的", "🧽"],
  ["U6", "top", "顶部", "🔝"],
  ["U6", "angry", "生气的", "😠"],

  ["U7", "wrong", "错误的", "❌"],
  ["U7", "astronaut", "宇航员", "👨‍🚀"],
  ["U7", "robot", "机器人", "🤖"],
  ["U7", "space", "太空", "🌌"],
  ["U7", "stop", "停下", "🛑"],
  ["U7", "farmer", "农民", "🧑‍🌾"],
  ["U7", "agree", "同意", "👍"],
  ["U7", "quickly", "快速地", "⚡"],
  ["U7", "smile", "微笑", "🙂"],
  ["U7", "yesterday", "昨天", "📅"],
  ["U7", "bus", "公交车", "🚌"],
  ["U7", "plant", "植物", "🌱"],
  ["U7", "piece", "片", "🧩"],
  ["U7", "remove", "移开", "↩️"],
  ["U7", "person", "人", "🧑"],
  ["U7", "painting", "绘画", "🎨"],

  ["U8", "upon", "在……上", "⬆️"],
  ["U8", "bite", "咬", "🦷"],
  ["U8", "net", "网", "🕸️"],
  ["U8", "hunter", "猎人", "🏹"],
  ["U8", "promise", "承诺", "🤝"],
  ["U8", "war", "战争", "⚔️"],
  ["U8", "neighbour", "邻居", "🏘️"],
  ["U8", "wise", "明智的", "🧠"],
  ["U8", "emperor", "皇帝", "👑"],
  ["U8", "lie", "撒谎", "🤥"],
  ["U8", "pretend", "假装", "🎭"],
  ["U8", "official", "官员", "🏛️"],
  ["U8", "silly", "愚蠢的", "🤪"],
  ["U8", "decide", "决定", "✅"],
  ["U8", "afraid", "害怕的", "😨"],
  ["U8", "suddenly", "突然地", "💥"],
  ["U8", "truth", "真相", "🔎"],
  ["U8", "true", "真正的", "✅"],
  ["U8", "hate", "讨厌", "😖"],
  ["U8", "king", "国王", "👑"],
  ["U8", "rich", "富有的", "💰"],
  ["U8", "artist", "艺术家", "🎨"],
  ["U8", "powerful", "强大的", "💪"],
  ["U8", "ugly", "丑陋的", "🪞"],
  ["U8", "duckling", "小鸭子", "🦆"],
  ["U8", "real", "真正的", "✅"],
  ["U8", "search", "寻找", "🔍"],
  ["U8", "hen", "母鸡", "🐔"],
  ["U8", "hopefully", "有希望地", "🌤️"],
  ["U8", "purr", "发出呜呜声", "🐱"],
  ["U8", "lay", "下蛋", "🥚"],
  ["U8", "swan", "天鹅", "🦢"],
  ["U8", "feather", "羽毛", "🪶"],
  ["U8", "size", "大小", "📏"],
  ["U8", "believe", "相信", "🙏"],
  ["U8", "praise", "赞美", "👏"],
  ["U8", "fisherman", "渔夫", "🎣"],
  ["U8", "fishing", "钓鱼", "🎣"],
  ["U8", "genie", "妖怪", "🧞"],
  ["U8", "die", "死亡", "🕯️"],
  ["U8", "someone", "某人", "🧑"],
  ["U8", "set", "使处于", "⚙️"],
  ["U8", "anyone", "任何人", "👤"],
  ["U8", "himself", "他自己", "👤"],
];

function splitWord(word) {
  const clean = word.replace(/[^A-Za-z -]/g, "");
  if (clean.includes(" ")) return clean.split(" ").filter(Boolean);
  if (clean.includes("-")) return clean.split("-").filter(Boolean);
  const vowels = "aeiouy";
  const chunks = [];
  let chunk = "";
  for (const letter of clean) {
    chunk += letter;
    if (vowels.includes(letter.toLowerCase()) && chunk.length > 1) {
      chunks.push(chunk);
      chunk = "";
    }
  }
  if (chunk) chunks.push(chunk);
  return chunks.length > 1 ? chunks : clean.split("");
}

function createWord([unit, word, chinese, emoji]) {
  return { unit, word, chinese, emoji, chunks: splitWord(word) };
}

function chunkList(list, size, meta = {}) {
  const groups = [];
  for (let i = 0; i < list.length; i += size) {
    groups.push({ ...meta, part: Math.floor(i / size) + 1, words: list.slice(i, i + size) });
  }
  return groups;
}

function buildSectionGroups(entries) {
  const units = [];
  const byUnit = new Map();
  entries.forEach((entry) => {
    const unit = entry[0];
    if (!byUnit.has(unit)) {
      byUnit.set(unit, []);
      units.push(unit);
    }
    byUnit.get(unit).push(createWord(entry));
  });

  return units.flatMap((unit) => {
    const list = byUnit.get(unit);
    const splitAt = Math.ceil(list.length / 2);
    const sections = [
      { section: "A", words: list.slice(0, splitAt) },
      { section: "B", words: list.slice(splitAt) },
    ];
    return sections.flatMap(({ section, words: sectionWords }) =>
      chunkList(sectionWords, 10, { unit, section }),
    );
  });
}

const wordGroups = buildSectionGroups(rawWords);
let words = wordGroups[0].words;

const phases = ["listen", "speak", "read", "write"];
const phaseNames = { listen: "听", speak: "说", read: "读", write: "写" };

const state = {
  phase: "listen",
  group: 0,
  index: 0,
  listenMode: "learn",
  readMode: "choice",
  writeMode: "dictation",
  restoreAnswer: [],
  recordedUrl: null,
  mediaRecorder: null,
  chunks: [],
  voicesReady: false,
};

const el = {
  unitMenuButton: document.querySelector("#unitMenuButton"),
  unitMenu: document.querySelector("#unitMenu"),
  modeLabel: document.querySelector("#modeLabel"),
  titleWord: document.querySelector("#titleWord"),
  phaseButtons: document.querySelectorAll(".phase"),
  tasks: {
    listen: document.querySelector("#listenTask"),
    speak: document.querySelector("#speakTask"),
    read: document.querySelector("#readTask"),
    write: document.querySelector("#writeTask"),
  },
  completeTask: document.querySelector("#completeTask"),
  listenVisual: document.querySelector("#listenVisual"),
  listenHero: document.querySelector("#listenHero"),
  listenMeaning: document.querySelector("#listenMeaning"),
  listenSound: document.querySelector("#listenSound"),
  listenNext: document.querySelector("#listenNext"),
  listenTestSound: document.querySelector("#listenTestSound"),
  listenTestNext: document.querySelector("#listenTestNext"),
  listenTest: document.querySelector("#listenTest"),
  listenChoices: document.querySelector("#listenChoices"),
  listenFeedback: document.querySelector("#listenFeedback"),
  speakEquation: document.querySelector("#speakEquation"),
  speakVisual: document.querySelector("#speakVisual"),
  speakScore: document.querySelector("#speakScore"),
  originalSound: document.querySelector("#originalSound"),
  recordVoice: document.querySelector("#recordVoice"),
  myVoice: document.querySelector("#myVoice"),
  speakNext: document.querySelector("#speakNext"),
  speakPrompt: document.querySelector("#speakPrompt"),
  readChoiceVisual: document.querySelector("#readChoiceVisual"),
  readChoiceMeaning: document.querySelector("#readChoiceMeaning"),
  wordChoices: document.querySelector("#wordChoices"),
  wordChoiceFeedback: document.querySelector("#wordChoiceFeedback"),
  readSound: document.querySelector("#readSound"),
  readNext: document.querySelector("#readNext"),
  restoreVisual: document.querySelector("#restoreVisual"),
  restoreMeaning: document.querySelector("#restoreMeaning"),
  restoreBank: document.querySelector("#restoreBank"),
  restoreTarget: document.querySelector("#restoreTarget"),
  restoreFeedback: document.querySelector("#restoreFeedback"),
  writeModeLabel: document.querySelector("#writeModeLabel"),
  writeVisual: document.querySelector("#writeVisual"),
  writeMeaning: document.querySelector("#writeMeaning"),
  writeSound: document.querySelector("#writeSound"),
  writeInput: document.querySelector("#writeInput"),
  checkWrite: document.querySelector("#checkWrite"),
  writeNext: document.querySelector("#writeNext"),
  writeFeedback: document.querySelector("#writeFeedback"),
  wordStrip: document.querySelector("#wordStrip"),
  restart: document.querySelector("#restart"),
};

function setGroup(index) {
  state.group = Math.max(0, Math.min(index, wordGroups.length - 1));
  words = wordGroups[state.group].words;
  state.index = 0;
}

function currentGroup() {
  return wordGroups[state.group];
}

function groupLabel(group = currentGroup()) {
  return `${group.unit}${group.section}${group.part > 1 ? group.part : ""}`;
}

function jumpToGroup(index) {
  setGroup(index);
  state.phase = "listen";
  state.listenMode = "learn";
  state.readMode = "choice";
  state.writeMode = "dictation";
  el.unitMenu.classList.add("hidden");
  el.unitMenuButton.setAttribute("aria-expanded", "false");
  renderAndAutoPlay();
}

function currentWord() {
  return words[state.index];
}

function normalizeAnswer(text) {
  return text.trim().toLowerCase().replace(/[^a-z]/g, "");
}

function speak(text, rate = 0.78) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate;
  const voice = selectEnglishVoice();
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function selectEnglishVoice() {
  const voices = window.speechSynthesis.getVoices();
  const english = voices.filter((voice) => /^en[-_]/i.test(voice.lang));
  const preferred = [
    "Samantha",
    "Ava",
    "Allison",
    "Susan",
    "Karen",
    "Google US English",
    "Microsoft Aria",
    "Microsoft Jenny",
  ];
  for (const name of preferred) {
    const found = english.find((voice) => voice.name.includes(name));
    if (found) return found;
  }
  return english.find((voice) => /US|United States|Natural|Premium/i.test(`${voice.name} ${voice.lang}`)) || english[0];
}

function speakThree() {
  const word = currentWord();
  const splitText = word.chunks.join(" ");
  const sequence = [splitText, splitText, splitText, word.word, word.word, word.word];
  sequence.forEach((text, index) => {
    window.setTimeout(() => speak(text, index < 3 ? 0.62 : 0.76), index * 1050);
  });
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleOutOfOrder(list) {
  if (list.length < 2) return [...list];
  for (let attempt = 0; attempt < 12; attempt += 1) {
    const shuffled = shuffle(list);
    if (shuffled.some((item, index) => item !== list[index])) return shuffled;
  }
  const rotated = [...list];
  rotated.push(rotated.shift());
  return rotated;
}

function renderChunks(container, chunks) {
  container.innerHTML = "";
  chunks.forEach((chunk) => {
    const item = document.createElement("span");
    item.className = "chunk";
    item.textContent = chunk;
    container.appendChild(item);
  });
}

function renderEquation(container, word) {
  container.innerHTML = "";
  word.chunks.forEach((chunk, index) => {
    const box = document.createElement("span");
    box.className = "eq-box";
    box.textContent = chunk;
    container.appendChild(box);
    if (index < word.chunks.length - 1) {
      const plus = document.createElement("span");
      plus.className = "eq-symbol";
      plus.textContent = "+";
      container.appendChild(plus);
    }
  });
  const arrow = document.createElement("span");
  arrow.className = "eq-symbol";
  arrow.textContent = "→";
  container.appendChild(arrow);
  const whole = document.createElement("span");
  whole.className = "eq-box whole-box";
  whole.textContent = word.word;
  container.appendChild(whole);
}

function phaseLabel() {
  if (state.phase === "listen") return state.listenMode === "learn" ? "听音看图" : "听音选图 Test";
  if (state.phase === "speak") return "拆分读 + 整体读";
  if (state.phase === "read") return "听音看词 + 复原单词";
  if (state.phase === "write") return "";
  return "";
}

function updateHeader() {
  const word = currentWord();
  el.modeLabel.textContent = "";
  if (state.phase === "listen") {
    el.titleWord.textContent = "";
  } else if (state.phase === "write") {
    el.titleWord.textContent = "";
  } else {
    el.titleWord.textContent = word.word;
  }
  el.phaseButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.phase === state.phase);
    button.classList.toggle("done", phases.indexOf(button.dataset.phase) < phases.indexOf(state.phase));
  });
}

function showTask(name) {
  Object.entries(el.tasks).forEach(([key, node]) => node.classList.toggle("active", key === name));
  el.completeTask.classList.add("hidden");
}

function renderStrip() {
  el.wordStrip.innerHTML = "";
  words.forEach((word, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `strip-item${index === state.index ? " active" : ""}`;
    item.textContent = index + 1;
    item.title = `${word.word} ${word.chinese}`;
    item.addEventListener("click", () => {
      state.index = index;
      render();
    });
    el.wordStrip.appendChild(item);
  });
}

function renderUnitMenu() {
  el.unitMenuButton.textContent = groupLabel();
  el.unitMenu.innerHTML = "";
  const units = [...new Set(wordGroups.map((group) => group.unit))];
  units.forEach((unit) => {
    const unitRow = document.createElement("div");
    unitRow.className = "unit-row";
    const unitName = document.createElement("div");
    unitName.className = "unit-name";
    unitName.textContent = unit;
    unitRow.appendChild(unitName);

    ["A", "B"].forEach((section) => {
      const sectionWrap = document.createElement("div");
      sectionWrap.className = "section-pills";
      wordGroups.forEach((group, index) => {
        if (group.unit !== unit || group.section !== section) return;
        const button = document.createElement("button");
        button.type = "button";
        button.className = `section-pill${index === state.group ? " active" : ""}`;
        button.textContent = `${section}${group.part > 1 ? group.part : ""}`;
        button.title = `${unit}${section}`;
        button.addEventListener("click", () => jumpToGroup(index));
        sectionWrap.appendChild(button);
      });
      unitRow.appendChild(sectionWrap);
    });
    el.unitMenu.appendChild(unitRow);
  });
}

function renderListen() {
  const word = currentWord();
  showTask("listen");
  el.listenVisual.innerHTML = word.art || word.emoji;
  el.listenMeaning.textContent = "";
  el.listenFeedback.textContent = "";

  if (state.listenMode === "learn") {
    el.listenHero.classList.remove("hidden");
    el.listenTest.classList.add("hidden");
    el.listenNext.setAttribute("aria-label", state.index === words.length - 1 ? "进入听音选图" : "下一个");
  } else {
    el.listenHero.classList.add("hidden");
    el.listenTest.classList.remove("hidden");
    el.listenNext.setAttribute("aria-label", "下一个");
    renderListenChoices();
  }
}

function renderListenChoices() {
  const target = currentWord();
  const choices = shuffle([target, ...shuffle(words.filter((word) => word.word !== target.word)).slice(0, 3)]);
  el.listenChoices.innerHTML = "";
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.innerHTML = `<span class="choice-visual">${choice.emoji}</span>`;
    button.addEventListener("click", () => {
      if (choice.word === target.word) {
        button.classList.add("correct");
        el.listenFeedback.textContent = "正确";
        el.listenFeedback.className = "feedback good";
      } else {
        button.classList.add("wrong");
        el.listenFeedback.textContent = "再听一次";
        el.listenFeedback.className = "feedback bad";
      }
    });
    el.listenChoices.appendChild(button);
  });
}

function renderSpeak() {
  const word = currentWord();
  showTask("speak");
  el.speakVisual.innerHTML = word.art || word.emoji;
  renderEquation(el.speakEquation, word);
  el.speakScore.textContent = "--";
  el.speakScore.className = "score idle";
  el.speakPrompt.textContent = "";
}

function renderRead() {
  const word = currentWord();
  showTask("read");
  document.body.dataset.readMode = state.readMode;
  el.readChoiceVisual.textContent = word.emoji;
  el.readChoiceMeaning.textContent = "";
  el.restoreVisual.textContent = word.emoji;
  el.restoreMeaning.textContent = "";
  renderWordChoices();
  renderRestore();
}

function renderWordChoices() {
  const target = currentWord();
  const options = shuffle([target, ...shuffle(words.filter((word) => word.word !== target.word)).slice(0, 3)]);
  el.wordChoices.innerHTML = "";
  el.wordChoiceFeedback.textContent = "";
  el.wordChoiceFeedback.className = "feedback";
  options.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-choice";
    button.textContent = item.word;
    button.addEventListener("click", () => {
      if (item.word === target.word) {
        button.classList.add("correct");
        el.wordChoiceFeedback.textContent = "";
        el.wordChoiceFeedback.className = "feedback good";
      } else {
        button.classList.add("wrong");
        el.wordChoiceFeedback.textContent = "Try again!";
        el.wordChoiceFeedback.className = "feedback bad";
      }
    });
    el.wordChoices.appendChild(button);
  });
}

function renderRestore() {
  const word = currentWord();
  state.restoreAnswer = [];
  el.restoreBank.innerHTML = "";
  el.restoreTarget.innerHTML = "";
  el.restoreFeedback.textContent = "";
  el.restoreFeedback.className = "feedback";

  shuffleOutOfOrder(word.chunks).forEach((chunk) => {
    const token = document.createElement("button");
    token.type = "button";
    token.className = "token";
    token.textContent = chunk;
    token.addEventListener("click", () => {
      state.restoreAnswer.push(chunk);
      token.disabled = true;
      token.classList.add("used");
      const placed = document.createElement("span");
      placed.className = "token placed";
      placed.textContent = chunk;
      el.restoreTarget.appendChild(placed);
      checkRestore();
    });
    el.restoreBank.appendChild(token);
  });
}

function checkRestore() {
  const word = currentWord();
  if (state.restoreAnswer.length !== word.chunks.length) return;
  if (normalizeAnswer(state.restoreAnswer.join("")) === normalizeAnswer(word.word)) {
    el.restoreFeedback.textContent = `${word.chunks.join(" + ")} → ${word.word}`;
    el.restoreFeedback.className = "feedback good";
  } else {
    el.restoreFeedback.textContent = `${word.chunks.join(" + ")}`;
    el.restoreFeedback.className = "feedback bad";
  }
}

function renderWrite() {
  const word = currentWord();
  showTask("write");
  el.writeModeLabel.textContent = "";
  el.writeVisual.textContent = word.emoji;
  el.writeMeaning.textContent = "";
  el.writeSound.style.visibility = "visible";
  el.writeInput.placeholder = "";
  el.writeInput.value = "";
  el.writeFeedback.textContent = "";
  el.writeFeedback.className = "feedback";
  window.setTimeout(() => el.writeInput.focus(), 50);
}

function renderComplete() {
  Object.values(el.tasks).forEach((node) => node.classList.remove("active"));
  el.completeTask.classList.remove("hidden");
  el.modeLabel.textContent = "完成";
  el.titleWord.textContent = "";
}

function render() {
  document.body.dataset.phase = state.phase;
  updateHeader();
  renderUnitMenu();
  renderStrip();
  if (state.phase === "listen") renderListen();
  if (state.phase === "speak") renderSpeak();
  if (state.phase === "read") renderRead();
  if (state.phase === "write") renderWrite();
}

function renderAndAutoPlay() {
  render();
  window.setTimeout(() => speak(currentWord().word), 180);
}

function advancePhase() {
  const next = phases[phases.indexOf(state.phase) + 1];
  if (!next) {
    if (state.group < wordGroups.length - 1) {
      setGroup(state.group + 1);
      state.phase = "listen";
      state.listenMode = "learn";
      state.readMode = "choice";
      state.writeMode = "dictation";
      renderAndAutoPlay();
      return;
    }
    renderComplete();
    return;
  }
  state.phase = next;
  state.index = 0;
  state.listenMode = "learn";
  state.readMode = "choice";
  state.writeMode = "dictation";
  render();
}

function nextInPhase() {
  if (state.phase === "read" && state.readMode === "choice") {
    state.readMode = "restore";
    renderAndAutoPlay();
    return;
  }
  if (state.index < words.length - 1) {
    state.index += 1;
    renderAndAutoPlay();
    return;
  }
  if (state.phase === "listen" && state.listenMode === "learn") {
    state.listenMode = "test";
    state.index = 0;
    renderAndAutoPlay();
    return;
  }
  advancePhase();
}

function checkWrite() {
  const word = currentWord();
  const answer = el.writeInput.value;
  if (normalizeAnswer(answer) === normalizeAnswer(word.word)) {
    el.writeFeedback.textContent = "✓";
    el.writeFeedback.className = "feedback good";
  } else {
    el.writeFeedback.textContent = `${word.word} | ${word.chunks.join(" + ")}`;
    el.writeFeedback.className = "feedback bad";
  }
}

async function toggleRecord() {
  if (state.mediaRecorder && state.mediaRecorder.state === "recording") {
    state.mediaRecorder.stop();
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    setScore(72);
    el.speakPrompt.textContent = "当前浏览器未开放麦克风，已显示评分占位。";
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.chunks = [];
    state.mediaRecorder = new MediaRecorder(stream);
    state.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) state.chunks.push(event.data);
    };
    state.mediaRecorder.onstop = () => {
      const blob = new Blob(state.chunks, { type: "audio/webm" });
      if (state.recordedUrl) URL.revokeObjectURL(state.recordedUrl);
      state.recordedUrl = URL.createObjectURL(blob);
      stream.getTracks().forEach((track) => track.stop());
      setScore(scoreFromBlob(blob));
    };
    state.mediaRecorder.start();
    el.speakPrompt.textContent = "录音中...";
  } catch {
    setScore(72);
    el.speakPrompt.textContent = "麦克风未授权，已显示评分占位。";
  }
}

function scoreFromBlob(blob) {
  const rough = Math.round(68 + Math.min(27, blob.size / 1800));
  return Math.max(60, Math.min(98, rough));
}

function setScore(score) {
  el.speakScore.textContent = String(score);
  el.speakScore.className = `score ${score >= 80 ? "pass" : "fail"}`;
  el.speakPrompt.textContent = score >= 80 ? "通过" : "再读一遍";
}

function playMyVoice() {
  if (!state.recordedUrl) {
    el.speakPrompt.textContent = "请先录音。";
    return;
  }
  new Audio(state.recordedUrl).play();
}

el.phaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.phase = button.dataset.phase;
    state.index = 0;
    state.listenMode = "learn";
    state.writeMode = "dictation";
    render();
  });
});

el.unitMenuButton.addEventListener("click", () => {
  const isOpen = !el.unitMenu.classList.contains("hidden");
  el.unitMenu.classList.toggle("hidden", isOpen);
  el.unitMenuButton.setAttribute("aria-expanded", String(!isOpen));
});

document.addEventListener("click", (event) => {
  if (el.unitMenu.classList.contains("hidden")) return;
  if (el.unitMenu.contains(event.target) || el.unitMenuButton.contains(event.target)) return;
  el.unitMenu.classList.add("hidden");
  el.unitMenuButton.setAttribute("aria-expanded", "false");
});

el.listenSound.addEventListener("click", () => speak(currentWord().word));
el.listenTestSound.addEventListener("click", () => speak(currentWord().word));
el.listenNext.addEventListener("click", nextInPhase);
el.listenTestNext.addEventListener("click", nextInPhase);
el.originalSound.addEventListener("click", speakThree);
el.recordVoice.addEventListener("click", toggleRecord);
el.myVoice.addEventListener("click", playMyVoice);
el.speakNext.addEventListener("click", nextInPhase);
el.readSound.addEventListener("click", () => speak(currentWord().word));
el.readNext.addEventListener("click", nextInPhase);
el.writeSound.addEventListener("click", () => speak(currentWord().word));
el.checkWrite.addEventListener("click", checkWrite);
el.writeNext.addEventListener("click", nextInPhase);
el.restart.addEventListener("click", () => {
  setGroup(0);
  state.phase = "listen";
  state.listenMode = "learn";
  state.readMode = "choice";
  state.writeMode = "dictation";
  render();
});

el.writeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkWrite();
});

render();
window.speechSynthesis.onvoiceschanged = () => {
  state.voicesReady = true;
};
