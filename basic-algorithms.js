// Names and Input
var hacker1 = "Piero";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {   // Comparing lengths
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else if (hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, " + hacker1.length + " characters");
};

for (var i = 0; i <= hacker1.length-1; i++){  // Transforming hacker1 to Upper Case and breaking by characters
console.log(hacker1[i].toUpperCase());
}

for (var i = hacker2.length-1; i >= 0 ; i--){ // Reverse breaking by characters, the iteration i = var.length and the condition i = 0 with reverse counting
  console.log(hacker2[i]);
  }


var lexicheck = hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()); // Lexicographic comparission of the 2 vars lowercased, otherwise Piero ≠ piero

switch (lexicheck) {  // Case for the 3 possible values of .localeCompare()
  case -1:
    console.log("The driver's name goes first");
    break;
  case 0:
    console.log("What?! You both got the same name?");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely");
    break;
};

// Palindrome checker

var palindrome = prompt("Is this a Palindrome?");
console.log("Checking if " + palindrome + " is a Palindrome...");

var splitted = palindrome.toLowerCase().split('') // Lowercase the string and splits it into an array of characters
console.log("First let's split " + palindrome + " into characters:" + splitted);

var reversed = splitted.reverse(); // Reversing string
console.log("Now let's reverse the characters: " + reversed);

if (splitted == reversed) { // Checks if both arrays are the same
  console.log("Yay! You found a Palindrome! :D")
} else {
  console.log("Nope! It's not a Palindrome :(")
};

// Lorem ipsum generator

var p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis pretium dui. Nulla facilisi. Vivamus faucibus mollis eros, ut egestas velit. Nulla ut nunc ex. Pellentesque varius pellentesque nunc ac iaculis. Sed ornare est a tortor viverra feugiat. Nulla facilisi. Maecenas eu purus nec ex dignissim vestibulum. Fusce nec eleifend quam. Aenean bibendum sapien at justo fringilla accumsan. Mauris lacinia augue vel orci congue vestibulum. Vivamus sed elementum sem. Ut varius neque vel erat finibus ullamcorper. Ut ultrices sollicitudin eros in sagittis.";
var p2 = "Sed ullamcorper, diam in lacinia vehicula, ligula massa rutrum tellus, quis elementum velit diam a elit. Etiam vel arcu at risus cursus dictum. Quisque pulvinar cursus dui molestie maximus. Aenean mattis venenatis lacus. Duis metus est, euismod nec orci ornare, cursus lacinia mauris. Praesent lacinia eleifend nisi sed euismod. Donec feugiat mollis eros, facilisis placerat diam sagittis vitae. Mauris et luctus mauris. Ut et mi quis justo laoreet vestibulum. Etiam tincidunt mauris sit amet suscipit vestibulum. Donec mauris nibh, placerat dapibus dapibus sed, pretium nec purus.";
var p3 = "Donec vel tortor urna. Praesent arcu arcu, egestas ut urna eget, consequat venenatis erat. Donec pharetra nisi ligula, non mollis tellus tempus vitae. Vestibulum ac magna vitae justo ullamcorper rhoncus. Curabitur fermentum, lectus ut auctor tincidunt, nisl purus scelerisque mi, pretium pulvinar sem quam in mauris. Ut ac tortor felis. Aenean tellus velit, varius non aliquam vitae, maximus quis urna. Pellentesque nulla lacus, condimentum lobortis orci quis, semper semper felis. Donec at elit ac est tempor porttitor. Curabitur blandit mauris sit amet ornare varius. Nulla fermentum tincidunt nunc. Aenean cursus ut nunc dictum maximus. Donec at malesuada libero. Sed hendrerit auctor massa vel pulvinar.";

console.log("Paragraph 1 has " + p1.length + " characters.");
console.log("Paragraph 2 has " + p2.length + " characters.");
console.log("Paragraph 3 has " + p3.length + " characters.");