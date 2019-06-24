// Names and Input

var hacker1 = 'Marce';
console.log('The driver\'s name is ' + hacker1);

const hacker2 = prompt('What\'s your name?');
console.log('The navigator\'s name is ' + hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    'The Driver has the longest name, it has ' + hacker1.length + ' characters'
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    'Yo, navigator got the longest name, it has ' +
      hacker2.length +
      ' characters'
  );
} else {
  console.log(
    'Wow, you both got equally long names, ' + hacker1.length + ' characters!!'
  );
}

// Loops

var capsName = '';

for (var i = 0; i < hacker1.length; i++) {
  capsName = capsName + hacker1[i] + ' ';
}

console.log(capsName.toUpperCase());

var revName = '';
for (var j = hacker2.length - 1; j >= 0; j--) {
  revName += hacker2[j];
}

console.log(revName);

var k = 0;

if (hacker1.localeCompare(hacker2) === -1) {
  console.log('The driver\'s name goes first');
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both got the same name?');
}

// Palindome

var userStr = prompt('Enter a string').toLowerCase();
var cleanStr = '';
var revString = '';
for (var k = 0; k < userStr.length; k++) {
  var char = userStr.charCodeAt(k);
  if (char > 96 && char < 123) {
    cleanStr += userStr[k];
  }
}
for (var l = cleanStr.length - 1; l >= 0; l--) {
  revString += cleanStr[l];
}

if (cleanStr === revString) {
  console.log("Your string is a palindrome!")
} else {
  console.log("This is not a palindrome...")
}

// Lorem ipsum generator

var paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum augue nec risus lobortis, non hendrerit libero mattis. Donec in lectus vel libero efficitur molestie ut non leo. Etiam ac scelerisque tellus, quis molestie neque. Curabitur eget est id ante fermentum dictum. Nunc convallis auctor elit eu imperdiet. Sed porta eleifend lacus eget interdum. In nisl massa, porta vel lorem quis, dictum tempor turpis. In quis elit vitae elit vehicula tempor vitae quis urna. Duis aliquam aliquam lectus. Nam bibendum enim vitae neque ullamcorper feugiat. Fusce turpis purus, tempus non purus at, pellentesque laoreet leo. Phasellus ut erat fermentum, consectetur massa ut, fringilla neque. Ut maximus malesuada dolor, ac venenatis nisl elementum a. Quisque in arcu ante. Praesent dapibus ut odio non aliquam. Curabitur eget dui at eros interdum scelerisque eu in massa.\n\nUt quis vestibulum nisl, non sollicitudin turpis. Proin pretium vulputate est id sollicitudin. Maecenas feugiat tellus nulla, quis malesuada justo pretium sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus laoreet lectus a eleifend faucibus. Morbi eleifend, est sit amet lobortis elementum, enim arcu pretium dolor, vitae fringilla arcu orci quis lacus. Nam venenatis consequat nibh vel convallis. Vestibulum egestas rhoncus lectus at pulvinar. Proin feugiat nisl et dui condimentum rutrum at vel augue. Maecenas justo dui, pulvinar vel enim vestibulum, faucibus rutrum mauris. Nulla quis efficitur enim. Duis volutpat arcu maximus, finibus metus ac, semper lectus.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse pellentesque nisi quis metus dapibus, et volutpat lectus venenatis. Curabitur dictum tempor turpis non posuere. Suspendisse egestas, ipsum quis lacinia eleifend, turpis urna bibendum tortor, quis ultrices erat nulla suscipit felis. Nam sed fringilla nulla. Donec mauris ante, consequat nec enim nec, dignissim egestas lacus. Nullam sed quam a enim fringilla pharetra vel et turpis. Donec ut nunc et nulla convallis commodo vel vel sapien. Vivamus iaculis in tortor eget feugiat. Ut feugiat turpis vel turpis ornare aliquam. Nulla vitae vestibulum est. Vestibulum posuere risus leo, nec finibus nisl maximus at. Nulla non turpis dolor. Duis non luctus justo.';

var strArr = paragraph.split(' ');
console.log('The text has ' + strArr.length + ' words');
var ets = 0;
for (let m = 0; m < strArr.length; m++) {
  if (strArr[m] === 'et') {
    ets++;
  }
}
console.log('The word "et" appears ' + ets + ' times');
