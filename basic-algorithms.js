// Names and Input

var hacker1 = "Name";

var hacker2 = "Name2";

var hacker1Long = hacker1.length;
var hacker2Long = hacker2.length;

console.log(`the driver´sname is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if (hacker1Long > hacker2Long) {
  console.log(`The Driver has the longest name, it has ${hacker1Long} characters`)
} else if (hacker1Long < hacker2Long) {
  console.log(`Yo, navigator got the longest name, it has ${hacker1Long+1} characters`)
} else if (hacker1Long == hacker2Long) {
  console.log(`wow, you both got equally long names, ${hacker1Long} characters!!`)
}


var strReverse = hacker2.split('').reverse().join('')
console.log(strReverse)

var strUpCase = hacker1.split('').join(' ').toUpperCase()
console.log(strUpCase)

function palindromoFunc(palindromo) {
  var newPalindromo = palindromo.split('').reverse().join('');
  console.log(newPalindromo);
  for (i = 0, totalPalindromo = palindromo.length; i < totalPalindromo; i++) {
    console.log(palindromo[i]);
    console.log(newPalindromo[totalPalindromo - i - 1]);
    if (palindromo[i] !== newPalindromo[totalPalindromo - i - 1]) {
      console.log("no es un palindromo");
    }

  }
};

// Lorem ipsum generator
var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu posuere diam. Phasellus porta lacus sed lectus vestibulum, et egestas augue gravida. Phasellus non mauris lobortis, fringilla leo ac, lacinia massa. Praesent eget urna id risus blandit bibendum. Vivamus vulputate turpis at enim volutpat, sit amet faucibus velit sagittis. Integer tincidunt diam at ante vestibulum vehicula. Sed cursus tempus enim sed tincidunt. Ut sollicitudin, erat quis rhoncus eleifend, orci enim convallis lacus, et luctus dui elit ut sem. Donec faucibus in enim in luctus. Morbi gravida, purus id luctus aliquet, sem risus gravida augue, lacinia dignissim massa mauris sit amet ligula. Duis iaculis sem eget arcu efficitur pulvinar. Mauris eu luctus urna. Donec blandit suscipit varius. Etiam eu luctus arcu, eu porttitor metus. Vestibulum vehicula ipsum quis libero feugiat condimentum.Praesent feugiat odio vel dui rhoncus, ut blandit nibh imperdiet.Ut non sem interdum, gravida lacus ut, aliquet sapien.Nullam erat lorem, venenatis vitae consequat quis, varius ac quam.Cras vel vestibulum felis, vel imperdiet ex.Donec commodo placerat eros, sed mattis dolor eleifend tristique.Maecenas pharetra pretium tellus, non sollicitudin velit imperdiet non.Suspendisse ut orci ut augue pharetra finibus.Vivamus a interdum nisi.Nullam nec enim bibendum, iaculis ipsum sit amet, laoreet nunc.Aenean et hendrerit arcu.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Pellentesque venenatis ex nec tellus gravida, vitae cursus neque tincidunt.Nunc cursus consequat sem, sit amet rhoncus mi vestibulum a.Proin porta ligula a dignissim dignissim.Nam quis porta augue. Suspendisse eget metus cursus, bibendum lorem ac, faucibus purus.Cras tincidunt magna id tempor dapibus.Vivamus turpis eros, pretium a suscipit ut, lobortis et sem.Vivamus placerat bibendum lectus in vestibulum.Pellentesque id pharetra neque.Vivamus cursus elit a augue egestas faucibus.Proin at neque in nisi viverra egestas.Nunc vehicula finibus ornare.Proin a orci id lorem interdum scelerisque.Donec eu massa ut lacus blandit hendrerit.Donec libero enim, hendrerit sed accumsan et, porttitor nec metus.Vestibulum cursus metus tortor, id lacinia lacus aliquet vitae.Vestibulum at justo mauris.Nulla scelerisque ante pellentesque nunc maximus, vel interdum neque tincidunt.Praesent quis ullamcorper eros.Integer congue sapien sed libero suscipit aliquam."

function countWords(paragraph) {
  console.log(paragraph.split(" ").length);
  return paragraph.split(" ").length;
}