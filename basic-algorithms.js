// Iteration 1. Names and Input
console.log('--- ITERATION 1 ---');
var hacker1 = 'Paco';
console.log(`The driver's name is ${hacker1}`);

var hacker2 = prompt("What's your navigator's name?");
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2. Conditionals
console.log('\n--- ITERATION 2 ---');
// Since it is used in every iteration, I prefer to declare variables for both lengths
var len1 = hacker1.length;
var len2 = hacker2.length;

if(len1>len2) {
  console.log(`The Driver has the longest name, it has ${len1} characters`);
} else if (len1<len2) {
  console.log(`Yo, navigator got the longest name, it has ${len2} characters`);
} else {
  console.log(`wow, you both got equally long names, ${len1} characters!!`);
}

// Iteration 3: Loops
console.log('\n--- ITERATION 3 ---');
// 6.
var hacker1Capit = "";
for(var i=0;i<len1;i++) {
  hacker1Capit += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Capit);

// 7.
var hacker1Reverse = "";
for(var j=len1-1;j>=0;j--) {
  hacker1Reverse += hacker1[j];
}
console.log(hacker1Reverse);

// 8.
/* [WIKIPEDIA]
To determine which of two strings of characters comes when arranging in alphabetical order, 
their first letters are compared. If they differ, then the string whose first letter 
comes earlier in the alphabet comes before the other string. If the first letters are the 
same, then the second letters are compared, and so on. If a position is reached where one 
string has no more letters to compare while the other does, then the first (shorter) string 
is deemed to come first in alphabetical order. */

var alph = "abcdefghijklmnopqrstuvwxyz";

// We'll iterate as many times as the length of the shortest word
var minLen;
if (len1<len2) {
  minLen = len1
} else {
  minLen = len2;
}
// The algorithm doesn't care about lowercase and uppercase, so I convert the strings to lowercase
for (i=0;i<minLen;i++) {
  if(alph.indexOf(hacker1[i].toLowerCase())<alph.indexOf(hacker2[i].toLowerCase())) {
    console.log("The driver's name goes first");
    break;
  } else if (alph.indexOf(hacker2[i].toLowerCase())<alph.indexOf(hacker1[i].toLowerCase())) {
    console.log("Yo, the navigator goes first definitely"); 
    break;
  } else {
    continue;
  }
}
if (i==minLen) {
  console.log("What?! You both got the same name?");
}


// --- BONUS --- 
console.log('\n--- BONUS ---')
// 9.
var userInput = prompt("Now insert a word and check if it's a Palindrome!");
console.log(`String to check: '${userInput}'`);

// First I remove spaces and characters that aren't letters and convert it to lowercase
var isPalindrome = userInput.replace(/[^A-Za-z]/g, "").toLowerCase();
console.log(isPalindrome)
var palLen = isPalindrome.length;

var i=0;
while (isPalindrome[i] === isPalindrome[palLen-i-1] && i<palLen/2) {
  console.log(i + "-" + isPalindrome[i] + "-" + isPalindrome[palLen-i-1]);
  i++;
}
if (isPalindrome[i] === isPalindrome[palLen-i-1]) {
  console.log(`Allright!! The string '${userInput}' IS a Palindrome!`);
} else {
  console.log(`:((( The string '${userInput}' IS NOT a Palindrome!`);
}

// 10.
var loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;
var wordsObj = loremText.split(/\s+\b/);
console.log(`The string 'loremText' has ${wordsObj.length} words.`);

var etCounter = 0;
for(var i=0;i<wordsObj.length;i++) {
  if(wordsObj[i] === 'et') {
    etCounter += 1;
  }
}

console.log(`The word 'et' appears ${etCounter} times.`);
