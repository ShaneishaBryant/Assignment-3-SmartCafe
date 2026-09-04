//Phase 1
//create function declaration
//refactor 
const calculatePrice = (price, quantity) => price * quantity; 

//create function expression
//refactor 
const getTax = (amount, taxRate) => amount * taxRate;

//call functions
let subtotal = calculatePrice(15, 4);
let tax = getTax(subtotal, 0.07);

console.log("Subtotal: " + subtotal);
console.log("Calculated Tax: " + tax);

//Phase 2
//create function declaration 
function calculateStoreTax(amount){
    const defaultTaxRate = 0.07; //local variable 
    return getTax(amount, defaultTaxRate);
}
//call function and pass value
console.log(calculateStoreTax(100));
//console.log(defaultTaxRate);

//Phase 3 - refactor 
