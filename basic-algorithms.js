// Names and Input
var hacker1 = "John";
console.log("The driver's name is " + hacker1);

var hacker2 = window.prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "The Navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both got equally long names, " + hacker2.length + " characters!!"
  );
}

//Loops
for (var i = 0; i < hacker1.length; i++) {
  var toCapitals =
    hacker1[0] + " " + hacker1[1] + " " + hacker1[2] + " " + hacker1[3];
  console.log(toCapitals.toUpperCase());
}

// below: how to make it as a linear string??
for (var i = hacker1.length; i > -1; i--) {
  // console.log(hacker1[i])
  console.log(hacker1[i]);
}

// Lorem ipsum generatord
