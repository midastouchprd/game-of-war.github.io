///////////////////////// object creator
class Card {
    constructor(suit,number) {
        this.suit = suit
        this.number = number
        //player
    }
    //methods
}
/////////////////////////// set up the arrays
suit = ["clubs","diamonds","hearts","spades"]
number = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let cards = []
////////////////////////// populate the cards array
for (let i of suit) {
    for (let j of number) {
        cards.push(new Card([i],[j]))
    }
}

playerOne = []
playerTwo = []
////////////////////////splicer & assignment
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

    // console.log(playerOne.length)
    // console.log(playerOneCard[0])

    playerTwoCard = playerTwo.splice([playerTwo.length-1], 1)

    // console.log(playerOneCard[0][0].number)

    if (playerOneCard[0][0].number > playerTwoCard[0][0].number) {
        playerOne.unshift(playerOneCard[0], playerTwoCard[0])
    } else if (playerOneCard[0][0].number < playerTwoCard[0][0].number) {
        playerTwo.unshift(playerOneCard[0], playerTwoCard[0])
    } else {
        playerOneTieCards = playerOne.splice([playerOne.length-2], 2)
        playerTwoTieCards = playerTwo.splice([playerTwo.length-2], 2)
        if (playerOneTieCards[1][0].number > playerTwoTieCards[1][0].number) {
            playerOne.unshift(playerOneTieCards[0], playerOneTieCards[1], 
            playerTwoTieCards[0], playerTwoTieCards[1], playerOneCard[0], playerTwoCard[0])
        } else if (playerOneTieCards[1][0].number < playerTwoTieCards[1][0].number) {
            playerTwo.unshift(playerOneTieCards[0], playerOneTieCards[1], 
            playerTwoTieCards[0], playerTwoTieCards[1], playerOneCard[0], playerTwoCard[0])
        }
    }

    console.log("---new turn---")
    console.log(`player one has    ${playerOne.length}    cards`)
    console.log(`player two has    ${playerTwo.length}    cards`)
}


while (playerOne.length > 0 && playerTwo.length > 0) {
    turn()
}
console.log("game over")



// lenght of the entire deck         console.log(cards.length)

// console.log(playerOne[0][0].suit)
// console.log(playerOne[1]) returns random card from deck that is is in playerOne deck
// console.log(playerOne[2]) same... it is an array though with object inside
//tell me the length of the player decks
//console.log(playerOne.length)
//console.log(playerTwo.length)


// show all of the objects in cards array


// returns all of the numbers in each deck
//for (let i of playerOne) {
//    console.log(i[0].number)
//}

//for (let i of playerTwo) {
//    console.log(i[0].number)
//}

// console.log(...playerOne)      returns all of playerOne
