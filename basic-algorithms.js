// Names and Input

var hacker1 = "John";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);


//Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!");
}

var spaceName = " ";
for (var i = 0; i < hacker1.length; i++) {
  spaceName += hacker1[i] + " ";
  console.log(spaceName.toUpperCase());
}

var reverseString = "";
for (var j = hacker1.length - 1; j >= 0; j--) {
  reverseString += hacker1[j];
  console.log(reverseString);
}


if (hacker1.charAt(0) < hacker2.charAt(0)) {
  console.log(hacker1 + " goes first");
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
  console.log("Yo, " + hacker1 + " goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

var palindrome = prompt("Insert a phrase!");
var reversePalindrome = "";
for (var z = palindrome.length - 1; z >= 0; z--) {
  reversePalindrome += palindrome[z];
}
if (palindrome === reversePalindrome)
  console.log(palindrome + " is a Palindrome!");
else {
  console.log(palindrome + " it's not a Palindrome!");
}


// Lorem ipsum generator
var loremStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod consequat tincidunt. Nullam hendrerit dolor lorem, fermentum egestas lectus bibendum quis. Proin consequat massa a nulla sodales, eu malesuada sem fermentum. Morbi sagittis euismod elementum. Duis vel felis ut erat pretium vehicula et placerat ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus eros tortor, viverra ac lobortis sodales, pretium et erat. Suspendisse et volutpat elit. Aenean urna orci, faucibus ac sem quis, laoreet dictum felis. Morbi metus nulla, molestie in viverra quis, commodo at nulla. Pellentesque cursus commodo ante, et iaculis erat sollicitudin sit amet. Ut congue nec nisi quis imperdiet. Vivamus in rhoncus felis. Quisque eget aliquet leo. Pellentesque et mi augue. Phasellus tristique, urna laoreet vestibulum fermentum, justo dolor pulvinar lacus, id viverra neque felis in enim.
Mauris sollicitudin ut tortor eget malesuada.Quisque lectus enim, volutpat eget varius ac, hendrerit ultrices elit.Morbi eget elit quis turpis consequat mollis ac eu ipsum.Fusce tempus nisl sit amet mauris sodales, at feugiat massa congue.Morbi viverra elit at volutpat aliquet.Mauris sagittis at nulla ut lacinia.Phasellus placerat eleifend eros, aliquet laoreet libero aliquet luctus.Morbi commodo dui ac neque faucibus, id imperdiet leo auctor.Suspendisse imperdiet orci orci.Fusce at fringilla ipsum.
Praesent eget orci neque.Aliquam vehicula finibus velit, vel viverra turpis varius et.Suspendisse ipsum lacus, fringilla nec facilisis ut, laoreet eu dolor.Nullam non egestas quam.Interdum et malesuada fames ac ante ipsum primis in faucibus.Quisque venenatis imperdiet mi, dignissim tincidunt arcu scelerisque at.Maecenas dolor enim, congue ac metus at, faucibus sollicitudin neque.Sed vulputate nulla iaculis ipsum euismod pulvinar.Curabitur augue leo, maximus ac ipsum ac, tempor pellentesque eros.
";
var wordsNum = loremStr.split(' ').length;
console.log(wordsNum);

var etNum = loremStr.split(' ').filter(function (word) {
  return word === 'et';
});
console.log(etNum.length);