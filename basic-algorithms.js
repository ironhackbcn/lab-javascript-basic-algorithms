// Names and Input
var hacker1 = "Ale"

console.log("The driver's name is" + hacker1)

var hacker2 = "Adri"

console.log("The navigator's name is" + hacker2)

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker1.length < hacker2.length) {
    console.log("Yo, Navigator has the longest name, it has " + hacker2.length + " characters");
}

else {
    console.log("Wow, you both equally long names, " + hacker1.length + " characters!!")
}
// Lorem ipsum generator
var characters = ""

for (var i = 0; i < hacker1.length; i++) {
    var driver = hacker1.toUpperCase();
    var character = "";
    character = driver[i] + " ";
    characters += character;
}

console.log(characters)

var charactersFlip = ""

for (var j = hacker1.length - 1; j >= 0; j--) {
    var driverFlip = hacker1;
    var characterFlip = "";
    characterFlip = driverFlip[j];
    charactersFlip += characterFlip;
}

console.log(charactersFlip)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely")
} else { console.log("What?! You both got the same name?") };

// Bonus


// 9.
var strUser = prompt('Introduce your String to check if it is a Palindrome:');
var strUserWOS = strUser.replace(/ /g,'');
var middle = strUserWOS.length / 2;

var firstPart = strUserWOS.slice(0,middle);
var secondPart = strUserWOS.slice(-middle);


function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray;
}


if(firstPart === reverseString(secondPart) ){
    console.log('It\'s a Palindrome!!');
}else{
    console.log('It isn\'t a Palindrome...')
}

// 10.

var lorem = "In sed purus mauris. Donec euismod sit amet ante nec tincidunt. Vestibulum molestie scelerisque nibh id auctor. Maecenas dapibus massa pulvinar mattis accumsan. Integer pharetra odio ac augue finibus convallis sit amet ut elit. Suspendisse consequat justo ut risus faucibus, eu luctus velit tristique. Quisque elementum varius augue, eget elementum nulla. Nam rhoncus viverra nibh. Nulla non interdum est. Etiam tempus augue vel pulvinar vehicula. Maecenas commodo semper ex. Sed cursus blandit nibh, quis volutpat mi fringilla ut. Morbi sodales dolor sodales, pulvinar quam commodo, lobortis erat. Aliquam semper imperdiet sollicitudin. Donec dictum vitae urna sed accumsan. Maecenas vitae laoreet ante. Maecenas eu mauris egestas, blandit arcu sit amet, dignissim nunc. Nulla gravida posuere mi eget ullamcorper. Pellentesque fringilla gravida nunc non rhoncus. Nunc turpis tortor, ultrices nec lectus sed, laoreet eleifend magna. Aenean volutpat hendrerit mollis. Aliquam imperdiet lorem odio, sit amet vestibulum ipsum suscipit nec. Suspendisse nec mauris sem. Aliquam quis justo quis purus varius vulputate ac consequat sapien. Donec nec lectus consectetur, volutpat urna vel, tempus nulla. Nunc varius augue non imperdiet condimentum. Donec mi enim, luctus quis quam eget, tincidunt dictum velit. Morbi elementum massa commodo nisi dignissim, nec pellentesque enim cursus. Vestibulum consectetur eleifend mauris, ut condimentum lectus ultrices quis. Aliquam quis tortor ut ligula ultrices laoreet. Aenean hendrerit nibh eget lacus commodo, vitae laoreet diam ultricies. Sed maximus dolor arcu, vel lobortis libero fringilla tincidunt. Sed ac eleifend ante. Cras venenatis mi in mauris molestie sollicitudin. Phasellus maximus enim nulla, ac semper turpis ullamcorper sit amet. Donec eget rhoncus est. Phasellus quis orci sed neque porttitor imperdiet."
var words = [];

words  = lorem.split(" ").push();

console.log("Count of Lorem: " + words + " words.")

console.log(lorem.match(/et/gi).length)