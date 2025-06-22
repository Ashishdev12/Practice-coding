function getSquare(n) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 === 0) {
        resolve(n * n);
      } else {
        reject("something went Wrong");
      }
    }, 1000);
  });
  return promise;
}

Promise.myRace = function (listOfArrays) {
  return new Promise((res, rej) => {
    for (let i = 0; i < listOfArrays.length; i++) {
      Promise.resolve(listOfArrays[i]).then((data) => {
        res(data)
      }).catch((err)=>rej(err))
    }
  });
};

async function getData() {
  try {
    const result = await Promise.myRace([getSquare(2, 2000), getSquare(4, 1000)]);
    console.log(result);
  } catch (err) {
    console.log("Error: ", err);
  }
}
getData();
