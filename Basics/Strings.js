// here remember this in console execution happens from left to right 
// then if first expression is string and after that there is a number then its treated as a string as whole together
let str1 = "You merely abopted the darkness "
let str2 = ",I was born in it"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 5 +6 );   //here first string will get executed and becoz of that
                           // next numbers will be treated as strings class Output is 156 not 111
console.log(5+ 6+ "1");   // Now this we print 111 becoz first operations will executed then string will get printed


// NOw to use string concatinate function in modern way we write like this

let sAlary = 40000;
let position = "software developer engineer-2"
// now we use backticks (``) in which there is an string interpolation
    // in which we make place holders to  inject the variables in it

console.log(`I'm an Employee at amazon working at ${position} role with salary of ${sAlary}`);

// NOW to access the all functons like concat, charAt(),tolowercase()etc
console.log(position.charAt(5));
console.log(position.toLocaleLowerCase());
console.log(position.lastIndexOf('2')); // it returns the last occurance of a substring of a string
console.log(position.indexOf('-'));

// To create an substring  we need to mention starting index to start from and ending index which is considered as n-1

const newString = position.substring(0 , 10); // this will print character from 0 to 9 th not 10th character
console.log(newString);
console.log(position.length);

// Now a slice is also used as substring but also can make reverse string by entering negative number
const Anotherstring = position.slice(0 , -24);
console.log(Anotherstring);

// Now to remove the extra space before and after the string we use trim()

const NewstringOne = "   Samyak   "
console.log(NewstringOne);
console.log(NewstringOne.trim());

// TO replace some thing into another by .replace
const url = "https://Samyak.yahoo/samyak%20YoYO"
console.log(url.replace('%20', '=='));  // For this you have to mention what you have to replace and suggest the 
                                      // replaced words.

   // Now to ask something whether its inside the string or not we use .include()     
   
   console.log(url.includes('samyak'));  // And it gives boolean values like true and false

// ****************************************(NUMBERS and MATH)********************************************************
const score = 7864529704125493 // this doesnt tells properly that its an number datatype but js  automatically interprete it as number
console.log(score);

// So to declare number properly
const Scoreboard = new Number(score)
console.log(Scoreboard);  // Now is properly declared

// To convert this number into string by .toString
console.log(Scoreboard.toString);  // this makes this no into string and once its an string then lot of options are there
console.log(Scoreboard.toString().length);

//To print correct decimal values we use .toFixed(inside tis mention how many decimal needed)
console.log(Scoreboard.toFixed(5));

// To
const  Cruddaise = 293.8945
// Now this precision will focus on those digits which is mentioned inside the brackets and rest it will round it off
console.log(Cruddaise.toPrecision(3)); // Just like this 293.8 is round it offed at 294

// if the digit is less than the number before decimal then it will write the fist number + exponential values
// for the rest numbers
console.log(Cruddaise.toPrecision(2));

// If the digits are more than the number then it will display only the amount of number that you have entered 
console.log(Cruddaise.toPrecision(5)); // 293.89

// Now to put comma's on huge numbers we use tolocalestring()
const Price = 1000000000
console.log(Price.toLocaleString());  // This will automatically arrange the number according to american number scheme
// here its arranged as 10 million

// To arrange the number accord to Indian way we use 'en - IN'
console.log(Price.toLocaleString('en-IN')); // here its arranged as 1 crore
