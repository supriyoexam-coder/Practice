/* ================================
   UNIVERSAL STATE
================================ */
let counter = 0;
let mode = "";

/* ================================
   ENTER TEST
================================ */
function start(testName) {
  mode = testName;
  counter = 0;
  window.solved = 0;


  const header = document.querySelector(".app-header");
  if (header) header.classList.add("test-mode");

  const homeView = document.getElementById("homeView");
  const testView = document.getElementById("testView");

  if (homeView) homeView.style.display = "none";
  if (testView) testView.style.display = "block";

  const countEl = document.getElementById("count");
  if (countEl) countEl.innerText = counter;

  const titleEl = document.getElementById("topicTitle");
  if (titleEl) titleEl.innerText = formatTitle(testName);

  if (typeof generate === "function") {
    generate();
  } else {
    console.error("generate() not found in test page");
  }
}

/* ================================
   NEXT QUESTION
================================ */
function nextQuestion() {
  counter++;

  const countEl = document.getElementById("count");
  if (countEl) countEl.innerText = counter;

  if (typeof generate === "function") {
    generate();
  }
}

/* ================================
   EXIT TEST
================================ */
function goHome() {
  const header = document.querySelector(".app-header");
  if (header) header.classList.remove("test-mode");

  const homeView = document.getElementById("homeView");
  const testView = document.getElementById("testView");

  if (testView) testView.style.display = "none";
  if (homeView) homeView.style.display = "grid";

  const q = document.getElementById("question");
  const a = document.getElementById("answer");

  if (q) q.innerText = "";
  if (a) a.innerText = "";

  counter = 0;
}

/* ================================
   UTIL
================================ */
function formatTitle(name) {
  return name
    .replace(/_/g, " ")
    .replace(/([a-z])([0-9])/gi, "$1 $2")
    .toUpperCase();
}

