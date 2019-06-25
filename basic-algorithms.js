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

// Palíndromo
/*
var validChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9]
var sentenceArr = window.prompt("Introduce una frase").toUpperCase().split("").filter(letter => validChar.includes(letter));
var reverseArr = [];

for (var m = 0; m<sentenceArr.length; m++){
  reverseArr.unshift(sentenceArr[m]);
} 

var sentence = sentenceArr.join('');
var reverse = reverseArr.join('');

if (sentence == reverse){
  console.log("es un palíndromo!!!");
}else{
  console.log("No es un palíndromo... :(")
}
*/


var sentence = window.prompt("Introduce una frase").toUpperCase();
var original='';
var reverse = '';

for (var m = sentence.length-1; m >= 0; m--){
  var chartCode = sentence[m].charCodeAt();
  if((chartCode >= 65 && chartCode <= 90) || (chartCode >= 48 && chartCode <= 57)){
    original = sentence[m] + original;
    reverse += sentence[m];
  }
};


if (original === reverse){
  console.log("es un palíndromo!!!");
}else{
  console.log('No es un palíndromo... :(');
}


 // Lorem ipsum generator

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta pretium varius. Quisque facilisis est et metus fringilla, et faucibus nulla vestibulum. Cras ex libero, ullamcorper eget turpis at, lacinia iaculis nunc. Suspendisse lacinia viverra tortor eu fringilla. Cras imperdiet maximus gravida. Phasellus tristique tincidunt euismod. Duis auctor feugiat rhoncus. Nullam nisi turpis, viverra eu lacus vel, pretium venenatis metus. Praesent et felis sit amet tortor cursus consectetur. Phasellus ut placerat eros, sit amet congue nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id maximus elit. Proin id turpis vel risus ultrices lacinia. Sed at pharetra felis. Donec imperdiet congue odio vitae placerat. Proin ut volutpat diam, sed pharetra est. Nam vitae ligula ipsum. Nam aliquet laoreet blandit. Duis consectetur nisi mi, non molestie augue consectetur nec. Fusce vestibulum convallis enim. Curabitur sed est interdum, maximus erat eu, interdum velit. Nam volutpat leo felis, eu pretium magna semper eu. Nam id elit quis ligula porta rutrum vitae semper arcu. Cras in tortor ut arcu rhoncus commodo vel fermentum arcu. Etiam faucibus, nulla a semper mollis, lacus elit pellentesque magna, sit amet facilisis metus dui accumsan ligula. In sapien lorem, auctor a dui eu, ultrices mollis nunc. Quisque interdum maximus scelerisque. In felis mauris, commodo ac purus varius, vehicula pellentesque erat. Etiam tempor semper lacinia. Aenean placerat, nisl nec venenatis accumsan, augue tortor semper velit, nec feugiat tortor metus et tellus. Donec a diam consequat, placerat est a, cursus quam. Nunc libero risus, eleifend at consectetur at, accumsan id arcu. Maecenas id diam lobortis, commodo justo ac, imperdiet orci. Phasellus vehicula ut nisi at facilisis. Phasellus lacinia erat dapibus molestie aliquam. Sed suscipit, elit id sagittis pellentesque, sapien magna accumsan mi, nec tristique lorem erat a tortor. Suspendisse laoreet aliquam luctus."

var loremArr = lorem.toUpperCase().split(' ');
console.log(loremArr);
var loremLength = loremArr.length;
var count = 0;

console.log("total de palabras: " + loremLength);

loremArr.forEach(function(element) {
  if(element == "ET" || element == "ET," || element == "ET."){ // no sé cómo eliminar los puntos y comas antes de llegar aquí
    count++;
  }
});

console.log("total de veces que aparece la palabra 'et': " + count);