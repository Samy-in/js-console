// Outputs of this function in web browser(Windows) and in node.js
// in windows = {this} means it will show you window as default ans
// In node.js {this} means it will show you {} empty object or the global Environment which is empty .
// ***************************** CALL FUNCTION *******************************************
// In this file we use .call() to call another function inside a function but the reference of that called function 
// is holded by that another function rather than deleting it from the call stack.
function SetUsername (username) {
    // And if we want to call complex data .
    this.username = username
    console.log("This function is called with its reference is holded in another function");
}
function CreateUsername (username, email , password) {
   SetUsername.call(this, username) // here we passed the this.username from SetUsername inside this current context.
   this.password = password
   this.email = email

}
const LoginDetails = new CreateUsername ("Morata", "Euros2024@email.com", 2024)
console.log(LoginDetails);
// Our aim is to see all these values get printed as well as with username,email and password but only email and password
// is showing and username which is stored in different function is not seen. So, we use .call(this, username)
// What this call function does is it passes the current execution context to another function.











