const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el");

const player = {
  name: "Vanistelrooy"
};
.........
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function getRandomCard() {
  return Math.floor(Math.random() * 9) + 1;
}

function startGame() {
  isAlive = true;
  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderCards() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`;
  }
}

function updateSum() {
  sumEl.textContent = `Sum: ${sum}`;
}

function renderMessage() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You have BlackJack!";
    hasBlackJack = true;
    playerEl.textContent = `Congratulations-${player.name}:$${sum}`;
  } else {
    message = "You are out of game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function renderGame() {
  renderCards();
  updateSum();
  renderMessage();
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    const card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

