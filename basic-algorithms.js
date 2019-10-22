// Names and Input
    // 1. + 2. variable hacker1 + print

var hacker1 = 'Mr. Robot';
console.log('The driver\'s name is ' + hacker1);

    // 3. + 4. variable hacker2 + print
    
var hacker2 = window.prompt('Hi, what\'s your name?', 'insert your name');
console.log('The navigator\'s name is ' + hacker2);

//Conditionals
    // 5. longer name

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length}  characters`);
}
else {
    console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`);
}

// Loops
    // 6. driver's name capitals

for (var i = 0; i < hacker1.length; i++ ) {
    var upperCase = hacker1.toUpperCase();

    console.log(upperCase[i]);
}
    // 7. navigator's name in reverse order

for (var i = hacker2.length-1; i >= 0; i-- ) {
    var reverseOrder = hacker2[i];
    console.log(reverseOrder);
}
    // 8. lexicographical order

var orderLexicographical = hacker1.localeCompare(hacker2);
console.log(orderLexicographical);

if (orderLexicographical < 0) {
    console.log('The driver\'s name goes first');
}
else if (orderLexicographical > 0) {
    console.log('Yo, the navigator goes first definitely');
} 
else {
    console.log('What?! You both got the same name?');
}
    

// Bonus 
    // 9. Palindrome

var newString = window.prompt('Hi, write something', 'insert text here');

for (var i = 0; i < newString.length/2; i++) {
   if (newString[i] !== newString[newString.length - 1 - i]) { 
     console.log('No palinrome, just an ordinary text');
   }
  else {
    console.log('What have we here? A palindrome!');
  }
}

    // 10. lorem ipsum generator
