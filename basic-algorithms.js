// Names and Input
var hacker1 ='Marc';
console.log(`The driver's is ${hacker1}`);

var hacker2 = prompt(`Ingrese nombre del segundo conductor:`);
console.log(`The navigator's name is ${hacker2}`);



//Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
}
else if(hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length}`);
}
else{
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!!!!`);
}
var nombre1 = [];
var lista = hacker1.toUpperCase().split("");
for(var i = 0; i < lista.length; i ++){
    if ((lista[i]!=" ") && (lista.length - 1)) {
        nombre1.push(lista[i]);
        nombre1.push(" ");
    }
}
console.log(nombre1.join(``));

var reverse = hacker2.split("").reverse().join('');
console.log(reverse);

var hackers = [hacker1,hacker2];

if(hacker1!== hacker2){
    hackers = hackers.sort();
        if (hackers[0] === hacker1){
            console.log(`The driver's name goes first`)
        }
        else {
    console.log(`Yo, the navegator goes first definitely`)
        }
}
else {
    console.log(`What? you got the same name`)
}

// Lorem ipsum generator
var parrafo = 'Lorem fistrum jarl diodeno apetecan et ese hombree te va a hasé pupitaa la et caidita qué dise usteer et pupita. Me cago en tus muelas jarl torpedo papaar papaar sexuarl llevame al sircoo ese pedazo de torpedo. De la pradera amatomaa pupita amatomaa quietooor por la gloria de mi madre. A wan te voy a borrar el cerito papaar papaar llevame al sircoo papaar papaar ese hombree qué dise usteer caballo blanco caba'

parrafo = parrafo.split(' ');

console.log(parrafo.length);
console.log(parrafo)
var cant = 0;
for (var i = 0; i < parrafo.length; i++){
    if (parrafo[i] === 'et'){
        cant++
    }
}
console.log(`Cantidad de et en el texto: ${cant}`)