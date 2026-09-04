
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

//Phase 4 
//create function and return results 
function applyDiscount(total, discountCallback){
    return discountCallback(total);
}

//create two separate functions
const studentDiscount = total => total * 0.90;
const seniorDiscount = total => total * 0.80;
//console functions and pass through values
console.log(applyDiscount(100, studentDiscount))
console.log(applyDiscount(100, seniorDiscount))

//Phase 5
//create function and pass through parameters 
function calculateFinalBill(price, quantity, discountCallback){
    const subtotal = calculatePrice(price, quantity);
    const discountedPrice = applyDiscount(subtotal, discountCallback);
    const taxAmount = getTax(discountedPrice, 0.07);
    return discountedPrice + taxAmount;
}
//call function 
console.log("Your grand total is: " + calculateFinalBill(20, 3, studentDiscount));
