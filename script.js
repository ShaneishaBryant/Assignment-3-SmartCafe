//Phase 1
//function declaration
function calculatePrice(price, quantity){
    return price * quantity; 
}
//function expression
let getTax = function(amount, taxRate){
    return amount * taxRate;
};
//call functions
let subtotal = calculatePrice(15, 4);
let tax = getTax(subtotal, 0.07);

console.log("Subtotal: " + subtotal);
console.log("Calculated Tax: " + tax);

