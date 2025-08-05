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

/// Promise all polyfill
Promise.myAll = function (listOfArrays) {
  return new Promise((res, rej) => {
    const result = [];
    let c = 0;
    for (let i = 0; i < listOfArrays.length; i++) {
      Promise.resolve(listOfArrays[i])
        .then((data) => {
          // result.push(data);
          result[i] = data;
          c++;
          if (c == listOfArrays.length) {
            res(result);
          }
        })
        .catch((err) => rej(err));
    }
  });
};


async function getData() {
  try {
    const result = await Promise.myAll([
      getSquare(2, 2000),
      getSquare(4, 1000),
    ]);
    console.log(result);
  } catch (err) {
    console.log("Error :", err);
  }
}

getData();
