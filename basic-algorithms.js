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
var newHacker2 = ""
for (i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i] + " ";
  //newHacker1.toUpperCase();
  console.log(newHacker1.toUpperCase());
}

for (x = hacker2.length - 1; x > 0; x--) {
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