let timer = 60;
let score = 0;
let hit = 0;

function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hit;
}

function makeBubble() {
  var clutter = "";

  for (let i = 1; i <= 96; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div> `;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h3> Game Over!</h3> <p> Click anywhere to continue. </p>`;
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}

document.querySelector("#timerValue").textContent = timer;

getNewHit();
makeBubble();
runTimer();

document.querySelector("#pbtm").addEventListener("click", (e) => {
  let clickedNum = Number(e.target.textContent);
  if (clickedNum === hit) {
    increaseScore();
  }
  getNewHit();
  makeBubble();
});
  