// Names and Input

var hacker1 = 'Ignacy';
console.log(`The driver's name is ${hacker1}`);
hacker2 = window.prompt('What\'s your name?', 'stranger');
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker2.length > hacker1.length) {
  console.log('Yo the navigator has the longest name, it has ' + hacker2.length + ' characters.') ;
} else {
  console.log('Wow you both have equally long names bitches, ' + hacker2.length + ' characters.');
}
//Loops
var hackerUpper = hacker1.toUpperCase()
var hackerSpace = []
for(var i = 0; i<hackerUpper.length; i++ ) {
  if(i !== hackerUpper.length - 1){
    hackerSpace.push(hackerUpper[i]+' ')
  } else {
    hackerSpace.push(hackerUpper[i])
  };
}
hackerSpace = hackerSpace.join(" ");
console.log(hackerSpace);

// Name in reverse
var hackerReverse = []
for(var i = hacker2.length -1; i >= 0; i--) {
 hackerReverse.push(hacker2[i])
}
hackerReverse = hackerReverse.join('');
console.log(hackerReverse);


// Alphabetical Order - who's first?
var driver = 'Ignacio';
var navigator1 = 'Edgar';
var names = [navigator1, driver];
names = names.sort()
if(names[0] === driver) {
  console.log('The driver\'s name goes first');
} else if(names[0] === navigator1) {
  console.log('The navigator\'s goes first definitely');
} else if(driver === navigator1) {
  console.log('What?! You both got the same name?')
} 


// Palidrome

var str = window.prompt('What\'s your string?', 'race car');

str = str.split(' ');
str = str.join('');
var strReverse = '';

for ( i = str.length - 1; i >= 0; i--) {
  strReverse += str[i]
}

if (str === strReverse) {
  console.log("WOAH, A PALINDROME!");
} else {
  console.log("NAH, NOT A PALIDROME!");
}




// Lorem ipsum generator - pendiente...
