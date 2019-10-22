// Names and Input
var hacker1 = "Shrek";

console.log(`The driver's name is ${hacker1}`);

var hacker2 = window.prompt("What's the navigator's name?");

console.log(`The navigator's name is ${hacker2}`);


// Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
// (hacker1.length === hacker2.length)
} else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
}


// Loops
var printDriver;
for (var i = 0; i < hacker1.length; i++) {
    printDriver += (hacker1[i]+" ");
}
console.log(printDriver.toUpperCase());

var printNavigator;
for (var i = hacker2.length-1; i > -1; i--) {
    printNavigator =+ hacker2[i];
}
console.log(printNavigator);

// Not sure if I did this right - need some guidance

var lexigraphicChecker = "abcdefghijklmnopqrstuvwxyz";
if (lexigraphicChecker.indexOf(hacker1.charAt(0)) > lexigraphicChecker.indexOf(hacker2.charAt(0))) {
    console.log("The driver's name goes first");
} else if (lexigraphicChecker.indexOf(hacker1.charAt(0)) < lexigraphicChecker.indexOf(hacker2.charAt(0))) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both got the same name?");
}

// Palindrome checker - I am having a hard time with this one

function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}
checkPalindrome("racecar");

// Lorem ipsum generator

var loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros sit amet arcu blandit scelerisque. Sed sit amet dolor eu lacus elementum mollis sit amet lacinia nunc. Nam rhoncus nisl tincidunt ante feugiat feugiat in in tortor. Fusce lorem justo, finibus ac tellus eget, vulputate aliquam augue. Maecenas ullamcorper iaculis tempus. Aenean dapibus eleifend magna id venenatis. Fusce viverra sem nec arcu accumsan, in tempor magna sagittis. Suspendisse semper neque non scelerisque posuere. Vivamus non auctor mauris, blandit fringilla turpis. Nam condimentum, orci et molestie rutrum, purus augue cursus neque, non pellentesque justo dui eu eros.

Vestibulum ante nulla, pretium in tincidunt nec, interdum et nisi. Quisque ligula sapien, bibendum non lorem a, vehicula finibus risus. Vestibulum elementum nunc vel arcu aliquet venenatis. Pellentesque ligula sapien, porttitor nec velit vel, faucibus faucibus nibh. Curabitur viverra tellus quis auctor convallis. Sed faucibus fermentum consequat. Proin varius porta varius. Donec quis est eu elit mattis euismod. Nulla erat sem, ultricies at consequat quis, auctor id metus. Sed dignissim feugiat est, vel condimentum lorem pellentesque cursus.

Praesent vehicula facilisis dictum. Integer eget felis mauris. Sed non urna scelerisque, lacinia ante at, dignissim urna. Pellentesque sollicitudin augue dui, ac tempor orci convallis eu. Vivamus dignissim in leo in auctor. Nam mollis accumsan lorem non cursus. Vivamus tellus magna, luctus in egestas sit amet, sagittis vel magna. Vivamus gravida mi eleifend tortor iaculis, id eleifend arcu vestibulum. Praesent ut purus imperdiet, tincidunt massa nec, ullamcorper mauris. Suspendisse potenti. Morbi imperdiet est at ullamcorper aliquet. Nulla vulputate tincidunt quam sit amet rutrum. Mauris dictum pulvinar rutrum. Suspendisse ac nulla id mi posuere ornare vitae ac elit. Aenean at magna quis tortor fringilla elementum.`;

// Function that counts total words in loremIpsum string

function wordCount(loremIpsum) {
    return loremIpsum.split("").length;
}

console.log(wordCount(loremIpsum));

// Function that counts all 'et' occurances

function etCount(loremIpsum) {
    return loremIpsum.split("et").length - 1;
}

console.log(etCount(loremIpsum));