/*
// Example - 1
let array = [10,[20,30], [40,[50,60]],70];
let result = array.flat(Infinity);
console.log(result);

// Example - 2
// this is by using two dimensional array 
function FlattenArray(){
    const result = arr.reduce((acc, curr)=> {
        return acc.concat(curr)
    },[])
    return result
}

const arr = [[1,2],[3,4]];
console.log(FlattenArray(arr)); */

// Example - 3
// this is by using N dimensional array 

let  arr = [[1,2],[3,4]]
let arr1 = [1,2, [3,4, [5,6]]];

function FlattenArray(arr){
    const result = arr.reduce((acc, curr)=> {
        return acc.concat(Array.isArray(curr)? FlattenArray(curr) : curr)
    },[])
    console.log(arr);
    return result

}

console.log(FlattenArray(arr1));