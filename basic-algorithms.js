// Names and Input

var hacker1 = "Cody";
console.log("The driver's name is " + hacker1);

var hacker2 = window.prompt("Please enter the navigator's name");
console.log("The navigator's name is " + hacker2);



//Conditionals

if (hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
    // console.log(hacker1.toUpperCase);
}
else if (hacker1.length < hacker2.length){
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
    // console.log(hacker2.toUpperCase);
}
else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
    // console.log(hacker1.toUpperCase);
    // console.log(hacker2.toUpperCase);

}



var spaces = ""

for (var i = 0; i < hacker1.length; i++) { 
    var driver = hacker1.toUpperCase;
    var space = "";
    space = driver[i] + " ";
}

console.log(spaces);
//


// var spaces = ""

// for (var i = 0; i < hacker1.length; i++) {
//     var driver = hacker1.toUpperCase();
//     var space = "";
//     space = driver[i] + " "; //espacio
// }

// console.log(spaces);

//inverso 

var spacesFlip = ""

for (var j = hacker1.length - 1; j >= 0; j--) { //intial is 0, to the right infinity 
    var driverFlip = hacker1;
    var spaceFlip = "";
    spaceFlip = driverFlip[j];
    spacesFlip += spaceFlip;
}

console.log(spacesFlip);

// Lorem ipsum generator