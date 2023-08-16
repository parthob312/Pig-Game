"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add("hidden");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

rollDice.addEventListener("click", function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomDice}.png`;
    dice.classList.remove("hidden");
    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 50) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      dice.classList.add("hidden");
    }

    switchPlayer();
  }
});
