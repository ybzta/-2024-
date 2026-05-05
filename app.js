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

const words = [
  { unit: "U1A", word: "fox", chinese: "狐狸", chunks: ["f", "o", "x"], emoji: "🦊" },
  { unit: "U1A", word: "giraffe", chinese: "长颈鹿", chunks: ["gi", "r", "a", "ff", "e"], emoji: "🦒" },
  { unit: "U1A", word: "eagle", chinese: "鹰", chunks: ["ea", "gle"], emoji: "🦅" },
  { unit: "U1A", word: "wolf", chinese: "狼", chunks: ["w", "o", "l", "f"], emoji: "🐺" },
  { unit: "U1A", word: "penguin", chinese: "企鹅", chunks: ["p", "en", "gu", "in"], emoji: "🐧" },
  { unit: "U1A", word: "tail", chinese: "尾巴", chunks: ["t", "ai", "l"], emoji: "〰️" },
  { unit: "U1A", word: "snake", chinese: "蛇", chunks: ["sn", "a-e", "k"], emoji: "🐍" },
  { unit: "U1A", word: "shark", chinese: "鲨鱼", chunks: ["sh", "ar", "k"], emoji: "🦈" },
  { unit: "U1A", word: "whale", chinese: "鲸", chunks: ["wh", "a-e", "l"], emoji: "🐋" },
  { unit: "U1A", word: "dangerous", chinese: "危险的", chunks: ["dan", "ger", "ous"], emoji: "⚠️" },
];

const phases = ["listen", "speak", "read", "write"];
const phaseNames = { listen: "听", speak: "说", read: "读", write: "写" };

const state = {
  phase: "listen",
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

function currentWord() {
  return words[state.index];
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
  if (state.phase === "write") return state.writeMode === "dictation" ? "完全听写" : "汉译英";
  return "";
}

function updateHeader() {
  const word = currentWord();
  el.modeLabel.textContent = "";
  if (state.phase === "listen") {
    el.titleWord.textContent = "";
  } else if (state.phase === "write") {
    el.titleWord.textContent = state.writeMode === "dictation" ? "听写" : "汉译英";
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
  if (state.restoreAnswer.join("").toLowerCase() === word.word.toLowerCase()) {
    el.restoreFeedback.textContent = `${word.chunks.join(" + ")} → ${word.word}`;
    el.restoreFeedback.className = "feedback good";
  } else {
    el.restoreFeedback.textContent = `正确：${word.chunks.join(" + ")}`;
    el.restoreFeedback.className = "feedback bad";
  }
}

function renderWrite() {
  const word = currentWord();
  showTask("write");
  el.writeModeLabel.textContent = state.writeMode === "dictation" ? "完全听写" : "汉译英";
  el.writeVisual.textContent = word.emoji;
  el.writeMeaning.textContent = word.chinese;
  el.writeSound.style.visibility = state.writeMode === "dictation" ? "visible" : "hidden";
  el.writeInput.placeholder = state.writeMode === "dictation" ? "听音，看图和中文写英文" : "看图和中文写英文";
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
  if (state.phase === "write" && state.writeMode === "dictation") {
    state.writeMode = "translation";
    state.index = 0;
    renderAndAutoPlay();
    return;
  }
  advancePhase();
}

function checkWrite() {
  const word = currentWord();
  const answer = el.writeInput.value.trim().toLowerCase();
  if (answer === word.word.toLowerCase()) {
    el.writeFeedback.textContent = "正确";
    el.writeFeedback.className = "feedback good";
  } else {
    el.writeFeedback.textContent = `正确：${word.word} ｜ ${word.chunks.join(" + ")}`;
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

el.listenSound.addEventListener("click", () => speak(currentWord().word));
el.listenTestSound.addEventListener("click", () => speak(currentWord().word));
el.listenNext.addEventListener("click", nextInPhase);
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
  state.phase = "listen";
  state.index = 0;
  state.listenMode = "learn";
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
