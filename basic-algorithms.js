// Names and Input
var hacker1 = 'Pol';
var hacker2 = window.prompt('what\'s the navegator name?');
console.log('the drivers name is ' + hacker1);
console.log('The navigator\'s name is ' + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker1.length < hacker2.length) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else {
    console.log('wow, you both got equally long names, ' + hacker2.length + ' characters!!');
}
var capitalLeters = "";
for (var i = 0; i < hacker1.length; i++) {
    capitalLeters += hacker1[i].toUpperCase() + " ";
}
console.log(capitalLeters);
var reversLeters = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    reversLeters += hacker2[i];
}
console.log(reversLeters);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

var respuesta = false;
i = 0;
do {
    if (i >= hacker1.length - 1 || i >= hacker2.length - 1) {
        console.log('What?! You both got the same name?');
        respuesta = true;
    } else if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
        console.log('The driver\'s name goes first');
        respuesta = true;
    } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
        console.log('Yo, the navigator goes first definitely');
        respuesta = true;
    }
    i++;
} while (!respuesta);

// Palindrome
var palindrome = window.prompt('Write your sentence here');
palindrome = palindrome.split(' ');
palindrome = palindrome.join('');
var palindromeReverse = '';
for (i = palindrome.length - 1; i >= 0; i--) {
    palindromeReverse += palindrome[i];
}

if (palindrome === palindromeReverse) {
    console.log('This sentence is a palindrome');
} else {
    console.log('This sentence is not a palindrome');
}

// Lorem ipsum generator
var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet metus justo. Fusce ultricies leo quis enim rutrum, non porttitor libero ullamcorper. Phasellus eget odio eget sapien placerat ornare at bibendum neque. Quisque pellentesque lacinia nulla, id hendrerit orci efficitur vitae. Quisque mollis erat ut urna dignissim ullamcorper a vel nibh. Morbi varius ullamcorper mollis. Nam non tempus magna, et faucibus est. Fusce tristique, leo at fermentum hendrerit, arcu nulla aliquet dui, non rhoncus metus justo nec erat. Fusce ut faucibus elit. Donec dignissim eros elit, quis molestie risus rhoncus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur iaculis nec justo vel convallis. Donec eu hendrerit mi. Maecenas tincidunt massa et ligula mollis, et auctor nunc fringilla. Sed volutpat massa et diam rhoncus hendrerit. Nunc ut risus lacus. Duis viverra sed metus et ultricies. Nam elementum, ante sit amet posuere congue, felis tellus vulputate turpis, vitae malesuada nibh est in urna. Vivamus vulputate nec ante ac feugiat. Donec varius at mauris interdum dapibus. Praesent sagittis nisl eget tellus suscipit gravida. Vivamus augue nulla, ullamcorper eget libero id, lacinia lobortis lectus. Praesent laoreet condimentum ultrices. Vivamus elementum elit sapien, a rutrum ante placerat quis. Aenean placerat fringilla enim ut hendrerit. Donec enim dolor, interdum at feugiat in, porttitor a magna. Suspendisse varius ex vel ipsum vehicula elementum. Nulla sit amet diam ut mi suscipit feugiat. Cras in lacus tempus, gravida mauris ac, feugiat augue. Nunc sollicitudin justo pretium, hendrerit augue ac, cursus lacus. Aenean vitae lacus mollis, facilisis nisi vitae, tristique massa. Donec maximus, libero at molestie hendrerit, sapien libero commodo justo, id malesuada enim urna eget risus. ';
str = str.split(' ');
console.log('The number of words is: ' + str.length);
var cont = 0;
for (i = 0; i <= str.length; i++) {
    if (str[i] === 'et') {
        cont++;
    }
}
console.log('The number of the latin word "et" is: ' + cont);