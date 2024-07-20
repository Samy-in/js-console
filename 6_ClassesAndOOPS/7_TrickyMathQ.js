// Q) Can we change the value of pi in math library to any random or specific  number of our  choice ?
// Yes, by chsnging the object property we can do it
// To Know everything about any object we use getOwnPropertyDescriptor() which tells us all.
const Descriptor = Object.getOwnPropertyDescriptor(Math , 'PI') // And need to mention the keyword.
console.log(Descriptor);
// You will get output as : 
// {
//     value: 3.141592653589793,
//     writable: false,  this writable is false means changing value is not allowed.
//     enumerable: false,
//     configurable: false
//   }
const Enemies = {
    Name: 'Penguin',
    Crime: 'Killing unknowm suspect',
    Decision_Declared: 'Free , Not a Criminal.'
}
console.log(Object.getOwnPropertyDescriptor(Enemies, "Decision_Declared"));

// Since we have created an object So We can change its properties by using function called .defineProperty()

Object.defineProperty(Enemies , "Decision_Declared", {
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(Enemies, "Decision_Declared"));
// lets apply loops on this property,
for (let [key ,value] of Object.entries(Enemies)) {  // Here we mention the keys and the values as well as the object entries.
// IMP Remainder is = if there are functions inside function and its accessed as keys then the code will shattered.    
    if ( typeof value !== 'function' ) {
        console.log(`${key} : ${value}`);
    }
}


//****************** Getters and Setters **********************************************/
//Now these are used when we want a certain class of data and you don't want to allow everyone to access it 
// So we use getters and setters to put conditions on various variables to not et accessed.
class User {
    constructor (username, email , password) {
         this.username = username,
         this.email = email
         this.password = password
    }
    get password() {  // this is when someone trys to access this password MAINLY outside of the class then we use getter
        return this._password.toUpperCase()
    }
    set password(value){ // this allows to set values outside the class and getters-setters are written simultaneously
        // to assign values we also need to have new parameters.
         this._password = value
    }
// +++++++++++++++++++++++++ ERROR : "Maximum call stack size has exceeded" ++++++++++++++++++++++++++++++++++
    // Now IMP Error will occur by saying "Maximum call stack size has exceeded" = which is because the constructor function
// And the setter function both are setting the values at the same time; It creates more space . So, solutions is we 
// make a new variable by using underscroll _ which takes the same value but doesnot shows the error.
}

const Garry = new User('Shang chi', 'Shangchi@34mail' , '8278Abdg')
console.log(Garry.password);

// So in short the above code tells us that getters gets the value for the user in upperCase which is modified but the
// setters has the same value of password which stored in value variable and its not changed.And
//  WE DON"T USE RETURN keyword in setters , only in getters.


// Understand the power of getters and setters;
// Because from user we are taking value and storing in setters but while returning this value from getters we can
// literally change the whole value without touching the original value for ex
// get password(){
//   return `${this.password}Samyak`
// }
// set password(value) {
//    this.password = value
// }
//the value in password was 1234 then get stored in value variable in setters but this password is now falsely changed
// to Samyak now and it doesn't delete the true value which is 1234 itself; "its like a Fake layer/ Coating of values"


// ========================== Getters and Setters in Functions not in classess like old times==========================
// function User2 (email2, password2) {
//     this._password2 = password2,
//     this._email2 = email2,

//     Object.defineProperty(this , 'email2') {
//         get2 : function(){
//             return this._email2.toUpperCase()
//         },
//         set2: function(value2) {
//             this.email2 = value2
//         }
//     }     // this gives the same results.
// }
// const tea = new User2('Damit#mail' , 'Dangit')