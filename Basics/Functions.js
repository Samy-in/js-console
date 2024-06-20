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







