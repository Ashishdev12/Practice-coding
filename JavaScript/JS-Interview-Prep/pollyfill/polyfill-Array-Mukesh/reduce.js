const arr = [2,3,4,5,6];
const result = arr.reduce((acc,curr,index,Oarray)=>{
    return acc + curr
},10)



Array.prototype.myReduce = function(cb,initValue){
    const myArray = this
    let result = initValue
    for(let i =0; i<myArray.length; i++){
      result = result !== undefined ? cb(result,myArray[i],i,myArray) : myArray[0]
    }
    return result
}

const result1 = arr.myReduce((acc, curr,index,Oarray)=>{
    // console.log(acc,curr);
    
    return acc + curr
},10)

console.log(result, result1);
