// ITERATION 1: NAMES AND INPUT

// 1.2. Create a variable hacker1 with the driver's name and print "The driver's name is XXXX"
var hacker1 = 'Sam';
console.log('The driver\'s name is ' + hacker1);
//console.log(`The driver's name is ${hacker1}`);


// 3.4. Create a variable hacker2, ask the user for the navigator's name and print "The navigator's name is YYYY"
var hacker2 = prompt('What\'s the navigator\'s name?');
console.log('The navigator\'s name is ' + hacker2);
//console.log(`The navigator's name is ${hacker2}`);



// ITERATION 2: CONDITIONALS

// 5. Depending on which name is longer, print:
if(hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`);
}


// ITERATION 3: LOOPS

// 6. Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
var driversName = hacker1.split(''); // converting the string 'hacker1' into an array

var splittedDriversName = ''; // create a variable that will hold the characters of the driver's name, separated by a space and in capitals
for(var i = 0; i < driversName.length; i++){ // looping through each letter of the driver's name
    splittedDriversName += driversName[i] + " ";
}
console.log(splittedDriversName.toUpperCase().trim()); // printing the letters in capitals and eliminating the whitespace at the end


// 7. Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
var reverseName = driversName.reverse(); // reversing the elements of the array
console.log(reverseName.join('')); // printing all elements of the array joined into a string


// 8. Depending on the lexicographic order of the strings, print:
/* The driver's name goes first
Yo, the navigator goes first definitely
What?! You both got the same name? */
if(hacker1.localeCompare(hacker2) === -1){
    console.log('The driver\'s name goes first');
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both got the same name?');
}



// BONUS TIME

// 9. Ask the user for a new string and check if it's a Palindrome. 

var newString = prompt('Please enter a new string').toLowerCase().replace(/ /g, "");
var reversedString = newString.split('').reverse().join('').toLowerCase().replace(/ /g, "");
// console.log(reversedString);

if (newString === reversedString){
    console.log('It is a palindrome');
} else {
    console.log('It is NOT a palindrome');
}

/* 10. Go to lorem ipsum generator and:
Generate 3 parragraphs. Store the text in a String
Make your program count the number of words in the string
Make your program count the number of times the latin word et appears
*/

var loremString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies euismod nisi, eget auctor erat. Quisque massa mauris, sagittis et pharetra quis, rutrum vitae massa. In tempor massa id tempor consequat. Nam pretium auctor suscipit. Maecenas non bibendum tellus. Sed rhoncus felis vel est fringilla, sed vestibulum sapien bibendum. Nullam sed lorem ultricies, vestibulum magna eu, elementum massa. Mauris faucibus, massa sit amet scelerisque dictum, nulla diam laoreet tellus, aliquam egestas nibh enim ac nibh. Pellentesque consequat neque quis mauris consectetur iaculis. Nullam eget aliquam magna. Cras suscipit, leo sed rhoncus facilisis, neque leo et faucibus nisl, eu suscipit orci massa eget mi. Nulla at convallis risus. Class aptent taciti sociosqu ad litora torquent et per conubia nostra, per inceptos himenaeos. Praesent in urna eget diam pharetra vestibulum. Mauris pretium a nisi non bibendum. Quisque imperdiet massa risus, eu placerat mi et molestie sit amet. Aenean efficitur justo quis ultrices tristique. Proin commodo nibh in ultrices porta. Quisque non ante sagittis, gravida tortor et vitae, rhoncus metus.";

var loremArr = loremString.split(' '); // convert the string into an array
console.log(`The string contains ${loremArr.length} words`); // print the number of words 

var count = 0;
for(i = 0; i < loremArr.length; i++){
    if(loremArr[i] == 'et'){ 
        count++;
    }
}
console.log(`The word "et" appears ${count} times!`); 




