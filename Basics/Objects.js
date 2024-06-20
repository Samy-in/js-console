// Remember When we declare an object by object literals then singleton is not formed 
//  but if we declare an object by constructures way then singletons is formed

// object literals way to declare an object
// const JsUser = {
//     name : "Samyak",
//     [sym1] : "Rapter dash" // we need to use this 
//     age : 19,
//     Email : "Samyakdanm49@gmail.com",
//     isLoggedin : true,
//     LastloginDays : ["Monday", "Tuesday"]
// }

// //   To access this object instances we need to use the keywords
// console.log(JsUser.email);    // This is an rookee way to access

// // Best wayis to write the keywords insidean object brackets with inverted commas
// console.log(JsUser["email"]);  // Reason why we use this is if this email keyword is written 
//                        // in string format then it can't be access by rookee way so we use this

//                    ******* MOST IMP INTERVIEW Q *********
// Q1) make an symbol and show it in object 

// First we declare sym
const sym1 = Symbol("Rapter Dash")

const JsUser = {
    name : "Samyak",
    [sym1] : "Rapter dash", // we need to use this 
    age : 18,
    Email : "Samyakdanm48@gmail.com",
    isLoggedin : false,
    lastloginDays : ["Monday", "Tuesday"]
}

// Now if we look at the output of rookee way it doesn't shows the type, it considered this symbol as a string value
console.log(JsUser.sym1);

// Now with advance way wecan see the symbol is defined by its type
console.log(JsUser[sym1]);

// If we have to over write a value inside the object and does not want anyone change this values then we can use 
// Object.freeze( inside this we need to write the name of the object)
JsUser.Email = "houndieatdress@Yahoo.com"
//    Object.freeze(JsUser)  // After this we can't change the values 
console.log(JsUser);

JsUser.greeting  = function() {                                // here this OBJECT is converted to FUNCTION
               console.log("Every day is hell to a daydreamer");

}
// To print this in output we use .greeeting()
console.log(JsUser.greeting());

// When we want to access any keys inside the object or function for this we use string interpolation (``) backticks
JsUser.greeting2  = function() {                              
    console.log(`Every day is hell to a daydreamer, ${this.name} `);
           // Now this is refering to this object Jsuser
}
console.log(JsUser.greeting);   // if we write this then it will give us an function which is undefined now why function
                                // because we converted this pbject into an function
console.log(JsUser.greeting());
console.log(JsUser.greeting2());  // This will add the name into the functions

// By constructors way to declare an object or singleton object
// Object.create()
            //Singleton object 
const tendery = new Object()
console.log(tendery);          // This will print empty object or {}
 
// Non singleton object
const tendery2 = {}             // same output
console.log(tendery2);
// We can have object inside objects

const Regular_User = {
    Email : "trapOutit23@Yahoo.com",
    Full_name :  {
        First_name :{
            Name : "Lanesra",
            Middle_name : {
                name : "Anderson",
                Last_name :{
                    Ame : "Ibrahmovic`"
                }
            }
        }
    }
}
    console.log(Regular_User.Full_name.First_name.Middle_name.name);

//                                  Just like arrays we can combine two objects into one object

const Obj1 = {2: 'w', 3: 't', 4: 'h'}; // here we use keys as numbers and given string value 
const Obj2 = {5: 'tng', 8: "bayec"}

// const Obj3 = {Obj1 , Obj2}
const Obj3 = Object.assign({}, Obj1, Obj2)  // here we write {} because accd to msn document we put empty array as TARGET
//                              Obj1 and Obj2 ....    as SOURCE so both get merged 
console.log(Obj3);

                      // BUT MOST EFFICIENT WAY IS TO USE SPREAD OPERATOR
                      const Objector = {...Obj1,...Obj2}
                      console.log(Objector);
// Mostly in database values are in form of Arrays which contains many Objects inside it
const Database_value = [
    {
        Id : 68,
        BagdeNo : "18TSM5797"
    },
    {
        Ids : 5988,
        BagdeNos: "18TSM5017"
    },
    {
        IdS : 588,
        BagdeNoS : "18TSM464567"
    }
]
  console.log(Database_value[1].BagdeNos);   // Since inside the array so First mention the array and 
                                      // then write the Object name we want

         // NEW way to get all the keys inside any object in SPECIALLY IN "ARRAY FORM"
console.log(Object.keys(JsUser)); // We use Object.keys( Inside we mention our Object name)
                                    // **** this above method is used in accessing the database values many times *****
// AND these all keys will be in array REMEMBER

console.log(Object.values(JsUser))   // Just like keys we can print all the values too
console.log(Object.entries(JsUser))   // It gives first its key then its values associated with that key in a array form

// WE can also ask the object whether there is this property/variable or not
console.log(JsUser.hasOwnProperty('lastloginDays'))  // it return a boolean value as true

// We use this above method to prevent crashing the database if the given is not present then database will face crash

                      // Object destructuring and JSON (means anything inside {} these brackets is JSON) API

const Euros2024 = {
         Teamname : "Portugal",
        Winprice : 100 + "Million",
        OppenentTeam : "Germany"
}
             // To access these values we can use a new method in which we store the keys in an object which is 
                  // refering to the object in wich that is in.
          // ********** ITS CALLED Object or array DESTRUCTURING ********************************// 
          // it means we can write the keys name inside an object curly brackets {keyname} Ex 
          // const {Oppenentteam} = Euros2024  console.log(Oppenentteam)     

const {Teamname} = Euros2024
console.log(Euros2024);
console.log(Teamname);

//     const {Teamname : Team} = Euros2024  We can also change name or store the big named variable into a smaller 
//     named variable




















