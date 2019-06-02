// Names and Input

let hacker1 = "Marc";
console.log (`The driver's name is ${hacker1}`);

let hacker2 = prompt("What's your name?");

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

hacker2 = capitalizeFirstLetter(hacker2);

console.log (`The navigator's name is ${hacker2}`);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both got equally long names, ${hacker1.length} characters!!`)
}

for (let i = 0; i<hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

for (let i = hacker2.length-1; i >= 0; i--) {
  console.log(hacker2[i].toLowerCase());
}

if (hacker2.localeCompare(hacker1) > 0) {
  console.log("The driver's name go first");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// Lorem ipsum generator
