let testArr = [-3, -2, -1, 0, 1, 2, 3];
// Even Numbers
function getEvens(arr) {
  return arr.filter(function(element) {
    return element % 2 === 0 || element % 2 === -0;
  });
}

let evens = getEvens(testArr);
console.log(evens);