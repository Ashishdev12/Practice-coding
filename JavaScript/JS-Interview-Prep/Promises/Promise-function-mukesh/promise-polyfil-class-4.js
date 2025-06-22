class MyPromise {
  constructor(executor) {
    this.onSuccess = null;
    this.onFailed = null;
    this.isFulfilled = false;
    this.isRejected = false;
    this.isCalled = false;
    this.value;
 
    // Executor Function which is handling resolve and reject
    executor(this.resolve.bind(this), this.reject.bind(this))
  }

   then(cb) {
      this.onSuccess = cb;
      if(this.isFulfilled && !this.isCalled){
        this.isCalled = true
        this.onSuccess(this.value)
      }
      return this;
    };

    catch(cb) {
      this.onFailed = cb;
      if(this.isFulfilled & !this.isCalled){
        this.isCalled = true;
        this.onFailed(this.value)
      }
      return this;
    }

    // don't convert this into normal fun if need to do make some necessary changes/
  resolve = (successData) =>{
    this.isFulfilled = true;
    this.value = successData;
    if(typeof this.onSuccess == 'function'){
        this.onSuccess(successData)
        this.isCalled = true
    }
  }

  reject =  (failedData) =>{
    this.isRejected = true;
    this.value = failedData;
    if(typeof this.onFailed == 'function'){
        this.onFailed(failedData)
           this.isCalled = true
    }
  }
}

const myPromise = new MyPromise((res,rej)=>{
    setTimeout(()=>{
        // res("Data received");
        rej("operation failed")
        
    },1000)
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });




// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomNumber = Math.floor(Math.random() * 10)
//         if(randomNumber >=0){
//             resolve(randomNumber)
//         } else{
//             reject("operation failed")
//         }
//     },500)
// })

// myPromise.then((result)=>{
//     console.log("success:", result);

// }).catch((err)=>console.log("Error", err));
