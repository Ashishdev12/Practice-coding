function MyPromise(executor) {
  const state = {
    onSuccess: null,
    onFailed: null,
    isFulfilled: false,
    isRejected: false,
    isCalled: false,
    value: undefined
  };

  function then(cb) {
    state.onSuccess = cb;
    if (state.isFulfilled && !state.isCalled) {
      state.isCalled = true;
      state.onSuccess(state.value);
    }
    return { then, catch: catchFn }; // support chaining
  }

  function catchFn(cb) {
    state.onFailed = cb;
    if (state.isRejected && !state.isCalled) {
      state.isCalled = true;
      state.onFailed(state.value);
    }
    return { then, catch: catchFn };
  }

  function resolve(successData) {
    state.isFulfilled = true;
    state.value = successData;
    if (typeof state.onSuccess === 'function' && !state.isCalled) {
      state.isCalled = true;
      state.onSuccess(successData);
    }
  }

  function reject(failedData) {
    state.isRejected = true;
    state.value = failedData;
    if (typeof state.onFailed === 'function' && !state.isCalled) {
      state.isCalled = true;
      state.onFailed(failedData);
    }
  }

  // Immediately run the executor
  executor(resolve, reject);

  // Return API for chaining
  return {
    then,
    catch: catchFn
  };
}

const myPromise = MyPromise((res, rej) => {
  setTimeout(() => {
    // res("Data received");
    rej("Operation failed");
  }, 1000);
});

myPromise
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
