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

// Lorem ipsum generator
