// Names and Input

var hacker1 = "Jurek";

console.log(`The driver's name is ${hacker1}`);

var hacker2 = window.prompt("Whats the navigator's name?");

console.log(`The navigator's name is ${hacker2}.`);


//Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
}

//Loops

var upperDriver = '';

for (var i = 0; i < hacker1.length; i++){
    upperDriver += hacker1[i].toUpperCase();
    if (i < hacker1.length-1) {
        upperDriver += ' ';
    }
}
console.log(upperDriver);

var reverseNav = '';
for (var i = hacker2.length-1; i >= 0; i--) {
    reverseNav += hacker2[i];
}
console.log(reverseNav);

if (hacker1 < hacker2) {
    console.log('The driver\'s name goes first');
  } else if (hacker1 > hacker2) {
    console.log('Yo, the navigator goes first definitely');
  } else {
    console.log('What?! You both got the same name?');
  }

// var a = 'zzz';
// var b = 'ZZZ';
// console.log(a < b);

//Palindrome

var str = prompt('Check if it\'s a palindrome. Enter the string:');
var regex = /[.,\s]/g;
var cleanStr = str.replace(regex, '').toLowerCase();
var reversedCleanStr = '';

//could do a function from previous exercise

for (var i = cleanStr.length-1; i >= 0 ; i--) {
    reversedCleanStr += cleanStr[i];
}

if (cleanStr === reversedCleanStr) {
    console.log(`"${str}" is a palindrome!`);
} else {
    console.log(`"${str}" is NOT a palindrome!`);
}


// Lorem ipsum generator

var loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor nunc, posuere at sem id, consectetur consequat felis. Ut convallis mi id libero feugiat placerat. Proin semper felis ac malesuada sollicitudin. Vestibulum condimentum rhoncus tellus facilisis iaculis. Morbi aliquet vitae nunc quis scelerisque. Ut metus arcu, tempor sed tincidunt nec, rhoncus et nibh. Nam eget tortor commodo purus aliquet iaculis fermentum id augue. Quisque consequat laoreet pretium. Aenean aliquet, sapien in pretium pellentesque, massa nunc consectetur elit, vestibulum sagittis dui lacus nec quam. Sed in pharetra odio, ac vulputate risus. Curabitur scelerisque semper malesuada. Pellentesque ultricies, neque ac imperdiet venenatis, odio est maximus nibh, at posuere metus erat eu neque. Donec tellus neque, lacinia id erat eu, eleifend pulvinar ligula. Cras pellentesque vel elit pharetra bibendum.

Praesent commodo rhoncus ligula in hendrerit. Aenean pharetra pretium quam, vitae commodo libero tristique vitae. In sagittis, purus pulvinar porta tristique, odio massa vehicula lorem, ac pellentesque tortor enim nec mauris. Cras eleifend velit non vulputate pharetra. Duis leo turpis, lacinia in sem a, rhoncus ultrices odio. Curabitur iaculis felis sit amet est blandit ullamcorper. Maecenas sit amet ultrices nibh.

Fusce dapibus eget mi nec bibendum. Aenean vitae fermentum libero, in aliquet leo. Aenean vitae arcu feugiat, laoreet dolor eu, sodales purus. Donec a volutpat neque. Aenean ornare orci eget justo suscipit, a bibendum felis cursus. Nam sit amet erat faucibus, fringilla nibh ut, feugiat massa. Nunc laoreet posuere leo vitae consequat. Nullam ultricies, quam a hendrerit consequat, massa quam dignissim massa, non posuere mauris dui sed dolor. Curabitur ut lorem odio. Morbi quis varius tellus.`;

var cleanLoremIpsum = loremIpsum.replace(/[.,\n]/g, '');
console.log(cleanLoremIpsum.split(' ').length);

// console.log(cleanLoremIpsum);
console.log(cleanLoremIpsum.match(/\set\s/g).length);
