function binarySearch(sortedArray, target){
    let left = 0;
    let right = sortedArray.length - 1;
    
    while (left <= right){
      let mid = Math.floor((left + right) / 2);
      // console.log("mid" + mid);
      if(sortedArray[mid] === target){
        return mid;
      } else if(sortedArray[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } 
    return -1;
  }
  
  const sortedArray = [1,3,4,7,9,10,13];
  const target = 10;
  const result = binarySearch(sortedArray, target);
  console.log(result);