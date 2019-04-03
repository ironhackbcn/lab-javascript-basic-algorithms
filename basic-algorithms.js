var hacker1= "Damian ";

console.log ("The driver's name is" + hacker1 )

var hacker2 = prompt("What's your navigation's name?");


console.log ("Is: " + hacker2 );

if ( hacker1.length > hacker2.length) {
  console.log ("The Driver has the longest name, it has "+ hacker1.length + " characters ")
} else if ( hacker1.length < hacker2.length ) {
   console.log ("Yo, navigator got the longest name, "+ hacker2.length + " characters ")
} else {
  console.log ("wow, you both got equally long names, "+ hacker2.length +   " characters ")
}

console.log((hacker1.toUpperCase()).split(''));

console.log(hacker2.split('').reverse().join(''));


//lexicographic order 

var palindrome= prompt("What do you want to chesk if it is a polindrome?")

for (var i=0; i< palindrome.length; i++) {
  if ( palindrome[i] === palindrome[ (palindrome.length) - i ] ) {
  console.log ("Yeah it is a polindrome")
} else {
  console.log ("Sorry it's not a polidrome ")
}
}






// Lorem ipsum generator
