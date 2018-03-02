// Sort an array
function sortNamesAlphabetical(arr) {
  return arr.sort();
}
let namesAlphabetical = sortNamesAlphabetical(people);
console.log(namesAlphabetical);


// Sort an array, 2
function sortNamesByLength(arr) {
  return arr.sort(function(a, b) {
    return a.length - b.length;
  });
}

let namesByLength = sortNamesByLength(people);
console.log(namesByLength);


// Sort an array, 3
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
const reducer = (accumulator, currentValue) => accumulator + currentValue; // convert to ES5

function sortByInnerArrSums(arr) {
  return arr.sort(function(current, next) {
    let current = current.reduce();
    let next = next.reduce();
    // specifies sorting function
    if (current < next) {
      return -1;
    }
    if (current > next) {
      return 1;
    }
    return 0;
  });
}

// function sumElements(arr) {
//   return arr.reduce(function(accum, element) {
//     return accum += element;
//   });
// }
// console.log(sumElements([1, 3, 4]));
console.log(sortByInnerArrSums(arr));