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
let position = " SDE-2"
// now we use backticks (``) in which there is an string interpolation
    // in which we make place holders to  inject the variables in it

console.log(`I'm an Employee at amazon working at ${position} role with salary of ${sAlary}`);

// NOW to access the all functons like concat, charAt(),tolowercase()etc
console.log(position.charAt(4));