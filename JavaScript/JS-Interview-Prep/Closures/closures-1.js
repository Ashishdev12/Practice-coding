function multiply(a){
    let product = a;
    function innerMultiply(b){
       if(b === undefined){
           return product;
       }
       product *= b;
       return innerMultiply;
    }
    return innerMultiply
   }
   
   
   let result = multiply(1)(2)(3)(4)(5)(6)();
   console.log(result);
   
   // Explanation:
   // The multiply function initializes a product variable with the first argument a.
   
   // It returns an inner function innerMultiply that takes the next argument b.
   
   // If b is undefined, it returns the accumulated product.
   
   // Otherwise, it multiplies product by b and returns itself (innerMultiply) to allow further chaining.