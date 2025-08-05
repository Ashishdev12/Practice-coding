function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    } else {
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  }
}


  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
  })
 
  
  
  console.log(memoizedFn(2,3)) // 5
  console.log(memoizedFn(2,3)) // 5
  console.log(memoizedFn(3,4));
  console.log(callCount); // 1
  console.log(callCount); // 1
 
  
