// Remember Foreach loop does not returns any value even if its stored in an variable.

const Coding = ["Java", "javascript", "Php", "Python", "Cpp"]

const value = Coding.forEach( (item) => {
         console.log(item);
})

console.log(value);  // This gives us undefined as value so foreach doesnot gives values in return

// Fliter operator = it checks the array one by one with the condition provided to it, which also requires call back function.
const myNums = [1, 2, 3, 4, 5, 6, 7 ]

const NewNumber = myNums.filter((num) => { // here we fliter out all the number which is < 4
      return num >= 4      // When we use {} brackets then we also need to use return keyword. 
})

// this call back function can also be written throught implict arrow function.
// const NewNumber = myNums.filter((num) => (num >= 4)) directly can be written this.
 
const Books = [
    { Book_Name: `The sign` ,Publish : 1993, Sold_Copy : 34 },
    { Book_Name: `The Destoryer` ,Publish : 2009, Sold_Copy : 34 },
    { Book_Name: `The Punisher` ,Publish : 1995, Sold_Copy : 34 },
    { Book_Name: `The Tarnished` ,Publish : 1998, Sold_Copy : 34 },
    { Book_Name: `The Hitman` ,Publish : 2014, Sold_Copy : 34 }
]

const Userbook = Books.filter((bookies) => bookies.Publish >= 2003)
console.log(Userbook);
const userbook = Books.filter((bookies) => {
    return bookies.Publish >= 2003 && bookies.Book_Name === "The Hitman"
})
console.log(userbook);
                          // Maps will alwways return the values noo like for each
const Data = [1, 2, 3, 4, 5,697,434]

// const NewData = Data.map( (data) => data = data*10)

// Concept of chaining where we use many technique's
const NewData = Data
                .map((num) => num *12)
                .filter((num) => num >= 68)
                
console.log(NewData);

//++++++++++++++++++++++++++++++++++ Reduce Operator ++++++++++++++++++++++++++++++++++++++++++
//Used in shopping carts and all to perform calculations
// in this reduce we have two main varaible .i.e. Acceptor/Accumulator and CurrentValue.
const mynums = [1, 2, 3, 4]

const myTotal = mynums.reduce( function (Acceptor, Current_Value) {
    console.log(`Accumulator ${Acceptor} and Current value ${Current_Value}`);
    return Acceptor + Current_Value
} , 0) // Here after the condition we give the initializer number to start with

//So in Accumulator after displaying the first initial value then it gets add with Current value and the second 
// value to start with is that added value itself
// first Acceptor is 1 and Current value is 1
// then Second Acceptor is 1+1= 2 and Current value is 2
// Third acceptor is 2+2= 4 and Current value is 3.

// now Same can be done in Implict arrow Function which is short.
const MyTotal = myNums.reduce( (Acceptor, Current_Value) => Acceptor + Current_Value, 1) // here we need to mention initialvalue
console.log(MyTotal);

const ShoppingCart = [
    {
        item_name : "BaseBall Bat",
        Quantity : 2
    },
    {
        item_name : "Stationary",
        Quantity : 12
    },
    {
        item_name : "Car suspenser",
        Quantity : 1
    }
]

// We need to add all the items in this cart
const PricetoPay = ShoppingCart.reduce((Acc, item) => Acc + item.Quantity, 0)
// Remember = here item means the objects inside the array.
console.log(PricetoPay);
