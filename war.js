// object creator
const maxTurns = 2500;
class Card {
    constructor(suit,number) {
        this.suit = suit
        this.number = number
    }
}

// set up the arrays
suit = ["clubs","diamonds","hearts","spades"]
number = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let cards = []
// populate the cards array
for (let i of suit) {
    for (let j of number) {
        cards.push(new Card([i],[j]))
    }
}

playerOne = []
playerTwo = []
// splicer & assignment
for (let i = 0; i < 52; i++) {
    let chosenCard = cards.splice([(Math.floor(Math.random()*cards.length))], 1)
    if (i % 2 === 0) {
        playerOne.push(chosenCard)
    } else {
        playerTwo.push(chosenCard)
    }
}

function turn() {
    playerOneCard = playerOne.splice([playerOne.length-1], 1)
    playerTwoCard = playerTwo.splice([playerTwo.length-1], 1)

    if (playerOneCard[0][0].number > playerTwoCard[0][0].number) {
        playerOne.unshift(playerOneCard[0], playerTwoCard[0])
    } else if (playerOneCard[0][0].number < playerTwoCard[0][0].number) {
        playerTwo.unshift(playerOneCard[0], playerTwoCard[0])
    } else {
        console.log("ill work on ties later")
    }
    console.log("---new turn---")
    console.log(`player one has    ${playerOne.length}    cards`)
    console.log(`player two has    ${playerTwo.length}    cards`)
}
for (let i = 0; i < maxTurns; i++) {
        turn()
}
console.log("game over")


// first player to win three wars
// shuffle method in my class
// new = player1trash
// shuffle that player1trashdeck

// class usedCards
// contains arrays and has shuffle method



class Card {
    constructor(suit,number,rank) {
        this.suit = suit
        this.number = number
        this.rank = rank
    }
}


class Deck {
    constructor() {
        this.length = 52
        this.cards = []
        this.player1recycle = []
        this.player2recycle = []
        let suit = ["clubs","diamonds","hearts","spades"]
        let number = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        let rank = ["2", "3", "4", "5","6","7","8","9","10","Jack","Queen","King","Ace"]

        for (let i of suit) {
            for (let j of number) {
                this.cards.push(new Card([i],[j],rank[j-1]))
            }
        }
    }
    draw() {
        let chosenCard = this.cards.splice([(Math.floor(Math.random()*this.cards.length))], 1)
        return chosenCard
    }
    shuffle1() {
        let chosenCard = this.player1recycle.splice([(Math.floor(Math.random()*this.player1recycle.length))], 1)
        return chosenCard
    }
    shuffle2() {
        let chosenCard = this.player2recycle.splice([(Math.floor(Math.random()*this.player2recycle.length))], 1)
        return chosenCard
    }
}

let deck1 = new Deck();

playerOne = []
playerTwo = []

for (let i = 0; i < 52; i++) {
    let chosenCard = deck1.draw()
    if (i % 2 === 0) {
        playerOne.push(chosenCard)
    } else {
        playerTwo.push(chosenCard)
    }
}

// how do i avoid all of these arrays

function turn() {
    playerOneCard = playerOne.splice([playerOne.length-1], 1)
    playerTwoCard = playerTwo.splice([playerTwo.length-1], 1)

    if (playerOneCard[0][0].number[0] > playerTwoCard[0][0].number[0]) {
        playerOne.unshift(playerOneCard[0], playerTwoCard[0])
    } else if (playerOneCard[0][0].number[0] < playerTwoCard[0][0].number[0]) {
        playerTwo.unshift(playerOneCard[0], playerTwoCard[0])
    } else {
        
    }
    console.log("---new turn---")
    console.log(`player one has    ${playerOne.length}    cards`)
    console.log(`player two has    ${playerTwo.length}    cards`)
}
const maxTurns = 2500;
for (let i = 0; i < maxTurns; i++) {
        turn()
}
console.log("game over")