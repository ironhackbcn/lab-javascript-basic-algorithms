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

// Lorem ipsum generator 

/*
Generate 3 paragraphs. Store the text in a String
Make your program count the number of words in the string
Make your program count the number of times the latin word et appears
*/

var lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed porta diam. Cras volutpat fringilla magna eget auctor. Nam ex eros, dapibus at gravida vel, rhoncus id magna. Sed condimentum erat sed mattis imperdiet. Aenean augue nunc, accumsan ac porttitor eu, consequat at ligula. Vestibulum sed massa et nibh dapibus mollis. Nunc imperdiet eleifend odio. In blandit est eu efficitur sagittis.

Suspendisse a maximus augue, ac maximus nibh. Nullam sit amet augue mollis odio luctus tempor et ullamcorper metus. Sed molestie vel urna vitae feugiat. Praesent cursus, dolor sit amet feugiat porta, eros est condimentum lorem, molestie mollis quam eros a orci. Cras finibus egestas scelerisque. Nam lectus nisi, suscipit sit amet placerat quis, volutpat at velit. Vestibulum venenatis, libero in commodo gravida, orci sapien euismod magna, sit amet venenatis ante nisi ut metus. Etiam interdum elit libero, eu gravida dui facilisis ut. Suspendisse dictum, purus vel volutpat iaculis, nisi mauris placerat ipsum, ac commodo dui eros ut metus. Morbi at eros libero. Maecenas odio tellus, rhoncus id vulputate eget, aliquam et massa. Nulla finibus vestibulum congue.

Nulla hendrerit ante non nibh laoreet, id ullamcorper tortor ornare. Praesent faucibus sem quis interdum tincidunt. Duis id quam eget ante eleifend luctus at eu nibh. Proin vitae tellus non ligula molestie malesuada tincidunt et leo. Quisque eget elit congue, pulvinar ex non, pulvinar libero. Quisque dignissim ipsum eu ligula volutpat tempus. Fusce quis nibh commodo, convallis arcu eget, dictum ante. Suspendisse nec eleifend tellus. In vel hendrerit elit, et convallis odio. Proin vitae dui ac metus placerat malesuada. Phasellus scelerisque eget elit ut accumsan. Morbi pretium, libero vel lobortis cursus, libero neque commodo mi, sollicitudin bibendum nisi nisi ut libero.`

var lipsumWords = lipsum.split(" ");

var numOfWords = lipsumWords.length;
console.log(numOfWords);

var matchedWords;

for (i = 0; i < numOfWords; i++ ) {
  if (lipsumWords[i].includes('et')) {
    matchedWords += lipsumWords[i]);
  }
}

console.log(matchedWords.length);


