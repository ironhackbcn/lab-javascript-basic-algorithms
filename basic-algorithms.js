// Names and Input

var hacker1 = "Name";

var hacker2 = "Name2";

var hacker1Long = hacker1.length;
var hacker2Long = hacker2.length;

console.log(`the driver´sname is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if (hacker1Long > hacker2Long) {
  console.log(`The Driver has the longest name, it has ${hacker1Long} characters`)
} else if (hacker1Long < hacker2Long) {
  console.log(`Yo, navigator got the longest name, it has ${hacker1Long+1} characters`)
} else if (hacker1Long == hacker2Long) {
  console.log(`wow, you both got equally long names, ${hacker1Long} characters!!`)
}


// Lorem ipsum generator

var strReverse = hacker2.split('').reverse().join('')
console.log(strReverse)

var strUpCase = hacker1.split('').join(' ').toUpperCase()
console.log(strUpCase)