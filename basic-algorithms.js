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
