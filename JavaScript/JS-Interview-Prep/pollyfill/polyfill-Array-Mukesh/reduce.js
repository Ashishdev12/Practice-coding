// const result = arr.reduce((acc,curr,index,Oarray)=>{
//     return acc + curr
// },10)

const arr = [1,2,3,4,5,6];

Array.prototype.myReduce = function(cb, initValue){
   const myArray = this;
     let accumulator = initValue
     let startIndex = 0
     for(let i =startIndex; i<myArray.length; i++){

        accumulator = cb(accumulator, myArray[i])
     }
   return accumulator
}

const result = arr.myReduce((acc,curr)=>{
    return acc + curr

},0)

console.log(result);
