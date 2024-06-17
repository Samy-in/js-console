 // In javasricpt if you copy an array it creates an shallow copy which refers to the original reference point  
 // just like heap memoery for non primitive daatypes
 // And There is deep copy which has different reference point and doesn't refers to original array

 const myArray = new Array( 1, 3, 6, 70, 45 )
 console.log(myArray[1]);

 myArray.push(6) // this adds this 6 number inside the array
 console.log(myArray);
 myArray.push(6)
 console.log(myArray);
 
 // there is an function called pop which removes the last character in a array
 myArray.pop()
 console.log(myArray);
// In unshift function it shifts the elements in array towards right or adds the given number at the start of array
// In shift function it shifts the elements of array towards right

myArray.unshift(56)
console.log(myArray);

myArray.shift()
console.log(myArray);

// To ask about index of no or does this element is present or not
console.log(myArray.includes(45));  // this gives the values or confirmation in boolean
console.log(myArray.indexOf(70));

// Converting array into string element
const Newarray1 = myArray.join()
console.log(myArray);
console.log(Newarray1);

//  *** slice and splice
// this is slice which makes changes in array without changing its original array elements and it doesn't consider
// or includes the last digit wrote inside the parenthesis

console.log("A ", myArray);
const MyAr1 = myArray.slice(1 , 4)  // This means it will print or store only numbers from 0th index to (4-1)th index
console.log(MyAr1);
console.log("B ",myArray);

// This is splice which directly changes the elements in array and also considers last element in the condition or
// it doesn't includes the last digit inside the parenthesis

const MyAr2 = myArray.splice(1, 4)
console.log("C ", MyAr2); // See in the output splice made an variable which stores only 1 to 4 elements
console.log(myArray);  // thenthose 1 to 4 numbers are removed from the original array

// ***************************Combining two array by regular and smart way

const High_pay_Jobs = new Array( " Pilot"," Engineer", " Traders", " Investors ","Politician" )
const High_respect_Jobs = new Array(" Defence officer"," Government officer", " Lawyer", "Millitary General" )

const All_Jobs = High_pay_Jobs.concat(High_respect_Jobs)
console.log(All_Jobs);

// But there is an smart way to combine by using spread format***
       // Where you give 3 dots and mention the arrayname then store it in different array
                                   
                    //THIS IS THE MODERN WAY//

const all_Jobs = [...High_pay_Jobs, ...High_respect_Jobs]
console.log(all_Jobs);

// Arrays inside arrays 
const Anotherarray = [2, 4, 5, [3,6,7], 6, 8,[9,10,67]]
const A_lot_array = Anotherarray.flat(Infinity)

// Now this flat( insert how many array elements should be there) it combines all the internal array inside an array into
// an single array element 

console.log(A_lot_array);

// TO ask an array that is this element is there in it or not?
console.log(Array.isArray("Samyak"));  // This gives true and false as answer
console.log(Array.from("Samyak"));  // This converts any value into array  of characters

//             But What Happens when we give an object as a input in array
console.log(Array.from({name : "Samyak"})); // This will gives us an empty value becoz it can interpret it









