// Lexical scope and closure
// Closures gives an access to an Outer function's scope from an inner function.
// ++++++++++++++++++++ Lexical Scope ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// it says that a inner function can access the variable declared in outer function but a outer function can't 
// access the values or variables from inner function.

function Outer (){
    let value = "259045"
    function inner(){
        let price = '3985'
        console.log(value);
    }
    inner()
}
Outer()
const Outerside = Outer()
console.log(Outerside);
// its like Parent function which is outer() which has variable and its accessble by its child function which is inner()
// But variable declared in child function which can't be accessed by Parent function this is what lexical scoping is.

// ---------------------------------- Closures ---------------------------------------------------------
// closure is when you have a outer function(NSE) which has variable declared as Revenue and ainner function Broker_Zerodha
// which trys to access the revenue value and its subjected to returns the whole outer function when the inner function
// is called.
function NSE(){
    let Revenue = 394594738
    function Broker_Zerodha(){
        console.log(Revenue);
    }
    return Broker_Zerodha;
}
const Taxes = NSE()
Taxes()
// IN interview it asked that we have written to return Broker_Zerodha so only the inner function will get shown
// in output? = wrong ; this due to closure when a inner function's reference is called or returned then the whole
// lexical scope of the outer function will get displayed in output.
// this is most imp.
// because of lexical scope we get the revenue value from outside of the scope.

// Practical example is on Pratical_Ex_Of_lexicalScope.html