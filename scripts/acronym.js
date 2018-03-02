// Acronym
function acronym(arr) {
  let initials = '';

  // another method using map
  // initials = arr.map(function(element) {
  //   return element[0];
  // });
  // return initials.join('').toUpperCase();
  
  return arr.reduce(function(accum, element) {
    return accum += element[0]; //return accum + element.charAt(0).toUpperCase();
  }, '').toUpperCase(); // don't forget initial value is ''; otherwise, the accumulator value takes the whole first word in the array
  // return initials.toUpperCase();
}
let test1 = acronym(['very', 'important', 'person', 'today', 'now']);
let test2 = acronym(['national', 'aeronautics', 'space', 'administration']);
console.log(test1);
console.log(test2);