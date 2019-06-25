// Names and Input
var hacker1 = "Victor Paolo"
var hacker2
var allHackers = [hacker1, hacker2]


hacker2 = prompt("what is your name?")
alert("The navigator's name is "+hacker2)


//Conditionals
if (hacker2.length < hacker1.length){
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker2.length > hacker1.length){
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else if (hacker2.length === hacker1.length){
    console.log("wow, you both got equally long names, " + hacker2.length + " characters");
}

function action (hacker1, hacker2){
    var hacker1UpCase = hacker1.toUpperCase;
    var allHackerssorted = allHackers.sort();
    console.log(hacker1UpCase.split());
    console.log(hacker2.reverse());
    console.log(allHackerssorted);

}



// Lorem ipsum generator
