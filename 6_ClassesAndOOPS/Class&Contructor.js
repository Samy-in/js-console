// Classes was introduced in javascript in ES6 module.
// Classes make JS easier.
class User {
    constructor(username , email ,password) { // this will get activated as soon as you write new keyword this will get called.
      this.username = username;
      this.email = email;
      this.password = password
    }
// inside class we dont have to specify function just start with the name ,parameters and curly brackets
// here we are just making dfferent method on the class .
    encrptpassword() {
       return `${this.password}Euros`;
    }
    ChangeUsername() {
        return `${this.username.toUpperCase()} but Niko williams is best `
    }
}

const Finalist = new User("Spain" , "Morata89@.com","45593")
console.log(Finalist.encrptpassword());
console.log(Finalist.ChangeUsername());

// Now same above code is written without classes then also it'll run smoothly

function User3(username , email ,password){
    this.username = username;
    this.email = email;
    this.password = password
}

User3.prototype.encrptpassword = function () {
    return `${this.password}Euros`;
}
User3.prototype.ChangeUsername = function (){
    return `${this.username.toUpperCase()} but Fill Foden is best `
}

const Finalist2 = new User3("ENGLAND" , "Bellingham89@.com","45593")
console.log(Finalist2.encrptpassword());
console.log(Finalist2.ChangeUsername());

// ++++++++++++++++++++++++++++ INHERITANCES in classes ++++++++++++++++++++++++++++++++++++++++++++++++++
// which is easier than normal prototype language

class  User2 {
   constructor (username){
       this.username = username
   }

   logMeIn (){
      return `Username is ${this.username}`
   }
}

class Teacher extends User2{ // this Extends function allows the values inside the User to be accessed.
    constructor (username , Subject, Speciality) {
        super(username)  // this super keyword goes into User function takes the new username and allows the access
                         // in this function.
        this.Subject = Subject
        this.Speciality = Speciality
    }
     addCourse() {
        console.log(`A new module is added by ${this.username}`);
     }

}
const Council = new Teacher("Suneeta", "Machine learning and Ai", "Deep learning")
Council.addCourse()

// Now we made a class called User and instance of that class is Teacher. 
// So both are not equal but values are accessable between each other.


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Static Properties ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
class UserAllowed {
    constructor(Username) {
        this.Username = Username
    }

    logme (){
        console.log(`Username is now ${this.Username}`);
    }

    // Now we have a keyword static which does not allow any child or function to access the specific function you
    // have selected.
    static Createid (){
        return "658"
    }
}
const restriction = new UserAllowed('Saliba')
// console.log(restriction.Createid()); as explained static won't allow his access.

