
function MyPromise(executor) {
  let onSuccess = null;
  let onFailed = null;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;

  // Wrap the custom promise in a real native Promise to support async/await
  const realPromise = new Promise((resolve, reject) => {
    function internalResolve(successData) {
      isFulfilled = true;
      value = successData;
      if (typeof onSuccess === "function" && !isCalled) {
        isCalled = true;
        onSuccess(value);
      }
      resolve(value); // Resolve the native promise
    }

    function internalReject(failedData) {
      isRejected = true;
      value = failedData;
      if (typeof onFailed === "function" && !isCalled) {
        isCalled = true;
        onFailed(value);
      }
      reject(value); // Reject the native promise
    }

    // Run executor with custom resolve and reject
    try {
      executor(internalResolve, internalReject);
    } catch (err) {
      internalReject(err);
    }
  });

  // Then handler
  function then(cb) {
    onSuccess = cb;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onSuccess(value);
    }
    return api;
  }

  // Catch handler
  function catchFn(cb) {
    onFailed = cb;
    if (isRejected && !isCalled) {
      isCalled = true;
      onFailed(value);
    }
    return api;
  }

  // Return object that behaves like a promise
  const api = {
    then,
    catch: catchFn,
    // Enable awaiting this object by forwarding to real Promise
    then: (...args) => realPromise.then(...args),
    catch: (...args) => realPromise.catch(...args),
    [Symbol.toStringTag]: "MyPromise"
  };

  return api;
}

async function run() {
  try {
    const result = await MyPromise((res, rej) => {
      setTimeout(() => {
        res("Awaited data!");
      }, 1000);
    });
    console.log("Await result:", result);
  } catch (err) {
    console.error("Await error:", err);
  }
}

run();
