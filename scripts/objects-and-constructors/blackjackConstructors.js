const playingCards = [ // permanent deck. During game, a copy will be imported by the Deck constructor
  {
    suit: 'clubs',
    value: 'ace',
    src: 'AC.jpg',
    id: 1
  },
  {
    suit: 'clubs',
    value: 1,
    src: '1C.jpg',
    id: 2
  },
  {
    suit: 'clubs',
    value: 2,
    src: '2C.jpg',
    id: 3
  },
  {
    suit: 'clubs',
    value: 3,
    src: '3C.jpg',
    id: 4
  },
  {
    suit: 'clubs',
    value: 4,
    src: '4C.jpg',
    id: 5
  },
  {
    suit: 'clubs',
    value: 5,
    src: '5C.jpg',
    id: 6
  },
  {
    suit: 'clubs',
    value: 6,
    src: '6C.jpg',
    id: 7
  },
  {
    suit: 'clubs',
    value: 7,
    src: '7C.jpg',
    id: 8
  },
  {
    suit: 'clubs',
    value: 8,
    src: '8C.jpg',
    id: 9
  },
  {
    suit: 'clubs',
    value: 9,
    src: '9C.jpg',
    id: 10
  },
  {
    suit: 'clubs',
    value: 10,
    face: 'jack',
    src: 'JC.jpg',
    id: 11
  },
  {
    suit: 'clubs',
    value: 10,
    face: 'queen',
    src: 'QC.jpg',
    id: 12
  },
  {
    suit: 'clubs',
    value: 10,
    face: 'king',
    src: 'KC.jpg',
    id: 13
  },
  {
    suit: 'diamonds',
    value: 'ace',
    src: 'AD.jpg',
    id: 14
  },
  {
    suit: 'diamonds',
    value: 1,
    src: '1D.jpg',
    id: 15
  },
  {
    suit: 'diamonds',
    value: 2,
    src: '2D.jpg',
    id: 16
  },
  {
    suit: 'diamonds',
    value: 3,
    src: '3D.jpg',
    id: 17
  },
  {
    suit: 'diamonds',
    value: 4,
    src: '4D.jpg',
    id: 18
  },
  {
    suit: 'diamonds',
    value: 5,
    src: '5D.jpg',
    id: 19
  },
  {
    suit: 'diamonds',
    value: 6,
    src: '6Djpg',
    id: 20
  },
  {
    suit: 'diamonds',
    value: 7,
    src: '7D.jpg',
    id: 21
  },
  {
    suit: 'diamonds',
    value: 8,
    src: '8D.jpg',
    id: 22
  },
  {
    suit: 'diamonds',
    value: 9,
    src: '9D.jpg',
    id: 23
  },
  {
    suit: 'diamonds',
    value: 10,
    face: 'jack',
    src: 'JD.jpg',
    id: 24
  },
  {
    suit: 'diamonds',
    value: 10,
    face: 'queen',
    src: 'QD.jpg',
    id: 25
  },
  {
    suit: 'diamonds',
    value: 10,
    face: 'king',
    src: 'KD.jpg',
    id: 26
  },
  {
    suit: 'hearts',
    value: 'ace',
    src: 'AH.jpg',
    id: 27
  },
  {
    suit: 'hearts',
    value: 1,
    src: '1H.jpg',
    id: 28
  },
  {
    suit: 'hearts',
    value: 2,
    src: '2H.jpg',
    id: 29
  },
  {
    suit: 'hearts',
    value: 3,
    src: '3H.jpg',
    id: 30
  },
  {
    suit: 'hearts',
    value: 4,
    src: '4H.jpg',
    id: 31
  },
  {
    suit: 'hearts',
    value: 5,
    src: '5H.jpg',
    id: 32
  },
  {
    suit: 'hearts',
    value: 6,
    src: '6H.jpg',
    id: 33
  },
  {
    suit: 'hearts',
    value: 7,
    src: '7H.jpg',
    id: 34
  },
  {
    suit: 'hearts',
    value: 8,
    src: '8H.jpg',
    id: 35
  },
  {
    suit: 'hearts',
    value: 9,
    src: '9H.jpg',
    id: 36
  },
  {
    suit: 'hearts',
    value: 10,
    face: 'jack',
    src: 'JH.jpg',
    id: 37
  },
  {
    suit: 'hearts',
    value: 10,
    face: 'queen',
    src: 'QH.jpg',
    id: 38
  },
  {
    suit: 'hearts',
    value: 10,
    face: 'king',
    src: 'KH.jpg',
    id: 39
  },
  {
    suit: 'spades',
    value: 'ace',
    src: 'AS.jpg',
    id: 40
  },
  {
    suit: 'spades',
    value: 1,
    src: '1S.jpg',
    id: 41
  },
  {
    suit: 'spades',
    value: 2,
    src: '2S.jpg',
    id: 42
  },
  {
    suit: 'spades',
    value: 3,
    src: '3S.jpg',
    id: 43
  },
  {
    suit: 'spades',
    value: 4,
    src: '4S.jpg',
    id: 44
  },
  {
    suit: 'spades',
    value: 5,
    src: '5S.jpg',
    id: 45
  },
  {
    suit: 'spades',
    value: 6,
    src: '6S.jpg',
    id: 46
  },
  {
    suit: 'spades',
    value: 7,
    src: '7S.jpg',
    id: 47
  },
  {
    suit: 'spades',
    value: 8,
    src: '8S.jpg',
    id: 48
  },
  {
    suit: 'spades',
    value: 9,
    src: '9S.jpg',
    id: 49
  },
  {
    suit: 'spades',
    value: 10,
    face: 'jack',
    src: 'JS.jpg',
    id: 50
  },
  {
    suit: 'spades',
    value: 10,
    face: 'queen',
    src: 'QS.jpg',
    id: 51
  },
  {
    suit: 'spades',
    value: 10,
    face: 'king',
    src: 'KS.jpg',
    id: 52
  },
];

// card constructor
var Card = function(point, suit) {
  this.point = point;
  this.suit = suit;
  this.name = point + '_of_' + suit;
}

// method to generate card's image URL
Card.prototype.getImageUrl = function() {
  return 'images/' + this.name + '.png';
};

// hand constructor includes an array to store card objects
var Hand = function() {
  this.cards = [];
}

// method to add card to hand's array
Hand.prototype.addCard = function(card) {
  return this.cards.push(card);
};
// method to calculate points of cards in a hand
Hand.prototype.getPoints = function() {
  return this.cards.reduce(function (points, card) {
    return points += card.point; // add conditional to check for ace
  }, 0);
};


var Deck = function() {
  this.cards = playingCards.slice();
}

Deck.prototype.shuffle = function() {
  // this implements Fisher-Yates/Knuth shuffle
  var shuffledDeck = [];
  var copiedDeck = this.cards.slice();
  while (copiedDeck.length !== 0) {
    var randomIndex = Math.floor(copiedDeck.length * Math.random());
    shuffledDeck.push(copiedDeck[randomIndex]);
    copiedDeck.splice(randomIndex, 1);
  }
  return shuffledDeck;
}

Deck.prototype.draw = function() {
  return this.cards.shift();
}

Deck.prototype.numCardsLeft = function() {
  return Deck.cards.length;
}

// proofs of concept
var playerHand = new Hand();
var fiveOfDiamonds = new Card(5, 'diamonds');
// console.log(fiveOfDiamonds.getImageUrl());

// console.log(fiveOfDiamonds.point);
// console.log(fiveOfDiamonds.suit);
var oneOfSpades = new Card(1, 'spades');

playerHand.addCard(fiveOfDiamonds);
playerHand.addCard(oneOfSpades);
playerHand.addCard(new Card(3, 'diamonds'));

// console.log(playerHand.getPoints()); // 9
// console.log(playerHand); // should display three cards

var testDeck = new Deck();
console.log(testDeck.shuffle());

