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