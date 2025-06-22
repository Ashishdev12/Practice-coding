// https://www.youtube.com/watch?v=AxfmqK_ZMXw&list=PLB97yPrFwo5gn9mAzWNHmjxAspUSeF_nk&index=17

function getSquare(n,delay){
    const promise =  new Promise((res,rej)=> {
        setTimeout(()=> {
            if(n % 2 === 0) res(n * n)
                else rej("You fucked up ");
        },delay)
    })
    return promise

}

/*
async function getData(){
    const result = await getSquare(2)
    console.log(result);
    const result2 = await getSquare(result)
    console.log(result2);
}

getData() */

/// refactor the code using Promise.all()
// better to use try and catch instead of then method, and imp thing is if we fail any one promise the other also get's failed this is not accepted now let's fix this
/*
async function getData(){

    try{
        const result = await Promise.all([getSquare(2,1000),getSquare(4,2000)]);
        console.log(result);
    } catch(err){
        console.log("ERROR:", err);
    }
    
}

getData()
*/


// Promise.allSettled


async function getData(){

    try{
        const result = await Promise.allSettled([getSquare(3,1000),getSquare(4,2000)]);
        console.log(result);
    } catch(err){
        console.log("ERROR:", err);
    }
    
}

getData()

// race - will return first promise whether its resolved or rejected
// any - will return first promise only when its resolved
