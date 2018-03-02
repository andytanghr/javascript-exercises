let testArr = [-3, -2, -1, 0, 1, 2, 3];

// Positive Numbers
function getPositives(arr) {
  return arr.filter(function(element) {
    return element > 0;
  });
}

let positives = getPositives(testArr);
console.log(positives);