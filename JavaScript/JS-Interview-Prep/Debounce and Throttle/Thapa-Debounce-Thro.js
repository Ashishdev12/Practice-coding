// https://www.youtube.com/watch?v=zLhmJBxFNLI

/*  Throttling is an effective technique to limit the frequency at which a function is executed. This can be useful in situations where you want to avoid overloading a server, conserving network bandwidth, or improving the performance of an application. */

const nCount = document.querySelector('.N_Count');
const tCount = document.querySelector('.T_Count');
let NormalCount = 0;
let ThrottleCount = 0
let isScrolling = true;


const nCountFunction = () => {
    NormalCount++;
    nCount.innerHTML = `your Count is ${NormalCount}`
}

const tCountFunction = () => {
    if(isScrolling === true){
        ThrottleCount++;
        tCount.innerHTML = `your Count is ${ThrottleCount}`
        isScrolling = false
        setTimeout(()=> {
            isScrolling = true
        },1000)
    }
}





const showCount = ()=>{
    nCountFunction()
    tCountFunction()
}

