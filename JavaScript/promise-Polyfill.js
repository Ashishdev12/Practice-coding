function promisePolyFill(executor) {
  let onResolve, 
  onReject, 
  isFulfilled = false,
  isRejected = false, 
  isCalled = false, 
  value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled & !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected & !isCalled) {
      called = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new promisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

  promisePolyFill.resolve = (val) => {
    new promisePolyFill(function executor(resolve, reject){
      resolve(val)
    })
  }

  promisePolyFill.reject = (val) => {
    new promisePolyFill(function executor(resolve, reject){
      reject(val)
    })
  }