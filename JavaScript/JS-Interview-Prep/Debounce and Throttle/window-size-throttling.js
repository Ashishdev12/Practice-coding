// https://www.youtube.com/watch?v=ysb4Rm_VhtE


function throttle(func, delay){
    let lastCall = 0;
    return function(...args){
        const now = new Date().getTime();
        if((now - lastCall) < delay);
        lastCall = now;
        func(...args)
        return
    }

}



function resizeWindow(event){
const w = event.target.outerWidth;
const h = event.target.outerHeight;
const text = `Width is ${w} and Height is ${h}`;
document.getElementById("demo").innerHTML = text;
}

window.addEventListener('resize', throttle(resizeWindow, 500));