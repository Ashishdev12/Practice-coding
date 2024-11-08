/* Execution Frequency: Debouncing postpones the execution until after a period of inactivity, while throttling limits the execution to a fixed number of times over an interval.
Use Cases: Debouncing is ideal for tasks that don’t need to execute repeatedly in quick succession, such as API calls based on user input. Throttling is suited for controlling the execution rate of functions called in response to events like scrolling or resizing.
*/

/*
searchInput = document.getElementById("searchInput");


function debounce(func, delay){
    let timeoutId;
   return function(...args) {
    clearTimeout(timeoutId)
     timeoutId = setTimeout(()=> {
        func(...args)
    },delay)
   }
}


const myFunction = (event) => {
    const query = event.target.value;
    console.log("query is:", query);

    fetch(`https://api.example.com/search?query=${query}`)
    .then((res)=> res.json())
    .then((data)=>console.log(data))
}

searchInput.addEventListener("input", debounce(myFunction, 500));

*/

// Throttling

const Button = document.getElementById("button");

function shouldCalled(func, delay){
    let shouldCall = true
    return function(...args){
        if(!shouldCall)
            return;

        func(...args);
        shouldCall = false
        setTimeout(()=> {
            shouldCall = true
        },delay)

    }
}


const myFunction = () => {
    console.log("Button Clicked");
}

Button.addEventListener('click', shouldCalled(myFunction, 500));