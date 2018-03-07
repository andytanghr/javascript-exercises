
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown',
};

// 1. Write code to make daughter inherit properties from mom. What are the daughter's properties and their values? Print them out.


console.log(daughter);
console.log(daughter.lastName); // prints {} since nothing is inherited yet
daughter.__proto__ = mom; // inheritance activated!
console.log(daughter.__proto__); // prints out mom's properties, but those unique to daughter like firstName and hairColor aren't overwritten
console.log(daughter.firstName);
console.log(daughter.lastName);




/*

var Mom = function() {
  this.firstName = 'Alice';
  this.lastName = 'Wong';
  this.eyeColor = 'brown';
  this.hairColor = 'black';
};

var Daughter = function() {
  this.__proto__ = Mom;
  this.firstName = 'Ilene';
  this.hairColor = 'brown';
};
*/



// 2. Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daughter.


/*
mom.prototype.showInfo = function() {
  console.log('hello');
  // for (property in this) {
  //   console.log(property);
  // }
};

console.log(mom.showInfo());
console.log(daughter.showInfo());
*/

