let testArr = [-3, -2, -1, 0, 1, 2, 3];
// Square the Number
function squareTheNumbers(arr) {
  return arr.map(function(element) {
    return element ** 2;
  });
}

let squares = squareTheNumbers(testArr);
console.log(squares);