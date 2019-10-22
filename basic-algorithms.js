var hacker1 = "Jacob";
console.log("The drivers name is " + hacker1);

var hacker2 = window.prompt("Whats the navigators name ?");

console.log("The Navigators name is " + hacker2);

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characteres`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The Navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`)
}

var hacker1New = '';

for (i = 0; i < hacker1.length; i++) {
    var nameUp = hacker1.toUpperCase();
    hacker1New = hacker1New + nameUp[i] + " ";

}

console.log(hacker1UpSpace);


var hacker2New = '';

for (i = hacker2.length - 1; i >= 0; i--) {
    hacker2New = hacker2New + hacker2[i];

}

console.log(hacker2New);


if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first");


} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely");

} else {
    console.log("What?! You both got the same name?");
}