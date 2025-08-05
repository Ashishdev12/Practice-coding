const checkDivisibility = function(n){
    const digits = n.toString().split('').map(Number)
    
    const sum = digits.reduce((acc,digit)=>acc + digit, 0);
    const product = digits.reduce((acc,digit)=>acc * digit, 1);

    return n % (sum + product) === 0
       
}

console.log(checkDivisibility(99));
console.log(checkDivisibility(23));
