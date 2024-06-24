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
// You can only store the value of that operation into an third variable which should be
//  inside the function we have used return instead of console.log()


function DivtwoNumbers(num1, num2) {
    return num1 % num2
}
const DivAnswer = DivtwoNumbers(16.00 , 9.00)
console.log(DivAnswer);

function loginUserMessage(username) {
    if(username === undefined)  {   // OR we can also write ********* if(!username) {} ****************
                return("Please , Enter the user name")   //So if loop compares the username with and if it true then 
                                                         //this return condition will applicable
    }  
    
    return `${username}, Just logged in `   // here we used string interpolation to don't waste time

}

console.log(loginUserMessage("Shanjin"));
console.log(loginUserMessage());  // But when you left the paranthesis empty then it's an undefined datatype
            // therefore we use help of an loop and match if there is empty space then it's an undefined
               
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

// let a = 48
// let b = 74   // This are global scope values assigned to a,b,c
// let c = 83

// if (true) {
//  let b = 23
//  const c = 84                               //This is called block scope
// console.log("Inner scope's value =", b,c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
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
//this.name is basically we use this to refer to current situation inside Only in Object not in Functions
const Banks = {
    Username : "Sameer yadav",
    AccountId : 385429027312,
    Welcomemessage : function () {
        console.log(`${this.Username} , Thank you for opening account and being apart of our family`);
    }
}

// Banks.Welcomemessage() // this prints Sameer yadav , Thank you for opening account and being apart of our family
// // but can change the current value 
// Banks.Username = "Sana Malik"
// Banks.Welcomemessage() // this print the value changed
                     // Now main Observe if we write console.log(this) inside the object    
                     // and outside the Object

console.log(Banks);
console.log(this); // If we observe the output it shows {empty} but same code if we run in browsers console
 // Then we see "Window" as a default value; this is because Javascript is an browser based language 
                      // Therefore the most global object in browser is "windows" object its asked in interviews

// Difference btw Function and Arrow Function is that we remove the function keyword and write => after ()
const chain = function() {
    Naav = "Shushruth"
    console.log(this.Naav);  // As we know that this operator doesn't work in functions and shows {empty}
    console.log(this);  // Same case as above
}
chain()

// Arrow Function
const Chain = () => {
    Naam = "Asleem"
    console.log(this.Naam); // this doesn't gets executed
}
console.log(this.Naam); // Outside this operator becomes undefined
Chain()
                      // SUMMARY OF THIS OPERATOR IN NORMAL AND ARROW FUNCTions
// if console.log(this) is written inside the normal or arrow function it states as undefined
// But we write console.log(this) outside the normal or arrow function it states as {} or empty object
// On otherhand console.log(this.Any key from object or Function) then it will get executed

// ***************************** EXPLICT arrow Function *********************************
const Location = (loca1, loca2) => {  // In explict we use {} and return in arrow function
    return loca1 + loca2
}

console.log(Location("Fin","land"));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ IMPLICT ARROW FUNCTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const Locat = (loca1, loca2) => (loca1 + 2* loca2)
console.log(Locat(3, 5)); // In implict we remove this {} and use ()

// Same thing can be done in objects as well but inside we have to use {}
                // ({here you have to mention any operation})
const Loca = (uSername) => ({uSername : "Daniel"})
console.log(Loca()); // here without return keyword we can make object with arrow function








