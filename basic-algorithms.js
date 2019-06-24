// Names and Input
var hacker1 = "Maqueda";
var hacker2 = window.prompt("What's your name?");
console.log("The driver's name is " + hacker1);
console.log("The navigatoir name is " + hacker2);

//Conditionals
var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1Length + " characters." );
}
else if (hacker2Length > hacker1Length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2Length + " characters.");
}
else {
    console.log("Wow, you both got equally long names, " + hacker1Length + " characters!!");
}

// Loops
hacker1 = hacker1.split("").join(" ").toUpperCase();
console.log(hacker1);

function reverseString(hacker2) {
return hacker2.split("").reverse().join("");
}
reverseString(hacker2);


if (hacker1.localeCompare(hacker2) === -1) {
 console.log("The driver's name goes first");   
} else if (hacker1.localeCompare(hacker2) === 1) {
 console.log("Yo, the navigator goes first definitely");
} else {
 console.log("What!? You both got the same name?");
};

// Palindrome

var palindrome = window.prompt("Escribe una frase");
palindrome = palindrome.split(" ").join('');
var palindromeReverse = reverseString(palindrome);
function reverseString(palindrome) {
    var str = palindrome.split('');
    str = str.reverse();
    str = str.join("");
    return str;
}

if(palindrome.toLowerCase() === palindromeReverse.toLowerCase()) {
    console.log("It's a Palindrome");
}else{
    console.log("It's not a Palindrome");
}



// Lorem ipsum generator
var parrafo1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae libero commodo nibh accumsan tempus sit amet eu nulla. Nunc non lacinia tellus, eget dapibus mi. In hac habitasse platea dictumst. Aliquam vehicula sollicitudin massa ut venenatis. Etiam suscipit justo ut lorem pellentesque, a sagittis mauris rhoncus. Aliquam pharetra arcu vel dapibus tempus. Fusce hendrerit est et odio malesuada ullamcorper. Morbi vitae justo eu felis sodales volutpat. Proin id urna vitae velit malesuada rhoncus vel non lorem. Etiam eleifend sem a lorem eleifend viverra.";
var parrafo2 = "Aliquam sit amet eros quam. Suspendisse tincidunt eget mi a tristique. Curabitur quis massa ante. Sed rutrum vestibulum ante, quis malesuada massa efficitur quis. Mauris non nulla sit amet ante volutpat viverra. Mauris vel quam finibus, luctus arcu id, pretium purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque faucibus viverra rhoncus. Maecenas pulvinar vitae diam nec elementum. Curabitur gravida dui eget iaculis sagittis.";
var parrafo3 = "Morbi in massa at purus euismod eleifend et et nisl. Phasellus nisl lectus, ultrices ac sem luctus, semper venenatis nisl. Quisque placerat sodales mauris, eget elementum metus pulvinar quis. Suspendisse ornare elit at quam dictum ultricies. Suspendisse potenti. Sed ac hendrerit urna. Praesent condimentum odio in vehicula semper. Sed arcu enim, ornare et auctor vitae, semper id eros.";

console.log(parrafo1 + " " + parrafo1.length + " palabras.");
console.log(parrafo2 + " " + parrafo2.length + " palabras.");
console.log(parrafo3 + " " + parrafo3.length + " palabras.");

//ESTA OARTE DEL IPSUM NO NOS HA SALIDO

/*var palabraRepetida = [];
for (i = 0; i <= parrafo1.length; i++) {
    if (parrafo1[i] === "et"){ 
    palabraRepetida.push(i);
    } else {
    console.log("No se cuantas hay");
    }
};
console.log(palabraRepetida);*/