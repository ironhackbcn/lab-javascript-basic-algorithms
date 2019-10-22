// Names and Input

var hacker1 = 'Frederic'

console.log(`The driver's name is ` + hacker1)

var hacker2 = prompt("What is the navigator's name?")

console.log("The navigator's name is " + hacker2)



//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}
else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}


//Loops


/*for(var i = 0, str = ""; i <= hacker1.length ; i++) {
  console.log(str + hacker1[i].toUpperCase().split('').join(' '));
}*/

for(var i = 0, str = ""; i <= hacker1.length ; i++) {
  str += i + ""
}

console.log(hacker1.toUpperCase().split('').join(' '));


for(var i = 0, str = ""; i <= hacker2.length ; i++){
  str += i + "";
}

console.log(hacker2.split().reverse().join(''))


// Lorem ipsum generator
