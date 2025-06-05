
const map = new Map();

function memoizeOne(fn){
  function temp (...args){
    // check cache

    const key = args.join('_');
    if (map.has(key)) {
      console.log("Getting from cache");
          return map.get(key);
    }

    const result = fn(...args);
    map.set(key, result)
    return result;

  }
    return temp;
  
}
const add = (a, b) => a + b;
const add_memo = memoizeOne(add)
console.log(add_memo(1,2));
console.log(add_memo(1,2));
console.log(add_memo(2,2));
console.log(add_memo(1,2));
console.log(add_memo(2,2));
// console.log(add_memo(1,2));

