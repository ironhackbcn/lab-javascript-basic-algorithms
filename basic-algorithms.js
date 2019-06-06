// Names and Input
let hacker1 = 'sophia';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'helena';
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if(hacker1.length === hacker2.length){
    console.log(`wow, youu both got equally long names, ${hacker1.length} characters.`);
} else if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else{
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}

// Loops
let newHacker1 = '';
for(let i = 0; i < hacker1.length; i++){
    newHacker1+=hacker1[i] + " ";
}
console.log(newHacker1.toUpperCase());

let newHacker11 = '';
for(let i = hacker1.length-1; i >= 0; i--){
    newHacker11+=hacker1[i] + " ";
}
console.log(newHacker11);


if(hacker1.localeCompare(hacker2) < 0){
    console.log(`The driver's name goes first`);
} else if(hacker1.localeCompare(hacker2) > 0){
    console.log(`Yo, navigator goes first definitely`);
} else{
    console.log(`What? You both got the same name?`);
}

// Palíndrome
let sentence = prompt("Write your sentence please");
let aux = '';
//elimino los espacios y comas
for(let i = 0; i < sentence.length; i++){
    if(sentence[i] != ',' && sentence[i] != ' '){
        aux+=sentence[i];
    }
}

let sentenceRotated = '';
for(let i = aux.length-1; i >= 0; i--){
    sentenceRotated+=aux[i];
}
console.log(`sentence1: ${aux}`);
console.log(`sentence2: ${sentenceRotated}`);

if(aux===sentenceRotated){
    console.log('Yes, your phrase is palindrome!');
} else{
    console.log('No, your phrase is not a palindrome!');
}

// Lorem ipsum generator
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat consectetur tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales cursus scelerisque. Vivamus sollicitudin ultricies consectetur. Vestibulum rhoncus diam neque, ut pellentesque felis dictum sit amet. Suspendisse cursus lacinia porttitor. Aliquam porttitor neque nec pulvinar pellentesque. Duis a neque felis. Suspendisse sollicitudin tincidunt risus, vitae interdum enim vulputate quis. Curabitur vehicula augue vel odio dapibus sagittis. Pellentesque turpis justo, convallis eget massa ut, sodales congue leo. Phasellus consectetur interdum nisl, eget hendrerit enim ornare vitae. Nunc tellus tellus, commodo sit amet mauris volutpat, volutpat tempor purus. Aliquam lobortis tristique tellus, ut gravida justo vehicula eu. Nulla facilisi. Curabitur cursus congue maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sed ultrices ex, quis ullamcorper purus. Phasellus laoreet elementum justo, eu blandit magna scelerisque eu. Pellentesque accumsan lectus vitae ultrices consequat. Mauris vel turpis ac ex laoreet suscipit. In in mauris in neque tempus laoreet vitae non sem. Nam posuere augue ipsum. Morbi vulputate, dolor blandit interdum elementum, libero quam rutrum nulla, tincidunt tristique sem mi sit amet sapien. Nulla leo nisi, pharetra quis enim vel, porttitor viverra mi. Nunc ornare odio a finibus aliquam. Mauris hendrerit lacus at nulla dapibus, vel facilisis nisl porttitor. Mauris ut lacus feugiat mauris facilisis ultrices et sit amet enim. Nunc nec pretium libero. Nullam sagittis ligula id diam elementum vestibulum. Quisque ac aliquam urna. Maecenas vel mattis libero, non molestie ipsum. Pellentesque aliquam sem lorem, a elementum justo ultrices at. Donec vulputate lorem lectus, eu venenatis dolor ornare sed.'
let loremAux = lorem.split(' ');
console.log(`this paragraph have ${loremAux.length} words`);