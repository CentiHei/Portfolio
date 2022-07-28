const cover = document.getElementById("cover");
const gyDesc = document.getElementById("gyDesc");
const gyBtn = document.querySelector("li:nth-child(1)");
const jmDesc = document.getElementById("jmDesc");
const jmBtn = document.querySelector("li:nth-child(2)");
const cbDesc = document.getElementById("cbDesc");
const cbBtn = document.querySelector("li:nth-child(3)");
const ysDesc = document.getElementById("ysDesc");
const ysBtn = document.querySelector("li:nth-child(4)");
const nmDesc = document.getElementById("nmDesc");
const nmBtn = document.querySelector("li:nth-child(5)");
const smDesc = document.getElementById("smDesc");
const smBtn = document.querySelector("li:nth-child(6)");
const hgDesc = document.getElementById("hgDesc");
const hgBtn = document.querySelector("li:nth-child(7)");
const hbDesc = document.getElementById("hbDesc");
const hbBtn = document.querySelector("li:nth-child(8)");

function handleGy() {
  if (gyDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.remove("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    gyDesc.classList.add("hidden");
  }
}

function handleJm() {
  if (jmDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.remove("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    jmDesc.classList.add("hidden");
  }
}

function handleCb() {
  if (cbDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.remove("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    cbDesc.classList.add("hidden");
  }
}

function handleYs() {
  if (ysDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.remove("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    ysDesc.classList.add("hidden");
  }
}

function handleNm() {
  if (nmDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.remove("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    nmDesc.classList.add("hidden");
  }
}

function handleSm() {
  if (smDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.remove("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    smDesc.classList.add("hidden");
  }
}

function handleHg() {
  if (hgDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.remove("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    hgDesc.classList.add("hidden");
  }
}

function handleHb() {
  if (hbDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.remove("hidden");
  } else {
    cover.classList.remove("hidden");
    hbDesc.classList.add("hidden");
  }
}

gyBtn.addEventListener("click", handleGy);
jmBtn.addEventListener("click", handleJm);
cbBtn.addEventListener("click", handleCb);
ysBtn.addEventListener("click", handleYs);
nmBtn.addEventListener("click", handleNm);
smBtn.addEventListener("click", handleSm);
hgBtn.addEventListener("click", handleHg);
hbBtn.addEventListener("click", handleHb);
