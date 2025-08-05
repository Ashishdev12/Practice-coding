console.log("Pollyfill");

const arr = [2,3,4,5,6]
// const result1 = arr.filter((item)=>{
//     return item%2 === 0
// })

Array.prototype.myFilter = function(cb){
    const myArray = this
    const myResult = []
    for(let i =0; i<myArray.length; i++){
        if(cb(myArray[i],i,myArray)){
            myResult.push(myArray[i])
        }  
    }
    return myResult
}

const result = arr.myFilter((item,i,Oarray)=>{
        return item%2 === 0
})


console.log(result);





