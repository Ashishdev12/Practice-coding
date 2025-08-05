// How To find max/min in a given array in javascript

   const arrNumbers = [1,9,87,65,655];
   const max = arrNumbers.reduce((curr, acc)=> {
        return curr > acc ? curr : acc
   })
 
   console.log(max);