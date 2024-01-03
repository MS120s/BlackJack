
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

Player = {
    name: "Umar",
    chips: 145
}

playerEl.textContent = Player.name + ": $" + Player.chips

function getRandomcard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber === 1) {
        return 11
    }else if (randomNumber > 10) {
        return 10
    }
    return randomNumber
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    let firstCard =  getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    isAlive = true
    renderGame()
}
function newCard(){
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomcard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
// console.log(hasBlackjack)
// console.log(isAlive)
