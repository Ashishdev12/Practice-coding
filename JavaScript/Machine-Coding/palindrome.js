function isPalindrome(str){
    let flag;
    for(let i= str.length;; i++){ // "Ashish"
      flag = true;
  
      for(let j = 0; j< i-j-1; j++){
        if(i-j-1 < str.length && str[j] !== str[i-j-1]){
          flag = false;
          break;
        }
      }
  
      if(flag){
        for(let j= str.length; j<i; j++){
          // console.log(j);
          str += str[i -j-1]
        }
        return str
      }
    }
  
  }
  
  console.log(isPalindrome("Ashish"));