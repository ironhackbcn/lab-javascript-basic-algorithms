// Names and Input

var hacker1 = prompt("What is the Driver's name?");
var hacker2 = prompt("What is the Navigator's name?");;

console.log("The name of the driver is " + hacker1 );
console.log("The name of the navigator is " + hacker2 );



//Conditionals
// The Driver has the longest name, it has XX characters or
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " +  hacker1.length + " characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " +  hacker2.length + " characters");
} else if (hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, XX characters");
}



var hacker1WithGaps="";
// Lorem ipsum generator
for (var i=0;i<hacker1.length;i++){
  hacker1WithGaps += hacker1[i] + " ";
}
console.log("name of driver with gaps: " + hacker1WithGaps.toUpperCase());

var hacker2ReverseString = "";
// Lorem ipsum generator
for (var j=hacker2.length-1;j>=0;j--){
  hacker2ReverseString += hacker2[j];
}
console.log("name of navigator reversed: " + hacker2ReverseString);


console.log ("Sorted1 " + hacker1.split('').sort().join(''));
console.log ("Sorted2 " + hacker2.split('').sort().join(''));

//comparison
var n1 = null;
var n2 = null;
n1 = hacker1.localeCompare(hacker2);
n2 = hacker2.localeCompare(hacker1);

if (n1 > n2){
console.log("The driver's name goes first");
} else if (n1 < n2){
console.log("Yo, the navigator goes first definitely");
} else if ( n1 === n2){
console.log("What?! You both got the same name?");
}


