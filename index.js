//Names and Input

let hacker1 = "Pepe";
console.log("The driver's name is " + hacker1);
let hacker2 = prompt("What's your name?");
console.log("The driver's name is " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "wow, you both got equally long names, " + hacker1.length + " characters!!"
  );
}

//Loops

//Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var result = "";
for (var i = 0; i < hacker1.length; i++) {
  var char = hacker1[i];
  char = char.toUpperCase();
  char = char + " ";
  result += char;
}
console.log(result);

//Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

var inverseCase = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
  inverseCase += hacker2[i];
}
console.log(inverseCase);

//Depending on the lexicographic order of the strings, print:

var hacker1Length = 0;
for (var i = 0; i < hacker1.length; i++) {
  if (hacker1[i] === hacker2[i]) {
    hacker1Length++;
    if (hacker1Length == hacker1.length) {
      console.log("what? you both got the same name");
    }
  } else if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("No, The navigator's goes first, definitely");
    break;
  }
}
