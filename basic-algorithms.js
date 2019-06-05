// Names and Input
let hacker1 = "Olga"; // driver
console.log("The driver's name is " + hacker1);
let hacker2 = prompt("What is youe name body?"); //navigator
console.log("The navigator's name is " + hacker2); // Antonio

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
    `wow, you both got equally long names ${hacker2.length} characters!!`
  );
}

//Conditionals
let printNombreInCapital = "";
for (i = 0; i < hacker1.length; i++) {
  printNombreInCapital += hacker1[i] + " ";
}
console.log(printNombreInCapital.toUpperCase());

//Print all the characters of the navigator's name, in reverse order. ie. "nhoJ

let nombreInRevers = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  nombreInRevers += hacker2[i];
}
console.log(nombreInRevers);

/*Depending on the lexicographic order of the strings, print:
The driver's name goes first
Yo, the navigator goes first definitely
What?! You both got the same name? 
*/

let lexiOrder = hacker1.localeCompare(hacker2);

//console.log(hacker1.localeCompare(hacker2));

if (lexiOrder < 0) {
  console.log(`The driver's name goes firs`);
} else if (lexiOrder > 0) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What?! You both got the same name?`);
}

//Ask the user for a new string and check if it's a Palindrome.

let string = prompt("Give me a string");
let newArray = string.split("");
let reverseArray = newArray.reverse();
let reverseString = reverseArray.join("");

if (newArray === reverseArray) {
  console.log("String is Palindrome");
} else {
  console.log("String is not Palindrome");
}
// Lorem ipsum generator
