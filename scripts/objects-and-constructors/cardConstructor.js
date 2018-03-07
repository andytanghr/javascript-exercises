var Card = function(point, suit) {
  this.point = point;
  this.suit = suit;
  this.name = point + '_of_' + suit;
}

var fiveOfDiamonds = new Card(5, 'diamonds');
// console.log(fiveOfDiamonds.point);
// console.log(fiveOfDiamonds.suit);

Card.prototype.getImageUrl = function() {
  return 'images/' + this.name + '.png';
};

// console.log(fiveOfDiamonds.getImageUrl());


var Hand = function() {
  this.cards = [];

}

Hand.prototype.addCard = function(card) {
  return this.cards.push(card);
};

Hand.prototype.getPoints = function() {
  return this.cards.reduce(function (points, card) {
    return points += card.point; // add conditional to check for ace
  }, 0);
};

var playerHand = new Hand();

var oneOfSpades = new Card(1, 'spades');
playerHand.addCard(fiveOfDiamonds);
playerHand.addCard(oneOfSpades);
playerHand.addCard(new Card(3, 'diamonds'));
// console.log(oneOfSpades.point + fiveOfDiamonds.point);
console.log(playerHand.getPoints());
console.log(playerHand);