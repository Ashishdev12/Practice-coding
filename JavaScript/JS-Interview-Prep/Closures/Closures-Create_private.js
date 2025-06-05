// function counter(){
//     let counter = 0;

//     function add(increment){
//         counter += increment
//     }

//     function retrive(){
//         return "Counter = " + counter;
//     }

//     return {
//         add, retrive
//     }
// }

// const c = counter();
// c.add(5);
// c.add(10)
// console.log(c.retrive());

// Example: Module Pattern
// javascript
// Copy code
function Counter() {
  let count = 0; // Private variable

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

const myCounter = Counter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1
console.log(myCounter.getCount()); // 1
