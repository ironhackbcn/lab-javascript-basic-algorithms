//variables 
var hacker1 = "Samuel"
var hacker2 = window.prompt("what is the navigators name?")


//console logs
console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2)}`)


//Let's get looping
for (var i = 0; i < hacker1.length || hacker2.length; i++){
    if (hacker1.length > hacker2.length){
        console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
    } else if (hacker1.length < hacker2.length){
        console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
    } else {}
    console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`)
}

//loop drivers name 
  for(let i = 0; i < hacker1.length; i++){
    console.log(`${hacker1[i]}`)
  }

  //loops driver name backwards
  for(let i = hacker.length; i > 0; i--){
    console.log(`${hacker1[i]}`)
  }



//loop on first letter.. 
  for(let i = 0; i < 1; i++){
    if (hacker1[0] === "a"){
        console.log(`The driver's name goes first`)
    } else if (hacker2[0] === "a"){
        console.log(`Yo, the navigator goes first definitely`)
    } else {}
    console.log(`What?! You both got the same name?`)
  }