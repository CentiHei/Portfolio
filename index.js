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
const back = document.querySelector("#background");

function handleGy() {
  if (gyDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.remove("hidden");
    back.classList.remove("hidden");
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
    back.classList.add("hidden");
  }
  if (!gyBtn.classList.contains("index-select")) {
    gyBtn.classList.add("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  } else {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  }
}

function handleJm() {
  if (jmDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.remove("hidden");
    back.classList.remove("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    jmDesc.classList.add("hidden");
    back.classList.add("hidden");
  }
  if (!jmBtn.classList.contains("index-select")) {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.add("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  } else {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  }
}

function handleCb() {
  if (cbDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.remove("hidden");
    back.classList.remove("hidden");
    ysDesc.classList.add("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    cbDesc.classList.add("hidden");
    back.classList.add("hidden");
  }
  if (!cbBtn.classList.contains("index-select")) {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.add("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  } else {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  }
}

function handleYs() {
  if (ysDesc.classList.contains("hidden")) {
    cover.classList.add("hidden");
    gyDesc.classList.add("hidden");
    jmDesc.classList.add("hidden");
    cbDesc.classList.add("hidden");
    ysDesc.classList.remove("hidden");
    back.classList.remove("hidden");
    nmDesc.classList.add("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    ysDesc.classList.add("hidden");
    back.classList.add("hidden");
  }
  if (!ysBtn.classList.contains("index-select")) {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.add("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  } else {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
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
    back.classList.remove("hidden");
    smDesc.classList.add("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    nmDesc.classList.add("hidden");
    back.classList.add("hidden");
  }
  if (!nmBtn.classList.contains("index-select")) {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.add("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  } else {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
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
    back.classList.remove("hidden");
    hgDesc.classList.add("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    smDesc.classList.add("hidden");
    back.classList.add("hidden");
  }
  if (!smBtn.classList.contains("index-select")) {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.add("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
  } else {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
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
    back.classList.remove("hidden");
    hbDesc.classList.add("hidden");
  } else {
    cover.classList.remove("hidden");
    hgDesc.classList.add("hidden");
    back.classList.add("hidden");
  }
  if (!hgBtn.classList.contains("index-select")) {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.add("index-select");
    hbBtn.classList.remove("index-select");
  } else {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
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
    back.classList.remove("hidden");
  } else {
    cover.classList.remove("hidden");
    hbDesc.classList.add("hidden");
    back.classList.add("hidden");
  }
  if (!hbBtn.classList.contains("index-select")) {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.add("index-select");
  } else {
    gyBtn.classList.remove("index-select");
    jmBtn.classList.remove("index-select");
    cbBtn.classList.remove("index-select");
    ysBtn.classList.remove("index-select");
    nmBtn.classList.remove("index-select");
    smBtn.classList.remove("index-select");
    hgBtn.classList.remove("index-select");
    hbBtn.classList.remove("index-select");
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
