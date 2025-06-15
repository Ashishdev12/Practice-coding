
function getRandomNumber(n){
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100);
 
    
    if (randomNumber < 100) {
      resolve(randomNumber * n);
    }
    reject("Number is greater then 100:", randomNumber);
  },1500);
});
return myPromise
}


async function finalResult() {
    const result = await getRandomNumber(2);
    console.log(result);
    
    const result2 =  await getRandomNumber(4);
    console.log(result2);
    
}

finalResult()