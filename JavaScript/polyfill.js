// This is our custom Map polyfill Map function


// const ListItems = [2,3,4,5,6];

// Array.prototype.map = function(cb){  
//   let temp = [];
//   for(let i =0; i<this.length; i++){
//     temp.push(cb(this[i],i,this)) // we Push computation of callback
//   }
//   return temp
// }

// const Multiply = ListItems.map((num)=> {
//   return num * 3
// })

// console.log(Multiply);

// Polyfill for Reduce

// arr.reduce((acc,cur,i,arr)=>{},initialValue);

Array.prototype.MyReduce = function(cb, initialValue){
  let accumulator = initialValue;
  for(let i =0; i<this.length; i++){
    accumulator = accumulator?cb(accumulator, this[i], i, this) : this[i]
  }
  return accumulator
}

const nums = [1,2,3,4,5]
let sum = nums.MyReduce((acc,cur,i,arr)=> {
  return acc + cur
})

console.log(sum);