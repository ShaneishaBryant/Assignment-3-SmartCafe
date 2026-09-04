Explain the syntax difference between the function declaration (calculatePrice) and the function expression (getTax).


The calculatePrice function works as a standalone statement and begins with the keyword "function". The getTax function is defined inside the expression is assigned to a variable and starts with the variable keyword "let". 



What happened when you tried to log defaultTaxRate outside the function? Why did that occur?

I received an Uncaught ReferenceError: defaultTaxRate is not defined. This occurs because defaultTaxRate is locally scoped within the calculateStoreTax function. As a result, it only exists while the function is executing and cannot be accessed outside its block.



Describe how arrow function syntax differs from standard function expressions. Did concise implicit returns make your code easier or harder to read?

Arrow functions omit the function keyword and use the "fat arrow" syntax. Because the function consists of a single expression, we can drop both the curly braces and the return keyword. This implicit return created a quick, readable one-line function.




Why is applyDiscount considered a “Higher-Order Function”? What role did studentDiscount and seniorDiscount play? What function would you have to write if you wanted to apply no discount?

Because it calls the discountCallback function as a parameter. studentDiscount and seniorDiscount were pass-through functions. If you wanted to apply no discount you would write a fallback function that applied the total and returned an unchanged value. 




How did breaking the order process into small, single-purpose functions make writing calculateFinalBill easier than putting all the math into one long block of code?

Composing the final function step-by-step made it much easier to understand the logic and see how all the pieces fit together. Breaking a complex problem into smaller, manageable steps helps structure my approach, and I definitely prefer this method when coding (and completing assignments). 