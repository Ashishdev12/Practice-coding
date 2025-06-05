https://www.youtube.com/watch?v=sC031jGzZnA&list=PLB97yPrFwo5gn9mAzWNHmjxAspUSeF_nk&index=14
// call back and further going into callback hell to avoid this we can use Promises 


function getSquare(n, cb){
    setTimeout(()=> {

        cb( n * n)
    },1000)
}

getSquare(2, (result)=>{
    console.log(result)
    getSquare(result,(result2)=> {
        console.log(result2)
        getSquare(result2,(result3)=> {
            console.log(result3);
            getSquare(result3,(result4)=> {
                console.log(result4);
            })
        })
    })
});

