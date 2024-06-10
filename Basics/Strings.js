// here remember this in console execution happens from left to right 
// then if first expression is string and after that there is a number then its treated as a string as whole together
let str1 = "You merely abopted the darkness "
let str2 = ",I was born in it"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 5 +6 );   //here first string will get executed and becoz of that
                           // next numbers will be treated as strings class Output is 156 not 111
console.log(5+ 6+ "1");   // Now this we print 111 becoz first operations will executed then string will get printed