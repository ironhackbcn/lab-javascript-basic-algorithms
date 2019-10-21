// Names and Input

/* 1.*/var hacker1 = "Griffith";
/* 2.*/console.log("The driver's name is " + hacker1);
/* 3.*/var hacker2 = prompt("What is your name?");
/* 4.*/console.log("The navigator's name is " + hacker2); 

//Conditionals

/* 5.*/if(hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " charachters");
} else if(hacker2.length > hacker1.length) {
    console.log("The Navigator has the longest name, it has " + hacker2.length + " charachters");
} else {
    console.log("Both the Navigator and the Driver have the same name length, " + hacker1.length + " characters, wow!")
}

//Loops
/* 6.*/for(let i = 0; i < hacker1.length; i++) {
    var character = (hacker1.charAt(i));
    console.log(character.toUpperCase() + " ");
}
/* 7.*/for(let i = hacker2.length - 1; i > -1; i--) {
    console.log(hacker2.charAt(i));
}
/* 8.*/if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first");
} else if (hacker2.localeCompare(hacker1) === -1) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("you both got the same name bro");
}

//Palindrome 

/* 9.*/var possiblePalindrome = prompt("See if your word is a palindrome");
var wordNoSymbols = "";
for(let i = 0; i < possiblePalindrome; i++) {
    if(possiblePalindrome.charAt(i) != "," || ossiblePalindrome.charAt(i) != " ") {
        wordNoSymbols += possiblePalindrome.charAt(i);
    }
}

var firstHalf = wordNoSymbols.slice(0,(wordNoSymbols.length/2));
var secondHalf = wordNoSymbols.slice((wordNoSymbols.length/2),wordNoSymbols.length);
var intermediary = "";
for(let i = secondHalf.length; i > -1; i--) {
    intermediary += secondHalf.charAt(i);
}
if(intermediary == firstHalf) {
    console.log("Your word is a Palindrome!")
}


// Lorem ipsum generator

/* 10.*/let loremipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada lorem magna, non aliquam nisl fermentum eu. Etiam tristique ligula est, ut aliquet eros auctor at. Quisque tempor urna in nibh interdum faucibus. Quisque rutrum, quam eget accumsan auctor, sem elit pharetra lorem, vitae convallis nulla diam sit amet turpis. Sed nisl lectus, tincidunt ut maximus finibus, porta nec sapien. Duis tempus orci non tortor tempor convallis. Cras ipsum augue, finibus vel porta eget, placerat ut risus. Fusce eget nunc tortor. Vivamus a pellentesque nisl. Mauris at eros est. Duis in urna tempor, elementum mi fringilla, mattis ligula. Quisque sit amet malesuada mi, non consectetur felis. Ut convallis dolor vel nunc tempus, vitae molestie ante rutrum. 

Proin ac leo eros. Proin blandit ex nec viverra sagittis. Praesent vulputate tristique ipsum, ac viverra ex commodo ac. Etiam egestas pulvinar risus, ac iaculis leo consequat et. Curabitur id velit mattis, volutpat nibh sit amet, fermentum massa. Morbi pulvinar sed odio vel feugiat. Vestibulum iaculis sodales eros, eget sodales tellus posuere non. Ut auctor leo tincidunt dapibus sagittis. Aliquam fermentum consectetur massa. Duis dignissim condimentum blandit. Proin vitae purus nec nunc posuere ornare et et libero. Aliquam hendrerit risus eget est euismod dapibus. Curabitur magna sapien, molestie ac neque eget, laoreet pellentesque leo. 

Cras accumsan finibus risus sit amet cursus. Donec interdum sodales dui eu auctor. Praesent volutpat magna eget tempus egestas. Curabitur eu pharetra quam, et eleifend felis. Suspendisse vitae ornare dui. Vestibulum porta in ex tincidunt hendrerit. Vivamus scelerisque tincidunt nisi, at egestas lectus iaculis quis. Morbi a viverra neque. Duis et sem lacus. Proin vel quam et leo fermentum commodo.`

var count = 1;

for(let i = 0; i < loremipsum.length - 1; i++) {
    if(loremipsum.charAt(i) != " " && loremipsum.charAt(i+1) === " ") {
        count +=1;
    } else {
        continue;
    }
}
console.log(count);

var etCount = 0;

for(let i = 0; i < loremipsum.length; i++) {
    if(loremipsum.charAt(i) === "e" && loremipsum.charAt(i + 1) === "t" && loremipsum.charAt(i-1) === " " && (loremipsum.charAt(i+2) === " " || loremipsum.charAt(i+2) === ".")) {
        etCount +=1;
    }
}
console.log(etCount);