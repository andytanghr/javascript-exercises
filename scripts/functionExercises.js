

















// 3 times
function call3Times(fun) {
  fun();
  fun();
  fun();
}
function hello(){
  console.log('Hello, world!');
}
call3Times(hello);


// n times
function callNTimes(times, fun) {
  for (let i = 0; i < times; i++) {
    fun();
  }
}
callNTimes(5, hello)


// Sum an array
function sum(arr) {
  return arr.reduce(function(accum, element) {
    return accum += element;
  });
}
sum([1, 2, 3]);


// Acronym
function acronym(arr) {
  let initials = '';
  // another method using map
  // initials = arr.map(function(element) {
  //   return element[0];
  // });
  // return initials.join('').toUpperCase();
  
  return arr.reduce(function(accum, element) {
    return accum += element[0];
  }, '').toUpperCase(); // don't forget initial value is ''; otherwise, the accumulator value takes the whole first word in the array
  // return initials.toUpperCase();
}
let test1 = acronym(['very', 'important', 'person', 'today', 'now']);
let test2 = acronym(['national', 'aeronautics', 'space', 'administration']);
console.log(test1);
console.log(test2);