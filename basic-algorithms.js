// Names and Input

var hacker1 = 'Anna';
console.log(`The driver's name is ${hacker1}`);
var hacker2 = prompt('What\'s the navigator\'s name?');
console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator got the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters.`)
}

// Lorem ipsum generator

var string1 = '';
for (var i = 0; i < hacker1.length; i++) {
  string1 = string1 + hacker1[i].toUpperCase() + " ";
}
console.log(string1);

var string2 = '';
for (var i = hacker2.length - 1; i >= 0; i--) {
  if (i !== 0) {
    string2 = string2 + hacker2[i].toLowerCase();
  } else {
    string2 = string2 + hacker2[i].toUpperCase();
  }
}
console.log(string2);

for (var i = 0; i < hacker1.length; i++) {
  if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
    console.log('The driver\'s name goes first.');
    break;
  } else if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
    console.log('Yo, the navigator goes first definitely.');
    break;
  } else if (i == hacker1.length - 1) {
    console.log('What?! You both got the same name?');
  }
}

var userstring = prompt('Write a string');
var palindrome = '';
for (var i = 0; i < userstring.length; i++) {
  if ((userstring.charCodeAt(i) >= 65 && userstring.charCodeAt(i) <= 90) || (userstring.charCodeAt(i) >= 97 && userstring.charCodeAt(i) <= 122)) {
    palindrome = palindrome + userstring[i].toLowerCase();
  }
}

var reversedPalindrome = '';
for (var i = palindrome.length - 1; i >= 0; i--) {
  reversedPalindrome = reversedPalindrome + palindrome[i];
}

if (palindrome === reversedPalindrome) {
  console.log('It\'s a palindrome!');
} else {
  console.log('It\'s not a palindrome.');
}

var par ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed arcu lobortis, porta nulla a, vulputate ante. Phasellus eget fermentum diam. Nunc eu tortor id nibh sollicitudin venenatis vitae vitae ex. Fusce dignissim non lorem in condimentum. Ut id ante et eros finibus scelerisque sit amet vitae turpis. Fusce in nisi vestibulum, dapibus metus nec, rhoncus sapien. Sed vitae dolor metus. Phasellus eu porta nisi, id pellentesque erat. Nulla quis nulla pellentesque, efficitur nulla eget, posuere lectus. Donec facilisis luctus augue, id ultricies erat. Etiam vitae nisi at lectus dictum lacinia. Donec euismod faucibus sapien, ut lobortis felis mattis et. Sed pulvinar, diam vel mattis tempor, ex ante vestibulum nisi, vitae luctus purus nibh eget nibh.\n Praesent tempor turpis et lorem pellentesque hendrerit. Nam dapibus enim eu libero ullamcorper fermentum. Aenean et quam eu turpis lobortis mollis. Donec ultricies justo lacus, ac consectetur nisi venenatis ultricies. Sed non lobortis lacus. Aliquam sollicitudin interdum odio sed aliquam. Duis euismod ipsum a ipsum laoreet, sed placerat magna ullamcorper. Curabitur scelerisque, felis quis sodales pellentesque, urna justo varius metus, at accumsan nisl purus nec erat. Nunc ex libero, faucibus nec neque vulputate, varius sodales orci. Proin sit amet sem non purus dictum consectetur.\n Duis iaculis velit eu lacus blandit faucibus. Aenean suscipit posuere magna eu vehicula. Maecenas placerat, sapien eget maximus facilisis, nisl libero accumsan ex, nec posuere mi neque non nibh. Maecenas euismod diam a elit vehicula fringilla. Suspendisse potenti. In ac elit rhoncus, congue orci ac, ornare neque. Aliquam erat volutpat. Integer turpis arcu, congue ac ligula sodales, viverra tristique orci. Proin eget euismod mi. Aenean aliquet euismod pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec bibendum felis eu justo condimentum molestie. Integer sed vestibulum nibh. Nam gravida turpis dui. Duis interdum sem quis ipsum euismod, quis sodales ligula rhoncus. Aenean quam ante, pretium sed scelerisque non, pharetra ultrices nibh.';

var words;
var wordscount = 0;
var et = "";
var etcount = 0;

for (i = 0; i < par.length; i++) {
  words = par[i] + par [i+1];
  if (par[i] == " " || par[i] == "." || par[i] == ",") {
    wordscount++;
  }
  if (words == ". " || words == ", ") {
    wordscount--;
  }
  et = par[i] + par[i+1] + par[i+2] + par[i+3];
  if (et == " et " || et == " et." || et == " et,") {
    etcount++;
  }
}
console.log(wordscount + " words.");
console.log(etcount + " et words.")

