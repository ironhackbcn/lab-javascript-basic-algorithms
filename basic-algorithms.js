// Names and Input
//driver
var hacker1 = "ivan";
console.log(`The driver\'s name is ${hacker1}`);
//navigator
var hacker2 = prompt("Introduce the navigator\'s name").toLowerCase();
console.log(`The navigator\'s name is ${hacker2}`);

console.log(hacker1);
//Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length){
    console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`);
} else {
    throw Error("Oops, it seems like there was an error.")
};

console.log(hacker1.toUpperCase()
            .toString()
            .split("")
            .join(" ")
            );
        

console.log(Array.from(hacker1)
            .reverse()
            .join("")
            .toString()
            );


if (hacker1<hacker2) {
    console.log("The driver's name goes first");
} else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first definitely");
} else if (hacker1===hacker2) {
    console.log("What?! You both got the same name?");
} else {
    throw Error("Oops, it seems like there was an error.")
};

// Lorem ipsum generator
var isThisAPalindrome = prompt("Let\'s check if this is a palindrome: ");
var isThisAPalindromeCleared = "";
var isThisAPalindromeReverse = "";
var numberOfNonLetters = 0;
for(let i=0; i<isThisAPalindrome.length; i++) {
    switch (isThisAPalindrome[i]){
        case "?":
            var numberOfNonLetters=numberOfNonLetters+1;
            continue;
            break;
        case "!":
            var numberOfNonLetters=numberOfNonLetters+1;
            continue;
            break;
        case ",":
            var numberOfNonLetters=numberOfNonLetters+1;
            continue;
            break;
        case "'":
            var numberOfNonLetters=numberOfNonLetters+1;
            continue;
            break;
        case "\"":
            var numberOfNonLetters=numberOfNonLetters+1;
            continue;
            break;
        case ".":
            var numberOfNonLetters=numberOfNonLetters+1;
            continue;
            break;
        case " ":
            var numberOfNonLetters=numberOfNonLetters+1;
            continue;
            break;
        default:
            var isThisAPalindromeCleared=isThisAPalindromeCleared+isThisAPalindrome[i];
    } 
    console.log(numberOfNonLetters);
    console.log(i);
    console.log(isThisAPalindrome.length);
    var isThisAPalindromeReverse = isThisAPalindromeCleared[i]+isThisAPalindromeReverse;

    if(i==isThisAPalindrome.length-1+numberOfNonLetters) {
        if(isThisAPalindromeCleared==isThisAPalindromeReverse){
            console.log(isThisAPalindromeReverse + "    " + isThisAPalindromeCleared)
            console.log("This is a palindrome!! Crazy"); 
        } else {
            console.log(isThisAPalindromeReverse + "    " + isThisAPalindromeCleared)
            console.log("This is not a palindrome :(")
        }
    }
};


var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec commodo lacus. Cras laoreet odio non metus gravida, a ultrices mauris commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed nunc quis ex aliquam cursus sit amet in nunc. Etiam nunc sem, aliquam vitae lacus vitae, sollicitudin mollis massa. In eget metus iaculis, congue neque non, dignissim erat. Fusce vel turpis laoreet, vestibulum ex in, gravida felis. Aliquam erat volutpat. In hac habitasse platea dictumst. Nulla ac interdum felis. Etiam accumsan dapibus placerat. Sed quam magna, convallis cursus varius vitae, mollis eu turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam suscipit non dolor vitae cursus. Donec pulvinar neque vel euismod tempus. Morbi at tortor tincidunt, pharetra erat quis, bibendum dui. Vestibulum elit purus, maximus in metus non, feugiat cursus ex. Sed condimentum ipsum sed sodales efficitur. Pellentesque lacinia varius risus id faucibus. Aliquam id rhoncus metus. Phasellus nec odio enim. Nullam pharetra mi lobortis varius efficitur. Curabitur feugiat blandit neque. Nam mollis, ligula et pretium congue, risus risus pretium risus, at elementum velit justo id erat. Ut congue laoreet massa vel elementum. Suspendisse pulvinar, augue vel consectetur porta, lacus urna scelerisque ligula, a pellentesque nulla neque et arcu. Fusce scelerisque condimentum elit, sed lacinia nisl consequat sed. Suspendisse eu dictum enim. In hac habitasse platea dictumst. Nunc blandit bibendum nisl, a placerat felis eleifend at. Aliquam sed ornare nisl. Ut tincidunt turpis et sapien tincidunt, ultricies aliquet ex facilisis. Aenean mollis tempus felis, sed ultrices dui laoreet vel. Aliquam blandit elit lorem, quis fringilla leo rutrum a. Phasellus auctor, urna sed vestibulum maximus, leo nulla posuere urna, blandit mattis odio ligula in magna. Proin vel erat sed ipsum dictum pretium. In vitae pulvinar diam. Suspendisse vulputate, velit a mollis aliquet, justo orci egestas erat, vitae tristique augue dui et sem. Maecenas eu dapibus lectus. Pellentesque a turpis mattis, varius enim in, varius eros. Pellentesque dapibus interdum condimentum. Curabitur sed massa magna."
var textSeparated = text.split(" ")
console.log(textSeparated.length)
var count=0
for(i=0; i<textSeparated.length; i++){
    count++
}