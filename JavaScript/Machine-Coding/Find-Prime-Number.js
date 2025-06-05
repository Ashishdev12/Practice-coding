function isPrimes(num){
    if(num <=1) return false
        for(let i=2; i*i<=num; i++){
            if(num % i === 0) return false
        }
        return true
    }

function findPrimeNumber(upto){
    let prime = []
    for(let i=2; i<=upto; i++){
        if(isPrimes(i)){
            prime.push(i)
        }
    }
    return prime.sort((a,b)=> a-b)
}
console.log(findPrimeNumber(5));
console.log(findPrimeNumber(50));
console.log(findPrimeNumber(-1));

