// basics in function of adding two number
function AddtwoNumbers(num1, num2) {
        console.log(num1 + num2);
}

//  To run this function wwe just write its name with ()
// AddtwoNumbers(65, 930)   // And inside this ()are called arguements. And here the arguements are used to pass the values
//                       // to the parameter num1 and num2 initailized after the function name
// AddtwoNumbers(65, "930")
   // here since there is an string component is there so its assumed that the whole value is string i.e. 65930
   
   const result = AddtwoNumbers(65, 930)
console.log("Result : ", result);   // This shows that the result variable is undefined because its not defined 
                                    // inside the function in return form only
                // ******** IMPORTANT RULE **************//
//Now when we use console.log() inside a function and store that operation inside the console.log() in an different
// Variable which is outside of the function then that variable is undefined
// You can only store the value of that operation into an third variable when inside the function we haveused return
// instead of console.log()

function DivtwoNumbers(num1, num2) {
    return num1 % num2
}
const DivAnswer = DivtwoNumbers(16.00 , 9.00)
console.log(DivAnswer);

function loginUserMessage(username) {
    if(username === undefined)  {   // OR we can also write ********* if(!username) {} ****************
                return("Please , Enter the user name")   //And once this return is executed then after any other return
    }                               //          is neglected or ignored  straight up
    
    return `${username}, Just logged in `   // here we used string interpolation to don't waste time

}

console.log(loginUserMessage("Shanjin"));
console.log(loginUserMessage());  // But when you left the paranthesis empty then it's an undefined datatype
            // therefore we use help of an loop and match if there is empty space then it's an ndefined
               
            // ********** REST operator (...num1) it makes any number given in random manner stores in an array

function InstaFoodprice(...num1) {
        return num1

}        // After made into an array we can perform various operations
console.log(InstaFoodprice(564, 58, 7876, 35));

// WE can also assign variables before the Rest Operator which takes the value and store in it
function InstaMartprice(val1, val2, ...num1) {
    return num1

}       
console.log(InstaMartprice(564, 58, 7876, 35));  //When we  print this num1 only last two values is inside the variable
                                    // Because first two values is taken out and stored in different variable

// We can also access object inside a function

const User = {
      Username : "Jitendra",
      Id : 28439

}
function handleObject (anyobject) {  // we have to write anyobject to allow object inside the function
              console.log(`Username is ${anyobject.Username} and id is ${anyobject.Id}`);
}
console.log(handleObject(User))
handleObject(User)
              // We can also write object inside this function which changes the values
              handleObject({
                Username : "Milenge",
                Id : 4637
              })
// this has changed the value from Jitendra to Milenge 
const MynewArray = [478, 9854, 945, 450]

// then we store this object into an function
function ReturnSecondvalue(myArray) {
                          return myArray[3]
}
console.log(ReturnSecondvalue(MynewArray));

// ********************************* Global and local Scopes ******************************************

{}  //This is called scope and it can be scope of any function or object
// Whatever you write outside of this brackets are called global scope i.e. there scope is globally available
// And this which are written inside is block scope and hese things can't be accessed by outside refering to it

let a = 48
let b = 74   // This are global scope values assigned to a,b,c
let c = 83

if (true) {
 let b = 23
 const c = 84                               //This is called block scope
console.log("Inner scope's value =", b,c);
}
console.log(a);
console.log(b);
console.log(c);
   // ***** this scope environment in this node.js and in browser's inspect console is different ******** \\

// Scope's of Function inside functions.
function one() {
   let OppTeam = "Germany"

                            // This function two() can also be considered as child part of parential function one()
                               // that is why child class can access the keys in parent class but parent can't access 
   function two() {                           //this keys of child class(Ex. firstteam etc)
          const Firstteam = "England"
          console.log(OppTeam);
         }
         two()   // this is executing this function
         //console.log(Firstteam);      //*** This creates error as 
                                      // we can't access Firstteam because its out of this scope of function two() ***\\
    }

one()   // this is executing this function

//+++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++\\ 
// we are delcaring function in two ways 
// 1.) by regular way
function additionOne (num1) {
    return num1 + 1
}
console.log(additionOne(34));  // This printing staement can be written even before ths declsring of this function
                  // this is the main advantages

// 2.) by hosting way
// Where we store his function into an variable

const Boredlife = function(num1) {
    return num1 + 2
}
console.log(Boredlife(4)) // here the disadvange is that you can't write this printing statement before function declaration

// +++++++++++++++++++++ Understanding this and arrow function +++++++++++++++++++++++++++++++++++
// this.name is basically we use this to refer to current situation inside an object or function etc
const Banks = {
    Username : "Sameer yadav",
    AccountId : 385429027312,
    Welcomemessage : function () {
        console.log(`${this.Username} , Thank you for opening account and being apart of our family`);
    }
}

Banks.Welcomemessage() // this prints Sameer yadav , Thank you for opening account and being apart of our family
// but can change the current value 
Banks.Username = "Sana Malik"
Banks.Welcomemessage() // this print the value changed
                     // Now main Observe if we write console.log(this) inside the function 
                     // and outside the function

























