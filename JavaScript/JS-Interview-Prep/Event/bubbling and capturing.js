const card = document.querySelector('#card');
const btn = document.querySelector('#btn');


card.addEventListener('click',(e)=> {
    console.log("clicked on card");
})

btn.addEventListener('click',(e)=> {
    console.log("clicked on btn");
    e.stopPropagation()
})