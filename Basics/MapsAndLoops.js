// **************************** Specific Loops for Array's ****************************************** //
// We use for of, for on, for each for suppose there are many objects in array like [{} {} {}] 
// 1. For of
// let arr1 = [1,3,4,5,6]
// for (const num of arr1) { // In this iterator means name in which the array or object is stored,
//                           // here, this loop is for all types like object or arrays.
//     console.log(num);
// }

// const Greetings = "Hello World!"
// for (const Greets of Greetings) {
//     console.log(Greets);
// }
                              // ********** MAPS *********************

// Maps is just like object or itself its an object but maps doesnot allows repeated keys .
// Maps should have unique keys only no repetation
const map = new Map()
map.set('BEL',"Belgium")  // in map you have to set first an uniquekey and then its value.
map.set('FL', "Florida")
map.set('GRE',"Germany")
map.set('FL', "Florida")  // tthis will not get executed because its an repetative case and map don't allow it
console.log(map);
// Know the challenge is to use it in for each loop.
for (const [key, value] of map) { // Now to mention map we have to destruct the object or array by mentioning keys and 
       console.log(key, '=' ,value);                  // values inside square brackets.
 
} // So you we use loops for maps by object destructing.

// But Can try this for Normal objects ? = NO why, because any object by object destructing is used in loop then
// its not iterable. (means the loop won't even start)

// const myObject = {
//     game1 : "FarCry 3",
//     game2 : "Dooms 2",
//     game3 : "Sleeping Dogs"
// }
// for (const [key, values] of myObject) { // As said its not iterable through object destructing method.
//     console.log(key, ':-', values);
// }

//^^^^^^^^^^^^^^^^^^^ MOST IMPT = Forof loop does not work for objects.+++++++++++++++++++++++++++++++++

// So We use For in loop for not generally for objects but for all types.
// 2. For in loop
const myObject = {
           game1 : "FarCry 3",
           game2 : "Dooms 2",
           game3 : "Sleeping Dogs"
        }

for (const key in myObject) {
      console.log(`${key} best dark games are : ${myObject[key]}`);    
}

// Now does this For on loop works on arrays or not ? yes, we can but FOR each is most efficient loop.
// For strings,Arrays we use for of loop
// For Objects we use for in loop.
const Top16 = ["England", "Portugal", "Spain", "Gremany"]
for (const key in Top16) {
      console.log(`${key} are ${Top16[key]}`);
}

//++++++++++++++++++++++++++ Best loop for Arrays ++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3. For each loop
// Syntax 
//arrayname.forEach( Function (num1) { // here Foreach(inside this we wnat call back 
                        // function means function with no name) then with parameters.
// });
const Coding = ["Java", "javascript", "Php", "Python", "Cpp"]

Coding.forEach( function (Value) {
       console.log(Value);
})
 // METHOD 2. = We can use arrow function too but it should be unnamed. this is most Proper function
const Language = ["Java", "javascript", "Php", "Python", "C++"]
Language.forEach( (items) => {
      console.log(items);
})











