// Names and Input
var hacker1 = "Gus";
var hacker2 = window.prompt(`What's the navigator's name?`);

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


//Conditionals
var lengthHacker1 = hacker1.length;
var lengthHacker2 = hacker2.length;

if(lengthHacker1 > lengthHacker2){
  console.log(`The driver has the longest name, it has ${lengthHacker1}`);
}
else if(lengthHacker1 < lengthHacker2){
  console.log(`Yo, navigator got the longest name, it has ${lengthHacker2} characters`);
}
else{
  console.log(`Wow, you both got equally long names, ${lengthHacker2} characters!!`);
}

//Loops

//Driver's name with spaces and capital letters
var hacker1WithSpaces = "";
var hackerInCapital = hacker1.toUpperCase();

for(var i = 0 ; i < lengthHacker1 ; i++){
  hacker1WithSpaces += hackerInCapital[i] + " ";
}
console.log(`The driver's name with spaces and capital letters ${hacker1WithSpaces}`);


//Navigator's name in backwards
var reverseHacker2 = "";
for(var j = lengthHacker2-1 ; j >=0 ; j--){
  reverseHacker2 += hacker2[j];
}
console.log(`The navigator's name in backwards is: ${reverseHacker2}`);


//Lexicographic order
var distanceNames = hacker1.localeCompare(hacker2);

if(distanceNames < 0){
  console.log(`The driver's name goes first`);
}
else if(distanceNames > 0){
  console.log(`Yo, the navigator goes first definitively`);
}
else{
  console.log(`What?! You both got the same name?`);
}


//Palindrome check
var palindrome = window.prompt(`Write a word to check if is a palindrome`);
var palindromeClean = palindrome.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
var lengthPalindrome = palindromeClean.length;
var j = lengthPalindrome - 1;

var reversePalindrome = "";
for(var i = lengthPalindrome-1 ; i >=0 ; i--){
  reversePalindrome += palindromeClean[i];
}

if(reversePalindrome === palindromeClean){
  console.log(`${palindrome} IS a palindrome! :D`);
}
else{
  console.log(`${palindrome} is NOT a palindrome! :(`);
}



// Lorem ipsum generator
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum bibendum sapien non accumsan. Mauris dolor nisi, congue eget convallis et, dapibus a ante. Donec pellentesque malesuada turpis et laoreet. Sed ex nisl, facilisis sed vestibulum et, feugiat ac tortor. Integer iaculis scelerisque quam sed sollicitudin. Sed lacinia tortor metus, et tincidunt tellus congue sed. Donec sapien libero, dapibus ac leo sit amet, vestibulum facilisis turpis. Quisque consectetur odio vitae purus dapibus euismod. Aenean sit amet orci ut sapien cursus ultrices. Nam elit mauris, vulputate non consequat et, pharetra eu purus. Phasellus ac venenatis est, eu euismod leo. Suspendisse id interdum ante, vel laoreet tellus. Vivamus posuere tellus vel lectus laoreet hendrerit. Sed vestibulum porta vulputate. Vestibulum viverra, leo in fringilla finibus, sapien velit vestibulum justo, sed fringilla massa mi maximus lorem. Aenean dictum tincidunt volutpat. Cras sed semper lorem. Praesent commodo nibh congue accumsan varius. Donec imperdiet sapien odio, bibendum blandit lorem rutrum a. Suspendisse sit amet purus nec tellus tincidunt tincidunt ac in mauris. Aenean porttitor porta ex nec congue. Fusce a finibus urna, eget consequat tellus. Aliquam sed gravida ante. Praesent feugiat placerat finibus. Quisque maximus quam scelerisque rhoncus consequat. Duis tortor tortor, mattis sed ipsum vel, accumsan interdum mi. Nullam vitae posuere magna. Integer ullamcorper, ligula non imperdiet sodales, dolor felis fringilla erat, a vulputate dui augue sed sem. Nullam commodo lorem non ante dapibus pretium.';

var lengthLorem = lorem.length;
var words = 1;
var et = 0;

for(var i = 0; i < lengthLorem ; i++){
  if(lorem[i] === ' '){
    words++;
    if(lorem[i+1] === 'e' && lorem[i+2] === 't' && (lorem[i+3] === ' ' || lorem[i+3] === ',')){
      et++;
    }
  }
  
}

console.log(`The number of words is ${words}`);
console.log(`The number of 'et' is ${et}`);
