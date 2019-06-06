// Names and inputs
const hacker1 = "johan";
const hacker2 = window.prompt("Writte your name");

console.log(
  `the driver's name is:  ${hacker1} , and the navigator's is : ${hacker2}`
);

//Conditionals

if (hacker1.length === hacker2.length) {
  console.log(
    `wow, you both got equally long names, ${hacker1.length} characters.`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `The navigator got the longest name, it has ${hacker2.length} characters.`
  );
}

//loops

const capitalLetters = hacker1.toUpperCase();
const spaceLetters = "";
const newCadena = capitalLetters.split(spaceLetters);

console.log(capitalLetters);
console.log(newCadena);

const newhacker = ["j", "o", "h", "a", "n"];
console.log(newhacker);
newhacker.reverse();
console.log(newhacker);

// Lorem ipsum generator

var paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel libero congue, bibendum ipsum sit amet, fermentum quam. Quisque commodo ultricies sollicitudin. Etiam hendrerit porttitor odio et semper. Cras sed metus dui. Cras lobortis ligula odio. Fusce congue tortor eget dui vulputate, sed rhoncus ante porta. Cras facilisis magna lectus, rutrum pharetra magna commodo sed. Aliquam mattis odio a erat aliquet, vitae faucibus justo rutrum. Donec et ultrices ante. Duis sed diam id nisi ullamcorper sodales. Sed et neque eu augue porta euismod id eu diam. Aliquam efficitur metus dui, quis faucibus sem volutpat elementum.Cras euismod congue ornare. In volutpat leo a neque pharetra, eget convallis quam dictum. Vestibulum lacinia dolor et justo maximus, nec egestas erat semper. Praesent malesuada odio sed quam rhoncus elementum. Donec pharetra ligula ut consequat aliquam. Morbi quis feugiat nisl, vitae mattis ex. Integer in ex id turpis lobortis ultrices. Praesent semper ultricies massa et varius. Nullam laoreet enim in fringilla vulputate. Nullam felis massa, commodo ut bibendum dapibus, placerat in dolor. Integer sodales nisl ac euismod blandit. Nulla placerat congue nulla a gravida.Pellentesque quis interdum dui. Donec feugiat porta mi eu blandit. Fusce gravida augue quis metus sollicitudin, sit amet facilisis urna varius. In hac habitasse platea dictumst. Duis eget odio ac massa vulputate cursus eu vel turpis. Sed sit amet sodales ante. Donec dapibus metus quam, ut hendrerit sapien condimentum ut. Cras consequat velit eu odio laoreet elementum sollicitudin vel arcu. Aenean accumsan hendrerit sapien, at mattis dolor semper non. Maecenas vitae nulla id arcu viverra suscipit ut vitae elit.";
console.log(paragraph.length);

function contar() {}
