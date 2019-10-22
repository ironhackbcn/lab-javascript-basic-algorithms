// Names and Input
var hacker1="Jennifer";

console.log(`The driver's name is ${hacker1}`);



var hacker2=window.prompt("navigator's name", "pepe");

console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if ( hacker1.length>hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length<hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else { 
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
}

var UpperDriver=hacker1.toUpperCase();
var WithSpaces ="";
var Invertedstring ="";
// string with spaces
for(i=0; i<hacker1.length; i++) {
   
   WithSpaces= WithSpaces.concat(UpperDriver.charAt(i),' ' );
}
console.log(WithSpaces);
 // invert4ed string
for(i=hacker1.length; i>=0; i--) {
   
    Invertedstring=  Invertedstring.concat(hacker1.charAt(i),'' );
 }
 console.log( Invertedstring);

 // compasring to strings

 if ( hacker1>hacker2) {
    console.log(`The driver's name goes first`);
} else if (hacker1<hacker2) {
    console.log(`Yo, the navigator goes first definitely`);
} else { 
    console.log(`What?! You both got the same name?`);
}

console.log(hacker1.localeCompare(hacker2))


//palindrom

var palindrom=window.prompt("insert sentence to check out palindrom", "pepe");

var invertedPalindrom="";

for(i=palindrom.length; i>=0; i--) {
   
    invertedPalindrom=  invertedPalindrom.concat(palindrom.charAt(i),'' );
 }

 palindrom=palindrom.toLowerCase();
 invertedPalindrom=invertedPalindrom.toLowerCase(); // to lower case all
 palindrom=palindrom.replace(/[^A-Z0-9]/ig,'');
 invertedPalindrom=invertedPalindrom.replace(/[^A-Z0-9]/ig,''); // replace all special caracters

 


 
 if ( palindrom==invertedPalindrom) {
    console.log(`yeah it's a palindrom`);
    }
    else {  console.log(`not a palindrom`); }




// Lorem ipsum generator

var countspaces=0;
/*
var lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin varius eros, at fringilla risus lobortis ac. In arcu dui, scelerisque a euismod non, dapibus at magna. Praesent luctus dignissim turpis, sed dapibus arcu venenatis in. Sed ullamcorper nibh et leo fringilla, ac ullamcorper metus posuere. Nulla eget elementum elit. Mauris efficitur nisl vitae orci euismod, et eleifend tellus pretium. Cras et quam orci. Sed luctus ex tellus, ac fermentum augue convallis ut. Maecenas enim neque, condimentum eu nibh sodales, lobortis dapibus dui. Sed ut leo et mauris mollis placerat. Cras semper felis lectus, id blandit nisi consequat non. Vivamus accumsan vehicula ipsum, eget blandit nulla aliquam ac. Vestibulum ut tellus et est volutpat pharetra. In tincidunt nunc in ante aliquet, eu posuere eros vestibulum.

Proin blandit venenatis ligula. Ut imperdiet pulvinar consequat. Nulla enim erat, vulputate at elit ut, finibus accumsan eros. Nunc scelerisque tellus eu tempus eleifend. Aenean arcu tellus, hendrerit imperdiet aliquam non, condimentum vel augue. Praesent luctus condimentum lorem, vitae commodo enim. Quisque libero sem, lacinia eu lacus vel, consectetur scelerisque ante. Aliquam laoreet magna neque. Nunc quis augue efficitur, consectetur velit at, ultricies augue. Fusce mattis quam nec tortor dictum consequat. Cras vitae velit id nisi consequat iaculis.

Sed nec justo iaculis, sollicitudin mauris vitae, varius magna. Aenean vulputate, ligula id bibendum tincidunt, ipsum risus eleifend dui, vitae eleifend diam ligula id nibh. Fusce eu mollis ante. Proin odio ligula, blandit at mattis vel, efficitur quis massa. Nullam iaculis imperdiet metus, ac condimentum lorem feugiat a. Maecenas dignissim metus convallis nunc egestas facilisis. Sed maximus nibh sed luctus laoreet."
//console.log(lorem.length);
/*
for ( i=0; i<lorem.length; i++){
    if(countspaces.charAt(i)==="a"){
        countspaces=countspaces+1;
    }

}

console.log(countspaces);

*/
