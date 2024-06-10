// just observe the result 
console.log("2" > 1);
console.log(3 > "23");  
/// Now here to compare a string with a number the compare operator converts this string into a number first and
// then compare it

// But there are some tricky cases
console.log(null > 0);
            // Now for this we understand that null is not greater than 0


console.log(null >= 0);
 // But here this compare function convert this null into a number value, treating it as 0 value;that is the reason why 
 // we null > 0 is false and null >= 0 is true


// console.log(null = 0);  Now this is invalid in operation
console.log(null <= "23");

console.log(null == 0); // Which is false becoz Now this null is convert as string
console.log(null == "");  // same Output
 
// *********************Strict check = it checks all the parameters of an value like whether is in same datatype or
// its in same defined function or not

console.log("2" === 2); // Here first it convert the string into a number and compares then as its an Strict Check so
// it also check its datatype and its different so False
