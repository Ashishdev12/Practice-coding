// Debouncing

// Suppose you have a search input field that triggers an API call to fetch search results as the user types. Without debouncing, the API call would be made on every keystroke, causing excessive requests. Debouncing ensures that the API call is made only after the user has paused typing.

function wrapper(func, delay){
  let timeoutId;
  return function(args){
    clearTimeout(timeoutId);

    timeoutId = setTimeout(()=> {
        func(args)
    }, delay)
  }
}

const debounce = wrapper((query)=>{
    console.log(`called', ${query} times`); // API Calls
},300)

let inputText = document.getElementById('inputText');
inputText.addEventListener('input',(event)=> {
    debounce(event.target.value);
})
    // In this example, the debounce function ensures that the API call is made 300 milliseconds after the user stops typing. If the user continues typing, the timer is reset, preventing the API call from being triggered too frequently.
 

// Throttling
/* Imagine you have a web page with a scrolling event that triggers some action, like loading more content. Without throttling, if the user scrolls quickly, the action might be triggered multiple times in rapid succession. Throttling ensures that the action is executed at a fixed interval. */


window.addEventListener('scroll', ()=> {
    // console.log("Scrolled");
    const scrolled = window.scrollY;
    // console.log(scrolled);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    if(Math.floor(scrolled) === scrollable){
        alert('You have scrolled to bottom')
    }
})