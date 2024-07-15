
// to inject your own methods we use Array/object.prototype.Name of your new methods
// And we know that array,functions,objects is subsets of prototype that means its an upper layer/ master 
// And every array,functions,objects passes through master.
//So if we access master and create our own function/method then it will be accessible to all subsets of prototypes.

let myHeores = ['Moon knight', 'John Constantine']

let Heropower = {
    Moon_Knight : 'God khansu',
    John_Constantine : 'Magic',

    getMagicpower : function () {
        console.log(`Constantine has ${this.John_Constantine}`);
    }
} // here below we made a self proclaimed function in a object which will be present in console of browsers.
Object.prototype.Samyak = function (){
    console.log(`Samyak is present in main object so it will also be present in sub-objects like Arrays,function,strings`);
}
//   Heropower.Samyak() // this prints the value and function Samyak which is global but lets check if Array myHeroes 
//Also has this function as its the sub object or childerns(Array,string,function) of parent(object).

// Case 1) checking whether the global function Samyak is accessble to its child or not?
myHeores.Samyak() // yes it does have this function So ****** Samyak function is created globally now ******

// Case 2) Making a function in array which is child and check if its accesseble in object which parent or other children.
Array.prototype.Heroes = function (){
    console.log(`hi there Sam`);
}
// Heropower.Heroes() As said its not accesseble in object because its declared in child class.
myHeores.Heroes() // this heroes only accessed by array.

// ++++++++++++++++++++++++++ To Exchange information btw objects,array,strings etc we use these +++++++++++++++++
// 1. .prototype
// 2. __proto__  These are called Prototypical Inheritance where you take and give info from others. 
// Task : Lets take a user and it has been taught by some teaches so we make objects of different type of teachers.

let user = {
    name : 'Sunit',
    Clase : 9+ "th"
}
const Teacher ={
    isloggedin : true,
    TeachesSubject : 'Math'
}
const AssistantTeach = {
    isAvailable : false
}
const TAsupport = {
    makeAssignments : 'Physics',
    __proto__: Teacher // Now here we inherited this object in this TAsupport by __proto__
}

// We can also access it by using __proto__ from outside.
Teacher.__proto__ = user

// BUT All this above code is old fashion it still works but thereis another method to it.

// Object.setPrototypeOf(TAsupport, Teacher)
// here Syntax for modern inheritance is Object.setPrototypeof( taker, giver) so here we need to mention two parameters
// which one will access the properties of other object is Taker and those who give there access of function is giver.
 
// Task 2) Now we have to make a function which detects extra space but doesn't count it as a length of the string.
let Anothername = "Spain is the euro's winner      "

String.prototype.truelength = function () {
    console.log(`${this}`); // We use this to let us know on which value this below operation is working on.
    console.log(`True length is ${this.trim().length}`); //Now trim cu the extra space in it.
}
Anothername.truelength() // true length is 26.

// Now we can give other values too and use truelength method to determine the length.
"Roberto Carlos is best Defender in 90's".truelength()
