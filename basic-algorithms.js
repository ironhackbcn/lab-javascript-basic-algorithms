// Names and Input

var hacker1 = "Alonso";
var hacker2 = "";
var result1 = "";
var result2 = "";
pal = new Boolean(true);

hacker2 = prompt();

console.log("The driver's name is " + hacker1);
console.log("The navigator´s name is " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "The Navigator got the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "wow, you both got equally long names," + hacker2.length + " characters!!"
  );
}

//Loops

//El split me separa el string en cada uno de los caracteres, el join me los une con un espacio entre, y finalmente uppercase
result1 = hacker1
  .split("")
  .join(" ")
  .toUpperCase();
console.log(result1);

// reverse is a function in a array, for that reason we convert the string into array, reverse function and join.
result2 = hacker2
  .split("")
  .reverse()
  .join("");
console.log(result2);

// Por la tabla ascii el alfabeto tiene una numeracion, a < b... charAt coge el primer caracter de el string
if (hacker1.charAt(0) < hacker2.charAt(0)) {
  console.log("The driver's name goes first");
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// Algotihm to know if it is a palindromo sentence.

var palindromo = "race car";

// put the sentence in lowerletters and without spaces.
palindromo = palindromo.toLowerCase().replace(/ /g, "");

for (var i = 0; i < palindromo.length; i++) {
  if (palindromo[i] != palindromo[palindromo.length - i - 1]) {
    pal = false;
  }
}

if (pal) {
  console.log("es un palindromo");
} else {
  console.log("no es un palindromo");
}

// Lorem ipsum generator
