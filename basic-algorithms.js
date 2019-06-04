// Names and Input
var hacker1 = "Tash";
console.log(`The driver's name is ${hacker1}`);
var hacker2 = prompt("What is your name?");
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
function longestName(lengthOfName1, lengthOfName2) {
  var lengthOfName1 = hacker1.length;
  var lengthOfName2 = hacker2.length;
  if (lengthOfName1 === lengthOfName2) {
    console.log(
      `Wow, you both got equally long names, ${lengthOfName1} characters!!`
    );
  } else if (lengthOfName1 <= lengthOfName2) {
    console.log(
      `Yo, navigator got the longest name, it has ${lengthOfName2} characters`
    );
  } else if (lengthOfName2 <= lengthOfName1) {
    console.log(
      `The Driver has the longest name, it has ${lengthOfName1} characters`
    );
  }
}

longestName(hacker1, hacker2);

function capitalLetters(capitalName) {
  return capitalName.toUpperCase();
}

function nameWithSpaces(driversName) {
  driversName = capitalLetters(driversName);
  var hacker1LetterWithSpace = "";
  for (var i = 0; i < driversName.length - 1; i++) {
    hacker1LetterWithSpace = hacker1LetterWithSpace + driversName[i] + " ";
  }
  hacker1LetterWithSpace = hacker1LetterWithSpace + driversName.slice(-1);
  console.log(hacker1LetterWithSpace);
}

nameWithSpaces(hacker1);

function hacker2Reverse(navigatorsName) {
  var reverseNavigatorsName = "";
  for (var i = navigatorsName.length - 1; i >= 0; i--) {
    reverseNavigatorsName = reverseNavigatorsName + navigatorsName[i];
  }
  console.log(reverseNavigatorsName);
  return reverseNavigatorsName;
}

hacker2Reverse(hacker2);

function whoGoesFirst(name1, name2) {
  var result1 = name1.localeCompare(name2);
  return result1;
}

function printNameOfWhoGoesFirst(name1, name2) {
  var result2 = whoGoesFirst(name1, name2);
  if (result2 === 0) {
    console.log(`What?! You both got the same name?`);
  } else if (result2 === 1) {
    console.log(`${name2} goes first.`);
  } else if (result2 === -1) {
    console.log(`Yo, ${name1} goes first definitely.`);
  }
}

printNameOfWhoGoesFirst(hacker1, hacker2);

function palindrome(sentence) {
  var sentenceLowerCase = sentence.toLowerCase();
  var sentenceReverse = hacker2Reverse(sentenceLowerCase);
  var comparisionSentenceSentenceReverse = whoGoesFirst(
    sentenceLowerCase,
    sentenceReverse
  );
  if (comparisionSentenceSentenceReverse === 0) {
    console.log(`Bingo, ${sentence} is a palindrome!`);
  } else {
    console.log(`What a pity! Give it another try!`);
  }
}

var newSentence = prompt(
  "Give me a sentence and I will check if it is a palindrome."
);

palindrome(newSentence);

// Lorem ipsum generator

var threeParragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam, magna a egestas lobortis, lectus metus ullamcorper dolor, at molestie lacus tellus vitae ligula. Nam nec turpis gravida, facilisis velit at, viverra neque. Suspendisse feugiat ullamcorper nibh id tristique. Sed luctus bibendum libero, sit amet placerat nibh fringilla ut. Nunc mattis urna quis lacus molestie, id convallis risus rhoncus. Sed tristique erat neque, sit amet efficitur sem consectetur id. Phasellus aliquet est at dolor viverra, vitae hendrerit sapien elementum. Vestibulum fringilla ex vitae tincidunt consectetur. Aliquam semper eleifend leo quis gravida. Vestibulum et risus dapibus, varius turpis eu, aliquet nunc. Ut non massa et quam ornare molestie eget non leo. In sagittis imperdiet libero eget imperdiet. Cras elit sem, auctor sed turpis eget, iaculis molestie augue. Nam id pellentesque ex.
Nulla a dolor consequat, molestie enim vel, efficitur arcu. Mauris congue nunc risus, sed dapibus sapien scelerisque sed. Fusce ultricies sapien eu hendrerit convallis. Sed luctus est vel congue eleifend. Sed ac nisi non magna efficitur tincidunt. Duis vel augue id elit pellentesque venenatis in a nisl. Sed magna risus, dapibus dictum tristique at, fermentum at erat. Sed eget sapien a libero pulvinar aliquet et at nibh. In lobortis enim sit amet vestibulum maximus. Integer imperdiet in justo non gravida. Cras bibendum enim quis fringilla efficitur. Quisque et faucibus turpis, in iaculis orci. Morbi molestie enim eget commodo euismod. Integer faucibus dictum libero, eget malesuada augue dictum sed.
In placerat scelerisque condimentum. Proin ex odio, lacinia ac odio non, ultricies congue ligula. Nullam risus nunc, placerat at ultricies quis, sodales non nisl. Sed efficitur vulputate turpis, eget posuere nunc auctor ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel erat accumsan, congue tellus sit amet, ornare enim. Curabitur ligula diam, sollicitudin sit amet faucibus nec, volutpat eget est. Nam pulvinar leo eu feugiat blandit. Vivamus ullamcorper in metus at accumsan. Ut sit amet nisi massa. Proin tristique velit id sapien ultricies, quis dictum erat cursus. Vivamus nec aliquam quam. Fusce in leo id odio porta iaculis ac id odio. Vivamus id est sapien. Aenean vel ultrices nulla.`;

console.log(threeParragraphs);

function countWordsInString(wholeString) {
  var spaceAfterWord = 1;

  for (var i = 0; i < wholeString.length; i++) {
    if (wholeString[i] === " " || wholeString[i] === "\n") {
      spaceAfterWord = spaceAfterWord + 1;
    }
  }
  console.log(spaceAfterWord);
}

countWordsInString(threeParragraphs);

function countWord_ET_InString(wordET) {
  var countET = 0;
  for (var i = 0; i < wordET.length; i++) {
    if (
      wordET[i] === " " &&
      wordET[i + 1] === "e" &&
      wordET[i + 2] === "t" &&
      wordET[i + 3] === " "
    ) {
      countET = countET + 1;
    }
  }
  console.log(countET);
}

countWord_ET_InString(threeParragraphs);
