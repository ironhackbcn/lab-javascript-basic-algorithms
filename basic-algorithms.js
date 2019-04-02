// Names and Input
var hacker1 = "John";
console.log("The driver's name is "+hacker1);
hacker1 = hacker1.toLowerCase();
var hacker2 = prompt("What's the navigator name?");
console.log("The navigator's name is "+hacker2);
hacker2 = hacker2.toLowerCase();

//Conditionals
if (hacker1.length > hacker2.length) console.log("The Driver has the longest name, it has "+hacker1.length+" characters");
else if (hacker2.length > hacker1.length) console.log("Yo, navigator got the longest name, it has "+hacker2.length+" characters");
else if (hacker2.length === hacker1.length) console.log("wow, you both got equally long names, "+hacker1.length+" characters!!");

var capitals = "";
for(var i=0;i<hacker1.length;i++){
    capitals += hacker1[i].toUpperCase() +" ";
}
console.log(capitals);

var backwards = "";
for(var x=hacker2.length-1;x>=0;x--){
  backwards += hacker2[x];
}
console.log(backwards);

if(hacker1.localeCompare(hacker2) > 0){
  console.log("Yo, the navigator goes first definitely");
}
else if(hacker1.localeCompare(hacker2) < 0){
  console.log("The driver's name goes first");
}
else {
  console.log("What?! You both got the same name?");
}

var palindrome = prompt("Can you type a palindrome?");
var t = palindrome.length;
palindrome = palindrome.toLowerCase();
palindrome = palindrome.replace(/[^a-zA-Z ]/g, "");
palindrome = palindrome.replace(/\s+/g, "");
for(var j=0;j<palindrome.length;j++){
  t--;
    var backwardsPalindrome = "";
    for(var w=palindrome.length-1;w>=0;w--){
      backwardsPalindrome += palindrome[w];
    }
    backwardsPalindrome = backwardsPalindrome.toLowerCase()
  console.log(palindrome,backwardsPalindrome);
 
  if(palindrome === backwardsPalindrome){
    console.log("It is a Palindrome");
  }
  else{
    console.log("It is not a Palindrome");
  }
}

// Lorem ipsum generator
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at magna nulla. Morbi at euismod lectus. Nulla sit amet ornare felis. Donec fermentum eu elit ut lobortis. Sed ligula neque, accumsan non semper id, tincidunt at est. Quisque eget libero eget erat sagittis lobortis. Aliquam interdum augue eget metus fermentum, quis porttitor dolor vehicula. Nullam augue neque, euismod vel enim rutrum, hendrerit convallis mi. Suspendisse potenti. Vivamus metus nibh, suscipit non ipsum in, porttitor ornare diam. Donec arcu nibh, hendrerit at turpis eu, scelerisque sollicitudin velit.Curabitur venenatis nec diam vel vulputate. Suspendisse potenti. Nam sit amet velit ut nunc tempus accumsan. Cras leo urna, placerat non diam nec, mollis consectetur nibh. Integer sit amet justo ligula. Aliquam accumsan mauris mauris, nec viverra ligula finibus sed. Nam nisi magna, consectetur a neque eu, finibus commodo nisi. Praesent viverra dui vel aliquet volutpat. Cras non viverra dolor, vel iaculis ipsum. Sed quis condimentum sapien. Donec et auctor urna. Ut eget elementum lacus. Mauris hendrerit est id arcu pharetra placerat. Duis interdum metus sed neque vehicula efficitur. Etiam pulvinar in mauris id ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Nunc feugiat nibh nec consequat malesuada. Donec aliquet, risus fermentum tincidunt blandit, est risus tristique felis, ac lacinia dolor elit ac mi. Cras a massa nulla. Vestibulum in nunc sapien. Donec consectetur, risus id suscipit euismod, enim dui consequat felis, sed semper purus massa id leo. Quisque quis cursus tortor, ac facilisis odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed fringilla cursus felis, eget auctor tortor consequat a. Suspendisse blandit turpis feugiat sem faucibus ultricies. Vivamus scelerisque sapien ac mi rhoncus, in venenatis magna pulvinar. Nunc pellentesque dignissim nibh, vitae varius ante convallis nec. Aenean a erat placerat, scelerisque mauris id, aliquet magna. Aliquam tempor justo vel odio viverra vulputate. Fusce aliquam, leo eget iaculis egestas, purus lacus tincidunt justo, eget vestibulum erat lectus non mi.";

var numberWords = lorem.split(" ").length;
console.log(numberWords);
var numberEt = lorem.split("et").length;
console.log(numberEt);