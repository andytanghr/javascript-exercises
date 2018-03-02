// Bonus: map

var arr = [
  { name: 'Bob' },
  { name: 'Alice' },
  { name: 'Joe' }
];

function map(arr, fun) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fun(arr[i]));
  }
  return newArr;
}

function helloName(name) {
  return 'Hello, ' + name.name + '!';
}

var resultArr = map(arr, helloName);
console.log(resultArr);