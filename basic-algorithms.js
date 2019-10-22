// Names and Input
var hacker1 = 'AomTo';
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("Introduce navigator\'s name");
console.log("The navigator\'s name is " + hacker2);
//Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}
else if (hacker1.length === hacker2.length) {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters")
}else{
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
var i = 0;

console.log(hacker1.split('').join(' ').toUpperCase());

console.log(hacker2.split("").reverse().join(''));


if(hacker1.toUpperCase().charCodeAt(0) < hacker2.toUpperCase().charCodeAt(0)) {
    console.log("The driver's name goes first");
}else if(hacker1.toUpperCase().charCodeAt(0)===hacker2.toUpperCase().charCodeAt(0)) {
    console.log("What?! You both got the same name?");
}else {
    console.log("Yo, the navigator goes first definitely");
}





var str = "A man, a plan, a canal, Panama!".replace(/[^A-Za-z]/g,'').toLowerCase();

console.log(str);
console.log(str.length);


var part1= str.split('').splice(str.length/2+1,str.length/2).join('');
if (str.length % 2 ===0) {
    part1= str.split('').splice(str.length/2,str.length/2).join('');
}
var part2= str.split('').splice(0,str.length/2).reverse().join('');


console.log(part1);
console.log(part2);

if(part1 === part2) {
    console.log('It\'s a palindrome');
}else{
    console.log('It is not a palindrome');
}


var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida, orci sed malesuada bibendum, elit nulla laoreet nulla, sit amet pharetra turpis felis at dui. Suspendisse et mollis justo. Aliquam non tempus mi, fringilla pellentesque mi. Aliquam venenatis mi sed felis rhoncus, non eleifend ipsum hendrerit. Nam vitae metus sed arcu semper sollicitudin. Phasellus molestie eros at leo faucibus, id viverra est vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas sed eros nec laoreet. Morbi eu quam et enim mollis dignissim ut non justo.Etiam sit amet sapien eu tortor maximus blandit iaculis ac dolor. Nunc a accumsan augue. Quisque mi eros, tincidunt auctor massa eget, accumsan venenatis magna. Nulla bibendum nec justo at tristique. Proin dolor tortor, dapibus sed pellentesque ut, efficitur in dolor. Nulla viverra mi sit amet elementum placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pretium, massa eu vulputate sodales, nisi justo blandit ipsum, ac fermentum tortor ipsum at purus. Quisque lobortis velit odio, at consectetur augue dictum sit amet.Fusce vehicula lacinia lacus et posuere. Vestibulum sollicitudin nulla vitae molestie elementum. In finibus faucibus suscipit. Phasellus magna sem, tincidunt a nulla suscipit, efficitur aliquet arcu. Ut molestie enim ut ligula euismod rutrum. Nunc eu consectetur nulla, non euismod orci. Donec convallis, odio a dictum ultrices, leo lacus ornare neque, sit amet congue risus nunc id sapien. Duis tempus ullamcorper mollis.";
if (text) {
    var wordCount = 1;
    var etCount = 0;
    for(var i =0;i<=text.length;i++) {
      if (text[i] === ' ') {
        wordCount++;
        }else if((text[i]==='e') && (text[i+1]==='t')) {
                 etCount++;
              }
    }
    console.log("The text contains " + wordCount + " words.");
  
    console.log("The text contains " + etCount+ " \"et\".");
}