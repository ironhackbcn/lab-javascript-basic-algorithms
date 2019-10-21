// Names and Input
var hacker1 = 'Bob';
console.log(`the driver's name is ${hacker1}`);
var hacker2 = window.prompt("What's your name?");
console.log(`The navigator name is ${hacker2}`);


//Conditionals

if (hacker1.length > hacker2.length)
{
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters` );
}
else if (hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}

for (var i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}

var reverse = '';
for (var j = hacker2.length-1; j >=0; j--){
   reverse += hacker2[j];
}
console.log(reverse);

for (var h = 0; h < hacker1.length; h++) {
    if (hacker1.charCodeAt(h) > hacker2.charCodeAt(h) ) 
    {
    console.log('Yo, the navigator goes first definitely');
    break;
    }
    else if (hacker1.charCodeAt(h) < hacker2.charCodeAt(h) )
    {
    console.log("The driver's name goes first");
    break;
    }
    else {
    console.log("TWhat?! You both got the same name?");
    break;
    }
}

var isPalindrom = window.prompt("write something bro");

for (var k = 0; k <= isPalindrom.length; k++) {
    if (isPalindrom[k] !== (isPalindrom[isPalindrom.length - 1 - k]))
    {
        console.log("Nah it isn't a Palindrom");
        break;
    }
    else {
        console.log("Yes it is a Palindrom!!");
        break;
    }
}


// Lorem ipsum generator

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque bibendum efficitur. Sed vel malesuada enim, vel condimentum ante. Proin interdum, justo et vestibulum bibendum, mi magna mattis erat, non dapibus nibh lacus quis nisl. In pretium metus eget consequat venenatis. Donec et scelerisque tortor. In aliquet metus sit amet nisi luctus ornare. Donec blandit lorem ac neque porta, id vulputate eros euismod. Vivamus ac ante tempus ligula ultricies elementum. Etiam et maximus sapien. In pretium nunc vel nunc tempor, vitae fermentum purus fermentum. Sed mattis elit sed consectetur maximus. Aliquam vitae rhoncus lorem. Pellentesque nec accumsan leo, a tempor leo. Phasellus lectus dolor, tempus sit amet venenatis ac, dignissim non nibh. Duis sodales egestas metus ultricies feugiat. Proin urna lorem, ornare non erat et, laoreet fringilla magna. Nunc imperdiet ante a enim convallis sagittis. Donec posuere sem lectus, in lacinia lectus pharetra eget. Cras maximus, metus at cursus scelerisque, ligula tellus porttitor sapien, vel molestie arcu urna non nibh. Etiam eleifend mauris vitae commodo viverra. Nullam accumsan non erat varius convallis. Cras aliquam vel tortor eget pharetra. Nullam sollicitudin a quam ac iaculis. Nunc at consectetur risus. Duis auctor magna sit amet enim ultrices, in cursus lectus malesuada. In hac habitasse platea dictumst. Etiam laoreet at justo id mattis. Sed varius auctor elit, sit amet lacinia dolor viverra eu. Nunc commodo efficitur nulla, vitae posuere dolor. Nullam vel arcu sit amet augue ultrices dapibus. Integer nec efficitur urna. Curabitur purus nunc, dignissim sed turpis sit amet, pretium malesuada orci. Quisque porta fermentum porta. Nulla quis rhoncus tellus. Ut vitae dictum enim. Fusce viverra iaculis enim eget consectetur.";

var count = 0;
var words = 1;

for (var l= 0; l <= loremIpsum.length-1; l++)
{
    if (loremIpsum[l] == ' '){
        words++;
    }
    if (loremIpsum[l] == 'e'){
        if (loremIpsum[l+1] == 't'){
            if( loremIpsum[l+2] == ' '){
            count++;
            }
            
        }
    }
}
console.log(`Number of words ${words}`);
console.log(`Number of "et" ${count}`);





