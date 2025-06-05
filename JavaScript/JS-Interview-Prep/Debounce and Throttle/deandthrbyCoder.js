const throttle = (func, limit) => {
    let isThrottling;
    return function(...args){
        if(!isThrottling){  // if over function is not throttled run this code else no
            func(...args)
            isThrottling = true
            setTimeout(()=> isThrottling = false, limit)
        }
        
    }

}

function shoot(){
    console.log('shooting...');
}

const throttledShoot = throttle(shoot, 500)


document.getElementById('button').addEventListener('click', ()=> {
    throttledShoot()
})