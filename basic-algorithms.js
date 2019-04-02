// Names and Input

// 1. Create a variable hacker1 with the driver's name
var hacker1 = "Gianfranco";

// 2. Print "The driver's name is XXXX"
console.log("The driver's name is " + hacker1)

// 3. Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = prompt("What is the navigator's name?");

// 4. Print "The navigator's name is YYYY"
console.log("The navigator's name is " + hacker2)

//Conditionals
/*5. Depending on which name is longer, print:
The Driver has the longest name, it has XX characters or
Yo, navigator got the longest name, it has XX characters or
wow, you both got equally long names, XX characters!! */

if (hacker1.length > hacker2.length) {
    console.log(hacker1 + " has the longest name, it has" + hacker1.length + " characters")
}
 else if (hacker1.length < hacker2.length) {
     console.log("Yo, " + hacker2 + " has the longest name, it has " + hacker2.length + " characters" )
 }
else {
    console.log("Wow, you both got equally long names " + hacker1.length + " characters")
}

//Loops

// 6. Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var space = "";

for (var i = 0; i < hacker1.length; i++){
    space += hacker1.charAt(i)+ ' ';
}
console.log(space.toUpperCase());


//  7. Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

var reverseString = "";

for (var i = hacker1.length - 1 ; i >= 0; i--){
    reverseString += hacker1[i];
}
console.log(reverseString)


/* 8. Depending on the lexicographic order of the strings, print:
The driver's name goes first
Yo, the navigator goes first definitely
What?! You both got the same name? */

var order = hacker1.localeCompare(hacker2);

if ( order <0) {
    console.log("The driver's name goes first")
}
else if ( order >0)  { 
    console.log("Yo, the navigator goes first definitely")
}
else {
    console.log("What?! You both got the same name?")
}


// 10. Lorem ipsum generator

var para1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id eros ac odio tincidunt efficitur. Nulla eu lectus ac ex faucibus laoreet. Mauris posuere vehicula ligula, vitae aliquet quam venenatis in. Curabitur vestibulum sapien dui, pretium ultrices elit luctus ut. Nulla ut vulputate lorem. Vestibulum varius mauris mi, quis gravida ante euismod blandit. Suspendisse vitae velit lectus. In et lorem gravida, luctus odio ut, accumsan magna. Vestibulum mattis ornare faucibus.";
var para2 = "Nulla facilisi. Maecenas aliquet elit eu dui porttitor, et congue nibh eleifend. Ut blandit, arcu ac elementum euismod, mi elit sagittis mauris, vel iaculis ante nulla non nunc. Donec tincidunt sem eget bibendum aliquet. Vestibulum non lacinia enim. Morbi non nulla sed massa placerat blandit molestie eu nibh. Maecenas at dui et ligula finibus rhoncus sed in mauris. Quisque et dapibus nisi. Curabitur erat purus, pulvinar vitae consectetur eu, tincidunt eget risus. Sed accumsan sollicitudin dictum. Vestibulum porttitor, nulla vitae eleifend efficitur, lorem risus tempor augue, nec rutrum lorem velit at sapien. Proin ullamcorper ut nisi commodo imperdiet. Sed sit amet lobortis elit, eget venenatis purus. Aenean nec finibus justo, a tincidunt neque. In pharetra lorem nec eleifend rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
var para3 = "In placerat posuere mi at consectetur. Proin efficitur, lorem sollicitudin bibendum faucibus, diam lectus malesuada neque, vel eleifend sapien augue non enim. Suspendisse tincidunt malesuada ante sed vulputate. Phasellus vitae neque tortor. Vestibulum porta, sem et molestie consequat, leo mi interdum lorem, vitae dignissim nisl velit nec enim. Vestibulum vel ligula ac lacus commodo feugiat. Nunc dignissim dui ac orci rhoncus, ut commodo nibh accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur elementum velit ac purus pulvinar vehicula.";
var paragraphs = para1 + para2 + para3;
var totalSoFar = 0;

function wordCount (paragraphs) {
    return paragraphs.split(" ").length;
}
    console.log(wordCount(paragraphs));

function etCount (paragraphs) {
    return paragraphs.split("et").length;
    }
    console.log(etCount(paragraphs));
