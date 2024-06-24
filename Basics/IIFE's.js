// Immediately Invoked Function Expressions (IIFE)= Mostly its used in databases to provide fast data 


// it help us to write short code 
// but in interview say "Since there is pollution of variables or declaration in global scope, 
   //               So to avoid this pollution we use IIFE , to run it more systematically"
   // Symbol ()(); we add ';' to end the process
// there are two types Named IIFEs and Unnamed IIFEs
// 1. Named IIFEs
( function Eurocup () {
       console.log("DB Connected");
})(); // here the First () = is write an function,arrow function but not Objects
      // And second () = is an execution call and then end this function with ';'

// 2. Unnamed IIFEs is only in form of an Arrow Function
(() => {
    console.log("Second DB Connected");
})();

// Q) Write two Functional IIFEs together it can be named or Unnamed
( function Germany () {
    console.log("Florian Writz is Best CAM");
})();

( function England () {
    console.log(`Jude Bellingham is the best CAM`);
})();
          // this is two named IIFEs

// Now two unnamed IIFEs
( () => {
    console.log(`Vinicius Jr is best ST or LW`);
})();

(() => {
    console.log(`Niko Williams is the best LW`);
})();

// Now If we have to add parameters in function then observe
( (name) => {
    console.log(`Who is the best DEFENDER ?  ${name}`);
})(`Paulo Maldini `); // On the First ()  = inside this you can write the parameters then 
         // On Second ()  = inside this we give the value for that parameters
















