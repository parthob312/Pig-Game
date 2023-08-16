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

rollDice.addEventListener("click", function () {
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomDice}.png`;
  dice.classList.remove("hidden");
  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
