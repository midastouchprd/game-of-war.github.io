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

function turn() {
    playerOneCard = playerOne.splice([playerOne.length-1], 1)
    playerTwoCard = playerTwo.splice([playerTwo.length-1], 1)

    let winnerPile = []

    function war() {
        playerOneDownCard = playerOne.splice([playerOne.length-1], 1)
        winnerPile.unshift(playerOneDownCard[0])

        playerTwoDownCard = playerTwo.splice([playerTwo.length-1], 1)
        winnerPile.unshift(playerTwoDownCard[0])

        playerOneWarCard = playerOne.splice([playerOne.length-1], 1)
        playerTwoWarCard = playerTwo.splice([playerTwo.length-1], 1)
        if (playerOneWarCard[0][0].number[0] > playerTwoWarCard[0][0].number[0]) {
            winnerPile.unshift(playerOneWarCard[0], playerTwoWarCard[0])
            playerOne = winnerPile.concat(playerOne)
        } else if (playerOneWarCard[0][0].number[0] < playerTwoWarCard[0][0].number[0]) {
            winnerPile.unshift(playerOneWarCard[0], playerTwoWarCard[0])
            playerTwo = winnerPile.concat(playerTwo)
        } else {
            winnerPile.unshift(playerOneWarCard[0], playerTwoWarCard[0])
            console.log("multiwar")
            war()
        }
    }

    if (playerOneCard[0][0].number[0] > playerTwoCard[0][0].number[0]) {
        playerOne.unshift(playerTwoCard[0], playerOneCard[0])
    } else if (playerOneCard[0][0].number[0] < playerTwoCard[0][0].number[0]) {
        playerTwo.unshift(playerOneCard[0], playerTwoCard[0])
    } else {
        winnerPile.unshift(playerOneCard[0], playerTwoCard[0])
        console.log("war")
        war()
    }
    console.log("---new turn---")
    console.log(`player one has    ${playerOne.length}    cards`)
    console.log(`player two has    ${playerTwo.length}    cards`)

    if (playerOne.length === 0) {
        console.log("player 2 wins")
    } else if (playerTwo.length === 0) {
        console.log("player 1 wins")
    }
}

const maxTurns = 2500000;
for (let i = 0; i < maxTurns; i++) {
    console.log(i)
    turn()
}
// how do i avoid so many arrays within arrays
// nearly infinite game sometimes. instead of shuffling i adjusted the order of winning cards for one player