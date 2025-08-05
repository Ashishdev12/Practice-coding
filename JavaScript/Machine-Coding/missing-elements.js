// // Find missing number from the array

// function factorial(arr){
//     for(let i =0; i<arr.length; i++){
//         return arr * (arr - 1)/2
//     }
    
// }

// const result = factorial(5);
// console.log(result);


let inputNumber = prompt("Please Enter your number")
let fact = 1;

if(inputNumber < 0){
    console.log(`Negative number ${inputNumber} is not allowed`);
} else {
for(let i =1; i<inputNumber; i++){
        fact += fact*i
      
       
    }
    console.log(`factorial of ${inputNumber} is ${fact}`);
}
