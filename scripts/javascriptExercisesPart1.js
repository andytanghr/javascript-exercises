// Madlib
function madlib(name, subject) {
  return name + '\'s favorite subject in school is ' + subject + '.';
}
console.log(madlib('John', 'art')); // 'John's favorite subject in school is art.'


// Tip Calculator
function tipAmount(amount, rating) {
  if (rating === 'good') {
    return amount * 0.2;
  } else if (rating === 'fair') {
    return amount * 0.15;
  } else if (rating === 'bad') {
    return amount * 0.1;
  } else {
    return 'error in input'
  }
}
console.log(tipAmount(100, 'good')); // 20
console.log(tipAmount(40, 'fair')); // 6
console.log(tipAmount(40, 'ok')); // 'error in input'


// Tip Calculator 2
function totalAmount(amount, rating) {
  return tipAmount(amount, rating) + amount;
}
console.log(totalAmount(100, 'good')); // 120
console.log(totalAmount(40, 'fair')); // 46
console.log(totalAmount(40, 'ok')); // 'error in input40'


// Print a Square
function printSquare(size) {
  var row = '';
  // solution without using repeat method
  // for (var i = 0; i < size; i++) { 
  //   row += '*';
  // }
  // for (var i = 0; i < size; i++)
  //   console.log(row);

  for (var i = 0; i < size; i++) {
    console.log('*'.repeat(size));
  }
}
printSquare(5);


// Print a Box
function printBox(width, height) {
  var topBottom = '*'.repeat(width);
  var middle = '*' + ' '.repeat(width - 2) + '*';
  console.log(topBottom);
  for (var i = 0; i < height - 2; i++) {
    console.log(middle);
  }
  console.log(topBottom);
}
printBox(6, 4);


// Print a Banner
function printBanner(text) {
  topBottom = '*'.repeat(text.length + 4);
  middle = '* ' + text + ' *';
  console.log(topBottom);
  console.log(middle);
  console.log(topBottom);
}
printBanner('Welcome to DigitalCrafts');


// Leetspeak
var leetDict = {
  'A': '4',
  'E': '3',
  'G': '6',
  'I': '1',
  'O': '0',
  'S': '5',
  'T': '7',
};

function leetspeak(text) {
  var leeted = '';
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (leetDict[char.toUpperCase()]) {
      leeted += leetDict[char.toUpperCase()];
    } else {
      leeted += char;
    }
  }
  return leeted;
}
console.log(leetspeak('Leet'));


// Long-long vowels
function longLongVowels(text) {
  var longed = '';
  for (var i = 0; i < text.length; i++) {
    char = text[i];
    nextChar = text[i+1];

    if (char === 'o' && nextChar === 'o') {
      longed += char.repeat(5);
      // longed += longed.replace(char, char.repeat(3));
      i++;
    } else if (char === 'e' && nextChar === 'e') {
      longed += char.repeat(5);
      // longed += longed.replace(char, char.repeat(3));
      i++;
    } else {
      longed += char;
    }
  }
  return longed; 
}
console.log(longLongVowels('Good')); // 'Goooood'
console.log(longLongVowels('Cheese')); // 'Cheeeeese'
console.log(longLongVowels('Man')); // 'Man'


// Just the Positives
function positiveNumbers(array) {
  positivesOnly = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivesOnly.push(array[i]);
    }
  }
  return positivesOnly;
}
//By definition, zero is not considered positive nor negative
console.log(positiveNumbers([1, -3, 5, -3, 0])); // [1, 5] 
console.log(positiveNumbers([1, 2, 3])); // [1, 2, 3] 
console.log(positiveNumbers([-1, -2, -3])); // [] 


// Caesar Cipher
function cipher(text) {
  var chars = text.split('');
  var ciphered = '';
  for (var i = 0; i < text.length; i++) {
    var code = chars[i].charCodeAt(0);
    // conditionals split for readability
    if (code > 64 && code < 91) { // checks capitals A-Z
      code = (code - 65 + 13) % 26; // gets value for letter in alphabet, adds Caesar offset, then wraps around if value is past 26
      ciphered += String.fromCharCode(code + 65);
    } else if (code > 96 && code < 173) { // checks lowers a-z
      code = (code - 97 + 13) % 26;
      ciphered += String.fromCharCode(code + 97);
    } else {
      ciphered += chars[i];
    }
  }
  return ciphered;
}
cipher('Genius without education is like silver in the mine');
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'


// TO BE CONTINUED
// Caesar Cipher 2
function decipher(text, offset) {
  var chars = text.split('');
  deciphered = '';
  for (var i = 0; i < text.length; i++) {
    var code = (chars[i].charCodeAt(0) + offset) % 26;
    if (code > 64 && code < 91 || code > 97 && code < 173) { //if value is with value range A-Z or a-z, convert ciphered char to value, add offset, wrap around alphabet range; not a letter, don't decipher letter
      // if code uppercase converted to lower case is same as lowercase, and vice versa, it is a letter
      deciphered += String.fromCharCode(code);
    } else {
      deciphered += chars[i];
    }
  }
  return deciphered;
}
decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);
// 'Genius without education is like silver in the mine'