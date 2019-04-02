// Iteration 1: Names and Input

var hacker1 = "Luisa";
console.log("The driver's name is " + hacker1);

var hacker2 = "John";
var hacker2 = prompt("What's your name?");
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + "characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")
}

// Iteration 3: Loops

// Driver

var newDriver = [];

for (var i = 0; i < hacker1.length; i++) {
    newDriver.push(hacker1[i]);
    newDriver.push(" ");
}

newDriver = newDriver.join("");
newDriver = newDriver.toUpperCase();
console.log(newDriver);

// Navigator

var newNavigator = [];

for (var j = hacker2.length; j >= 0; j--) {
    newNavigator.push(hacker2[j]);
 
}

newNavigator = newNavigator.join("");
console.log(newNavigator);

// Sort alphabetically

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker2.localeCompare(hacker1) > 0) {
    console.log("The driver's name goes first.")
} else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker2.localeCompare(hacker1) == 0) {
    console.log("What?! You both got the same name?")
}

// Bonus Time!

// Palindrome Detector (need to edit regex to exclude special characters)
var word = "home";
var word = prompt("Give me a word!");

word = word.toLowerCase();
word = word.replace(/[, ]+/g, "").trim();

var counter = 0;

for (var k = 0; k < word.length; k++) {
   if (word[k] == word[word.length - (k + 1)]) {
        counter++;
    }
}
if (counter == word.length) {
    console.log("It is a palindrome!");
} else {
    console.log("It is not a palindrome!");
}

// Word Counter
 
var bunchOfWords = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

var length = bunchOfWords.split(" ").length;

console.log(length);

