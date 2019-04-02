// 1.
var hacker1 = "John"


// 2.
console.log(`The driver's name is ${hacker1}`)


// 3.
var hacker2 = prompt("What's the navigator name?")


// 4.
console.log(`The navigator's name is ${hacker2}`)


//5.
if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}


// 6.
newString2 = ""
for (var i = 0; i < hacker1.length; i++) {
    newString2 += `${hacker1[i]} `
}
console.log(newString2.toUpperCase())
//console.log(hacker1.split("").join(" ").toUpperCase())


// 7.
newString = ""
for (var x = hacker2.length-1; x >= 0; x--) {
    newString += hacker2[x]
}
console.log(newString)


// 8.
if (hacker1[0] > hacker2[0]) {
    console.log(`The driver's name goes first`)  
} else if (hacker1[0] < hacker2[0]) {
    console.log(`Yo, the navigator goes first definitely`)
} else {
    console.log(`What?! You both got the same name?`)
}


// 9. 
var usrInput = prompt("Input a string: ").replace(" ", "").toLowerCase()
reverseInput = ""
for (var z = usrInput.length-1; z >= 0; z--) {
    reverseInput += usrInput[z]
}
if (usrInput == reverseInput) {
    console.log("It's palindrome")
} else {
    console.log(`This string is not palindrome ${usrInput}`)
}


// 10.
var p1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar nunc odio, molestie efficitur nunc finibus vel. Aenean vulputate metus at tempor condimentum. Sed urna lacus, hendrerit vitae pulvinar non, vulputate sed lorem. Maecenas rhoncus est vitae mi iaculis, vel imperdiet enim lobortis. Morbi mattis, nisi sit amet commodo gravida, est ipsum ultricies erat, sed cursus tortor justo et arcu. Integer vitae libero volutpat, blandit velit at, egestas sem. Donec bibendum sollicitudin sagittis. Donec sed velit ante. Nulla eu tempor felis. Pellentesque porta feugiat erat nec feugiat. Sed pharetra efficitur dolor aliquet auctor. In hac habitasse platea dictumst. Quisque suscipit tellus et elementum dignissim.

Morbi facilisis commodo gravida. Praesent eu ornare elit, hendrerit accumsan diam. Duis placerat pretium pretium. Aenean interdum, lorem nec tincidunt tempor, diam dui laoreet nunc, interdum lacinia turpis nulla ac purus. Vestibulum ac interdum lectus, a molestie augue. Integer a fermentum mauris. Ut dapibus diam ac erat interdum, eget sollicitudin massa molestie. Etiam vitae tristique orci.

Pellentesque lacinia eu nisi quis mattis. Praesent interdum, dui nec finibus tincidunt, lectus ipsum posuere quam, sit amet sagittis magna dui ac purus. Duis lorem lectus, feugiat ut purus in, luctus consectetur velit. Sed sollicitudin nunc eu ultricies tincidunt. Vestibulum risus metus, gravida non quam quis, malesuada tincidunt sem. Sed auctor libero quis urna elementum imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam porta, nisl at congue fermentum, nisl magna venenatis ipsum, ut tincidunt diam urna ac tortor. Proin et metus in velit pretium ornare. Aliquam erat dui, tincidunt quis mauris nec, lacinia tempus diam. Vivamus ut mollis nunc. Aliquam porttitor maximus quam vitae condimentum. Donec rhoncus nisl in libero imperdiet, vel volutpat odio dictum. Maecenas vitae accumsan diam, et accumsan diam.`

console.log(`Number of words in the paragraph: ${p1.split(" ").length}`)
console.log(`Number of characters: ${p1.replace(" ", "").replace("\n", "").length}`)