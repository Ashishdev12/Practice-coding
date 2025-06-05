const myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        const randomNumber = Math.floor(Math.random() * 100)
        if(randomNumber < 100){
            resolve(randomNumber)
        } else {
            reject('Operation failed')
        }
    },500)
})

myPromise.then((result)=> {
    console.log("Success:",result);
}).catch(err=>{
    console.log("Error:", err);
})