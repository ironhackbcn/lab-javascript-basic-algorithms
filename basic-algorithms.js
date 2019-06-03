// Names and Input
let hacker1 = `Xavi`;
console.log(`The driver's name is ${hacker1}`);
let hacker2 = prompt("What's your name?");
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if (hacker1.length === hacker2.length) {
  console.log(
    `wow, you both got equally long names, ${hacker1.length} characters!!`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  );
} else {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`
  );
}
// Loops
let str1 = "";
let hacker = hacker1
  .toUpperCase()
  .split("")
  .forEach(function(element) {
    str1 = str1.concat(" ", element);
  });

console.log(str1.trim());
let str2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  str2 = str2.concat(hacker2[i]);
}
console.log(str2);

switch (hacker1.localeCompare(hacker2)) {
  case 0:
    console.log(`What?! You both got the same name?`);
    break;
  case -1:
    console.log(`The driver's name goes first`);
    break;
  case 1:
    console.log(`Yo, the navigator goes first definitely`);
    break;

  default:
    break;
}

/*
 FALTA EL BONUS

*/

/*

*/
// Lorem ipsum generator
