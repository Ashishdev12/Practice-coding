// function doSomething(n){
//     if(n === 0){
//         console.log("Task Completed!");
//         return
//     }

//     console.log("I'am doing Something");
//     doSomething(n - 1)
// }

// doSomething(3)

function findFactorial(num){
    let factorial = 1;
    for(let i =num; i> 0; i--){
        factorial *= i
    }

    return factorial
}

console.log(findFactorial(5))

5*4*3*2*1