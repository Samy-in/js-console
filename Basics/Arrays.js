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


 