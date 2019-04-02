// Names and Input
var hacker1 = "John"; //driver
var hacker2 = prompt("What's the navigator's name?"); //navigator
var driverUpperCase = "";
var driverBackwards = "";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `wow, you both got equally long names, ${hacker2.length} characters!!`
  );
}

for (var i = 0; i < hacker1.length; i++) {
  driverUpperCase += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(driverUpperCase);

for (var j = hacker1.length - 1; j >= 0; j--) {
  driverBackwards += hacker1.charAt(j);
}

console.log(driverBackwards);

if (hacker1.toUpperCase().localeCompare(hacker2.toUpperCase()) === -1) {
  console.log(`The driver's name goes first`);
} else if (hacker1.toUpperCase().localeCompare(hacker2.toUpperCase()) === 1) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What?! You both got the same name?`);
}

//Palindrom

var phrases = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?\" and \"No 'x' in Nixon"
];
// create an array with the phrases backward
var phrasesBackward = ["", "", "", "", "", "", "", ""];

for (var m = 0; m < phrases.length; m++) {
  //remove special characters, spaces and convert in uppercase
  phrases[m] = phrases[m].replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  //fill the array that will store the phrases backwards
  //phrasesBackward[m] = phrases[m];
  for (var y = phrases[m].length - 1; y >= 0; y--) {
    phrasesBackward[m] += phrases[m][y];
    //phrasesBackward[y] += phrases[m].charAt(y);
  }
  if (phrasesBackward[m] === phrases[m]) {
    console.log("Palindrome!");
  }
}

//console.log(phrases);

//console.log(phrasesBackward);

// Lorem ipsum generator
