const intNumber = [1,9,6,4];
const result = intNumber.reduce((acc,cur)=> {
    return acc + cur
},0)

console.log(result);