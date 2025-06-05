// Find Duplicate elements in the given array

const arrNumber = [1,2,8,2,9,8,9];
const duplicate = arrNumber.filter((ele,index,arr)=> {
    return arr.indexOf(ele) !== index;
    })
    console.log(duplicate);