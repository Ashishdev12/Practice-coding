https://www.youtube.com/watch?v=97BGPJyGKp4&list=PLB97yPrFwo5gn9mAzWNHmjxAspUSeF_nk&index=1

function memorization(){
    let cache = { }
    return function(num){
        if(num in cache){
            console.log("cache retured value", cache[num]);
            return cache[num]
        } 
        cache[num] = num * num
        console.log("calculated value", cache[num]);
        return cache[num]
    }
}

const result = memorization();
result(5)
result(5)
result(5)