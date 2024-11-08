function promisePolyFill(executor){
    let onResolve, onReject;
    
    function resolve(value){
        onResolve(value)
    }
    
    function reject(value){
        onReject(value)
    }
    
    
    this.then = function(callback){
        onResolve = callback;
        return this
    }
    
    this.catch = function(callback){
        onReject = callback
    }
    
    executor(resolve,reject)
    
    }
    
    
    
    const examplePromise = new promisePolyFill((resolve, reject)=> {
        setTimeout(()=> {
            resolve(2)
        },1000)
    })
    
    examplePromise.then((res)=> {
        console.log(res);
    })
    .catch((err)=> {
        console.log(err);
    })