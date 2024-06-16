// In javascript date and time is little confusing to understand but there are many sub functions to make it easy

    // IN Javascript month starts from 0 to ... Ex 0 th month means January, 1th means Febuary .....

let Constdate = new Date()
// Now we make an object of date
console.log(Constdate); // This gives confusing ans as 2024-06-16T14:33:53.895Z

// To make it systematically proper
console.log(Constdate.toDateString());  // this gives only date like day//month//date//year

console.log(Constdate.toISOString());

console.log(Constdate.toJSON());

console.log(Constdate.toLocaleDateString()); // this gives only date like month//day//year

console.log(Constdate.toLocaleTimeString()); // Now this gives only time around your surrounding

console.log(Constdate.toLocaleString()); // this gives fulfledge date and time
let Todaysdate = new Date("2024-06-16")
console.log(Todaysdate.toLocaleString());  // it prints 6/16/2024

//     *** Timestamp **** now to compare whos the fastest in poll system or in websites we use .gettime()
// it gives the millisecond values from this 6/16/2024

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(Constdate.getTime());

// Now the above code will give us value in milliseconds but to convert it into seconds we divide it by 1000
console.log(Date.now()/1000); // if we run this then it will also give decimal values which we don't want it so use floor()
console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate.getMonth() + 1);
console.log(NewDate.getDay());

