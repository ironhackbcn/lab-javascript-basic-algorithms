var hacker1 = "alonso"

console.log("The driver/'s name is XXXX")

var hacker2 = prompt("Please type in the navigator\'s name: ");

console.log("The navigator\'s name is YYYY");

var hacker1Length = hacker1.length;

var hacker2length = hacker2.length;

if (hacker1Length > hacker2length) {
  console.log("The Driver has the longest name, it has ",hacker1Length ," characters");
} else if ( hacker1Length === hacker2length) {
  console.log("wow, you both got equally long names, ",hacker1Length," characters!!");
} else {
  console.log("Yo, navigator got the longest name, it has ",hacker2length," characters")
};

/* PRINT WITH ONE SPACE ALL CAPITAL LETTERS */

var newUpper ="";

for (var i = 0; i < hacker1.length; i++) {
  newUpper += (" " + hacker1[i].toUpperCase());  
}
console.log(newUpper);


/* Reverse Navigators name */

var newReverse = "";

for (var j=hacker2.length-1; j=0; j--) {
  newReverse += hacker2[j];
}

console.log(newReverse);





