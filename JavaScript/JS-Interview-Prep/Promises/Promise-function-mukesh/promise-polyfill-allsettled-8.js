function getSquare(n, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 === 0) {
        resolve(n * n);
      } else {
        reject("something went wrong");
      }
    }, delay);
  });
  return promise;
}

// Promise allSettled polyfill

Promise.myAllSettled = function (listOfArrays) {
  return new Promise((res) => {
    const result = [];
    let c = 0;

    // handler function
    const commonHandler = (index,status,value) => {
      result[index] = status == 'fulfilled' ? {
        status: status, // you can write this in one line like status when both are same
        value: value
      }:  {status, reason:value}

      c++;
      if (c == listOfArrays.length) {
        res(result);
      }
    };

    for (let i = 0; i < listOfArrays.length; i++) {
        Promise.resolve(listOfArrays[i]).then((data)=>{
            commonHandler(i,"fulfilled",data)
        }).catch(err=> commonHandler(i,"rejected",err))
    }
  });
};



async function getData() {
  try {
    const result = await Promise.myAllSettled([
      getSquare(3, 1000),
      getSquare(4, 1000),
    ]);
    console.log(result);
  } catch (err) {
    console.log("Error :", err);
  }
}

getData();
