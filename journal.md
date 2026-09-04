Explain the syntax difference between the function declaration (calculatePrice) and the function expression (getTax).


The calculatePrice function works as a standalone statement and begins with the keyword "function". The getTax function is defined inside the expression is assigned to a variable and starts with the variable keyword "let". 



What happened when you tried to log defaultTaxRate outside the function? Why did that occur?

I received an Uncaught ReferenceError: defaultTaxRate is not defined. This occurs because defaultTaxRate is locally scoped within the calculateStoreTax function. As a result, it only exists while the function is executing and cannot be accessed outside its block.