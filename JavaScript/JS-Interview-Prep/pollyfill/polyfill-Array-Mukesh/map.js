console.log("Pollyfill");

const arr = [2,3,4,5,6]

Array.prototype.myMap = function(cb){
    const myArray = this
    const myResult = []
    for(let i =0; i<myArray.length; i++){
        myResult.push(cb(myArray[i],i,myArray))
    }
    return myResult
}

const result = arr.myMap((item,i,Oarray)=>{
    console.log(item,i,Oarray);
    
    return item * 2
})


console.log(result);





