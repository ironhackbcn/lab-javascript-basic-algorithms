// Names and Input

var hacker1 = "Albert";
console.log("The driver's name is Albert");

var hacker2 = "XXXX";
console.log("The navigator's name is XXXX");

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log("wow, you both got equally long names, XX characters!!");
} else {
}

//Loops

var Albert = "";
for (i = 0; i < hacker1.length; i++) {
  Albert += hacker1[i].toUpperCase() + " ";
}
console.log(Albert);

var XXXX = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  XXXX += hacker2[i];
}
console.log(XXXX);

var compare = hacker1.localeCompare(hacker2);

if (compare < 0) {
  console.log("The driver's name goes first");
} else if (compare > 0) {
  console.log("Yo, the navigator goes first definitely");
} else if (compare === 0) {
  console.log("What?! You both got the same name?");
}

// Lorem ipsum generator
