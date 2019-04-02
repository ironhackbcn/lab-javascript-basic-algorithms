// Names and Input


var hacker1 = "Anso";
console.log("The driver's name is ", hacker1);

var hacker2 = prompt("What's your name?");
console.log("The navigator's name is ", hacker2);



//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length}
   characters.`);
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both got equally long names, ${hacker1.length} characters!!`)
}


// Loops
var hacker1WithSpace = '';
for (var i = 0; i < hacker1.length; i++) {
  hacker1WithSpace = hacker1WithSpace + hacker1[i] + ' ';
}
console.log(hacker1WithSpace.toUpperCase());


var hacker2Backwards = '';
for (var j = hacker2.length - 1; j >= 0; j--) {
  hacker2Backwards = hacker2Backwards + hacker2[j];
}

console.log(`Navigators name in reverse order: ${hacker2Backwards}`);


if (hacker1 < hacker2) {
  console.log(`The driver's name goes first`);
} else if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely`);
} else if (hacker1 === hacker2) {
  console.log(`What?! You both got the same name?`);
}



// Lorem ipsum generator
var inputStr = prompt("Please type a string:");
inputStr = inputStr.replace(/ /g, '');
inputStr = inputStr.toLowerCase();


var strReverse = '';
for (var j = inputStr.length - 1; j >= 0; j--) {
  strReverse = strReverse + inputStr[j];
}

if (inputStr === strReverse) {
  console.log(`The string ${inputStr} are a palindrome! It is reads  ${strReverse} backwards :)`);
} else {
  console.log(`The string are not a palindrome :()`)
}


