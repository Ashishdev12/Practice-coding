// Find Factorial of a given number 

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
