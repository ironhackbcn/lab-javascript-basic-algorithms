// Names and Input
var hacker1 = "Piero";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);
//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " hacker1.length " characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " hacker2.length " characters");
} else if (hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, " hacker1.length " characters");
};

// Lorem ipsum generator
