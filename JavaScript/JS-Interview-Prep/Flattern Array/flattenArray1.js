// Count how many times each element appears in an array.
const data = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Output: { apple: 3, banana: 2, orange: 1 }
/*
0 - apple
apple - banana
*/

const count = data.reduce((acc,item)=>{
    acc[item] = (acc[item] || 0) + 1
    return acc
},{})

console.log(count);
