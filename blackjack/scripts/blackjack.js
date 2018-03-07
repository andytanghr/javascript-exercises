(function() {
const playingCards = [ // permanent deck. During game, a copy will be imported by the Deck constructor
  {
    suit: 'clubs',
    value: 11,
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
    value: 11,
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
    value: 11,
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
    value: 11,
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

/*
// card constructor
var Card = function(point, suit) {
  this.point = point;
  this.suit = suit;
  this.name = point + '_of_' + suit;
}
*/

/*
// method to generate card's image URL
Card.prototype.getImageUrl = function() {
  return 'images/' + this.name + '.png';
};
*/



// Deck and its methods

var Deck = function() {
  this.cards = playingCards.slice();
};

Deck.prototype.shuffle = function() {
  // this implements Fisher-Yates/Knuth shuffle
  // var shuffledDeck = [];
  // var copiedDeck = this.cards.slice();
  // while (copiedDeck.length !== 0) {
  //   var randomIndex = Math.floor(copiedDeck.length * Math.random());
  //   shuffledDeck.push(copiedDeck[randomIndex]);
  //   copiedDeck.splice(randomIndex, 1);
  // }

  shuffledDeck = this.cards;
  var numOfCardsUnshuffled, temp, index;
  while (numOfCardsUnshuffled) {
    index = Math.floor(Math.random() * m--);
    temp = shuffledDeck[numOfCardsUnshuffled];
    shuffledDeck[numOfCardsUnshuffled] = shuffledDeck[index];
    shuffledDeck[index] = temp;
  }
    
  return shuffledDeck;
};

Deck.prototype.draw = function() {
  return this.cards.shift();
};

Deck.prototype.numCardsLeft = function() {
  return Deck.cards.length;
};







// for website

// store sources of cards to array or dict so value matches 

var card = document.createElement('img');
card.setAttribute('class', 'card');
card.setAttribute('src', '');

// cardSrc = 

// var dealerHand = document.getElementById('dealer-hand');

//<img class="card" src="">
// dealerHand.appendChild(card);









// hand constructor includes an array to store card objects
var Hand = function(name) {
  this.cards = [];
  this.name = name;
};

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

// Hand.prototype.getImageURL = function() {
//   this.cards.
  
//   // return './images/' + this.cards.src + '.jpg';
//   // return './images/AC.jpg';
// }

Hand.prototype.showCardImages = function() {
  // loop through card array to show images, populating the html

  for (let index = 0; index < this.cards.length; index++) {
    // let imageSource = this.getImageURL();
    let imageSource = 'images/' + this.cards[index].src;
    let imageElement = document.createElement('img');

    let target = this.name + '-hand';
    let targetHand = document.getElementById(target);

    imageElement.setAttribute('src', imageSource);
    imageElement.classList.add('card')
    targetHand.appendChild(imageElement); 
  }
  
}



// INITIALIZE GAME
var gameDeck = new Deck();
gameDeck.shuffle();
var dealer = new Hand('dealer');
var player = new Hand('player');



function startGame() {
  // 
  // initialize deck
  // shuffle deck
  gameDeck.shuffle();

  


}





function deal() {
  // player(s) first
  // then dealer
  for (let numOfCards = 0; numOfCards < 2; numOfCards++) {
    player.addCard( gameDeck.draw() );
    dealer.addCard( gameDeck.draw() );
 
  }
  status();


}


function hit() {
  // pull from deck
  player.addCard( gameDeck.draw() );
  status();
  // add card to player or dealer's hand
  // show image of each card as its drawn
}



function stand() {
  // dealer's turn
  dealerPlays();


}


function dealerPlays() {
  while (dealer.getPoints() < 17) {
    dealer.addCard( gameDeck.draw() );
    status();
  }

}


// status() is a heavy lifter, always called after every dealt card
// with closures, checks for busts, blackjack, updates points for aces
// checks for dealer and player; if dealer, status tells dealer to stand n 

function status(target) {
  player.showCardImages();
  dealer.showCardImages();

  //calls getPoints() for each player
  dealer.getPoints();
  player.getPoints();

  // 
  function isBusted() {
    // if true, game immediately gets
    if (player.getPoints() > 21) {
      endGame();
    }
  }

  // checks for blackjack
  function checkBlackjack() {
    if (dealer.getPoints() === 21) {
      alert('dealer blackjack');
    }
    if (player.getPoints() === 21) {
      alert('player blackjack');
    }
  }

/*
  // checks for aces and updates the 'or ### with ace' score on HTML/CSS
  function checkSoftHand() {
    if (in player.cards) {

    }


  }
  */

}

function endGame() {
//clears table of cards, resets vars dealer and player
//
//startGame() 


}


document.getElementById('deal-button').addEventListener('click', function() {
  // write dealer logic here /^
  // deal button disappears
  deal();

  let btnDeal = document.getElementById('deal-button');
  btnDeal.style.display = 'none';
  
  let btnHit = document.getElementById('hit-button');
  btnHit.style.display = 'inline';

  let btnStand = document.getElementById('stand-button');
  btnStand.style.display = 'inline';

  status();
  // hit and stand buttons appear `/
  // deal and show first card to player `/
  
  // deal and show first card to dealer `/
  // deal and show second card to player `/
  // deal and show second card to dealer `/
  





  // playerHand.getPoints() shows points on table
  // dealerHand.getPoints() shows points on table
  // if dealer has 21, immediately end game: dealer has a natural, player loses
  // if player has 21, immediately end game: player has a natural, player wins
  // if both have 21, immediately end game: tie! the game is a push

});

document.getElementById('hit-button').addEventListener('click', function() {
  // write hit logic here `/

  // check if player has not busted (<21)
  // check if player has ace, show both points with 1 and 11
  // allow another card to deal
  // while loop to check if player has not busted (<21)
  // break if >21
  status();


});

document.getElementById('stand-button').addEventListener('click', function() {
  // write stand logic here `/

  // game play then goes to dealer
  status();
});





// if dealer's total is 17, dealer stands and endgame evaluates

// if 16 or under, dealer must hit until points 17 or more
// if dealer has ace, dealer hits on soft 17




// deal button disappears
// hit and stand buttons appear

})();