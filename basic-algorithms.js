// Names and Input
var hacker1 = "Michelle";
console.log(hacker1);
var hacker2 = prompt("What is the navigators name?");
console.log("The navigators name is ", hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has", hacker1.length, "characters");
} else if (hacker1.length === hacker2.length) {
  console.log("wow, you both got equally long names,", hacker1.length, "characters!!");
} else {
  console.log("Yo, navigator got the longest name, it has", hacker2.length, "characters");
}


var newHacker1 = "";
var newHacker2 = ""
for (i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i] + " ";
  console.log(newHacker1.toUpperCase());
}

for (x = hacker2.length - 1; x >= 0; x--) {
  newHacker2 += hacker2[x];
  console.log(newHacker2);
}

if (newHacker1[0] > newHacker2[0]) {
  console.log("The driver's name goes first")
} else if (newHacker2[0] > newHacker1[0]) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both got the same name?")
}

newStrBackwards = ""
var newStr = prompt("enter a string!") 
// looping through the entered string to turn it backwards
for (y = newStr.length - 1; y > 0; y--) {
  newStrBackwards += newStr[y];
}
console.log(newStrBackwards)
//now looping through the word again to get each letter and compare it to the backward one

for (z = 0; z < newStr.length; z++) {
   console.log(newStr[z]);
    if (newStr[z] === newStrBackwards[/*some kind of backwards z*/]) {
       console.log("Hurray, palindrome")
    } else {
       console.log("not a palindrome")
   }
 }

var loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in elit ac augue consectetur dignissim. Mauris congue posuere augue,
 sit amet ultricies lorem posuere at. Vivamus lacinia elementum metus, at porttitor ex pharetra non. Integer tristique ut tortor ac fermentum. Aenean velit metus,
  vulputate in congue sit amet, egestas sed nisi. Morbi vulputate placerat iaculis. Proin lacus tortor, tempus volutpat suscipit eget,
   faucibus sed nisi. Etiam in iaculis est, non tincidunt nunc. Sed eget orci eu dolor bibendum convallis non vel tortor.
   Praesent efficitur leo vel mi convallis, sit amet mattis neque gravida.`

// creating an array of all the words in the string
var loremArray = loremIpsum.split(" ");

var matchedWords = "";

for (w = 0; w < loremArray.length; w++) { // looping through to get each individual word in array
  if (loremArray[w].includes('et')) { // condition c
    matchedWords++; // counting the matched ETs in loremArray
  }
}