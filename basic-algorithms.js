// Names and Input

console.log("I'm Ready!");

const hacker1 = "Mario";
console.log(hacker1);
const hacker2 = prompt("What is the name of Navigator?");
console.log(`The Navigator's name is ${hacker2}`);

//Conditionals

if (hacker1.length > hacker2.length) {

	console.log(`The Driver has the longest name, it has ${hacker1.length}`);

}else if (hacker2.length > hacker1.length) {

	console.log(`Yo, navigator got the longest name, it has ${hacker2.length}`);

}else if (hacker2.length === hacker1.length) {

	console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);

}
let space = "";

for (var i = 0; i < hacker1.length; i++) {
	space += hacker1[i].toUpperCase() + " ";

}
	console.log(space);

let x = hacker1.length;
let reverseString = " ";
while(x >= 0){
	reverseString = reverseString + hacker1.charAt(x);
	x--;
}

console.log(reverseString);



if (hacker1 > hacker2) {

	console.log("The driver's name goes first");

}else if (hacker1 < hacker2) {

	console.log("Yo, the navigator goes first definitely");

}else{
	console.log("What?! You both got the same name?");
}


// Lorem ipsum generator
