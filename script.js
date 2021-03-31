const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;

const snowflakesContainer = document.getElementById("snowflakes-container");
const snowVsRain = document.getElementById("snow-vs-rain");
const quantity = document.getElementById("quantity");
const colorPick = document.getElementById("click-color");
const wind = document.getElementById("wind")

setInterval(() => createSnowflake(), 50);

function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
  let x = snowVsRain.value;
  let y = Math.random()
  if (y > x) {
    return "fa-snowflake";
  } else {
    return "fa-tint";
  }
}

function createSnowflake() {
  let q = quantity.value;
  for (let i = 0; i < q; i++)
  {
    let snowFlake = document.createElement("i");

    snowFlake.classList.add("fas", randomIcon());
    snowFlake.style.left = randint(0, 100) + "%";
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";
    snowFlake.style.color = colorPick.value
    snowflakesContainer.appendChild(snowFlake);
    snowFlake
    .animate(
      { transform: `translate(${wind.value}vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
    )
    .finished.then(() => snowFlake.remove());
  }

}
