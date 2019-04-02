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

// Lorem ipsum generator
var newHacker1 = "";
var newHacker2 = "";
for (i = 0; i <= hacker1.length; i++) {
  newHacker1 = hacker1[i];
  console.log(newHacker1);
}

for (x = hacker2.length; x > 0; x--) {
  newHacker2 = hacker2[x];
  console.log(newHacker2);
}

/*I thought about creating an object that assigns numerical values to the letters of the alphabet
 but I feel like it would be too much work and there should be an easier way to do this... 
if (newHacker1[0] > newHacker2[0]) {
  console.log("The driver's name goes first")
} else if (newHacker2[0] > newHacker1[0]) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both got the same name?")
}*/
