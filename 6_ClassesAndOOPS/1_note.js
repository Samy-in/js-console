// javascript is prototype based language and it doesnot have classes like java,c++
// is also not funcion language it solely based on syntax. 

// OOPs is an programming paradime which says that tells you the style of a language.

// objects are collection of properties and methods.

// keywords like 'object literal' means one object.
// Constructors
// Classes
// Instances (new, this)
// Prototypes

// 4 pillars
// Abstraction = means hiding details of any process Eg like fetch()
// Encapsulation
// Inheritance
// Polymorphism

// declaration of object 
const user = {
    username : "Rafeal leao",
    id : 34353,
    getUserDetails : function (){
       //console.log('Got users data from database');
       // Suppose we need to use the current context
       console.log(`Username : ${this.username}`); // this will print the above objects key called username.
       console.log(this); // this will print the whole object.
    }
}
console.log(user.id);
console.log(user.getUserDetails());
// console.log(this); this keyword is printed in aglobal environment so it will return {} empty object.
// And in browsers console it give window as a default value.

// but if we have to make these users multiple time thhen we use 'Constructor Function' .

// Now this function has some keywords which helps to make instances of an object without making more space in memory.
 //here new is constructor function.

// since we know that this keyword printed outside the scope gives empty object then we can add things init.
function users(uSername, isloggedin, loginCount) {
    this.Username = uSername,
    this.isloggedin = isloggedin, // We now that this.isLoggedin is not equal to isLoggedin because of current context.
    this.loginCount = loginCount

    return this;
}

const User23 = new users('Jayesh', 45, true) // As we given variables in this empty object we will also give the values to access
// these above variables.
console.log(User23);

//########################## .Constructor and .Instanceof method ##############################
// this .constructor if use after the object name then it will give us the reference of the main function like here 'Users'
console.log(User23.constructor); // this gives output as [Function: users]

// 2) Instanceof is an verification function which checks the objects keys and tells us whether its an instance of that same object.
function Cars (Maker , Model, Year) {
    this.Maker = Maker
    this.Model = Model
    this.Year = Year
}
const Autocars = new Cars('honda', 'HX-380' , 1984)

console.log(Autocars);
// console.log(Autocars instanceof Maker); // this is not correct you can ask object inside an object is an instance or not
console.log(Autocars instanceof Cars);  // Expected value: true
console.log(Autocars instanceof Object); // Expected value: true

// Updates were rejected because the remote contains work that you do not
// hint: have locally. This is usually caused by another repository pushing to
// hint: the same ref. If you want to integrate the remote changes, use
// hint: 'git pull' before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.
// Soln is git push origin main --force.