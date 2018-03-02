// Bonus: forEach
var arr = [
  { name: 'Bob' },
  { name: 'Alice' },
  { name: 'Joe' }
];

function forEach(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    fun(arr[i]);
  }
}

function helloName(name) {
  console.log('Hello, ' + name.name + '!');
}
forEach(arr, helloName);