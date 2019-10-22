// Names and Input
var hacker1 = 'Peter Pan';

console.log("The Driver's name is " + hacker1);

var hacker2 = prompt ("What's the navigator's name?");

console.log("The navigator's name is " +hacker2);


//Conditionals
if (hacker1.length > hacker2.length){
        console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
    } else if (hacker1.length == hacker2.length){
        console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
    } else {
        console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
    }


var hacker1SingleChar = [];

for (i = 0; i < hacker1.length; i++){
   hacker1SingleChar.push(hacker1.charAt(i));
    }
    
var h1PrintSingleChar =     hacker1SingleChar.join(" ");

console.log(h1PrintSingleChar.toUpperCase());

    
var hacker2Reverse = [];

for (j = hacker2.length; j > -1;  j--){ 
    hacker2Reverse.push(hacker2.charAt(j));
    }

var hacker2ReversePrint = hacker2Reverse.join("");

console.log(hacker2ReversePrint);

var a = "a";
var b = "b";

if (a < b){
    console.log(a);
}

/* Stuck here, tried something but haven't solved it. Was not clear to me if we can use all in built functions and methods in javascript. */

for (i = hacker1.indexOf(0); i <= hacker1.length; i++){
    for (j = hacker2.indexOf(0); j <= hacker2.length; j++)
         if (hacker1.charAt(i) < hacker2.charAt(j)){
            console.log(`Hacker1 letter at position  ${i} comes alphabet first. Letter is ${hacker1.charAt(i)}`);
            console.log(`Hacker1 letter at position  ${j} comes alphabet first. Letter is ${hacker2.charAt(j)}`);
        } else if (hacker1.charAt(i) > hacker2.charAt(j)){
           
    

}

}




// Lorem ipsum generator
