// Good Job!
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
function goodJobYou(arr) {
  return arr.forEach(function(element) {
    // return 'Good job, ' + element + '!';
    console.log('Good job, ' + element + '!')
  });
}
let goodJobbers = goodJobYou(people);
// console.log(goodJobbers);