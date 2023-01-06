
let cards = []
let sum = 0
let hasbj = false
let isAlive = false
let msg = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player={
   name:"percy",
   chips:145
}

let playerEL=document.getElementById("player-el")
playerEL.textContent=player.name+": $"+player.chips

function getRandomCard() {
    let randCard = Math.floor(Math.random() * 13) + 1
    if (randCard > 10) {
        return 10
    } else if (randCard === 1) {
        return 11
    }
    else {
        return randCard
    }
}

function startgame()
{  isAlive= true
   let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    rendergame()
}

function rendergame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "

    }



    if (sum < 21) {
        msg = "Do you wanna draw a new card?"
    }
    else if (sum === 21) {
        msg = "WOHoo! you got a black jack"
        hasbj = true
    } else {
        msg = "oops! you are out"
        isAlive = false
    }
   msgEl.textContent = msg
}

function newCard()
 { 
    if (isAlive===true && hasbj===false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame()
    }
   
}