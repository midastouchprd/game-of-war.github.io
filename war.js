//
ANCHOR // psuedo
/////////
//  once both players have 26 cards each in their array the game starts
//  button for player to press to execute one round
//  last element of array is popped out and played (playedCard)
//  whichever player has a card higher in value wins the other players card and-----
//  -------it goes to the bottom of their array (unshift)
//  in a tie, each player plays three cards????????????????????
//  the game continues until one of the players reaches 52 cards or 0 cards


ANCHOR // object creator
class Card {
    constructor(suit,number) {
        this.suit = suit
        this.number = number
        //player
    }
    //methods
}

suit = ["clubs","diamonds","hearts","spades"]
number = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let cards = []

for (let i of suit) {
    for (let j of number) {
        cards.push(new Card([i],[j]))
    }
}

// splicer & assignment

playerOne = []
playerTwo = []
console.log(cards.length)
for (let i = 0; i < 52; i++) {
    let chosenCard = cards.splice([(Math.floor(Math.random()*cards.length))], 1)
    if (i % 2 === 0) {
        playerOne.push(chosenCard)
    } else {
        playerTwo.push(chosenCard)
    }
}
console.log(playerOne[0])
console.log(playerOne[1])
console.log(playerOne[2])
console.log(playerOne[3])
console.log(playerOne[4])
console.log(playerOne[5])
console.log(playerOne.length)
console.log(playerTwo.length)


console.log(playerOne)

// show all of the objects in cards array

for (let i of playerOne) {
    console.log(i[i].suit + i[i].number)
}

// assigning cards to players















playerOneCards = []
playerTwoCards =[]

console.log(cards.length)
// console.log(deck()[(Math.floor(Math.random()*deck().length))])

// remove that card from the deck
cards.splice((Math.floor(Math.random()*cards.length), 1))

// select a random number from array deck

let chosenCard = cards[(Math.floor(Math.random()*cards.length))]

// remove that card from the deck
cards.splice(chosenCard, 1)

console.log(cards.length)



/////////////////////////////////////////////////////////
