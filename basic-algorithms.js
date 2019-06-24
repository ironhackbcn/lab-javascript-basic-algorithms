// Names and Input
var hacker1 = "Lu"
console.log("The driver's name is " +hacker1)

var hacker2 = window.prompt("What's the navigator's name? ");
console.log("The navigator's name is " + hacker2 );

//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
}
else if (hacker2.length> hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters" )
}
else { 
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")
}

var arr=[];
var hacker1Upper = hacker1.toUpperCase();

 for (var i = 0; i<hacker1Upper.length; i++){
   //console.log(hacker1Upper.split('').join(' '));  <-- esta opción no necesita loop
  arr.push(hacker1Upper[i]);
 }
 console.log(arr.join(' '));

 var arr2=[];
 for (var j = 0; j<hacker1.length; j++){
 arr2.unshift(hacker1[j]);
}
console.log(arr2.join(''));

var hacker2Upper = hacker2.toUpperCase();

if (hacker1Upper.length < hacker2Upper.length){
  var shorter = hacker1Upper;
} else{
  var shorter = hacker2Upper;
}

for (var k = 0; k < shorter.length; k++){
  if(hacker1Upper[k]<hacker2Upper[k]){
    console.log("The driver's name goes first");
    break;
  }else if (hacker2[k]<hacker1[k]){
    console.log("Yo, the navigator goes first definitely");
    break;
  }
  if (k === (shorter.length - 1) && hacker1Upper.length === hacker2Upper.length){
    console.log ("What?! You both got the same name?")
    break;
  }
  if (k === (shorter.length - 1)){
    if (hacker1Upper.length<hacker2Upper.length){
      console.log("The driver's name goes first");
      break;
    }
    console.log("Yo, the navigator goes first definitely");
    break;
  }
}
/* Hemos logrado hacer el ejercicio, pero no hemos conseguido tener en cuenta los signos de puntuacion ni los espacios
var sentence = window.prompt("Introduce una frase").toUpperCase();
var arr2 = sentence.split("");
var reverseArr = [];
for (var m = 0; m<arr2.length; m++){
  reverseArr.unshift(arr2[m]);
} 
var reverseArrFilt=reverseArr.filter(letter=> letter!==' ' || letter !== ',' ||letter !== '.'); 
var reverseSentence = reverseArr.join("");
console.log(reverseArr)
if (reverseSentence === sentence){

console.log("es un palindromo!!!")}
 */
