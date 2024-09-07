
let sum = 0
let hadBlackjack = false
let isAlive = false
let message = ""
let cards = []
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("cards-el")

let player ={
name : "per",
chips : 123

}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +  ": $" + player.chips

function getRandomCard(){
    let randomnumber = Math.floor( Math.random()*13 ) + 1
    if (randomnumber > 10){
        return 10
    }else if (randomnumber === 1 ){
        return 11
    }else {
        return randomnumber
    }
}

function startGame(){
    renderGame()
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
}

function renderGame(){
    cardEL.textContent = "Cards: "
  for ( let d = 0 ; d< cards.length; d++ ){
    cardEL.textContent += cards[d] + " "
  }
    
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card? " 
        
    } else  if(sum === 21) {
       message =  "congratulation you gave a blackjack!"
    
    } else {
        message = "you are out of the game"
        isAlive = false
    }
    messageEL.innerText = message
}

function newCard(){
    if( isAlive=== true && hadBlackjack=== false){
        let card = getRandomCard() 
        sum += card
        renderGame()
        cards.push(card)
        console.log(cards);
    }
    }


   

