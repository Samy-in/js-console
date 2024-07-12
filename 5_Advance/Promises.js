// Promises are an object represents the eventual completion or failure of an asynchronous operation or resulting value
// this is just like the word's meaning itself.

// Promises have 3 states :-
// pending : Where its called initial state, niether fulfilled nor rejected.
// fulfilled : here the operation is completed successfully
// rejected : the operation is completly rejected.
// 
// As by defination promise is declared just like objects.

const promise1 = new Promise(function(resolve, reject) {// inside this promise we have function which contains two parameter 'resolve and rejection'
    // like Do an async tasks
    // Databases calls
     setTimeout(() => {
        console.log("Async call has been made");
         resolve()
     },1000)
}) // We made this promise function but see if it get executed that means it gets resolved we resolve() after the statement
// And connect it with an different object with (.then) keyword which connects the resolve()

promise1.then(function () {
    console.log("Promise is completed");
}) // this .then requires a call back function to give the confirmation to the system that its connected
                // with resolve()

// ***************** IMP We can directly write this promises without making an function andalso use .then() to connect the
// resolve it self.
new Promise(function (resolve, reject) {  // great method.
  setTimeout( function () {
    console.log("Async task 2 is assigned");
    resolve()
  },1000)
}).then(function () {
    console.log("Async task 2 is completed");
})

// Case 1: When have to pass an object or array which comes from database from promise() function to .then() function
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () { // here inside the parameter nothing is mentioned that means we can take any random
        // word to store this data inside resolve() in .then() to print
        resolve({username : "Morata", email :"Eurosbest@gmail.com"})
    },1000)
})

promise3.then(function (Email) { // here wehave taken Email to store this data inside resolve() and passed to then()
  console.log(Email);
})


//Case 2: Suppose when we accessing or updating a file then if error occurs hen how we can use resolve function and .then
const promise4 = new Promise(function (resolve , reject) {
   setTimeout(function() {
    let error = true 
    // now we initialize the error with true value so we have to check if error is false then problem is resolved.
    if (!error) {
        resolve({username: "Christiano" , password : "89295928"})
    } else {
        reject('ERROR : File is not Accessable')
    }
   },1000)
})
 // Now we connected the resolve() but 
 // Case 3: if we want to take or print only one thing from the resolved data Ex. from {username: "Christiano" , password : "89295928"}
 // We only want username in this .then  function so for that we use "CHAINING METHOD"
promise4.then((user) => {
    console.log(user);
    return user.username; 
}).then((username) => {   // Now this .then is for when condition satisfied but for rejection we use catch()
    console.log(username); // here we passed the variable username to connect the upper .then function which is called
                                  // Chaining method very useful in database depolyment.
}).catch(function(error) {
    console.log(error);  // this is for error case.
}).finally(() => {console.log('this process is niether resloved and rejected');}) // Now we use Finally() for printing the 
      //something when the above process is going on but it acts as default and always gets printed.
      // REMEMBER we allows need .then().catch().finally() in series
//.then() for true condition .catch() for false condition .finally() for printing anything no matter the process.      
 
// Method 2) Async and await in alernative method for .then().catch().finally()

// but async and await is use inn a situation when you know the request you giving will always be true.
// async requires a function and await is used before the name of the promises.

// async function consumePromise5() {
//   const reponse = await promise4;
//   console.log(reponse);  //  As I said that this async&await is only when we know the request is being accepted not rejected.
// }               // but Our above example has true and false statement so we use Async & try-catch method

// consumePromise5()

// ++++++++++++++++++++++++ Async and try-catch method +++++++++++++++++++++++++++++++++++++++++++++++++++
// we use this method when we dont know that our request will get accepted or rejected.

const promise5 = new Promise(function (resolve , reject) {
    setTimeout(function() {
     let error = false
     // now we initialize the error with true value so we have to check if error is false then problem is resolved.
     if (!error) {
         resolve({username: "Alfhaso Devis" , password : "89295928"})
     } else {
         reject('ERROR : JSON File is not Accessable')
     }
    },1000)
 })
      // This async-await is nothing but a function prototype which waits for the condition to get approved and then print the ans 
      // but it doesn't take care about the error condition or wrong condition.
// async function consumePromise5() {
//      try {
//         const reponse = await promise4;
//         console.log(reponse);
//      } catch (error) {
//         console.log(error);
//      }
// }
// consumePromise5()

// async function AllgetUsers () {
//    try {
//      const Respone = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data = await Respone.json() // this takes time to convert this string values from API to an json object so we use await.
//      console.log(data);
//    } catch (error) {
//     console.log('Error : js file is not displayed', error);
//    }
// }

// AllgetUsers()

// this whole above code can also be writtenn in .then().catch()

//+++++++++++++++++++++++++++++++ Most simpliest code +++++++++++++++++++++++++++++++++
fetch('https://api.github.com/users/Samy-in')
.then((response) => {
  return response.json()
})
.then((data) => { // here in data as a parameter we stored the above passed value.
    console.log(data);
})
.catch((error) => {
   console.log(error);
})

// -------------------------- Fetch() function ------------------------------------------------
// fetch() is an method which starts the process of fetching resources form the network, returning a promise
// then we get a response depending on that we put respones in resolved or rejected category.

// Now we might have noticed the output of above fetch code that whatever written in fetch() gets executed first
// because this fetch() creates its special VIP Microtask queue or fetch queue which gets more priority than normal
// task queue .============ To understand this more better go to Async.js file.