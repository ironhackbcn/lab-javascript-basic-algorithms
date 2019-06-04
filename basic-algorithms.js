console.log("I'm ready!");
let hacker1 = "Victor";
console.log(`Driver's name is ${hacker1}`);
let hacker2;
hacker2 = window.prompt("Wich is the Navigator Name?");

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters"
  );
}
if (hacker2.length > hacker1.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters"
  );
}
if (hacker1.length === hacker2.length) {
  console.log(
    "wow, you both got equally long names, " + hacker2.length + " characters!!"
  );
}
let stringDriver = "";
function printDriverName(name) {
  let newName = "";
  for (let i = 0; i < name.length; i++) {
    newName += " " + name[i].toUpperCase();
  }
  console.log(newName);
  stringDriver = newName;
}
printDriverName(hacker1);

let stringNavigator = "";
function printNavigatorsName(name) {
  let newName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    newName += name[i].toLowerCase();
  }
  console.log(newName);
  stringNavigator = newName;
}
printNavigatorsName(hacker2);

if (stringDriver.localeCompare(stringNavigator < 0)) {
  console.log("The driver's name goes first");
} else if (stringDriver.localeCompare(stringNavigator > 0)) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

let palindrome = window.prompt("What is your palindrome?");

function isPalindrome() {
  let pattern = /[\W_]/g;
  palindrome = palindrome.replace(pattern, "");
  return (
    Array.from(palindrome)
      .toString()
      .toLowerCase() ===
    Array.from(palindrome)
      .reverse()
      .toString()
      .toLowerCase()
  );
}
console.log(isPalindrome());

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus lacinia urna id pulvinar. Fusce et erat vestibulum, venenatis nisi in, porta erat. Etiam a erat malesuada, vulputate odio et, congue metus. Etiam eget vehicula nisi. Cras ut mi lacus. Nam efficitur molestie diam, non elementum dui ullamcorper in. Nulla pretium, ex id commodo dapibus, urna augue fermentum risus, et faucibus nulla ipsum ut velit. Suspendisse auctor lacus quis mi pharetra elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed iaculis, urna nec blandit viverra, mauris dui molestie mauris, vel tempor erat felis at metus. In id elit et felis condimentum ultricies. Nunc arcu felis, consequat sit amet sem ut, commodo rutrum diam. Cras viverra semper velit et finibus. Suspendisse fermentum tristique augue, sit amet dictum ligula tincidunt quis. Sed volutpat placerat venenatis.";
lorem =
  lorem +
  " Nulla elit diam, lobortis et lectus condimentum, semper commodo diam. Vestibulum fringilla, enim vitae tristique rhoncus, nulla lectus fringilla tortor, et hendrerit est orci fringilla lectus. Mauris viverra sed felis a interdum. Suspendisse nec enim eget magna dapibus faucibus et eget urna. Vestibulum dignissim scelerisque tortor vel mollis. Cras sed magna nisl. Suspendisse vitae turpis tincidunt, ornare elit et, tincidunt orci. Donec blandit dolor tellus, faucibus tempor turpis consectetur sed. Nulla et laoreet nisl, a placerat magna. Ut mi felis, bibendum vitae efficitur eget, semper eu ligula. Praesent accumsan diam at quam condimentum placerat. Mauris non ipsum hendrerit, tristique est in, egestas leo. Morbi tincidunt id erat ut tempor. Duis ullamcorper augue et eros molestie, in posuere mauris dapibus. Pellentesque volutpat interdum aliquet. Maecenas ac ipsum et orci lacinia semper sed nec mauris.";
lorem =
  lorem +
  " Etiam at purus tortor. Ut non eros vel purus ornare molestie in vel tellus. Phasellus sagittis tortor eget tristique dignissim. Pellentesque sed posuere quam, ac venenatis sem. Nullam justo lectus, mattis ut nisi vel, condimentum sodales ligula. Suspendisse et aliquet justo. Nulla in elit accumsan, luctus sapien finibus, imperdiet dolor. Quisque non orci ut nisl congue tincidunt eget in leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi pharetra elit id mi interdum vulputate eget ornare dui. Phasellus felis lacus, dictum nec aliquam vel, cursus id elit. Nunc rutrum nisl ut diam mattis, at porttitor massa aliquet. Proin non sollicitudin neque. Cras non velit finibus, rhoncus nisi at, lobortis sapien.";

function countWords() {
  console.log(lorem.split(" ").length);
}
countWords();

function countWordIntoWords(word) {
  let arrWords = lorem.split(" ");
  let count = 0;
  let pattern = /[\W_]/g;
  arrWords.forEach(function(element) {
    element = element.replace(pattern, "");
    if (element === word) {
      count = count + 1;
    }
  });
  console.log(count);
}
countWordIntoWords("et");
