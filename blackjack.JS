let sum = 0;
let hadBlackjack = false;
let isAlive = false;
let message = "";
let cards = [];
let messageEL = document.getElementById("message-el");
let cardOne = document.getElementById("card_one");
let cardSecond = document.getElementById("card_second");

let player = {
    name: "Per",
    chips: 123
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    hadBlackjack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    // Update card display
    cardOne.innerText = firstCard;
    cardSecond.innerText = secondCard;

    renderGame();
}

function renderGame() {
    // Update the cards and sum
    let cardsEL = document.getElementById("cards-el");
    cardsEL.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Congratulations, you got Blackjack!";
        hadBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEL.innerText = message;
}

function newCard() {
    if (isAlive === true && hadBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);

        // Update the additional card visually
        let cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.innerText = card;
        document.querySelector(".card-container").appendChild(cardDiv);

        renderGame();
    }
}
