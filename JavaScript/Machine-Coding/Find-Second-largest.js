// How To find second Largest value in array|Javascript

/* Method 1 - sorting

const intArray = [2,8,9,7,9,5,6,7,8,9,0];

// Remove duPlicates
const uniqueArray = [...new Set(intArray)].sort((a,b)=> b-a);

// find Second largest number
const secondLargestNumber = uniqueArray[1];
console.log(secondLargestNumber); */

/* Method 2: Single Pass (Efficient without Sorting)
In this method, we go through the array once to find the largest and second largest values. This approach has a time complexity of 𝑂(𝑛) which is more efficient than sorting */


const intArray = [2,8,9,7,9,5,6,7,8,9,0];

let largest = -Infinity;
let secondLargestNumber = -Infinity;

for(let num of intArray){
    if(num > largest){
        // Update second largest before updating largest
        secondLargestNumber = largest;
        largest = num
    } else if(num > secondLargestNumber && num < largest){
         // Update second largest if it's less than largest and greater than the current second largest
         secondLargestNumber = num
    }
}
console.log(largest);
console.log(secondLargestNumber);