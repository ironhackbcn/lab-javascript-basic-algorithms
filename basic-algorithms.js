// Names and Input
var hacker1 = 'Rose';
var hacker2 = prompt(“What is the navigators name?”);

//Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has XX characters')
} else if (hacker1.length < hacker2.length) {
    console.log('Yo, navigator got the longest name, it has XX characters') 
}
    else {
        console.log('wow, you both got equally long names, XX characters!!')
    }

//Loops

for (var i =0; i < hacker1.length;i++) { 
    console.log(hacker1.split("").join(" ").toUpperCase())
}

for (var i =0; i < hacker2.length;i++) {  
    console.log(hacker1.split("").reverse().join(""))
}

// 


var val = hacker1.localeCompare(hacker2);

if(val === -1) {
    console.log("The driver's name goes first")
} else if (val === 1) {
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both got the same name?")
}
    
//}

var userResponse = prompt("Write a string!");
var userString = userResponse.split(" ").join("")
.toLowerCase();

var reversedResponse = userString.split(" ").reverse().join("");

if(reversedResponse === userString) {
    console.log("Its a palindrome!")
} else {
  console.log("Its not a palindrome!")
}


// Lorem ipsum generator

var lipsumParagraphs = "What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."


console.log(lipsumParagraphs.split(" ").length);
console.log(lipsumParagraphs.charAt("et").length);



