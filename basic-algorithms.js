// Names and Input
var hacker1 = "Yvonne";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is your name?");
console.log("The navigators name is " + hacker2);


//Conditionals
if (hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, " + hacker1.length +" characters!!");
}
else if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length +" characters");
}
else {console.log("o, navigator got the longest name, it has " + hacker2.length +" characters")}


//6.
var spaceName = "";
for (i=0; i<hacker1.length; i++){
  spaceName+=hacker1[i] + " ";
}

var spaceNameUppercase= spaceName.toUpperCase();
console.log(spaceNameUppercase);

//7.
reverseName="";
for(j=hacker1.length-1; j >= 0; j--){
  reverseName+= hacker1[j];
}

console.log(reverseName);

//8.
if(hacker1.localeCompare(hacker2)<0){
  console.log("The driver's name goes first");
}
else if (hacker1.localeCompare(hacker2)>0){
  console.log("Yo, the navigator goes first definitely");
}
else {
  console.log("hat?! You both got the same name?");
}

//9.
var userInput = prompt("Put in a phrase!");
var userInputSpaceless = userInput.replace(" ", "");
var reversePhrase="";
for(i=userInputSpaceless.length-1; i >= 0; i--){
reversePhrase+= userInputSpaceless[i];
}

if(userInputSpaceless === reversePhrase){
  console.log("This is a palindrome");
}
else {
  console.log("This is no palindrome!");
}