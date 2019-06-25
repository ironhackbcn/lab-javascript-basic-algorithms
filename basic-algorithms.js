// Names and Input
var hacker1 = 'Gloria';
console.log('The driver\'s name is ' + hacker1);
var hacker2= prompt('What\'s your name?');
console.log('The navigator\'s name is '+ hacker2);


//Conditionals
if(hacker1.length > hacker2.length ){
    console.log('The Driver has the longest name, it has '+ hacker1.length + ' characters');
} else if (hacker1.length < hacker2.length){
    console.log('Yo, navigator got the longest name, it has '+ hacker2.length +' characters');
} else if (hacker1.length === hacker2.length){
    console.log ('Wow, you both got equally long names, ' + hacker2.length + ' characters!!');
}


function SepararYMayusculas(){
    for(i=0; i<hacker1.length; i++){
        var hackerSeparado = hacker1.split('').join(' '); 
    }
    console.log(hackerSeparado.toUpperCase());
}
SepararYMayusculas();


function revertirNombre(hacker2) {
    return hacker2.split('').reverse().join('');;
  }
console.log(revertirNombre(hacker2));


function ordenarHackers(){
    var hackers = [hacker1, hacker2];
    hackers.sort();
    if( hackers[0] === hacker1 ){
        console.log('The driver\'s name goes first');
    } else if( hackers[0] === hacker2 ) {
        console.log('Yo, the navigator goes first definitely');
    } else{
        console.log('What?! You both got the same name?');
    }
}
ordenarHackers();



// Lorem ipsum generator

var parrafo1 = 'Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Donec placerat sollicitudin mauris. Nunc molestie varius est, nec porta nibh tincidunt eu. Cras lobortis luctus justo, sed elementum nibh pharetra eu. Aliquam quis augue non arcu luctus pretium. Suspendisse semper dui eu tellus tempus, non porta purus blandit. Aenean porta elit rutrum sem porttitor fermentum eget in nibh. Etiam volutpat augue eu magna iaculis lobortis.';
var parrafo2 = 'Duis gravida accumsan nunc, eget consectetur dui vehicula eget. Pellentesque id elit ac velit convallis dignissim. Donec vestibulum, mi eget fringilla ullamcorper, nunc nunc cursus nulla, eget sagittis eros quam et felis. Proin ornare ut ex eget pulvinar. Vestibulum sagittis arcu eu laoreet gravida. Phasellus gravida ipsum diam, eget volutpat tellus ornare vel. Donec sit amet semper arcu. Sed at lorem ut eros tempor lacinia efficitur ut nibh.';
var parrafo3 = 'Vivamus hendrerit metus sem, quis rutrum felis luctus quis. Proin facilisis magna lorem, ut pellentesque quam scelerisque sed. Mauris porttitor, eros vitae blandit iaculis, nunc odio congue enim, a finibus nisl ipsum in velit. Donec ut efficitur neque. Suspendisse dapibus quam ut justo blandit sagittis et eget nibh. Sed in aliquet neque. Cras sapien ipsum, varius eu tempor eget, sollicitudin non nibh. Donec bibendum finibus volutpat. Vestibulum egestas consectetur pulvinar. Vivamus ut mauris accumsan, iaculis ante posuere, pellentesque orci. Donec semper nibh felis, at luctus mi auctor vitae. Nam tempus quam at ex ultrices, eu tristique magna euismod. Proin aliquet, neque eu hendrerit convallis, justo metus imperdiet nulla, vitae rutrum ipsum quam vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis ante, volutpat quis tellus sit amet, mattis volutpat purus.';
var parrafoTotal = [parrafo1, parrafo2, parrafo3].join(' ');
console.log('The number of letter is: ' + parrafoTotal.length);
if( parrafoTotal.indexOf('et') > -1 ){
  var et = 'et';
  var numeroEt = parrafoTotal.match(et);
  console.log('The number of times et appears is: ' + numeroEt.length);
}


console.log(parrafoTotal);
