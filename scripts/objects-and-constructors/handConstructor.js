var Hand = function() {
  this.cards = [];

}

Hand.prototype.addCard = function(card) {
  return this.cards.push(card);
};

Hand.prototype.getPoints = function() {

};