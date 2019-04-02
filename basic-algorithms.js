// Names and Input
var hacker1 = "Table";
console.log(hacker1);

var hacker2 = prompt("What's your name?);
console.log('Navigator´s name is ' + hacker2);


//Conditionals
var driver = "ThomasJames";
var navigator = "Sally";

if (driver.length > navigator.length){
    console.log("The Driver has the longest name, it has " + driver.length + " characters")
}else if (driver.length < navigator.length) {
    console.log("The Navigator has the longest name, it has " + navigator.length + " characters")
}else if (driver.length = navigator.length) {
    console.log("wow, you both got equally long names" + navigator.length + " characters!!")
}

// Lorem ipsum generator

var upperCaseName = "";
for (var i = 0; i < driver.length; i++){
    upperCaseName += driver[i].toUpperCase();
}
console.log(upperCaseName);

var reverse = "";    
for (var j = navigator.length -1; j >= 0; j--){        
      reverse += navigator[j];
    }    
console.log(reverse);

var n = driver.localeCompare(navigator);

if (n > 1){
   console.log('The driver's name goes first'); 
}else if (n < 1) {
   console.log('Yo, the navigator goes first definitely');
}else if (n = 0) {
    console.log('What?! You both got the same name?');
}






