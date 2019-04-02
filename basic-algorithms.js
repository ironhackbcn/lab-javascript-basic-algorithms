// Names and Input

var hacker1 = "Dave"; // Create a variable hacker1 with the driver's name
console.log("The driver's name is "+hacker1); // Print "The driver's name is XXXX"
var hacker2 = prompt("Enter your name:"); //Create a variable hacker2 and ask the user for the navigator's name
console.log("The navigator's name is "+hacker2); // Print "The navigator's name is YYYY"

//Conditionals

/* 
Depending on which name is longer, print:
  The Driver has the longest name, it has XX characters or
  Yo, navigator got the longest name, it has XX characters or
  wow, you both got equally long names, XX characters!!
*/
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has "+hacker1.length+" characters");
}
else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has "+hacker2.length+" characters");
}
else {
  console.log("wow, you both got equally long names, "+hacker1.length+" characters!!")
}

// Loops

// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var driversName = "";

for(i = 0; i < hacker1.length; i++) {
  driversName += hacker1[i] + ' ';
}
console.log(driversName.toUpperCase());

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

var navigatorsName = "";

for(var i = hacker2.length-1; i >= 0; i-- ) {
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);

/*
Depending on the lexicographic order of the strings, print:
  The driver's name goes first
  Yo, the navigator goes first definitely
  What?! You both got the same name?
*/

var hacker1 = "Dave";
var hacker2 = "Timothy";

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first");
}
else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely");
}
else {
  console.log("What?! You both got the same name?");
}

/*
Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

var newString = prompt("Enter a word or phrase:").replace(/[^a-zA-Z0-9]/g,'');
var reversedString = "";

for(var i = newString.length-1; i >= 0; i-- ) {
  reversedString += newString[i].toLowerCase();
}

if (reversedString == newString.toLowerCase()) {
  console.log("Palindrome!");
}
else {
  console.log("404 Palindrome not found");
}
