function multiply(a){
    return function(b){
      if(b === undefined){
          return a;
      }
      return multiply(a * b)
    }
  }
  
  
  let result = multiply(1)(2)(3)(4)(5)(6)();
  console.log(result);