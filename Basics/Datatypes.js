// We know that there are two type of Datatype:-
//  Primitive and Non-Primitive :- This are classified on the basis of How an variable is stored on basis of value or
//  call by reference where the refrence is send to the user or operator.
//   All Primitive Datatype are call by value means for an operation it gives us a copy of a variable but 
//  not the actual reference block.Ex :- String,Numbers,Boolean,Null(Means empty not 0),Undefined,Symbol,BigInt

// All Reference type or Non-Primitive Datatype in which user is given the actual refrence of the block or variable
// Ex :- Array,Objects,Functions



"use strict"  // means it lets us use all newwer version means new syntaxs and variables
// when we are using browser we have write alert(3 + 6) then this will get shown in browser but we uses 
// node.js in which we don't have to write this
// int double bigInt is used in share market app
//  boolean string with only "" 
// to know the type of any variable we use typeof
console.log(typeof null);
// now In interview remember type of null is considered as ObJECT
console.log(typeof undefined);
// undefined is itself a type or its same


// Now to convert any data type into other we Use,
let score = true
       /// instead of an number if there is an random words with numbers then we get output as NAN
             // means "Not A Number"
console.log(typeof(score));
 
// now we are converting this variable into boolean
// so we first store this score variable into another variable
let Score = "samyak"

   // if there is anything in string its value in boolean is true
      // but if there is 0 or emty string then its null  false


let ValueInVariable = Boolean(Score)
console.log(typeof (ValueInVariable));
console.log(ValueInVariable);

// lets change this score to number
let numberInScore = Number(score)
console.log(typeof numberInScore);
console.log(numberInScore);
 
       // In boolean if we pass number to convert into a boolean value
       // it goes like this as 1=> true  0=> false  ""or empty string => false
       // "Harish"=> true in Boolean

 // lets convert into string
  let scorenumber =89
let stringnumber = String(scorenumber)
console.log(stringnumber);
// 89 which an number convert to a string variable 89


// ****************OPERATIONS*****************************************
// Now to make any number into negative number we use
let value = 87
let Negvalue = -value
console.log(Negvalue);   // it will print negative values then