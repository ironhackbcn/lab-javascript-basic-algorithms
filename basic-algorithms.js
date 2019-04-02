// Names and Input
var hacker1 = 'chloe';
console.log('The driver\'s name is ' + hacker1);

var hacker2 = prompt('What\'s your name?');
console.log('The navigator\'s name is ' + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if(hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else{
  console.log('Wwow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

console.log(hacker1.split('').join(' ').toUpperCase());

var reverse = '';
for (var i = hacker1.length - 1 ; i>=0; i--) {
  reverse += hacker1[i];
}
console.log(reverse)

  if (hacker1 < hacker2) {
    console.log('The driver\'s name goes first');
  } else if (hacker1 > hacker2){
    console.log('Yo, the navigator goes first definitely');
  } else {
    console.log('What?! You both got the same name?');
  }

  function isPalindrome(str){
    var reverse = str.split('').reverse().join('')
    console.log(reverse);
    if(str === reverse){
      console.log(str + ' is a palindrome.');
    }else{
      console.log(str + ' is not a palindrome.');
    }
  }
  var stringToTest = prompt('Write a string');
  isPalindrome(stringToTest);

// Lorem ipsum generator

var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in diam in eros laoreet ultricies et commodo justo. Praesent pellentesque ullamcorper orci, vel bibendum erat maximus vitae. In ac metus non enim convallis sodales. Etiam et sagittis dui. In nec ante elit. Suspendisse et nunc a enim sagittis venenatis eget vel ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sed dolor scelerisque, dapibus eros sit amet, pulvinar tortor. Donec sit amet posuere magna. Ut placerat nunc eu enim luctus pretium vel laoreet tellus. Aenean faucibus et ipsum rutrum tempor. Donec risus sem, luctus ut vulputate vel, dignissim tempor velit. Quisque finibus nisl pellentesque pretium suscipit. Vivamus et ipsum condimentum, tristique eros sit amet, rutrum nisi. Mauris rhoncus, ante commodo tincidunt porttitor, nunc dolor auctor enim, eget dapibus mi tellus quis nibh. Suspendisse et sem metus. Suspendisse aliquam iaculis ex. Morbi semper, eros vitae cursus suscipit, turpis mauris convallis mauris, sed mattis urna nisi posuere dolor. Suspendisse orci dolor, finibus in accumsan eget, congue sit amet sapien. In posuere diam sem, eu pulvinar elit scelerisque at. Donec fringilla sodales odio vitae pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis feugiat enim. Morbi et scelerisque nunc. Mauris ac est mattis, tincidunt elit sed, sagittis massa. Aliquam porta, nunc convallis ultrices porttitor, lorem tortor laoreet turpis, sit amet facilisis nunc augue et ipsum. Praesent vitae lorem dignissim, efficitur dui tempus, fermentum libero. Mauris massa erat, pharetra a hendrerit scelerisque, elementum eget orci. Phasellus tempus urna id ipsum dignissim, sit amet dictum ligula tristique. Morbi id dapibus massa. Integer metus justo, faucibus maximus pretium non, rhoncus vitae velit. Donec mollis fermentum mattis. Quisque blandit enim eget urna aliquam, sit amet porttitor lectus dapibus. Aliquam laoreet pulvinar risus, sed sodales augue sagittis id.';

var words = str.split(' ');
console.log(words.length)


counter = 0;
for (var i = 0; i < words.length; i++) {
  if(words[i] === 'et'){
    counter++
  }
}
console.log(counter);
