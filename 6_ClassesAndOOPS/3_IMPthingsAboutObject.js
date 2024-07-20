// Remember : everything in javascript is more or less considered as an object. And because of this we can use
// those .length,.lowercase  functions.
// 1) Arrays is on the top of it is object so in sudden case "Arrays are considered as objects"
// 2) Strings is on the top of it is object so in sudden case "Strings are considered as objects"
// 3) functions is also cconsidered as objects.
function multiplyby5 (num) {
    return num*5;
}

multiplyby5.power= 2


console.log(multiplyby5(10)); // 50
console.log(multiplyby5.power); // gives 2 value because its an varaible not a function.
console.log(multiplyby5.prototype); // this will give us empty object which tells us that its an object at the end of day

// ++++++++++++++++++++ Mystery about new and this+++++++++++++++++++++++++++++++++++++++
// .this function is like "Jisne bhi call kiya uska kam phele karo then again the same."

function CreateUsers(username, score) {
    this.username = username
    this.score = score //we know both are different variable.
}

// we know that .prototype gives us an empty object so we can store anything in it.
CreateUsers.prototype.increment = function () {
    this.score++;  // this means who ever call tis score parameter first then it work is done first.
}
CreateUsers.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

const data = new CreateUsers("Expensive data" , 23000000000) // now to this value is stored in new variable always 
const Data = new CreateUsers('Cheap data' , 34000000) // So, we use new keyword to let the variable know that CreateUsers is changed now.

Data.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

