// We observe all the type of conditionals

// We know any Variable defined inside a scope or {} that variable is accessable only inside that scope.
// Can't be accessed by outside i=of tha scope.
const Candidate_For_Balloan_dOr = "Florian Writz"
if(Candidate_For_Balloan_dOr == "Jude Bellingham") {
    
    const Best_Player = "Neymar Jr"
    console.log(`Best player is ${Best_Player}`);  // As the scope of Best_Player is inside the {} so it can't be accessed by outside
} else {
    console.log("Winner is Florian Writz");
    
}
 
// console.log(Best_Player); this causes errors becoz not accessable
// Implict if else writings
const Score = 75
if (Score <= 100) console.log("in Implict Ifelse we can write in one line or by ',' we can also write in two or more lines");

// Nested if else
const Balance = 2400
if (Balance < 400) {
    console.log("More than 400");
} else if (Balance < 700) {
    console.log("More than 700");
} else {
    console.log(`The balance is 2400`);
}

 // Logical bitwise operator in if function
 const UserLoggedin = true
 const Debitcard = true
 const loginwithNumber = true
const loginwithEmail = true
  if (UserLoggedin && Debitcard || loginwithEmail) {
    console.log(`User is a mobile user`);
  }
// Switch case 
 const month = 4               //press (Alt + Shift + down arrow) to copy and print downward
 switch (month) {
    case 1: // This checks if the value of month is 1 then print this
        console.log("January");
        break;
    case 2: // This checks if the value of month is 2 then print this
        console.log("Febuary");
        break;
    case 3: // This checks if the value of month is 3 then print this
        console.log("March");
        break;
    case 4: // This checks if the value of month is 4 then print this
        console.log("April");
        break;
 
    default:
        console.log("Defualt case match");
        break;
 }

// If the value is string then same steps it still compare to find the correct value to print
const Month_Name = "March"
switch (Month_Name) {
    case "Jan": // This checks if the value of month is Jan then print this
        console.log("January");
        break;
    case "Feb": // This checks if the value of month is Feb then print this
        console.log("Febuary");
        break;
    case "March": // This checks if the value of month is March then print this
       console.log("March");
       break;
    case "April": // This checks if the value of month is April then print this
        console.log("April");
        break;
 
    default:
        console.log("Defualt case match");
        break;
 }

// ******************************** truthy and Falsey value ************************************
// Means some values are automatically assumed as true and some as false
const UserEmail = "S@gmail.an"
if (UserEmail) {             // Now you can observe that we are not comparing anything but still we get output
                     // Of a string as true but Empty string gives false as result
    console.log("Got the Email");
} else {
    console.log("Doesn't have an Email");
}

// All the Falsey values are False, 0 , -0 , In Bigint we write '0n' which gives False value ,
   // " " , null , undefined ,NaN= Not a number
// All the truthy values are " ", "Anything inside string", "0" , "False", [empty array], {empty object}
// , Function () {}.
// Now to know an array is empty or not
if (UserEmail.length === 0) { // This strictly checks the datatype and if array is zero.
    console.log("Array is Empty");
}

// Now To know if an object is empty, First we have to store a empty object into an variable 
   // and then find the length
const EmptyObj = {}
if (Object.keys(EmptyObj).length === 0) {  // Now to access we have to use object.keys(Inside write the object)
     console.log("Object is Empty");
}

      // ***** Some IMP Results
// 1. In Browser's console False == 0 gives 'true' value
// 2. In Browser's console False == '' gives 'true' value
// 3. In Browser's console 0 == '' gives 'true' value

// Nullish Coalescing Operator (??) this basically prefer not to take null aor undefined as a value
let val1;
val1 = 5 ?? undefined // here this ?? checks if we take undefined is there any problem then we take the second option.
val2 = null ?? 84 // here null is not considered
console.log(val1);
console.log(val2);
val3 = null ?? undefined  // this ?? operator takes undefined as a safer option for database.
console.log(val3);
val4 = undefined ?? null // here ?? operator takes null as a safety measure
console.log(val4);
              // ************ To change variables name all together use ctrl + D. ***********
// For literations
for (let i = 0; i < 4; i++) {
    const element = i; // this will straight print index values
    console.log(element);
}
 // we can reuse this i becoz it has certain scope.
for (let i = 0; i < 5; i++) {
    // console.log(`Outer loop is : ${i}`);
    for (let j = 0; j < 7; j++) {
        // console.log(`inner loop is : ${j}`);
        // console.log(`i = ${i} * j = ${j} is :`,i*j);
    }
}

// for literation also used in arrays
const myArray = ["Spam", "Sentry", "Abominator"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// break keyword stop the loop and continue keyword skips one literation and then let rest printed.